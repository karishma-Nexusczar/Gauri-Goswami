const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const sourcePath = path.join(rootDir, 'public', 'hero-left-formal.png');
const targetOriginal = path.join(rootDir, 'public', 'hero-left-original.png');
const targetFormalDark = path.join(rootDir, 'public', 'hero-left-formal-dark.png');

if (fs.existsSync(sourcePath)) {
  fs.copyFileSync(sourcePath, targetOriginal);
  fs.copyFileSync(sourcePath, targetFormalDark);
  console.log('Successfully replaced hero left images with the exact original uploaded image without any changes.');
} else {
  console.error('Source image not found:', sourcePath);
}
