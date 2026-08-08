const sharp = require('sharp');
const path = require('path');

const targetPath = path.resolve(__dirname, '../public/hero-right-kathak-v6.png');

async function verify() {
  const { data, info } = await sharp(targetPath).raw().toBuffer({ resolveWithObject: true });
  console.log('Processed image info:', info.width, 'x', info.height, info.channels, 'channels');

  // Check top center pixel (should be background #050403)
  const topCenterIndex = (341 + 10 * 682) * info.channels;
  console.log('Top center RGB:', data[topCenterIndex], data[topCenterIndex+1], data[topCenterIndex+2]);

  // Check head center pixel (should be Gauri hair/headpiece)
  const headIndex = (341 + 200 * 682) * info.channels;
  console.log('Head RGB:', data[headIndex], data[headIndex+1], data[headIndex+2]);

  // Check saree center pixel
  const sareeIndex = (341 + 600 * 682) * info.channels;
  console.log('Saree RGB:', data[sareeIndex], data[sareeIndex+1], data[sareeIndex+2]);
}

verify().catch(console.error);
