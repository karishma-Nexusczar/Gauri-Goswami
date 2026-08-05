const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const newLeftMedia = path.join(brainDir, 'media__1785772130340.jpg');

if (!fs.existsSync(newLeftMedia)) {
  console.error('File not found:', newLeftMedia);
  process.exit(1);
}

const targets = [
  path.join(rootDir, 'public', 'hero-left-formal.png'),
  path.join(rootDir, 'public', 'hero-left-original.png'),
  path.join(rootDir, 'public', 'advocate-library-portrait.png'),
  path.join(rootDir, 'public', 'hero-left-oxford.jpg'),
  path.join(rootDir, 'public', 'hero-left-formal-dark.png')
];

for (const target of targets) {
  fs.copyFileSync(newLeftMedia, target);
  console.log('Successfully replaced left image asset with new black background portrait:', target);
}
