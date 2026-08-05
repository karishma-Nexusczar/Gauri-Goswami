const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// 1. Path to the AI-generated black background image
const aiBlackBg = path.join(brainDir, 'kathak_full_real_black_bg_1785773195529.png');

// 2. Path to the original real photo uploaded by user
const realPhotoPath = path.join(brainDir, 'media__1785773120958.jpg');

async function processRealKathak() {
  const targetRightKathak = path.join(rootDir, 'public', 'hero-right-kathak.jpg');
  const targetRightOriginal = path.join(rootDir, 'public', 'hero-right-original.png');
  const targetKathakLawn = path.join(rootDir, 'public', 'kathak-lawn-portrait.jpg');

  // First try high-precision pixel chromakey of the actual real photo
  if (fs.existsSync(realPhotoPath)) {
    console.log('Processing real Kathak photo:', realPhotoPath);
    const meta = await sharp(realPhotoPath).metadata();
    const { data, info } = await sharp(realPhotoPath).raw().toBuffer({ resolveWithObject: true });

    const totalPixels = info.width * info.height;
    const outputBuffer = Buffer.alloc(totalPixels * 3);

    for (let i = 0; i < totalPixels; i++) {
      const r = data[i * 3];
      const g = data[i * 3 + 1];
      const b = data[i * 3 + 2];

      // Green grass detection formula:
      // Green is stronger than red and blue, typical lawn grass tones
      const isLawnGreen = (g > r * 1.02) && (g > b * 1.05) && (g > 45);
      const isBrightGrass = (g > 70) && (g - r > 8) && (g - b > 10);
      const isShadowGrass = (g > r) && (g > b) && (g > 30) && (r < 100) && (b < 100);

      // Check if pixel is part of dancer (pink/gold/white costume, skin, hair)
      const isWhiteDress = (r > 160) && (g > 160) && (b > 150) && (Math.abs(r - g) < 35);
      const isPinkCostume = (r > 140) && (r > g * 1.3);
      const isGoldOrSkin = (r > 120) && (r > b * 1.15);

      if ((isLawnGreen || isBrightGrass || isShadowGrass) && !isWhiteDress && !isPinkCostume && !isGoldOrSkin) {
        // Set background to #090909 Rich Black
        outputBuffer[i * 3] = 9;
        outputBuffer[i * 3 + 1] = 9;
        outputBuffer[i * 3 + 2] = 9;
      } else {
        outputBuffer[i * 3] = r;
        outputBuffer[i * 3 + 1] = g;
        outputBuffer[i * 3 + 2] = b;
      }
    }

    const processedRealPhoto = await sharp(outputBuffer, {
      raw: { width: info.width, height: info.height, channels: 3 }
    })
    .jpeg({ quality: 95 })
    .toBuffer();

    fs.writeFileSync(targetRightKathak, processedRealPhoto);
    fs.writeFileSync(targetRightOriginal, processedRealPhoto);
    fs.writeFileSync(targetKathakLawn, processedRealPhoto);

    console.log('Successfully saved real Kathak cutout on #090909 Rich Black background!');
  } else if (fs.existsSync(aiBlackBg)) {
    fs.copyFileSync(aiBlackBg, targetRightKathak);
    fs.copyFileSync(aiBlackBg, targetRightOriginal);
    fs.copyFileSync(aiBlackBg, targetKathakLawn);
    console.log('Saved AI isolated Kathak on black background.');
  }
}

processRealKathak().catch(console.error);
