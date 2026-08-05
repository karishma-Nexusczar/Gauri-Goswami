const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

async function createPreciseComposite() {
  const leftSource = path.join(brainDir, 'media__1785771253306.jpg');
  const rightSource = path.join(rootDir, 'public', 'hero-right-kathak.jpg');

  if (!fs.existsSync(leftSource) || !fs.existsSync(rightSource)) {
    console.error('Source files missing!');
    return;
  }

  const canvasWidth = 1914;
  const canvasHeight = 822;

  // 1. Resize Left Figure (Gauri in grey suit) to height 660px (~80% of canvas height)
  const leftMeta = await sharp(leftSource).metadata();
  const leftTargetHeight = 660;
  const leftTargetWidth = Math.round((leftMeta.width / leftMeta.height) * leftTargetHeight);

  const leftResized = await sharp(leftSource)
    .resize(leftTargetWidth, leftTargetHeight, { fit: 'inside' })
    .toBuffer();

  // 2. Resize Right Figure (Kathak dancer) to height 680px (~82% of canvas height)
  const rightMeta = await sharp(rightSource).metadata();
  const rightTargetHeight = 680;
  const rightTargetWidth = Math.round((rightMeta.width / rightMeta.height) * rightTargetHeight);

  const rightResized = await sharp(rightSource)
    .resize(rightTargetWidth, rightTargetHeight, { fit: 'inside' })
    .toBuffer();

  // 3. Create SVG Background with deep black base, warm golden halo behind text, and subtle dark vignette
  const bgSvg = Buffer.from(`
    <svg width="${canvasWidth}" height="${canvasHeight}">
      <defs>
        <!-- Dark luxury background -->
        <radialGradient id="centerGoldHalo" cx="50%" cy="45%" r="40%">
          <stop offset="0%" stop-color="#2a1f14" stop-opacity="0.95" />
          <stop offset="35%" stop-color="#1c140d" stop-opacity="0.85" />
          <stop offset="70%" stop-color="#090807" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#050504" stop-opacity="1" />
        </radialGradient>
        
        <radialGradient id="leftGlow" cx="20%" cy="50%" r="35%">
          <stop offset="0%" stop-color="#3d2f25" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#050504" stop-opacity="0" />
        </radialGradient>

        <radialGradient id="rightGlow" cx="80%" cy="50%" r="35%">
          <stop offset="0%" stop-color="#2e2216" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#050504" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="#050504" />
      <rect width="100%" height="100%" fill="url(#centerGoldHalo)" />
      <rect width="100%" height="100%" fill="url(#leftGlow)" />
      <rect width="100%" height="100%" fill="url(#rightGlow)" />
    </svg>
  `);

  // Left position: 60px from left edge, aligned near bottom
  const leftX = 60;
  const leftY = canvasHeight - leftTargetHeight - 20;

  // Right position: 60px from right edge, aligned near bottom
  const rightX = canvasWidth - rightTargetWidth - 60;
  const rightY = canvasHeight - rightTargetHeight - 20;

  const compositeBuffer = await sharp(bgSvg)
    .composite([
      { input: leftResized, top: leftY, left: leftX },
      { input: rightResized, top: rightY, left: rightX }
    ])
    .png({ quality: 95 })
    .toBuffer();

  const targets = [
    path.join(rootDir, 'public', 'hero-composite-barrister.png'),
    path.join(rootDir, 'public', 'hero-theme-final.png'),
    path.join(rootDir, 'public', 'hero-composite-final.png')
  ];

  for (const t of targets) {
    fs.writeFileSync(t, compositeBuffer);
    console.log('Saved precise uncropped composite to:', t);
  }
}

createPreciseComposite().catch(console.error);
