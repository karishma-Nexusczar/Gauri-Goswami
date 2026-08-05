const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const latestMedia = path.join(brainDir, 'media__1785771253306.jpg');

if (!fs.existsSync(latestMedia)) {
  console.error('File not found:', latestMedia);
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
  fs.copyFileSync(latestMedia, target);
  console.log('Copied pure raw media to:', target);
}
