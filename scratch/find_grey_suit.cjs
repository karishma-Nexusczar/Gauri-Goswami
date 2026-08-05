const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function findGreySuitImage() {
  const files = fs.readdirSync(publicDir);
  for (const f of files) {
    if (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')) {
      const fullPath = path.join(publicDir, f);
      try {
        const image = sharp(fullPath);
        const meta = await image.metadata();
        // Extract top-right 10% (where wooden bookshelf is in the grey suit photo)
        const bookshelfSample = await image
          .extract({
            left: Math.floor(meta.width * 0.7),
            top: 0,
            width: Math.floor(meta.width * 0.25),
            height: Math.floor(meta.height * 0.3)
          })
          .stats();
          
        const r = Math.round(bookshelfSample.channels[0].mean);
        const g = Math.round(bookshelfSample.channels[1].mean);
        const b = Math.round(bookshelfSample.channels[2].mean);
        
        console.log(`${f} (${meta.width}x${meta.height}): Top-Right RGB=(${r},${g},${b})`);
      } catch (e) {
        // ignore
      }
    }
  }
}

findGreySuitImage();
