const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
const files = fs.readdirSync(publicDir);

console.log('Public directory image files:');
files.forEach(f => {
  if (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.webp')) {
    console.log(f);
  }
});
