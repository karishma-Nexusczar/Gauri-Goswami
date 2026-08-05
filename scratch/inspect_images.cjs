const fs = require('fs');
const code = fs.readFileSync('app/page.tsx', 'utf8');
const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('src=')) {
    console.log(i + 1, l.trim());
  }
});
