const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/title=t\(/g, 'title={t(');
c = c.replace(/label=t\(/g, 'label={t(');
c = c.replace(/t\("settings\.[^"]+"\)(>| )/g, function(match, p1) {
  // If it's a property value, it lacks closing brace because I only replaced the opening part
  // Actually, wait! The original replacement was:
  // content.replace(/"Benachrichtigungen"/g, 't("settings.notifications")');
  // It replaced the string WITH quotes!
  // So `title="Benachrichtigungen"` became `title=t("settings.notifications")`.
  // I replaced `title=t(` with `title={t(`.
  // But wait! It still lacks the closing `}`!
  // Let's just do a proper regex.
  return match;
});

// Better to just fix the specific cases:
c = c.replace(/title=t\("settings\.notifications"\)/g, 'title={t("settings.notifications")}');
c = c.replace(/label=t\("settings\.push"\)/g, 'label={t("settings.push")}');
c = c.replace(/label=t\("settings\.testPush"\)/g, 'label={t("settings.testPush")}');
c = c.replace(/title=t\("settings\.data"\)/g, 'title={t("settings.data")}');
c = c.replace(/title=t\("settings\.account"\)/g, 'title={t("settings.account")}');
c = c.replace(/label=t\("settings\.resetApp"\)/g, 'label={t("settings.resetApp")}');

// Also check if any other places were broken
// e.g. `<Section title="Darstellung">` -> this was completely replaced by `languageUi` so it's fine.

fs.writeFileSync('index.html', c);
