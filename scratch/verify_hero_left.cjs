const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// Find latest uploaded media
const files = fs.readdirSync(brainDir).filter(f => f.startsWith('media__') && (f.endsWith('.jpg') || f.endsWith('.png')));
console.log('Brain media files:', files);

if (files.length > 0) {
  const latestMedia = path.join(brainDir, files[files.length - 1]);
  console.log('Latest uploaded image:', latestMedia);

  const targets = [
    path.join(rootDir, 'public', 'hero-left-formal.png'),
    path.join(rootDir, 'public', 'hero-left-original.png'),
    path.join(rootDir, 'public', 'advocate-library-portrait.png'),
    path.join(rootDir, 'public', 'hero-left-oxford.jpg'),
    path.join(rootDir, 'public', 'hero-left-formal-dark.png')
  ];

  for (const target of targets) {
    fs.copyFileSync(latestMedia, target);
    console.log('Confirmed updated:', target);
  }
}
