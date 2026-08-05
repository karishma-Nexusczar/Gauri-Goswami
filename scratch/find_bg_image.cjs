const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const files = fs.readdirSync(brainDir).filter(f => f.startsWith('media__'));

console.log('Found media files:');
files.forEach(f => {
  const stat = fs.statSync(path.join(brainDir, f));
  console.log(`${f} - ${stat.mtime.toISOString()} - ${stat.size} bytes`);
});
