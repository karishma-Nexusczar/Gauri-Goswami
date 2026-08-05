const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
const v5Path = path.join(publicDir, 'hero-right-kathak-v5.png');
const v6Path = path.join(publicDir, 'hero-right-kathak-v6.png');

if (fs.existsSync(v5Path)) {
  fs.copyFileSync(v5Path, v6Path);
  console.log('Copied hero-right-kathak-v5.png to hero-right-kathak-v6.png');
}
