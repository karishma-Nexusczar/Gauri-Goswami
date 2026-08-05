const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// Path to the authentic real photograph uploaded by the user
const realPhotoPath = path.join(brainDir, 'media__1785773244477.jpg');

async function processExactRealColors() {
  if (!fs.existsSync(realPhotoPath)) {
    console.error('Real photo missing:', realPhotoPath);
    process.exit(1);
  }

  console.log('Processing real Kathak photo for 100% exact costume colors:', realPhotoPath);
  const meta = await sharp(realPhotoPath).metadata();

  const { data, info } = await sharp(realPhotoPath).raw().toBuffer({ resolveWithObject: true });
  const totalPixels = info.width * info.height;
  const output = Buffer.alloc(totalPixels * 3);

  for (let i = 0; i < totalPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    // Detect background green grass / lawn / yellow leaves on the edges
    // Grass/lawn: green channel is strictly greater than red and blue
    const isGrassGreen = (g > r * 1.02) && (g > b * 1.04) && (g > 40);
    const isBrightLawn = (g > 65) && (g - r > 8) && (g - b > 10);
    const isTopYellowLeaves = (r > 130) && (g > 120) && (b < 60) && (i < totalPixels * 0.18) && (i % info.width < info.width * 0.35);

    // Keep dancer costume, skin, hair, and jewelry 100% untouched
    // Costume colors: White skirt, Yellow flowers, Pink/Orange trim, Gold jewelry, Skin tones
    const isWhiteDress = (r > 155) && (g > 150) && (b > 140) && (Math.abs(r - g) < 30);
    const isPinkOrangeTrim = (r > 130) && (r > g * 1.25);
    const isGoldPattern = (r > 130) && (g > 95) && (r > b * 1.3);
    const isSkinHair = (r > 110) && (g > 75) && (b > 60) && (r > b);

    const isDancerPixel = isWhiteDress || isPinkOrangeTrim || isGoldPattern || isSkinHair;

    if ((isGrassGreen || isBrightLawn || isTopYellowLeaves) && !isDancerPixel) {
      // Set background to pure #090909 Rich Black
      output[i * 3] = 9;
      output[i * 3 + 1] = 9;
      output[i * 3 + 2] = 9;
    } else {
      // Keep exact real pixel from photo with 100% authentic color fidelity
      output[i * 3] = r;
      output[i * 3 + 1] = g;
      output[i * 3 + 2] = b;
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
    console.log('Saved exact real photo color asset to:', t);
  }
}

processExactRealColors().catch(console.error);
