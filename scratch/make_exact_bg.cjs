const sharp = require('sharp');
const path = require('path');

async function makeExactBg() {
  const width = 1920;
  const height = 900;

  // 1. Take raw Trent building photo (768 x 1024)
  // Scale it to cover height 900px (width will be 675px)
  // Or resize it with fit cover to 1200 x 900
  const photoScaled = await sharp('public/nottingham-trent-gauri-hero.jpg')
    .resize(1100, 900, { fit: 'cover', position: 'top' })
    .toBuffer();

  const photoMeta = await sharp(photoScaled).metadata();
  console.log('Photo scaled:', photoMeta.width, 'x', photoMeta.height);

  // Position photo on right side (x: 820)
  const baseCanvas = await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 18, g: 18, b: 18, alpha: 1 }
    }
  })
  .composite([{ input: photoScaled, left: 820, top: 0 }])
  .png()
  .toBuffer();

  // Multi-stop gradient: heavy dark left, fading smoothly right
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#121212" stop-opacity="1"/>
          <stop offset="35%" stop-color="#121212" stop-opacity="0.96"/>
          <stop offset="55%" stop-color="#121212" stop-opacity="0.75"/>
          <stop offset="75%" stop-color="#121212" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#121212" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#121212" stop-opacity="0.5"/>
          <stop offset="20%" stop-color="#121212" stop-opacity="0"/>
          <stop offset="80%" stop-color="#121212" stop-opacity="0"/>
          <stop offset="100%" stop-color="#121212" stop-opacity="0.7"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#v)"/>
    </svg>
  `);

  await sharp(baseCanvas)
    .composite([{ input: svgOverlay, left: 0, top: 0 }])
    .jpeg({ quality: 95 })
    .toFile('public/academics-hero-exact.jpg');

  console.log('Generated public/academics-hero-exact.jpg successfully');
}

makeExactBg().catch(console.error);
