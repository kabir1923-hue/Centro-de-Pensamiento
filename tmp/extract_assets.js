const fs = require('fs');
const path = require('path');
const https = require('https');

const files = ['/tmp/site.html', '/tmp/styles.css', '/tmp/routes.js', '/tmp/index.js'];
const assetUrls = new Set();
for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/\/__l5e\/assets-v1\/[a-zA-Z0-9_\-\.\/]+/g) || [];
  for (const m of matches) {
    assetUrls.add(m);
  }
}

console.log('Total assets found:', assetUrls.size);
for (const u of assetUrls) {
  console.log(u);
}
