const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786176383230.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function fixKathakDancerCutout() {
  if (!fs.existsSync(mediaPath)) {
    console.error('Media path not found:', mediaPath);
    return;
  }

  console.log('Creating seamless 100% transparent HD cutout of red Kathak dancer posture...');

  // 1. High-resolution Lanczos3 resize to 1360x2048
  const { data, info } = await sharp(mediaPath)
    .resize(1360, 2048, { kernel: sharp.kernel.lanczos3, fit: 'contain', background: '#000000' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const numPixels = width * height;
  const rgbaBuffer = Buffer.alloc(numPixels * 4);

  // Background removal logic tailored for studio black background
  // Dancer costume is vibrant RED (r > 120, r > g*1.5, r > b*1.5) or skin/gold/white
  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    const chroma = maxVal - minVal;

    let alpha = 255;

    // Dark studio background detection:
    // Pure studio black pixels have maxVal < 25 and low chromacity < 15
    if (maxVal <= 12) {
      alpha = 0;
    } else if (maxVal <= 32 && chroma < 18) {
      // Soft alpha feathering transition
      const ratio = (maxVal - 12) / 20;
      alpha = Math.floor(Math.pow(ratio, 1.4) * 255);
    }

    rgbaBuffer[i * 4] = r;
    rgbaBuffer[i * 4 + 1] = g;
    rgbaBuffer[i * 4 + 2] = b;
    rgbaBuffer[i * 4 + 3] = alpha;
  }

  // Create pristine transparent PNG
  const cutoutPng = await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 6 })
    .toBuffer();

  const targetCutout = path.join(publicDir, 'kathak-red-spin-cutout.png');
  fs.writeFileSync(targetCutout, cutoutPng);
  console.log('Saved pristine seamless cutout PNG to:', targetCutout);
}

fixKathakDancerCutout().catch(console.error);
