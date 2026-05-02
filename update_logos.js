const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const smartLogoComponent = `
function SmartLogo({ name, defaultIcon, style }) {
  const [error, setError] = React.useState(false);
  const keyword = name ? name.toLowerCase().trim() : "";
  let src = null;
  for (const key of Object.keys(logoMap)) {
    if (keyword.includes(key)) { src = logoMap[key]; break; }
  }
  if (!src && keyword) {
    const cleanName = keyword.replace(/\\s+/g, '').replace(/[^a-z0-9-]/g, '');
    if (cleanName) { src = \`https://cdn.yoku.app/\${cleanName}.com\`; }
  }
  
  React.useEffect(() => { setError(false); }, [name]);

  if (!src || error) {
    return <span style={{ fontSize: style.fontSize || "inherit", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>{defaultIcon}</span>;
  }
  return <img src={src} style={style} onError={() => setError(true)} />;
}

function SmartBankLogo({ bankName, style }) {
  const [error, setError] = React.useState(false);
  const keyword = bankName ? bankName.toLowerCase().trim() : "";
  let src = null;
  for (const key of Object.keys(bankLogoMap)) {
    if (keyword.includes(key)) { src = bankLogoMap[key]; break; }
  }
  if (!src && keyword) {
    const cleanName = keyword.replace(/\\s+/g, '').replace(/[^a-z0-9-]/g, '');
    if (cleanName) { src = \`https://cdn.yoku.app/\${cleanName}.com\`; }
  }

  React.useEffect(() => { setError(false); }, [bankName]);

  if (!src || error) {
    return <span style={{ fontSize: style.fontSize || 12 }}>{getBankEmoji(bankName)}</span>;
  }
  return <img src={src} style={style} onError={() => setError(true)} />;
}

const INITIAL_SUBS = [];
`;

c = c.replace('const INITIAL_SUBS = [];', smartLogoComponent);

// Replace getSubLogo and getBankLogo usages
c = c.replace(/\{getSubLogo\(sub\.name\) \? <img src=\{getSubLogo\(sub\.name\)\} style=\{\{width: "100%", height: "100%", objectFit: "contain", borderRadius: 16\}\} \/> : sub\.icon\}/g,
              '<SmartLogo name={sub.name} defaultIcon={sub.icon} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 16}} />');

c = c.replace(/\{getBankLogo\(sub\.paymentMethod\.bankName\) \? \(\s*<img src=\{getBankLogo\(sub\.paymentMethod\.bankName\)\} style=\{\{ width: 14, height: 14, borderRadius: 2 \}\} \/>\s*\) : \(\s*<span style=\{\{ fontSize: 12 \}\}>\{getBankEmoji\(sub\.paymentMethod\.bankName\)\}<\/span>\s*\)\}/g,
              '<SmartBankLogo bankName={sub.paymentMethod.bankName} style={{ width: 14, height: 14, borderRadius: 2 }} />');

// AddScreen
c = c.replace(/\{getSubLogo\(form\.name\) \? <img src=\{getSubLogo\(form\.name\)\} style=\{\{width: "100%", height: "100%", objectFit: "contain", borderRadius: 16\}\} \/> : form\.icon\}/g,
              '<SmartLogo name={form.name} defaultIcon={form.icon} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 16}} />');

// SubDetailScreen Sub Logo
c = c.replace(/\{getSubLogo\(sub\.name\) \? <img src=\{getSubLogo\(sub\.name\)\} style=\{\{width: "100%", height: "100%", objectFit: "contain", borderRadius: 18\}\} \/> : sub\.icon\}/g,
              '<SmartLogo name={sub.name} defaultIcon={sub.icon} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 18}} />');

// SubDetailScreen Bank Logo
c = c.replace(/\{getBankLogo\(sub\.paymentMethod\.bankName\) \? \(\s*<img src=\{getBankLogo\(sub\.paymentMethod\.bankName\)\} style=\{\{ width: 18, height: 18, borderRadius: 4 \}\} \/>\s*\) : \(\s*<span style=\{\{ fontSize: 16 \}\}>\{getBankEmoji\(sub\.paymentMethod\.bankName\)\}<\/span>\s*\)\}/g,
              '<SmartBankLogo bankName={sub.paymentMethod.bankName} style={{ width: 18, height: 18, borderRadius: 4, fontSize: 16 }} />');

// Insights Screen
c = c.replace(/\{getSubLogo\(s\.name\) \? <img src=\{getSubLogo\(s\.name\)\} style=\{\{width: "100%", height: "100%", objectFit: "contain", borderRadius: 14\}\} \/> : s\.icon\}/g,
              '<SmartLogo name={s.name} defaultIcon={s.icon} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 14}} />');

// Calendar Screen
c = c.replace(/\{getSubLogo\(ev\.name\) \? <img src=\{getSubLogo\(ev\.name\)\} style=\{\{width: "100%", height: "100%", objectFit: "contain", borderRadius: 14\}\} \/> : ev\.icon\}/g,
              '<SmartLogo name={ev.name} defaultIcon={ev.icon} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 14}} />');


fs.writeFileSync('index.html', c);
