const fs = require('fs');
const path = require('path');

const dirsToSearch = [
  'C:\\Users\\Dell\\.gemini\\antigravity-ide',
  'C:\\Users\\Dell\\AppData\\Local\\Temp',
  'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9cab186d-52ab-41ef-a515-2e2b177b2f11'
];

const now = Date.now();
const twoHours = 2 * 60 * 60 * 1000;

function searchFiles(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!entry.name.startsWith('node_modules') && !entry.name.startsWith('.git')) {
          searchFiles(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
          const stat = fs.statSync(fullPath);
          if (now - stat.mtimeMs < twoHours) {
            console.log(`FOUND IMAGE: ${fullPath} (${stat.size} bytes, modified ${new Date(stat.mtimeMs).toISOString()})`);
          }
        }
      }
    }
  } catch (e) {
    // ignore permission errors
  }
}

console.log('Searching for recent images...');
dirsToSearch.forEach(searchFiles);
