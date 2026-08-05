const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const generatedComposite = path.join(brainDir, 'hero_theme_previous_composite_1785771873079.png');

async function applyPreviousTheme() {
  if (fs.existsSync(generatedComposite)) {
    const targets = [
      path.join(rootDir, 'public', 'hero-composite-barrister.png'),
      path.join(rootDir, 'public', 'hero-theme-final.png'),
      path.join(rootDir, 'public', 'hero-composite-final.png')
    ];

    for (const target of targets) {
      fs.copyFileSync(generatedComposite, target);
      console.log('Saved previous theme composite to:', target);
    }
  } else {
    console.error('Generated composite image not found!');
  }
}

applyPreviousTheme().catch(console.error);
