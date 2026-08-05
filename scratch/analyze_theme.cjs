const sharp = require('sharp');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const themePath = path.join(rootDir, 'public', 'hero-theme-final.png');

async function analyzeTheme() {
  const meta = await sharp(themePath).metadata();
  console.log('hero-theme-final dimensions:', meta.width, 'x', meta.height);
}

analyzeTheme();
