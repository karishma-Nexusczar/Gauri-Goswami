const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786167748936.jpg';
const publicDir = path.resolve(__dirname, '../public');

async function processAboutPhoto() {
  if (!fs.existsSync(mediaPath)) {
    console.error('Media path not found:', mediaPath);
    return;
  }

  console.log('Processing high quality 2x HD super-sampled photo for About Gauri section...');

  const superSampledBuffer = await sharp(mediaPath)
    .resize(1488, 2048, {
      kernel: sharp.kernel.lanczos3,
      fit: 'cover'
    })
    .blur(0.3)
    .jpeg({
      quality: 98,
      chromaSubsampling: '4:4:4'
    })
    .toBuffer();

  const targetPath = path.join(publicDir, 'about-gauri-bookshelf.jpg');
  fs.writeFileSync(targetPath, superSampledBuffer);
  console.log('Successfully updated About Gauri Goswami section photo at:', targetPath);
}

processAboutPhoto().catch(console.error);
