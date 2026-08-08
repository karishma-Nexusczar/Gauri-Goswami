const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const leftMediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166553896.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function fixAwkwardLeftBackground() {
  if (!fs.existsSync(leftMediaPath)) {
    console.error('Left media path not found:', leftMediaPath);
    return;
  }

  console.log('Fixing awkward left background seam with smooth continuous radial vignette...');

  // Load raw 1362x2048 high-res left image
  const { data, info } = await sharp(leftMediaPath)
    .resize(1362, 2048, { kernel: sharp.kernel.lanczos3, fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const numPixels = width * height;

  const outBuffer = Buffer.alloc(numPixels * 3);

  // Focal center on Gauri's face and upper torso (cx=681, cy=900)
  const cx = width * 0.5;
  const cy = height * 0.44;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      let r = data[idx];
      let g = data[idx + 1];
      let b = data[idx + 2];

      // Smooth continuous normalized distance from focal center
      const nx = (x - cx) / (width * 0.5);
      const ny = (y - cy) / (height * 0.55);
      const dist = Math.sqrt(nx * nx * 1.2 + ny * ny);

      // Smooth sigmoid falloff curve (0 at center, 1 at edges)
      // Keeps Gauri and her immediate backdrop crisp & natural, while smoothly fading outer library backdrop into dark #050403
      let factor = 1.0;
      if (dist > 0.45) {
        const falloff = Math.min(1.0, (dist - 0.45) / 0.75);
        // Cosine smooth step falloff
        const smoothStep = 0.5 * (1 - Math.cos(falloff * Math.PI));
        factor = Math.max(0.08, 1.0 - smoothStep * 0.88);
      }

      // Preserve warm rich skin tones and suit details on Gauri
      outBuffer[idx] = Math.floor(r * factor);
      outBuffer[idx + 1] = Math.floor(g * factor);
      outBuffer[idx + 2] = Math.floor(b * factor);
    }
  }

  // Save HD image with zero box lines
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
    console.log('Saved seam-free left asset:', target);
  }
}

fixAwkwardLeftBackground().catch(console.error);
