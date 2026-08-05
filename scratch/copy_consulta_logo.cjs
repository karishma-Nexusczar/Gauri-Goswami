const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const logoSource = path.join(brainDir, 'media__1785783114363.png');
const targetPath = path.join(rootDir, 'public', 'consulta-juris-logo.png');

fs.copyFileSync(logoSource, targetPath);
console.log('Saved Consulta Juris logo to:', targetPath);
