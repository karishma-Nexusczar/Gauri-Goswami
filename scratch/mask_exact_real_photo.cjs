const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const exactRealPhotoPath = path.join(brainDir, 'media__1785773244477.jpg');

async function processExactRealPhoto() {
  if (!fs.existsSync(exactRealPhotoPath)) {
    console.error('File not found:', exactRealPhotoPath);
    process.exit(1);
  }

  console.log('Processing exact real Kathak photo:', exactRealPhotoPath);
  const meta = await sharp(exactRealPhotoPath).metadata();
  console.log('Dimensions:', meta.width, 'x', meta.height);

  const { data, info } = await sharp(exactRealPhotoPath).raw().toBuffer({ resolveWithObject: true });
  const totalPixels = info.width * info.height;

  // Mask buffer for smooth blending
  const mask = Buffer.alloc(totalPixels);
  const output = Buffer.alloc(totalPixels * 3);

  for (let i = 0; i < totalPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    // Detect green lawn pixels (leaves/grass)
    const isGrassGreen = (g > r * 1.03) && (g > b * 1.05) && (g > 45);
    const isBrightGreen = (g > 65) && (g - r > 10) && (g - b > 12);
    const isDarkGrass = (g > r) && (g > b) && (g > 30) && (r < 110) && (b < 110);

    // Protect dancer elements (white skirt, pink sari, gold jewelry, skin, dark hair)
    const isWhiteDress = (r > 175) && (g > 170) && (b > 160) && (Math.abs(r - g) < 25);
    const isPinkBorder = (r > 150) && (r > g * 1.35);
    const isGoldJewelry = (r > 130) && (g > 100) && (b < 90) && (r > b * 1.3);
    const isFaceSkin = (r > 130) && (g > 85) && (b > 70) && (r > g) && (r > b);

    if ((isGrassGreen || isBrightGreen || isDarkGrass) && !isWhiteDress && !isPinkBorder && !isGoldJewelry && !isFaceSkin) {
      // #090909 Rich Black
      output[i * 3] = 9;
      output[i * 3 + 1] = 9;
      output[i * 3 + 2] = 9;
    } else {
      output[i * 3] = r;
      output[i * 3 + 1] = g;
      output[i * 3 + 2] = b;
    }
  }

  const resultBuffer = await sharp(output, {
    raw: { width: info.width, height: info.height, channels: 3 }
  })
  .jpeg({ quality: 96 })
  .toBuffer();

  const targets = [
    path.join(rootDir, 'public', 'hero-right-kathak.jpg'),
    path.join(rootDir, 'public', 'hero-right-original.png'),
    path.join(rootDir, 'public', 'kathak-lawn-portrait.jpg'),
    path.join(rootDir, 'public', 'hero-kathak-original.png'),
    path.join(rootDir, 'public', 'personal-portfolio-kathak.png')
  ];

  for (const t of targets) {
    fs.writeFileSync(t, resultBuffer);
    console.log('Successfully updated target with exact real photo cutout:', t);
  }
}

processExactRealPhoto().catch(console.error);
