const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT) || 8080;
const rootDirectory = path.resolve(__dirname, '..');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.json': 'application/json; charset=utf-8'
};

function resolveFilePath(urlPathname) {
  let pathname = decodeURIComponent(urlPathname || '/');

  if (pathname === '/') {
    pathname = '/index.html';
  }

  if (!path.extname(pathname)) {
    pathname = `${pathname}.html`;
  }

  const safeRelativePath = path.normalize(pathname).replace(/^([.][.][/\\])+/, '');
  return path.join(rootDirectory, safeRelativePath);
}

function sendResponse(res, statusCode, contentType, content) {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(content);
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || `localhost:${port}`}`);
  const filePath = resolveFilePath(requestUrl.pathname);

  if (!filePath.startsWith(rootDirectory)) {
    sendResponse(res, 403, 'text/plain; charset=utf-8', 'Forbidden');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (!error) {
      const extension = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[extension] || 'application/octet-stream';
      sendResponse(res, 200, contentType, data);
      return;
    }

    if (error.code === 'ENOENT') {
      sendResponse(res, 404, 'text/plain; charset=utf-8', '404 Not Found');
      return;
    }

    sendResponse(res, 500, 'text/plain; charset=utf-8', '500 Internal Server Error');
  });
});

server.listen(port, () => {
  console.log(`MATHISS website is running at http://localhost:${port}`);
});
