const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// Path to the authentic real photograph uploaded by the user
const realPhotoPath = path.join(brainDir, 'media__1785773244477.jpg');

async function processPureBlackBackground() {
  if (!fs.existsSync(realPhotoPath)) {
    console.error('Real photo missing:', realPhotoPath);
    process.exit(1);
  }

  console.log('Processing real Kathak photo for pure solid black background (#090909):', realPhotoPath);

  const { data, info } = await sharp(realPhotoPath).raw().toBuffer({ resolveWithObject: true });
  const totalPixels = info.width * info.height;
  const output = Buffer.alloc(totalPixels * 3);

  for (let i = 0; i < totalPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    // Detect dancer pixels (white dress, yellow flowers, orange border, skin, hair, gold jewelry, mudra pose, feet)
    const isWhiteDress = (r > 145) && (g > 140) && (b > 130) && (Math.abs(r - g) < 35);
    const isOrangePinkBorder = (r > 125) && (r > g * 1.18);
    const isYellowFlower = (r > 120) && (g > 85) && (r > b * 1.2);
    const isSkinOrGold = (r > 105) && (g > 68) && (b > 50) && (r > b);

    const isDancer = isWhiteDress || isOrangePinkBorder || isYellowFlower || isSkinOrGold;

    if (isDancer) {
      // Keep exact real pixel from authentic photo
      output[i * 3] = r;
      output[i * 3 + 1] = g;
      output[i * 3 + 2] = b;
    } else {
      // Pure solid Rich Black #090909
      output[i * 3] = 9;
      output[i * 3 + 1] = 9;
      output[i * 3 + 2] = 9;
    }
  }

  const resultBuffer = await sharp(output, {
    raw: { width: info.width, height: info.height, channels: 3 }
  })
  .jpeg({ quality: 98 })
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
    console.log('Saved pure black background asset to:', t);
  }
}

processPureBlackBackground().catch(console.error);
