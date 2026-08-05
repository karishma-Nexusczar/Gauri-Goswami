import sharp from 'sharp';

const imgPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\3ac291bc-7ad1-4f65-a7c7-814d4201b965\\media__1785916966884.jpg';

const svgMask = Buffer.from(`<svg width="800" height="1066">
  <defs>
    <radialGradient id="grad" cx="50%" cy="38%" r="52%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="55%" stop-color="#000000" stop-opacity="0.35" />
      <stop offset="85%" stop-color="#0c0a08" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#0c0a08" stop-opacity="0.98" />
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
</svg>`);

sharp(imgPath)
  .resize(800, 1066, { fit: 'cover' })
  .composite([{ input: svgMask, top: 0, left: 0 }])
  .toFile('public/about-gauri-red-blazer-darkbg.png')
  .then(info => {
    console.log('Saved public/about-gauri-red-blazer-darkbg.png with dark black vignette', info);
  })
  .catch(err => console.error(err));
