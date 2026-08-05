const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const emblemSource = path.join(brainDir, 'media__1785783906783.png');
const targetPath = path.join(rootDir, 'public', 'sp-roy-emblem.png');

fs.copyFileSync(emblemSource, targetPath);
console.log('Saved Ashoka emblem to:', targetPath);
