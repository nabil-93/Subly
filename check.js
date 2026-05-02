const fs = require('fs');
const Babel = require('./babel.min.js');

const code = fs.readFileSync('index.html', 'utf8');
const scriptMatch = code.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.error("Could not find babel script block");
  process.exit(1);
}

try {
  Babel.transform(scriptMatch[1], { presets: ['react'] });
  console.log("OK");
} catch(e) {
  console.error(e.message);
}
