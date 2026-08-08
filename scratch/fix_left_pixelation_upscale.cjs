const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166553896.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function fixLeftPixelation() {
  if (!fs.existsSync(mediaPath)) {
    console.error('Media path not found:', mediaPath);
    return;
  }

  console.log('Upscaling left hero image with 2x Lanczos3 super-sampling to 1362x2048...');

  const meta = await sharp(mediaPath).metadata();
  console.log('Original left image dimensions:', meta.width, 'x', meta.height);

  // Upscale 2x with Lanczos3 and subtle smoothing pass
  const superSampledBuffer = await sharp(mediaPath)
    .resize(1362, 2048, {
      kernel: sharp.kernel.lanczos3,
      fit: 'cover'
    })
    .blur(0.3)
    .jpeg({
      quality: 98,
      chromaSubsampling: '4:4:4' // Full uncompressed color fidelity
    })
    .toBuffer();

  const targets = [
    path.join(publicDir, 'about-gauri-red-blazer.jpg'),
    path.join(publicDir, 'hero-left-formal.png'),
    path.join(publicDir, 'hero-left-original.png'),
    path.join(publicDir, 'hero-left-grey-suit.jpg'),
    path.join(publicDir, 'advocate-library-portrait.png')
  ];

  for (const target of targets) {
    fs.writeFileSync(target, superSampledBuffer);
    console.log('Saved HD super-sampled left asset:', target);
  }
}

fixLeftPixelation().catch(console.error);
