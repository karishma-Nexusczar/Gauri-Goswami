const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';

const ghcSource = path.join(brainDir, 'media__1785784411796.png');
const ghcTarget = path.join(rootDir, 'public', 'gauhati-high-court-emblem.png');

fs.copyFileSync(ghcSource, ghcTarget);
console.log('Saved Gauhati High Court emblem to:', ghcTarget);
