const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786165849354.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function processImage() {
  if (!fs.existsSync(mediaPath)) {
    console.error('Media path does not exist:', mediaPath);
    return;
  }

  // 1. Copy raw exact uploaded image to public
  const rawTarget = path.join(publicDir, 'hero-right-exact-original.jpg');
  fs.copyFileSync(mediaPath, rawTarget);
  console.log('Saved exact raw uploaded image to:', rawTarget);

  // 2. Load raw image buffer
  const image = sharp(mediaPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const numPixels = info.width * info.height;

  // Create RGBA buffer for background removal
  const rgbaBuffer = Buffer.alloc(numPixels * 4);

  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    const chromacity = maxVal - minVal;

    // Studio wall background detection: high brightness (r>180, g>185, b>180) and low chromacity (chromacity < 25)
    // Note: Gauri's cream saree has warm gold tone (r > 200, g > 180, b < 165, chromacity > 35)
    let isBg = false;
    let alpha = 255;

    if (r > 175 && g > 180 && b > 170 && chromacity < 22) {
      if (r > 195 && g > 200 && b > 190 && chromacity < 16) {
        alpha = 0; // Pure background
      } else {
        // Soft edge feathering
        const factor = (chromacity - 16) / 6;
        alpha = Math.max(0, Math.min(255, Math.floor(factor * 255)));
      }
    }

    rgbaBuffer[i * 4] = r;
    rgbaBuffer[i * 4 + 1] = g;
    rgbaBuffer[i * 4 + 2] = b;
    rgbaBuffer[i * 4 + 3] = alpha;
  }

  // Composite onto dark #050403 background
  const compositeDark = await sharp({
    create: {
      width: info.width,
      height: info.height,
      channels: 3,
      background: '#050403'
    }
  })
  .composite([{
    input: await sharp(rgbaBuffer, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer()
  }])
  .png()
  .toBuffer();

  // Save to hero-right-kathak-v6.png, hero-right-original.png, etc.
  const targets = [
    path.join(publicDir, 'hero-right-kathak-v6.png'),
    path.join(publicDir, 'hero-right-original.png'),
    path.join(publicDir, 'hero-right-kathak.jpg'),
    path.join(publicDir, 'kathak-lawn-classical-pose.jpg'),
    path.join(publicDir, 'kathak-hero-standing-cutout.png')
  ];

  for (const target of targets) {
    fs.writeFileSync(target, compositeDark);
    console.log('Updated:', target);
  }
}

processImage().catch(console.error);
