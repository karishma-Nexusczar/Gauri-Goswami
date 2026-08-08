const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786176383230.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function processKathakHeroSpin() {
  if (!fs.existsSync(mediaPath)) {
    console.error('Media path not found:', mediaPath);
    return;
  }

  console.log('Processing Kathak page hero red spin image...');

  // 1. Upscale to 2x HD resolution 1280x2048 with Lanczos3
  const hdBuffer = await sharp(mediaPath)
    .resize(1280, 2048, { kernel: sharp.kernel.lanczos3, fit: 'contain', background: '#000000' })
    .toBuffer();

  const { data, info } = await sharp(hdBuffer).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const numPixels = width * height;

  const rgbaBuffer = Buffer.alloc(numPixels * 4);

  // Black background isolation pass (pure black studio backdrop)
  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    const maxVal = Math.max(r, g, b);

    let alpha = 255;
    if (maxVal <= 6) {
      alpha = 0;
    } else if (maxVal <= 24) {
      const ratio = (maxVal - 6) / 18;
      alpha = Math.floor(Math.pow(ratio, 1.2) * 255);
    }

    rgbaBuffer[i * 4] = r;
    rgbaBuffer[i * 4 + 1] = g;
    rgbaBuffer[i * 4 + 2] = b;
    rgbaBuffer[i * 4 + 3] = alpha;
  }

  const cutoutBuffer = await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 6 })
    .toBuffer();

  const cutoutTarget = path.join(publicDir, 'kathak-red-spin-cutout.png');
  const heroJpgTarget = path.join(publicDir, 'kathak-red-spin-hero.jpg');

  fs.writeFileSync(cutoutTarget, cutoutBuffer);
  fs.writeFileSync(heroJpgTarget, hdBuffer);

  console.log('Saved updated Kathak hero cutout to:', cutoutTarget);
  console.log('Saved updated Kathak hero JPG to:', heroJpgTarget);
}

processKathakHeroSpin().catch(console.error);
