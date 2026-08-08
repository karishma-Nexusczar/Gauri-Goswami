const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const leftMediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166553896.jpg';
const rightMediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166790441.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function processLogoThemeHeroImages() {
  console.log('Processing hero images to match logo theme background (#19120c / #140d08)...');

  // 1. Process Left Image (Advocate Suit in Law Library)
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
        if (dist > 0.42) {
          const falloff = Math.min(1.0, (dist - 0.42) / 0.78);
          const smoothStep = 0.5 * (1 - Math.cos(falloff * Math.PI));
          factor = Math.max(0.12, 1.0 - smoothStep * 0.85);
        }

        // Tint dark edges towards logo theme warm dark espresso #19120c
        r = Math.floor(r * factor * 1.05);
        g = Math.floor(g * factor * 0.95);
        b = Math.floor(b * factor * 0.88);

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
    console.log('Left image updated with logo theme background!');
  }

  // 2. Process Right Image (Kathak Stage Performance)
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

        const dx = (x - 1180) / width;
        const dy = (y - 650) / height;
        const dist = Math.sqrt(dx * dx * 1.5 + dy * dy);

        const maxVal = Math.max(r, g, b);
        const minVal = Math.min(r, g, b);
        const chroma = maxVal - minVal;

        const isCurtain = (chroma < 20 && maxVal < 145 && (x < 1000 || x > 1500 || y < 200 || y > 1050));

        if (isCurtain) {
          const darkenFactor = Math.max(0.18, 1 - (dist * 1.5));
          r = Math.floor(r * darkenFactor * 0.55);
          g = Math.floor(g * darkenFactor * 0.42);
          b = Math.floor(b * darkenFactor * 0.32);
        } else {
          r = Math.min(255, Math.floor(r * 1.04));
          g = Math.min(255, Math.floor(g * 0.98));
          b = Math.min(255, Math.floor(b * 0.93));
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
    console.log('Right image updated with logo theme background!');
  }
}

processLogoThemeHeroImages().catch(console.error);
