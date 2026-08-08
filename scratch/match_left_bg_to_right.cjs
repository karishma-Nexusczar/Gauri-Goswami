const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const leftMediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166553896.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function matchLeftBackgroundToRight() {
  if (!fs.existsSync(leftMediaPath)) {
    console.error('Left media path not found:', leftMediaPath);
    return;
  }

  console.log('Matching left image background color to right image background color (#050403)...');

  // Load left image buffer
  const { data, info } = await sharp(leftMediaPath)
    .resize(1362, 2048, { kernel: sharp.kernel.lanczos3, fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const numPixels = width * height;

  const outBuffer = Buffer.alloc(numPixels * 3);

  // In 1362x2048 left portrait:
  // Gauri in dark grey suit is located from x=150 to x=1150, y=400 to y=2048
  // The bookshelf background is in x=0..450 (left side bookshelf) and x=950..1362 (right pillar & shelf)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      let r = data[idx];
      let g = data[idx + 1];
      let b = data[idx + 2];

      // Distance from Gauri's face/body center (cx=650, cy=1100)
      const dx = (x - 650) / width;
      const dy = (y - 1000) / height;
      const dist = Math.sqrt(dx * dx * 1.8 + dy * dy);

      // Bookshelf background detection:
      // Warm brown tones (r > g, r > b, r - b > 15) in background areas
      const isBookshelf = (x < 350 || x > 950 || y < 350) && (r > 20 && r > b);

      if (isBookshelf) {
        // Darken and neutralize brown bookshelf background to deep dark charcoal #050403
        const darkenFactor = Math.max(0.12, 1 - (dist * 1.5));
        r = Math.floor(r * darkenFactor * 0.3);
        g = Math.floor(g * darkenFactor * 0.3);
        b = Math.floor(b * darkenFactor * 0.3);
      }

      outBuffer[idx] = r;
      outBuffer[idx + 1] = g;
      outBuffer[idx + 2] = b;
    }
  }

  const finalBuffer = await sharp(outBuffer, { raw: { width, height, channels: 3 } })
    .blur(0.3)
    .jpeg({ quality: 98, chromaSubsampling: '4:4:4' })
    .toBuffer();

  const targets = [
    path.join(publicDir, 'about-gauri-red-blazer.jpg'),
    path.join(publicDir, 'hero-left-formal.png'),
    path.join(publicDir, 'hero-left-original.png'),
    path.join(publicDir, 'hero-left-grey-suit.jpg'),
    path.join(publicDir, 'advocate-library-portrait.png')
  ];

  for (const target of targets) {
    fs.writeFileSync(target, finalBuffer);
    console.log('Saved background-matched left asset:', target);
  }
}

matchLeftBackgroundToRight().catch(console.error);
