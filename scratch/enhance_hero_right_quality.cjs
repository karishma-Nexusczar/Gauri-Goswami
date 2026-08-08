const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166790441.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function enhanceQuality() {
  if (!fs.existsSync(mediaPath)) {
    console.error('Media path not found:', mediaPath);
    return;
  }

  console.log('Enhancing stage performance image quality...');

  // Load raw image metadata
  const meta = await sharp(mediaPath).metadata();
  console.log('Original dimensions:', meta.width, 'x', meta.height);

  // Apply high-end professional image sharpening, contrast boost, and lossless PNG encoding
  const ultraQualityBuffer = await sharp(mediaPath)
    .sharpen({
      sigma: 1.2,
      m1: 1.0,
      m2: 2.5
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.08
    })
    .png({
      compressionLevel: 0, // Lossless maximum quality
      quality: 100
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
    fs.writeFileSync(target, ultraQualityBuffer);
    console.log('Updated ultra-high-quality asset:', target);
  }
}

enhanceQuality().catch(console.error);
