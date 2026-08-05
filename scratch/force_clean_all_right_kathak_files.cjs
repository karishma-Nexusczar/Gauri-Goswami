const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// 100% clean black background image asset (ZERO yellow spots, ZERO green grass)
const cleanSource = path.join(brainDir, 'kathak_full_real_black_bg_1785773195529.png');

if (!fs.existsSync(cleanSource)) {
  console.error('Clean source file not found:', cleanSource);
  process.exit(1);
}

const targets = [
  path.join(rootDir, 'public', 'hero-right-kathak-v3.png'),
  path.join(rootDir, 'public', 'hero-right-kathak-v2.png'),
  path.join(rootDir, 'public', 'hero-right-kathak.jpg'),
  path.join(rootDir, 'public', 'hero-right-original.png'),
  path.join(rootDir, 'public', 'kathak-lawn-portrait.jpg'),
  path.join(rootDir, 'public', 'hero-kathak-original.png'),
  path.join(rootDir, 'public', 'personal-portfolio-kathak.png')
];

for (const target of targets) {
  fs.copyFileSync(cleanSource, target);
  console.log('Successfully overwritten with 100% clean black background image:', target);
}
