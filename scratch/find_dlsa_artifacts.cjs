const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11';
const files = fs.readdirSync(brainDir).filter(f => f.startsWith('media__'));

console.log('Media files count:', files.length);
const recentFiles = files.map(f => {
  const stat = fs.statSync(path.join(brainDir, f));
  return { file: f, time: stat.mtime.toISOString(), size: stat.size };
}).sort((a, b) => b.time.localeCompare(a.time)).slice(0, 10);

console.log('Recent 10 media files:');
console.log(JSON.stringify(recentFiles, null, 2));
