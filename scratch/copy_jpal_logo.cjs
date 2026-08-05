const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const logoSource = path.join(brainDir, 'media__1785782228340.png');
const targetPath = path.join(rootDir, 'public', 'jpal-logo.png');

fs.copyFileSync(logoSource, targetPath);
console.log('Saved J-PAL logo to:', targetPath);
