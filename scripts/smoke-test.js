const fs = require('fs');
const path = require('path');

const rootDirectory = path.resolve(__dirname, '..');

const requiredFiles = [
  'index.html',
  'about.html',
  'services.html',
  'portfolio.html',
  'impact.html',
  'testimonials.html',
  'contact.html',
  'css/styles.css',
  'js/main.js',
  'assets/logo.svg',
  'scripts/server.js'
];

const contentExpectations = [
  {
    file: 'index.html',
    snippets: ['Designing Spaces. Building Legacies.', 'Request a Consultation', 'Featured Services']
  },
  {
    file: 'about.html',
    snippets: ['Founder &amp; Managing Director', 'Core Values', 'Professional Registrations']
  },
  {
    file: 'services.html',
    snippets: ['Township &amp; Urban Planning', 'Architecture', 'Land Surveying']
  },
  {
    file: 'contact.html',
    snippets: ['082 790 9543', 'info@mathissconsulting.co.za', 'Request a Consultation']
  }
];

let hasError = false;

for (const relativePath of requiredFiles) {
  const absolutePath = path.join(rootDirectory, relativePath);
  if (!fs.existsSync(absolutePath)) {
    console.error(`Missing file: ${relativePath}`);
    hasError = true;
  }
}

for (const check of contentExpectations) {
  const filePath = path.join(rootDirectory, check.file);
  if (!fs.existsSync(filePath)) {
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  for (const snippet of check.snippets) {
    if (!content.includes(snippet)) {
      console.error(`Missing expected content in ${check.file}: ${snippet}`);
      hasError = true;
    }
  }
}

if (hasError) {
  console.error('Smoke test failed.');
  process.exit(1);
}

console.log('Smoke test passed: website structure and key content are present.');
