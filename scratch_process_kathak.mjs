import sharp from 'sharp';

async function processKathakImage() {
  const inputPath = 'public/kathak-outdoor-performance.png';
  const outputPath = 'public/kathak-outdoor-darkbg.png';

  const metadata = await sharp(inputPath).metadata();
  const width = metadata.width || 800;
  const height = metadata.height || 1200;

  // Create an SVG radial gradient vignette that darkens the outer edges
  const svgVignette = Buffer.from(`
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="darkEdge" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0" />
          <stop offset="55%" stop-color="#0d0a08" stop-opacity="0.35" />
          <stop offset="85%" stop-color="#0d0a08" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#0d0a08" stop-opacity="0.98" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#darkEdge)" />
    </svg>
  `);

  await sharp(inputPath)
    .composite([{ input: svgVignette, top: 0, left: 0 }])
    .toFile(outputPath);

  console.log('Successfully created public/kathak-outdoor-darkbg.png');
}

processKathakImage().catch(console.error);
