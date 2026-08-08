const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\49b68132-336c-417b-bc0b-c5baa1f2feac\\media__1786043425973.png';
const publicDir = path.resolve(__dirname, '../public');

async function processPerfectCutout() {
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const numPixels = info.width * info.height;

  const rgbaBuffer = Buffer.alloc(numPixels * 4);

  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];

    // Compute pixel brightness and color saturation
    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    const chromacity = maxVal - minVal;

    // Detect dark background pixels vs dancer pixels
    // Dark background in original photo is RGB (0,0,0) to (18,18,18) with low saturation
    let alpha = 255;

    if (maxVal <= 8) {
      alpha = 0;
    } else if (maxVal <= 28 && chromacity < 10) {
      // Smooth feathering transition from 8 to 28 for ultra soft edges
      const ratio = (maxVal - 8) / 20;
      alpha = Math.floor(Math.pow(ratio, 1.2) * 255);
    }

    rgbaBuffer[i * 4] = r;
    rgbaBuffer[i * 4 + 1] = g;
    rgbaBuffer[i * 4 + 2] = b;
    rgbaBuffer[i * 4 + 3] = Math.min(a, alpha);
  }

  const cutoutPath = path.join(publicDir, 'kathak-red-spin-cutout.png');
  await sharp(rgbaBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(cutoutPath);
  
  console.log('Saved pristine transparent cutout to:', cutoutPath);
}

processPerfectCutout().catch(console.error);
