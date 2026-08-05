const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

async function generateUncroppedHeroLeft() {
  const uploadedPath = path.join(brainDir, 'media__1785770615672.jpg');
  
  if (!fs.existsSync(uploadedPath)) {
    console.error('Uploaded file not found!');
    return;
  }

  // Load uploaded image metadata
  const meta = await sharp(uploadedPath).metadata();
  console.log('Original uploaded image:', meta.width, 'x', meta.height);

  // Target canvas 1200 x 1600
  const canvasWidth = 1200;
  const canvasHeight = 1600;

  // Resize uploaded image to fit comfortably within height 1500 (leaving 50px top/bottom padding)
  const portraitHeight = 1500;
  const portraitWidth = Math.round((meta.width / meta.height) * portraitHeight); // ~993px wide

  const resizedPortrait = await sharp(uploadedPath)
    .resize(portraitWidth, portraitHeight, { fit: 'inside' })
    .toBuffer();

  // Create SVG background extension with dark library wood gradient fading to #050504
  const svgBackground = Buffer.from(`
    <svg width="${canvasWidth}" height="${canvasHeight}">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3d2f25" />
          <stop offset="25%" stop-color="#4e3e32" />
          <stop offset="75%" stop-color="#4e3e32" />
          <stop offset="100%" stop-color="#050504" />
        </linearGradient>
        <linearGradient id="topFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#050504" stop-opacity="0.8" />
          <stop offset="12%" stop-color="#050504" stop-opacity="0" />
          <stop offset="88%" stop-color="#050504" stop-opacity="0" />
          <stop offset="100%" stop-color="#050504" stop-opacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGrad)" />
      <rect width="100%" height="100%" fill="url(#topFade)" />
    </svg>
  `);

  // Composite portrait centered onto the background
  const leftPos = Math.round((canvasWidth - portraitWidth) / 2);
  const topPos = Math.round((canvasHeight - portraitHeight) / 2);

  const finalImageBuffer = await sharp(svgBackground)
    .composite([{ input: resizedPortrait, top: topPos, left: leftPos }])
    .png({ quality: 95 })
    .toBuffer();

  // Save to public targets
  const targets = [
    path.join(rootDir, 'public', 'hero-left-formal.png'),
    path.join(rootDir, 'public', 'hero-left-original.png'),
    path.join(rootDir, 'public', 'advocate-library-portrait.png'),
    path.join(rootDir, 'public', 'hero-left-oxford.jpg'),
    path.join(rootDir, 'public', 'hero-left-formal-dark.png')
  ];

  for (const target of targets) {
    fs.writeFileSync(target, finalImageBuffer);
    console.log('Saved uncropped hero left to:', target);
  }
}

generateUncroppedHeroLeft().catch(console.error);
