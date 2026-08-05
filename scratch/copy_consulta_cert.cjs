const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const certSource = path.join(brainDir, 'media__1785780996037.png');
const targetPath = path.join(rootDir, 'public', 'consulta-juris-certificate.png');

fs.copyFileSync(certSource, targetPath);
console.log('Saved Consulta Juris certificate to:', targetPath);
