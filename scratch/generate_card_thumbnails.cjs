const sharp = require('sharp');
const path = require('path');

function drawCardThumbnailSvg(type) {
  let innerSvg = '';
  if (type === 'childhood') {
    // Child dancer in classical posture
    innerSvg = `
      <rect width="320" height="200" fill="#1C1612" />
      <circle cx="160" cy="80" r="35" fill="#EAD5AB" />
      <path d="M160 115 c-30 0-55 25-55 60 v25 h110 v-25 c0-35-25-60-55-60z" fill="#C49A52" />
      <path d="M110 135 L70 100 M210 135 L250 100" stroke="#FFEAA5" stroke-width="8" stroke-linecap="round" />
      <circle cx="70" cy="100" r="10" fill="#FFC857" />
      <circle cx="250" cy="100" r="10" fill="#FFC857" />
      <circle cx="160" cy="190" r="8" fill="#FFEAA5" />
    `;
  } else if (type === 'training') {
    // Ghungroo ankle bells close-up
    innerSvg = `
      <rect width="320" height="200" fill="#16120E" />
      <path d="M60 120 C 120 70, 200 70, 260 120" stroke="#8A6426" stroke-width="24" fill="none" stroke-linecap="round" />
      <path d="M60 120 C 120 70, 200 70, 260 120" stroke="#C49A52" stroke-width="18" fill="none" stroke-linecap="round" />
      <!-- Ghungroo bells -->
      ${[80, 110, 140, 160, 180, 210, 240].map(x => `<circle cx="${x}" cy="${95 + Math.sin(x/30)*15}" r="11" fill="#FFE082" stroke="#8A6426" stroke-width="3"/>`).join('')}
    `;
  } else if (type === 'workshop') {
    // Maestro Birju Maharaj teaching pose
    innerSvg = `
      <rect width="320" height="200" fill="#1E1712" />
      <circle cx="160" cy="75" r="32" fill="#F4DFBC" />
      <path d="M160 107 c-35 0-60 25-60 65 v28 h120 v-28 c0-40-25-65-60-65z" fill="#E8D2AA" />
      <path d="M100 130 l-40 -35 M220 130 l40 -35" stroke="#D4AD62" stroke-width="8" stroke-linecap="round" />
      <circle cx="60" cy="95" r="8" fill="#FFF0C0" />
      <circle cx="260" cy="95" r="8" fill="#FFF0C0" />
    `;
  } else if (type === 'visharad') {
    // Visharad Certificate Document
    innerSvg = `
      <rect width="320" height="200" fill="#241E18" />
      <rect x="50" y="25" width="220" height="150" fill="#F7EEDD" rx="6" stroke="#C49A52" stroke-width="4" />
      <rect x="62" y="37" width="196" height="126" fill="none" stroke="#B8954A" stroke-width="1.5" stroke-dasharray="4 2" />
      <circle cx="160" cy="65" r="16" fill="#C49A52" />
      <line x1="90" y1="95" x2="230" y2="95" stroke="#5A4836" stroke-width="4" stroke-linecap="round" />
      <line x1="105" y1="115" x2="215" y2="115" stroke="#8A745E" stroke-width="3" stroke-linecap="round" />
      <line x1="120" y1="130" x2="200" y2="130" stroke="#8A745E" stroke-width="3" stroke-linecap="round" />
      <circle cx="160" cy="148" r="8" fill="#B8954A" />
    `;
  } else if (type === 'recitals') {
    // Pure Kathak Recital Pose
    innerSvg = `
      <rect width="320" height="200" fill="#18110D" />
      <circle cx="160" cy="60" r="24" fill="#F4DFBC" />
      <path d="M160 84 v40" stroke="#D4AD62" stroke-width="8" stroke-linecap="round" />
      <path d="M110 100 c25 12 50 8 50 8 s25 4 50 -12" stroke="#FFE082" stroke-width="7" stroke-linecap="round" />
      <path d="M120 124 c-20 35-30 60-30 66 h140 c0-6-10-31-30-66z" fill="#B8954A" stroke="#8A6426" stroke-width="4" />
    `;
  } else if (type === 'representation') {
    // Group Kathak performance on stage
    innerSvg = `
      <rect width="320" height="200" fill="#150F0B" />
      ${[90, 160, 230].map(x => `
        <circle cx="${x}" cy="70" r="20" fill="#F4DFBC" />
        <path d="${x} 90 v30" stroke="#D4AD62" stroke-width="6" stroke-linecap="round" />
        <path d="${x-30} 120 c15 25 30 50 30 55 h30 c0-5 15-30 30-55z" fill="${x === 160 ? '#C49A52' : '#8A6426'}" />
      `).join('')}
    `;
  }

  return `
    <svg width="640" height="400" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      ${innerSvg}
    </svg>
  `;
}

async function run() {
  const types = ['childhood', 'training', 'workshop', 'visharad', 'recitals', 'representation'];
  for (const t of types) {
    const svgStr = drawCardThumbnailSvg(t);
    const dest = path.join(__dirname, '../public', `card-${t}.jpg`);
    await sharp(Buffer.from(svgStr)).jpeg({ quality: 90 }).toFile(dest);
    console.log('Created thumbnail:', dest);
  }
}

run().catch(console.error);
