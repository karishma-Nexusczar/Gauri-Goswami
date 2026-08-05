const sharp = require('sharp');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const imgPath = path.join(rootDir, 'public', 'hero-left-formal.png');

async function checkColors() {
  const meta = await sharp(imgPath).metadata();
  console.log('Image dimensions:', meta.width, 'x', meta.height);

  // Sample top left, top right, bottom left, bottom right
  const topLeft = await sharp(imgPath).extract({ left: 0, top: 0, width: 20, height: 20 }).stats();
  const topRight = await sharp(imgPath).extract({ left: meta.width - 20, top: 0, width: 20, height: 20 }).stats();
  const bottomLeft = await sharp(imgPath).extract({ left: 0, top: meta.height - 20, width: 20, height: 20 }).stats();
  const bottomRight = await sharp(imgPath).extract({ left: meta.width - 20, top: meta.height - 20, width: 20, height: 20 }).stats();

  console.log('Top Left RGB:', Math.round(topLeft.channels[0].mean), Math.round(topLeft.channels[1].mean), Math.round(topLeft.channels[2].mean));
  console.log('Top Right RGB:', Math.round(topRight.channels[0].mean), Math.round(topRight.channels[1].mean), Math.round(topRight.channels[2].mean));
  console.log('Bottom Left RGB:', Math.round(bottomLeft.channels[0].mean), Math.round(bottomLeft.channels[1].mean), Math.round(bottomLeft.channels[2].mean));
  console.log('Bottom Right RGB:', Math.round(bottomRight.channels[0].mean), Math.round(bottomRight.channels[1].mean), Math.round(bottomRight.channels[2].mean));
}

checkColors();
