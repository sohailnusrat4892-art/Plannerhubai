const fs = require('fs');
let c = fs.readFileSync('d:\\plannerhub\\version_0.tsx', 'utf8');
if (c.startsWith('"') && c.endsWith('"')) {
  try {
    c = JSON.parse(c);
  } catch(e) {}
}
fs.writeFileSync('d:\\plannerhub\\app\\fitness\\page.tsx', c);
console.log('Done');
