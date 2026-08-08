const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rightMediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166790441.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function processMatchingRightHero() {
  if (!fs.existsSync(rightMediaPath)) {
    console.error('Right media path not found:', rightMediaPath);
    return;
  }

  console.log('Processing right stage hero image to match left library hero image...');

  // Load raw image
  const { data, info } = await sharp(rightMediaPath)
    .resize(2048, 1366, { kernel: sharp.kernel.lanczos3, fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const numPixels = width * height;

  const outBuffer = Buffer.alloc(numPixels * 3);

  // Gauri's dancer posture in 2048x1366 image:
  // Center of dancer is around x = 58% (x ~ 1180), y from 20% to 95%
  // We want to darken the grey curtains on left side (x < 900) and top (y < 250) and monitor speaker on bottom right (x > 1400, y > 1000)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      let r = data[idx];
      let g = data[idx + 1];
      let b = data[idx + 2];

      // Distance from dancer center (cx=1180, cy=700)
      const dx = (x - 1180) / width;
      const dy = (y - 650) / height;
      const dist = Math.sqrt(dx * dx * 1.5 + dy * dy);

      // Background pixel detection:
      // Curtain / backdrop pixels are neutral grey (low saturation: |r-g| < 12 and |g-b| < 12)
      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const chroma = maxVal - minVal;

      const isCurtain = (chroma < 18 && maxVal < 140 && (x < 1000 || x > 1500 || y < 200 || y > 1050));

      if (isCurtain) {
        // Darken curtain backdrop seamlessly towards warm dark #080705 matching hero background
        const darkenFactor = Math.max(0.15, 1 - (dist * 1.6));
        r = Math.floor(r * darkenFactor * 0.4);
        g = Math.floor(g * darkenFactor * 0.35);
        b = Math.floor(b * darkenFactor * 0.3);
      } else {
        // Subtle warm glow color grading on dancer to match left library warmth
        r = Math.min(255, Math.floor(r * 1.03));
        g = Math.min(255, Math.floor(g * 0.98));
        b = Math.min(255, Math.floor(b * 0.94));
      }

      outBuffer[idx] = r;
      outBuffer[idx + 1] = g;
      outBuffer[idx + 2] = b;
    }
  }

  // Create smooth sharp image with uncompressed high quality
  const finalBuffer = await sharp(outBuffer, { raw: { width, height, channels: 3 } })
    .blur(0.3) // Subtle smoothing for ultra crisp HD rendering
    .png({ compressionLevel: 5 })
    .toBuffer();

  const targets = [
    path.join(publicDir, 'hero-right-kathak-v6.png'),
    path.join(publicDir, 'hero-right-original.png'),
    path.join(publicDir, 'hero-right-kathak.jpg'),
    path.join(publicDir, 'kathak-lawn-classical-pose.jpg'),
    path.join(publicDir, 'kathak-hero-standing-cutout.png')
  ];

  for (const target of targets) {
    fs.writeFileSync(target, finalBuffer);
    console.log('Saved seamlessly matched asset:', target);
  }
}

processMatchingRightHero().catch(console.error);
