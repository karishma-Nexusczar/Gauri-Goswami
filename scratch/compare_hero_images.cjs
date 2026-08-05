const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

async function compareHeroImages() {
  const formalBuf = fs.readFileSync(path.join(rootDir, 'public', 'hero-left-formal.png'));
  const advocateBuf = fs.readFileSync(path.join(rootDir, 'public', 'advocate-library-portrait.png'));
  const oxfordBuf = fs.readFileSync(path.join(rootDir, 'public', 'hero-left-oxford.jpg'));
  
  console.log('hero-left-formal.png size:', formalBuf.length);
  console.log('advocate-library-portrait.png size:', advocateBuf.length);
  console.log('hero-left-oxford.jpg size:', oxfordBuf.length);
  console.log('formal === advocate:', formalBuf.equals(advocateBuf));
  console.log('formal === oxford:', formalBuf.equals(oxfordBuf));
}

compareHeroImages();
