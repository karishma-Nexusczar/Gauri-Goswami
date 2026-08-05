const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function inspectThemeImages() {
  const candidates = [
    'hero-theme-final.png',
    'hero-composite-final.png',
    'hero-composite-barrister.png',
    'five-worlds-bg.png',
    'about-hero-design4.png'
  ];

  for (const c of candidates) {
    const fullPath = path.join(publicDir, c);
    if (fs.existsSync(fullPath)) {
      const meta = await sharp(fullPath).metadata();
      console.log(`${c}: ${meta.width}x${meta.height}, channels: ${meta.channels}, format: ${meta.format}`);
    }
  }
}

inspectThemeImages();
