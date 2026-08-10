const fs = require('fs');
const path = require('path');

const brainDir = `C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\8e068e54-6965-4682-bdfe-1219f5812b04`;
const tempMediaDir = path.join(brainDir, '.tempmediaStorage');

console.log('Checking tempMediaDir:', tempMediaDir);

let latestFile = null;
let latestMtime = 0;

if (fs.existsSync(tempMediaDir)) {
  const files = fs.readdirSync(tempMediaDir);
  for (const f of files) {
    const fullPath = path.join(tempMediaDir, f);
    const stat = fs.statSync(fullPath);
    if (stat.mtimeMs > latestMtime) {
      latestMtime = stat.mtimeMs;
      latestFile = fullPath;
    }
  }
}

// Also check brainDir directly for media files
if (fs.existsSync(brainDir)) {
  const files = fs.readdirSync(brainDir);
  for (const f of files) {
    if (f.startsWith('media_')) {
      const fullPath = path.join(brainDir, f);
      const stat = fs.statSync(fullPath);
      if (stat.mtimeMs > latestMtime) {
        latestMtime = stat.mtimeMs;
        latestFile = fullPath;
      }
    }
  }
}

console.log('Latest media file found:', latestFile);

if (latestFile) {
  const targetPath = path.join(__dirname, '../public/artistic-journey-stage-left.jpg');
  fs.copyFileSync(latestFile, targetPath);
  console.log('Copied latest image to:', targetPath);
}
