const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const leftMediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166553896.jpg';
const rightMediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166790441.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function balanceHeroBackgrounds() {
  console.log('Balancing right and left hero image background colors for 100% warmth and harmony...');

  // 1. Process Right Image (Kathak Stage Performance)
  if (fs.existsSync(rightMediaPath)) {
    const { data, info } = await sharp(rightMediaPath)
      .resize(2048, 1366, { kernel: sharp.kernel.lanczos3, fit: 'cover' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const width = info.width;
    const height = info.height;
    const numPixels = width * height;
    const outBuffer = Buffer.alloc(numPixels * 3);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 3;
        let r = data[idx];
        let g = data[idx + 1];
        let b = data[idx + 2];

        const maxVal = Math.max(r, g, b);
        const minVal = Math.min(r, g, b);
        const chroma = maxVal - minVal;

        // Stage curtain / backdrop pixel detection
        const isCurtain = (chroma < 24 && maxVal < 155 && (x < 1100 || x > 1550 || y < 180 || y > 1080));

        if (isCurtain) {
          // Warm up the grey curtain to rich warm brown #261c14 matching the left library background!
          // Blend RGB gracefully: increase red & green warmth, reduce cool blue
          r = Math.min(255, Math.floor(r * 0.72 + 28));
          g = Math.min(255, Math.floor(g * 0.62 + 18));
          b = Math.min(255, Math.floor(b * 0.50 + 10));
        } else {
          // Keep Gauri's face, smile, costume, and gold jewelry crisp, vibrant & glowing
          r = Math.min(255, Math.floor(r * 1.03));
          g = Math.min(255, Math.floor(g * 0.98));
          b = Math.min(255, Math.floor(b * 0.94));
        }

        outBuffer[idx] = r;
        outBuffer[idx + 1] = g;
        outBuffer[idx + 2] = b;
      }
    }

    const finalRight = await sharp(outBuffer, { raw: { width, height, channels: 3 } })
      .blur(0.3)
      .png({ compressionLevel: 5 })
      .toBuffer();

    const rightTargets = [
      path.join(publicDir, 'hero-right-kathak-v6.png'),
      path.join(publicDir, 'hero-right-original.png'),
      path.join(publicDir, 'hero-right-kathak.jpg'),
      path.join(publicDir, 'kathak-lawn-classical-pose.jpg'),
      path.join(publicDir, 'kathak-hero-standing-cutout.png')
    ];

    for (const target of rightTargets) {
      fs.writeFileSync(target, finalRight);
    }
    console.log('Right stage image background balanced to warm mahogany brown!');
  }

  // 2. Process Left Image (Advocate Suit in Law Library)
  if (fs.existsSync(leftMediaPath)) {
    const { data, info } = await sharp(leftMediaPath)
      .resize(1362, 2048, { kernel: sharp.kernel.lanczos3, fit: 'cover' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const width = info.width;
    const height = info.height;
    const numPixels = width * height;
    const outBuffer = Buffer.alloc(numPixels * 3);

    const cx = width * 0.5;
    const cy = height * 0.44;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 3;
        let r = data[idx];
        let g = data[idx + 1];
        let b = data[idx + 2];

        const nx = (x - cx) / (width * 0.5);
        const ny = (y - cy) / (height * 0.55);
        const dist = Math.sqrt(nx * nx * 1.2 + ny * ny);

        let factor = 1.0;
        if (dist > 0.45) {
          const falloff = Math.min(1.0, (dist - 0.45) / 0.75);
          const smoothStep = 0.5 * (1 - Math.cos(falloff * Math.PI));
          factor = Math.max(0.28, 1.0 - smoothStep * 0.72);
        }

        r = Math.floor(r * factor * 1.02);
        g = Math.floor(g * factor * 0.96);
        b = Math.floor(b * factor * 0.90);

        outBuffer[idx] = Math.min(255, r);
        outBuffer[idx + 1] = Math.min(255, g);
        outBuffer[idx + 2] = Math.min(255, b);
      }
    }

    const finalLeft = await sharp(outBuffer, { raw: { width, height, channels: 3 } })
      .blur(0.3)
      .jpeg({ quality: 98, chromaSubsampling: '4:4:4' })
      .toBuffer();

    const leftTargets = [
      path.join(publicDir, 'about-gauri-red-blazer.jpg'),
      path.join(publicDir, 'hero-left-formal.png'),
      path.join(publicDir, 'hero-left-original.png'),
      path.join(publicDir, 'hero-left-grey-suit.jpg'),
      path.join(publicDir, 'advocate-library-portrait.png')
    ];

    for (const target of leftTargets) {
      fs.writeFileSync(target, finalLeft);
    }
    console.log('Left library image background balanced!');
  }
}

balanceHeroBackgrounds().catch(console.error);
