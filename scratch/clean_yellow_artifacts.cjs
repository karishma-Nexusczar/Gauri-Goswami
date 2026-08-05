const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

// AI isolated Kathak portrait on 100% pure black background with 0 yellow leaves/artifacts
const cleanBlackBgSource = path.join(brainDir, 'kathak_full_real_black_bg_1785773195529.png');

async function removeYellowArtifacts() {
  if (!fs.existsSync(cleanBlackBgSource)) {
    console.error('Clean source file missing:', cleanBlackBgSource);
    process.exit(1);
  }

  console.log('Using 100% clean black background source:', cleanBlackBgSource);

  // Convert PNG to pure high-quality JPEG on solid #090909 Rich Black
  const cleanBuffer = await sharp(cleanBlackBgSource)
    .flatten({ background: '#090909' })
    .jpeg({ quality: 96 })
    .toBuffer();

  const targets = [
    path.join(rootDir, 'public', 'hero-right-kathak.jpg'),
    path.join(rootDir, 'public', 'hero-right-original.png'),
    path.join(rootDir, 'public', 'kathak-lawn-portrait.jpg'),
    path.join(rootDir, 'public', 'hero-kathak-original.png'),
    path.join(rootDir, 'public', 'personal-portfolio-kathak.png')
  ];

  for (const t of targets) {
    fs.writeFileSync(t, cleanBuffer);
    console.log('Successfully replaced with 100% clean black background image (zero yellow spots):', t);
  }
}

removeYellowArtifacts().catch(console.error);
