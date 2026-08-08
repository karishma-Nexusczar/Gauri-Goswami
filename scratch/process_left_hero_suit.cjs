const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166553896.jpg';
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(mediaPath)) {
  console.error('Media file not found:', mediaPath);
  process.exit(1);
}

const targets = [
  path.join(publicDir, 'about-gauri-red-blazer.jpg'),
  path.join(publicDir, 'hero-left-formal.png'),
  path.join(publicDir, 'hero-left-original.png'),
  path.join(publicDir, 'hero-left-grey-suit.jpg'),
  path.join(publicDir, 'advocate-library-portrait.png')
];

targets.forEach(target => {
  fs.copyFileSync(mediaPath, target);
  console.log('Successfully updated target:', target);
});
