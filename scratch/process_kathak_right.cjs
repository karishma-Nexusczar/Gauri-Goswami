const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const aiGeneratedPath = path.join(brainDir, 'kathak_right_dark_black_1785771689713.png');
const rawUploadedPath = path.join(brainDir, 'media__1785771634748.jpg');

async function processKathakRight() {
  // 1. Copy AI generated pure black background image to public target
  if (fs.existsSync(aiGeneratedPath)) {
    const targetPath = path.join(rootDir, 'public', 'hero-right-kathak.jpg');
    const targetOriginal = path.join(rootDir, 'public', 'hero-right-original.png');
    
    // Convert PNG to high quality JPEG with black background
    await sharp(aiGeneratedPath)
      .flatten({ background: '#050504' })
      .jpeg({ quality: 95 })
      .toFile(targetPath);

    fs.copyFileSync(aiGeneratedPath, targetOriginal);
    console.log('Successfully saved AI isolated Kathak portrait on black background!');
  }

  // 2. Also process raw uploaded photo with green-removal mask to solid black #050504
  if (fs.existsSync(rawUploadedPath)) {
    const meta = await sharp(rawUploadedPath).metadata();
    console.log('Raw uploaded Kathak image:', meta.width, 'x', meta.height);

    const rawBuffer = await sharp(rawUploadedPath).toBuffer();
    
    // Precise green backdrop replacement to pure black #050504
    const rawImage = sharp(rawBuffer);
    const { data, info } = await rawImage.raw().toBuffer({ resolveWithObject: true });

    // Create alpha mask based on color distance from green background
    const numPixels = info.width * info.height;
    const maskBuffer = Buffer.alloc(numPixels);

    for (let i = 0; i < numPixels; i++) {
      const r = data[i * 3];
      const g = data[i * 3 + 1];
      const b = data[i * 3 + 2];

      // Green channel dominance test (typical lawn grass green)
      const isGreen = (g > r * 1.05) && (g > b * 1.1) && (g > 60);
      const isExtremeGreen = (g > 80) && (g - r > 15) && (g - b > 15);

      if (isGreen || isExtremeGreen) {
        maskBuffer[i] = 0; // Transparent / Replace with black
      } else {
        maskBuffer[i] = 255; // Keep dancer
      }
    }

    // Smooth mask with blur to avoid harsh edges
    const alphaMask = await sharp(maskBuffer, {
      raw: { width: info.width, height: info.height, channels: 1 }
    })
    .blur(1.5)
    .toBuffer();

    // Create 4-channel image with mask
    const rgbaBuffer = Buffer.alloc(info.width * info.height * 4);
    for (let i = 0; i < numPixels; i++) {
      rgbaBuffer[i * 4] = data[i * 3];
      rgbaBuffer[i * 4 + 1] = data[i * 3 + 1];
      rgbaBuffer[i * 4 + 2] = data[i * 3 + 2];
      rgbaBuffer[i * 4 + 3] = maskBuffer[i];
    }

    // Composite onto solid #050504 black background
    const pureBlackCutout = await sharp({
      create: {
        width: info.width,
        height: info.height,
        channels: 3,
        background: '#050504'
      }
    })
    .composite([{ input: await sharp(rgbaBuffer, { raw: { width: info.width, height: info.height, channels: 4 } }).toBuffer() }])
    .jpeg({ quality: 95 })
    .toBuffer();

    const rawCutoutTarget = path.join(rootDir, 'public', 'kathak-lawn-portrait.jpg');
    fs.writeFileSync(rawCutoutTarget, pureBlackCutout);
    console.log('Saved green-removed raw Kathak cutout on black background to kathak-lawn-portrait.jpg');
  }
}

processKathakRight().catch(console.error);
