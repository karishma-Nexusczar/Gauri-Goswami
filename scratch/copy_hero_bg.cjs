const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const bgImgPath = path.join(brainDir, 'media__1785779746664.jpg');
const targetPath = path.join(rootDir, 'public', 'hero-cinematic-bg.jpg');

fs.copyFileSync(bgImgPath, targetPath);
console.log('Saved cinematic background image to:', targetPath);
