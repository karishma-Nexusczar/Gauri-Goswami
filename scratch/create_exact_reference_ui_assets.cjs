const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// Real photo cutouts
const realAdvocateCutoutPath = path.join(brainDir, 'media__1785772583793.jpg');
const realKathakCutoutPath = path.join(brainDir, 'media__1785773244477.jpg');
const cleanKathakSource = path.join(brainDir, 'kathak_full_real_black_bg_1785773195529.png');

async function buildReferenceUIAssets() {
  console.log('Building exact reference UI assets for Left Advocate and Right Kathak panels...');

  // Canvas size
  const canvasWidth = 720;
  const canvasHeight = 1000;

  // 1. Create Left Advocate Panel with warm amber/bronze radial spotlight halo
  const leftBgSvg = `
  <svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="amberGlow" cx="45%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#b98a4d" stop-opacity="0.38"/>
        <stop offset="35%" stop-color="#4c331a" stop-opacity="0.28"/>
        <stop offset="70%" stop-color="#1a140f" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#090909" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <rect width="${canvasWidth}" height="${canvasHeight}" fill="#090909"/>
    <rect width="${canvasWidth}" height="${canvasHeight}" fill="url(#amberGlow)"/>
  </svg>`;

  const leftBgBuffer = await sharp(Buffer.from(leftBgSvg)).png().toBuffer();

  const advocateImg = await sharp(realAdvocateCutoutPath)
    .resize({ width: 660, height: 920, fit: 'inside' })
    .toBuffer();

  const advocateMeta = await sharp(advocateImg).metadata();

  const leftComposite = await sharp(leftBgBuffer)
    .composite([{
      input: advocateImg,
      top: canvasHeight - advocateMeta.height,
      left: Math.max(0, Math.floor((canvasWidth - advocateMeta.width) * 0.15))
    }])
    .png()
    .toBuffer();

  const leftTarget = path.join(rootDir, 'public', 'hero-left-formal.png');
  fs.writeFileSync(leftTarget, leftComposite);
  console.log('Saved left advocate composite to:', leftTarget);

  // 2. Create Right Kathak Panel with heritage temple carving texture and bronze spotlight halo
  const rightBgSvg = `
  <svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="templeGlow" cx="65%" cy="42%" r="58%">
        <stop offset="0%" stop-color="#b98a4d" stop-opacity="0.32"/>
        <stop offset="40%" stop-color="#3d2815" stop-opacity="0.3"/>
        <stop offset="75%" stop-color="#1a140f" stop-opacity="0.65"/>
        <stop offset="100%" stop-color="#090909" stop-opacity="1"/>
      </radialGradient>
      <pattern id="templePattern" width="120" height="120" patternUnits="userSpaceOnUse">
        <circle cx="60" cy="60" r="45" fill="none" stroke="#b98a4d" stroke-opacity="0.05" stroke-width="1.5"/>
        <circle cx="60" cy="60" r="25" fill="none" stroke="#b98a4d" stroke-opacity="0.03" stroke-width="1"/>
        <polygon points="60,20 70,50 100,60 70,70 60,100 50,70 20,60 50,50" fill="none" stroke="#b98a4d" stroke-opacity="0.04" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="${canvasWidth}" height="${canvasHeight}" fill="#090909"/>
    <rect width="${canvasWidth}" height="${canvasHeight}" fill="url(#templeGlow)"/>
    <rect width="${canvasWidth}" height="${canvasHeight}" fill="url(#templePattern)"/>
  </svg>`;

  const rightBgBuffer = await sharp(Buffer.from(rightBgSvg)).png().toBuffer();

  const kathakSourcePath = fs.existsSync(cleanKathakSource) ? cleanKathakSource : realKathakCutoutPath;
  const kathakImg = await sharp(kathakSourcePath)
    .resize({ width: 660, height: 860, fit: 'inside' })
    .toBuffer();

  const kathakMeta = await sharp(kathakImg).metadata();

  const rightComposite = await sharp(rightBgBuffer)
    .composite([{
      input: kathakImg,
      top: canvasHeight - kathakMeta.height,
      left: Math.max(0, canvasWidth - kathakMeta.width - 20)
    }])
    .png()
    .toBuffer();

  const rightTargetV4 = path.join(rootDir, 'public', 'hero-right-kathak-v4.png');
  const rightTargetV3 = path.join(rootDir, 'public', 'hero-right-kathak-v3.png');
  fs.writeFileSync(rightTargetV4, rightComposite);
  fs.writeFileSync(rightTargetV3, rightComposite);
  console.log('Saved right Kathak composite to:', rightTargetV4);
}

buildReferenceUIAssets().catch(console.error);
