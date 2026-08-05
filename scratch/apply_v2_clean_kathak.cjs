const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// Clean source file
const cleanSource = path.join(brainDir, 'kathak_full_real_black_bg_1785773195529.png');

if (!fs.existsSync(cleanSource)) {
  console.error('Source file not found:', cleanSource);
  process.exit(1);
}

// Write to a brand new cache-busting filename
const v2Target = path.join(rootDir, 'public', 'hero-right-kathak-v2.png');
fs.copyFileSync(cleanSource, v2Target);
console.log('Created cache-busting asset:', v2Target);

// Also copy to all legacy fallback targets
const legacyTargets = [
  path.join(rootDir, 'public', 'hero-right-kathak.jpg'),
  path.join(rootDir, 'public', 'hero-right-original.png'),
  path.join(rootDir, 'public', 'kathak-lawn-portrait.jpg'),
  path.join(rootDir, 'public', 'hero-kathak-original.png'),
  path.join(rootDir, 'public', 'personal-portfolio-kathak.png')
];

for (const target of legacyTargets) {
  fs.copyFileSync(cleanSource, target);
}
console.log('Updated legacy targets.');
