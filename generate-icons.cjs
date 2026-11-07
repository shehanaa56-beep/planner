// Script to generate PWA icons using canvas (Node.js with canvas package)
// Run: node generate-icons.js
// Or we use SVG-based icons directly

const fs = require('fs');
const path = require('path');

// Create icons directory
const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Generate SVG icon for each size
sizes.forEach(size => {
  const padding = Math.round(size * 0.15);
  const innerSize = size - padding * 2;
  const cx = size / 2;
  const cy = size / 2;
  const r = innerSize / 2;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6BA8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF4D8D;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="leaf" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#34D399;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- Background rounded rect -->
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="url(#bg)"/>
  <!-- White heart -->
  <text x="${cx}" y="${cy + size * 0.08}" 
        font-family="serif" font-size="${Math.round(size * 0.42)}" 
        fill="white" text-anchor="middle" dominant-baseline="middle">♥</text>
  <!-- Green leaf accent -->
  <ellipse cx="${cx + r * 0.55}" cy="${cy + r * 0.55}" 
           rx="${r * 0.28}" ry="${r * 0.14}" 
           fill="url(#leaf)" transform="rotate(-45 ${cx + r * 0.55} ${cy + r * 0.55})"/>
  <!-- F letter -->
  <text x="${cx - size * 0.01}" y="${cy + size * 0.075}" 
        font-family="Arial, sans-serif" font-weight="800" font-size="${Math.round(size * 0.38)}" 
        fill="white" fill-opacity="0.18" text-anchor="middle" dominant-baseline="middle">F</text>
</svg>`;

  fs.writeFileSync(path.join(iconsDir, `icon-${size}x${size}.svg`), svg);
  console.log(`Created icon-${size}x${size}.svg`);
});

console.log('All SVG icons created in public/icons/');
console.log('NOTE: For PNG icons, convert SVGs using an online tool like realfavicongenerator.net');
