const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// The AI-isolated Kathak portrait on dark black background
const aiBlackBgPath = path.join(brainDir, 'kathak_right_dark_black_1785771689713.png');

if (!fs.existsSync(aiBlackBgPath)) {
  console.error('File not found:', aiBlackBgPath);
  process.exit(1);
}

const targets = [
  path.join(rootDir, 'public', 'hero-right-kathak.jpg'),
  path.join(rootDir, 'public', 'hero-right-original.png'),
  path.join(rootDir, 'public', 'kathak-lawn-portrait.jpg'),
  path.join(rootDir, 'public', 'hero-kathak-original.png'),
  path.join(rootDir, 'public', 'personal-portfolio-kathak.png')
];

for (const target of targets) {
  fs.copyFileSync(aiBlackBgPath, target);
  console.log('Successfully replaced right Kathak image with dark black background asset:', target);
}
