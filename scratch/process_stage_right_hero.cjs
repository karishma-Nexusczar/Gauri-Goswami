const fs = require('fs');
const path = require('path');

const mediaPath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\cef44b8f-bc3b-436e-948d-64bbad6f5dc0\\media__1786166790441.jpg';
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(mediaPath)) {
  console.error('Media path does not exist:', mediaPath);
  process.exit(1);
}

const targets = [
  path.join(publicDir, 'hero-right-kathak-v6.png'),
  path.join(publicDir, 'hero-right-original.png'),
  path.join(publicDir, 'hero-right-kathak.jpg'),
  path.join(publicDir, 'kathak-lawn-classical-pose.jpg'),
  path.join(publicDir, 'kathak-hero-standing-cutout.png')
];

targets.forEach(target => {
  fs.copyFileSync(mediaPath, target);
  console.log('Updated target:', target);
});
