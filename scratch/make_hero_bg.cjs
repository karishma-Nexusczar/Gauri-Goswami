const sharp = require('sharp');
const path = require('path');

async function makeFullBleedHero() {
  const width = 1920;
  const height = 850;

  // 1. Resize photo to fit full height of 850px without any cropping or zoom
  const photo = await sharp('public/nottingham-trent-gauri-hero.jpg')
    .resize({ height: 850, fit: 'contain' })
    .toBuffer();

  const photoMeta = await sharp(photo).metadata();
  console.log('Resized photo dimensions:', photoMeta.width, 'x', photoMeta.height);

  // Position photo on the right side of the 1920px canvas
  const photoX = Math.round(width - photoMeta.width - 50);

  // 2. Create base dark charcoal canvas (#171717)
  const baseCanvas = await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 23, g: 23, b: 23, alpha: 1 }
    }
  })
  .composite([{ input: photo, left: photoX, top: 0 }])
  .png()
  .toBuffer();

  // 3. Create smooth left-to-right dark gradient overlay
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vignette" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#171717" stop-opacity="0.98"/>
          <stop offset="45%" stop-color="#171717" stop-opacity="0.88"/>
          <stop offset="68%" stop-color="#171717" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#171717" stop-opacity="0.05"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#vignette)"/>
    </svg>
  `);

  await sharp(baseCanvas)
    .composite([{ input: svgOverlay, left: 0, top: 0 }])
    .jpeg({ quality: 95 })
    .toFile('public/academics-hero-fullbleed.jpg');

  console.log('Successfully generated public/academics-hero-fullbleed.jpg!');
}

makeFullBleedHero().catch(console.error);
