const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processHeroLeftImage() {
  const rootDir = path.resolve(__dirname, '..');
  const inputPath = path.join(rootDir, 'public', 'hero-left-formal.png');
  const aiGeneratedPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11\\hero_left_dark_matched_1785770429271.png';
  
  // 1. Save AI Generated version to public directory
  if (fs.existsSync(aiGeneratedPath)) {
    const aiDest = path.join(rootDir, 'public', 'hero-left-ai-dark.png');
    fs.copyFileSync(aiGeneratedPath, aiDest);
    console.log('Copied AI generated image to hero-left-ai-dark.png');
  }

  // 2. High-quality enhancement of original advocate library portrait to match dark website background (#050504)
  const width = 1200;
  const height = 1600;

  // Resize input image to 1200x1600 covering the frame
  const resizedBuffer = await sharp(inputPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .modulate({
      brightness: 0.88,
      saturation: 0.95
    })
    .toBuffer();

  // Create an edge-vignette gradient SVG matching website dark background #050504
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}">
      <defs>
        <!-- Radial vignette from center out to dark background -->
        <radialGradient id="radialVignette" cx="48%" cy="45%" r="65%" fx="48%" fy="45%">
          <stop offset="0%" stop-color="#050504" stop-opacity="0" />
          <stop offset="55%" stop-color="#050504" stop-opacity="0.35" />
          <stop offset="85%" stop-color="#050504" stop-opacity="0.75" />
          <stop offset="100%" stop-color="#050504" stop-opacity="0.95" />
        </radialGradient>
        
        <!-- Right side edge blend to dark center seam of hero grid -->
        <linearGradient id="rightEdgeFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="65%" stop-color="#050504" stop-opacity="0" />
          <stop offset="100%" stop-color="#050504" stop-opacity="0.95" />
        </linearGradient>

        <!-- Top and Bottom fade -->
        <linearGradient id="topBottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#050504" stop-opacity="0.6" />
          <stop offset="15%" stop-color="#050504" stop-opacity="0" />
          <stop offset="85%" stop-color="#050504" stop-opacity="0" />
          <stop offset="100%" stop-color="#050504" stop-opacity="0.8" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#radialVignette)" />
      <rect width="100%" height="100%" fill="url(#rightEdgeFade)" />
      <rect width="100%" height="100%" fill="url(#topBottomFade)" />
    </svg>
  `);

  const outputPath = path.join(rootDir, 'public', 'hero-left-formal-dark.png');

  await sharp(resizedBuffer)
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .png({ quality: 95, compressionLevel: 6 })
    .toFile(outputPath);

  console.log('Successfully created hero-left-formal-dark.png at 1200x1600 high resolution!');

  // Also replace hero-left-original.png directly so all fallback styles use the new image
  const originalPath = path.join(rootDir, 'public', 'hero-left-original.png');
  fs.copyFileSync(outputPath, originalPath);
  console.log('Updated hero-left-original.png with matched dark background image.');
}

processHeroLeftImage().catch(console.error);
