const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// Find media__1785776507289.jpg or latest red blazer image
const redBlazerSource = path.join(brainDir, 'media__1785776507289.jpg');
const targetPath = path.join(rootDir, 'public', 'about-gauri-red-blazer.jpg');

if (fs.existsSync(redBlazerSource)) {
  fs.copyFileSync(redBlazerSource, targetPath);
  console.log('Saved red blazer photo to:', targetPath);
} else {
  console.log('Source file not found!');
}
