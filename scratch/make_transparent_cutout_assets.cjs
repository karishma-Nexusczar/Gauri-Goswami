const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

const realAdvocatePath = path.join(brainDir, 'media__1785772583793.jpg');
const realKathakPath = path.join(brainDir, 'media__1785773244477.jpg');

async function createTransparentCutouts() {
  console.log('Creating transparent PNG cutouts for seamless hero integration...');

  // 1. Advocate Cutout (Transparent PNG)
  const { data: advData, info: advInfo } = await sharp(realAdvocatePath).raw().toBuffer({ resolveWithObject: true });
  const advPixels = advInfo.width * advInfo.height;
  const advRgba = Buffer.alloc(advPixels * 4);

  for (let i = 0; i < advPixels; i++) {
    const r = advData[i * 3];
    const g = advData[i * 3 + 1];
    const b = advData[i * 3 + 2];

    // Detect background black/dark studio pixels
    const isDarkBg = (r < 18) && (g < 18) && (b < 18);

    if (isDarkBg) {
      advRgba[i * 4] = 0;
      advRgba[i * 4 + 1] = 0;
      advRgba[i * 4 + 2] = 0;
      advRgba[i * 4 + 3] = 0; // Transparent
    } else {
      advRgba[i * 4] = r;
      advRgba[i * 4 + 1] = g;
      advRgba[i * 4 + 2] = b;
      advRgba[i * 4 + 3] = 255;
    }
  }

  const advocateTransparent = await sharp(advRgba, {
    raw: { width: advInfo.width, height: advInfo.height, channels: 4 }
  })
  .png()
  .toBuffer();

  const leftTarget = path.join(rootDir, 'public', 'hero-left-formal.png');
  fs.writeFileSync(leftTarget, advocateTransparent);
  console.log('Saved transparent Advocate PNG cutout to:', leftTarget);

  // 2. Kathak Cutout (Transparent PNG)
  const { data: katData, info: katInfo } = await sharp(realKathakPath).raw().toBuffer({ resolveWithObject: true });
  const katPixels = katInfo.width * katInfo.height;
  const katRgba = Buffer.alloc(katPixels * 4);

  for (let i = 0; i < katPixels; i++) {
    const r = katData[i * 3];
    const g = katData[i * 3 + 1];
    const b = katData[i * 3 + 2];

    // Detect background grass/green/dark pixels
    const isGrassGreen = (g > r * 1.02) && (g > b * 1.04) && (g > 40);
    const isBrightLawn = (g > 65) && (g - r > 8) && (g - b > 10);
    const isDarkBg = (r < 20) && (g < 20) && (b < 20);

    const isWhiteDress = (r > 150) && (g > 145) && (b > 135) && (Math.abs(r - g) < 30);
    const isPinkOrangeTrim = (r > 125) && (r > g * 1.2);
    const isYellowFlower = (r > 120) && (g > 85) && (r > b * 1.25);
    const isSkinHairGold = (r > 100) && (g > 65) && (r > b);

    const isDancer = isWhiteDress || isPinkOrangeTrim || isYellowFlower || isSkinHairGold;

    if ((isGrassGreen || isBrightLawn || isDarkBg) && !isDancer) {
      katRgba[i * 4] = 0;
      katRgba[i * 4 + 1] = 0;
      katRgba[i * 4 + 2] = 0;
      katRgba[i * 4 + 3] = 0; // Transparent
    } else {
      katRgba[i * 4] = r;
      katRgba[i * 4 + 1] = g;
      katRgba[i * 4 + 2] = b;
      katRgba[i * 4 + 3] = 255;
    }
  }

  const kathakTransparent = await sharp(katRgba, {
    raw: { width: katInfo.width, height: katInfo.height, channels: 4 }
  })
  .png()
  .toBuffer();

  const rightTargetV5 = path.join(rootDir, 'public', 'hero-right-kathak-v5.png');
  const rightTargetV4 = path.join(rootDir, 'public', 'hero-right-kathak-v4.png');
  const rightTargetV3 = path.join(rootDir, 'public', 'hero-right-kathak-v3.png');
  fs.writeFileSync(rightTargetV5, kathakTransparent);
  fs.writeFileSync(rightTargetV4, kathakTransparent);
  fs.writeFileSync(rightTargetV3, kathakTransparent);
  console.log('Saved transparent Kathak PNG cutout to:', rightTargetV5);
}

createTransparentCutouts().catch(console.error);
