const nodemailer = require('nodemailer');

function sendJsonResponse(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let receivedBytes = 0;

    req.on('data', (chunk) => {
      receivedBytes += chunk.length;
      if (receivedBytes > 1024 * 1024) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });

    req.on('error', (error) => {
      reject(error);
    });
  });
}

async function parseRequestPayload(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string' && req.body.trim()) {
    return JSON.parse(req.body);
  }

  const rawBody = await readRequestBody(req);
  return rawBody ? JSON.parse(rawBody) : {};
}

function normalizeContactPayload(payload) {
  const safePayload = payload && typeof payload === 'object' ? payload : {};
  return {
    firstName: String(safePayload.firstName || '').trim(),
    lastName: String(safePayload.lastName || '').trim(),
    email: String(safePayload.email || '').trim(),
    phone: String(safePayload.phone || '').trim(),
    company: String(safePayload.company || '').trim(),
    service: String(safePayload.service || '').trim(),
    budget: String(safePayload.budget || '').trim(),
    timeline: String(safePayload.timeline || '').trim(),
    message: String(safePayload.message || '').trim()
  };
}

function validateContactPayload(payload) {
  if (!payload.firstName || !/^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{2,}$/.test(payload.firstName)) {
    return 'A valid first name is required.';
  }

  if (!payload.lastName || !/^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{2,}$/.test(payload.lastName)) {
    return 'A valid last name is required.';
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
    return 'A valid email address is required.';
  }

  if (payload.phone && !/^\+?[0-9 ()\-]{7,20}$/.test(payload.phone)) {
    return 'Phone number format is invalid.';
  }

  if (!payload.service) {
    return 'Please select a service.';
  }

  if (!payload.message || payload.message.length < 20) {
    return 'Project details must be at least 20 characters.';
  }

  return null;
}

function createMailTransport() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || '0');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return null;
  }

  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
}

async function sendContactEmail(payload) {
  const transporter = createMailTransport();

  if (!transporter) {
    const configurationError = new Error('Email service is not configured.');
    configurationError.code = 'MAIL_NOT_CONFIGURED';
    throw configurationError;
  }

  const recipientEmail = process.env.CONTACT_TO_EMAIL || 'info@mathissconsulting.co.za';
  const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@mathissconsulting.co.za';
  const senderName = `${payload.firstName} ${payload.lastName}`.trim();
  const subject = `New inquiry from ${senderName} (${payload.service})`;

  const textBody = [
    'New contact form inquiry received.',
    '',
    `Name: ${senderName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Company: ${payload.company || 'Not provided'}`,
    `Service Interest: ${payload.service}`,
    `Budget Range: ${payload.budget || 'Not provided'}`,
    `Project Timeline: ${payload.timeline || 'Not provided'}`,
    '',
    'Project Details:',
    payload.message
  ].join('\n');

  const htmlBody = `
    <h2>New contact form inquiry received</h2>
    <p><strong>Name:</strong> ${senderName}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone || 'Not provided'}</p>
    <p><strong>Company:</strong> ${payload.company || 'Not provided'}</p>
    <p><strong>Service Interest:</strong> ${payload.service}</p>
    <p><strong>Budget Range:</strong> ${payload.budget || 'Not provided'}</p>
    <p><strong>Project Timeline:</strong> ${payload.timeline || 'Not provided'}</p>
    <p><strong>Project Details:</strong></p>
    <p>${payload.message.replace(/\n/g, '<br>')}</p>
  `;

  await transporter.sendMail({
    from: senderEmail,
    to: recipientEmail,
    replyTo: payload.email,
    subject,
    text: textBody,
    html: htmlBody
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    sendJsonResponse(res, 405, { ok: false, message: 'Method Not Allowed' });
    return;
  }

  try {
    const parsedPayload = await parseRequestPayload(req);
    const normalizedPayload = normalizeContactPayload(parsedPayload);
    const validationError = validateContactPayload(normalizedPayload);

    if (validationError) {
      sendJsonResponse(res, 400, { ok: false, message: validationError });
      return;
    }

    await sendContactEmail(normalizedPayload);
    sendJsonResponse(res, 200, { ok: true, message: 'Inquiry sent successfully.' });
  } catch (error) {
    if (error instanceof SyntaxError) {
      sendJsonResponse(res, 400, { ok: false, message: 'Invalid request payload.' });
      return;
    }

    if (error && error.message === 'Payload too large') {
      sendJsonResponse(res, 413, { ok: false, message: 'Request payload is too large.' });
      return;
    }

    if (error && error.code === 'MAIL_NOT_CONFIGURED') {
      sendJsonResponse(res, 503, {
        ok: false,
        message: 'Email service is not configured on the server yet. Please set SMTP environment variables.'
      });
      return;
    }

    console.error('Contact form email error:', error);
    sendJsonResponse(res, 500, { ok: false, message: 'Unable to send inquiry right now. Please try again shortly.' });
  }
};
