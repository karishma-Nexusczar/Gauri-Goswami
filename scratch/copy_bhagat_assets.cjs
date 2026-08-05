const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

const sealSource = path.join(brainDir, 'media__1785784224113.png');
const certSource = path.join(brainDir, 'media__1785784208782.png');

const sealTarget = path.join(rootDir, 'public', 'delhi-high-court-seal.png');
const certTarget = path.join(rootDir, 'public', 'amit-bhagat-certificate.png');

fs.copyFileSync(sealSource, sealTarget);
fs.copyFileSync(certSource, certTarget);

console.log('Saved Delhi High Court seal to:', sealTarget);
console.log('Saved CABLAW Amit Bhagat certificate to:', certTarget);
