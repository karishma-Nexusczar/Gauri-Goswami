const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// Find the user uploaded image (media__*.jpg)
const brainFiles = fs.readdirSync(brainDir);
const userMediaFiles = brainFiles.filter(f => f.startsWith('media__') && f.endsWith('.jpg'));

console.log('Found user media files:', userMediaFiles);

if (userMediaFiles.length > 0) {
  // Use the latest uploaded image file
  const latestMedia = userMediaFiles[userMediaFiles.length - 1];
  const sourcePath = path.join(brainDir, latestMedia);
  console.log('Using uploaded image:', sourcePath);

  const targets = [
    path.join(rootDir, 'public', 'hero-left-formal.png'),
    path.join(rootDir, 'public', 'hero-left-original.png'),
    path.join(rootDir, 'public', 'advocate-library-portrait.png'),
    path.join(rootDir, 'public', 'hero-left-oxford.jpg'),
    path.join(rootDir, 'public', 'hero-left-formal-dark.png')
  ];

  targets.forEach(target => {
    fs.copyFileSync(sourcePath, target);
    console.log('Successfully updated:', target);
  });
} else {
  console.error('No user media file found in brain directory!');
}
