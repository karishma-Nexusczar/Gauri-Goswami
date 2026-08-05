const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const redBlazerImgPath = path.join(brainDir, 'media__1785776507289.jpg');

async function processRedBlazerAdvocate() {
  console.log('Processing new red blazer advocate portrait cutout...');

  const { data, info } = await sharp(redBlazerImgPath).raw().toBuffer({ resolveWithObject: true });
  console.log('Image dimensions:', info.width, info.height);

  const pixels = info.width * info.height;
  const rgba = Buffer.alloc(pixels * 4);

  for (let i = 0; i < pixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    // Detect background wall/desk color: warm beige/cream studio wall (#E5D8C5 ~ R:215..245, G:205..235, B:190..220)
    // and dark wooden desk (#352418 ~ R:40..70, G:25..55, B:20..45)
    const isBeigeWall = (r > 190) && (g > 175) && (b > 160) && (Math.abs(r - g) < 30) && (g - b > 5);
    const isDarkDesk = (r < 75) && (g < 60) && (b < 50) && (r >= g) && (g >= b) && (i > pixels * 0.7);

    // Person features:
    const isRedBlazer = (r > 140) && (r > g * 2.1) && (r > b * 2.1);
    const isBlackShirtPants = (r < 45) && (g < 45) && (b < 45) && (i > pixels * 0.2);
    const isSkinFaceHands = (r > 120) && (g > 80) && (b > 65) && (r > g) && (g > b);
    const isHair = (r < 55) && (g < 55) && (b < 55) && (i < pixels * 0.4);

    const isPerson = isRedBlazer || isBlackShirtPants || isSkinFaceHands || isHair;

    if ((isBeigeWall || isDarkDesk) && !isPerson) {
      rgba[i * 4] = 0;
      rgba[i * 4 + 1] = 0;
      rgba[i * 4 + 2] = 0;
      rgba[i * 4 + 3] = 0; // Transparent
    } else {
      rgba[i * 4] = r;
      rgba[i * 4 + 1] = g;
      rgba[i * 4 + 2] = b;
      rgba[i * 4 + 3] = 255;
    }
  }

  const advocateTransparent = await sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
  .png()
  .toBuffer();

  const targetV2 = path.join(rootDir, 'public', 'hero-left-formal-v2.png');
  const targetFormal = path.join(rootDir, 'public', 'hero-left-formal.png');
  fs.writeFileSync(targetV2, advocateTransparent);
  fs.writeFileSync(targetFormal, advocateTransparent);
  console.log('Saved red blazer advocate PNG cutout to:', targetV2);
}

processRedBlazerAdvocate().catch(console.error);
