const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const compositeFile = path.join(brainDir, 'hero_theme_previous_composite_1785771873079.png');

async function inspectComposite() {
  if (fs.existsSync(compositeFile)) {
    const meta = await sharp(compositeFile).metadata();
    console.log('Composite file metadata:', meta);
  } else {
    console.log('Composite file not found');
  }
}

inspectComposite().catch(console.error);
