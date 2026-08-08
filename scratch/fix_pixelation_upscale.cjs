const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166790441.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function fixPixelation() {
  if (!fs.existsSync(mediaPath)) {
    console.error('Media path not found:', mediaPath);
    return;
  }

  console.log('Upscaling image with 2x Lanczos3 super-sampling to eliminate pixelation...');

  // 1. Upscale from 1024x683 to 2048x1366 using Lanczos3 smooth interpolation
  // 2. Apply gentle smoothing pass to eliminate JPEG compression artifacts / pixelation
  const superSampledBuffer = await sharp(mediaPath)
    .resize(2048, 1366, {
      kernel: sharp.kernel.lanczos3,
      fit: 'cover'
    })
    .blur(0.4) // Subtle anti-aliasing pass to smooth blocky JPEG pixels
    .png({
      compressionLevel: 6,
      adaptiveFiltering: true
    })
    .toBuffer();

  const targets = [
    path.join(publicDir, 'hero-right-kathak-v6.png'),
    path.join(publicDir, 'hero-right-original.png'),
    path.join(publicDir, 'hero-right-kathak.jpg'),
    path.join(publicDir, 'kathak-lawn-classical-pose.jpg'),
    path.join(publicDir, 'kathak-hero-standing-cutout.png')
  ];

  for (const target of targets) {
    fs.writeFileSync(target, superSampledBuffer);
    console.log('Fixed pixelation & saved HD super-sampled asset:', target);
  }
}

fixPixelation().catch(console.error);
