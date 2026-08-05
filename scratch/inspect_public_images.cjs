const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function inspectImages() {
  const files = fs.readdirSync(publicDir);
  for (const f of files) {
    if (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')) {
      const fullPath = path.join(publicDir, f);
      try {
        const meta = await sharp(fullPath).metadata();
        // sample center pixel
        const stats = await sharp(fullPath).stats();
        console.log(`${f}: ${meta.width}x${meta.height}, channels:${meta.channels}, mean RGB: (${Math.round(stats.channels[0].mean)}, ${Math.round(stats.channels[1].mean)}, ${Math.round(stats.channels[2].mean)})`);
      } catch (e) {
        console.error(f, e.message);
      }
    }
  }
}

inspectImages();
