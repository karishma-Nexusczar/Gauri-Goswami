const sharp = require('sharp');
const path = require('path');

function drawGoldSvgIcon(type) {
  let innerSvg = '';
  if (type === 'childhood') {
    // Child dancer icon
    innerSvg = `
      <circle cx="100" cy="50" r="26" fill="url(#goldGrad)" stroke="#B8954A" stroke-width="4" />
      <path d="M100 80 c-26 0-48 20-48 46 v26 h96 v-26 c0-26-22-46-48-46z" fill="url(#goldGrad)" stroke="#8A6B2A" stroke-width="5" />
      <path d="M56 108 L28 88 M144 108 L172 88" stroke="#FFE49E" stroke-width="8" stroke-linecap="round" />
      <circle cx="100" cy="24" r="8" fill="#FFF8E0" />
      <circle cx="28" cy="88" r="7" fill="#FFE49E" />
      <circle cx="172" cy="88" r="7" fill="#FFE49E" />
    `;
  } else if (type === 'training') {
    // Guru discipline & Kathak posture icon
    innerSvg = `
      <circle cx="100" cy="44" r="22" fill="url(#goldGrad)" stroke="#B8954A" stroke-width="4" />
      <path d="M100 70 v56" stroke="#FFE49E" stroke-width="10" stroke-linecap="round" />
      <path d="M50 94 l50 22 l50 -22" stroke="#E5C575" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M72 126 l-30 56 M128 126 l30 56" stroke="#D4AD62" stroke-width="9" stroke-linecap="round" />
      <circle cx="100" cy="182" r="12" fill="#FFE49E" />
    `;
  } else if (type === 'performances') {
    // Stage performance recital posture
    innerSvg = `
      <circle cx="100" cy="42" r="20" fill="url(#goldGrad)" stroke="#B8954A" stroke-width="4" />
      <path d="M100 64 v42" stroke="#FFE49E" stroke-width="9" stroke-linecap="round" />
      <path d="M44 78 c28 14 56 10 56 10 s28 4 56 -14" stroke="#E5C575" stroke-width="8" stroke-linecap="round" />
      <path d="M62 106 c-20 38-30 66-30 70 h136 c0-4-10-32-30-70z" fill="url(#goldGrad)" stroke="#8A6B2A" stroke-width="5" />
    `;
  } else if (type === 'representation') {
    // Global emblem / representation
    innerSvg = `
      <circle cx="100" cy="100" r="76" stroke="url(#goldGrad)" stroke-width="9" fill="rgba(196,154,82,0.2)" />
      <path d="M28 72 h144 M28 128 h144" stroke="#FFE49E" stroke-width="7" stroke-linecap="round" />
      <ellipse cx="100" cy="100" rx="36" ry="76" stroke="#FFE49E" stroke-width="7" fill="none" />
      <circle cx="100" cy="100" r="16" fill="url(#goldGrad)" stroke="#8A6B2A" stroke-width="4" />
    `;
  } else if (type === 'journey') {
    // Lotus / classical mudra flower icon
    innerSvg = `
      <path d="M100 176 c-42-24-68-56-68-96 c0-32 24-58 58-66 c10 18 24 30 42 38 c18-8 32-20 42-38 c34 8 58 34 58 66 c0 40-26 72-68 96z" fill="url(#goldGrad)" stroke="#8A6B2A" stroke-width="5" />
      <path d="M100 176 V84" stroke="#FFF8E0" stroke-width="7" stroke-linecap="round" />
      <path d="M100 84 c-22-20-36-42-36-64 c22 0 36 20 36 64z" fill="#FFE49E" />
      <path d="M100 84 c22-20 36-42 36-64 c-22 0-36 20-36 64z" fill="#FFE49E" />
    `;
  }

  return `
    <svg width="240" height="240" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF5D0" />
          <stop offset="40%" stop-color="#E5C575" />
          <stop offset="80%" stop-color="#B8954A" />
          <stop offset="100%" stop-color="#7A5A1A" />
        </linearGradient>
      </defs>
      ${innerSvg}
    </svg>
  `;
}

async function run() {
  const types = ['childhood', 'training', 'performances', 'representation', 'journey'];
  for (const t of types) {
    const svgStr = drawGoldSvgIcon(t);
    const dest = path.join(__dirname, '../public', `icon-${t}-gold.png`);
    await sharp(Buffer.from(svgStr)).png().toFile(dest);
    console.log('Saved:', dest);
  }
}

run().catch(console.error);
