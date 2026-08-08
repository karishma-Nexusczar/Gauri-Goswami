const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\49b68132-336c-417b-bc0b-c5baa1f2feac\\media__1786043425973.png';
const publicDir = path.resolve(__dirname, '../public');

async function processImage() {
  const meta = await sharp(inputPath).metadata();
  console.log('Original dimensions:', meta.width, 'x', meta.height);

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const numPixels = info.width * info.height;

  // Create a version where black background (R < 15, G < 15, B < 15) is converted to transparent alpha or smooth #0d0a08
  const rgbaBuffer = Buffer.alloc(numPixels * 4);
  const bgMatchedBuffer = Buffer.alloc(numPixels * 3);

  // Target bg color: #0d0a08 -> R:13, G:10, B:8
  const targetR = 13;
  const targetG = 10;
  const targetB = 8;

  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];

    // Measure brightness / distance from dark background
    const maxVal = Math.max(r, g, b);
    
    // Smooth threshold transition for dark background to transparent / #0d0a08
    let alpha = 255;
    if (maxVal < 12) {
      alpha = 0;
    } else if (maxVal < 25) {
      alpha = Math.floor(((maxVal - 12) / 13) * 255);
    }

    // RGBA Cutout (Transparent BG)
    rgbaBuffer[i * 4] = r;
    rgbaBuffer[i * 4 + 1] = g;
    rgbaBuffer[i * 4 + 2] = b;
    rgbaBuffer[i * 4 + 3] = Math.min(a, alpha);

    // BG Matched (Solid #0d0a08 BG)
    const factor = alpha / 255;
    bgMatchedBuffer[i * 3] = Math.round(r * factor + targetR * (1 - factor));
    bgMatchedBuffer[i * 3 + 1] = Math.round(g * factor + targetG * (1 - factor));
    bgMatchedBuffer[i * 3 + 2] = Math.round(b * factor + targetB * (1 - factor));
  }

  // Save high-quality PNG cutout (Transparent)
  const cutoutPath = path.join(publicDir, 'kathak-red-spin-cutout.png');
  await sharp(rgbaBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(cutoutPath);
  console.log('Saved transparent cutout to:', cutoutPath);

  // Save high-quality JPEG with #0d0a08 background
  const jpegPath = path.join(publicDir, 'kathak-red-spin-hero.jpg');
  await sharp(bgMatchedBuffer, { raw: { width: info.width, height: info.height, channels: 3 } })
    .jpeg({ quality: 98 })
    .toFile(jpegPath);
  console.log('Saved solid bg matched JPEG to:', jpegPath);

  // Copy raw image as kathak-standing-original-hero.jpg replacement too
  const rawCopyPath = path.join(publicDir, 'kathak-standing-original-hero.jpg');
  await sharp(inputPath)
    .jpeg({ quality: 98 })
    .toFile(rawCopyPath);
  console.log('Saved raw copy to kathak-standing-original-hero.jpg');
}

processImage().catch(console.error);
