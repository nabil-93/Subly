const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/title=\{t\("settings\.notifications"\)>?/g, 'title={t("settings.notifications")}>');
c = c.replace(/label=\{t\("settings\.push"\) right/g, 'label={t("settings.push")} right');
c = c.replace(/label=\{t\("settings\.testPush"\) right/g, 'label={t("settings.testPush")} right');
c = c.replace(/title=\{t\("settings\.data"\)>?/g, 'title={t("settings.data")}>');
c = c.replace(/title=\{t\("settings\.account"\)>?/g, 'title={t("settings.account")}>');
c = c.replace(/label=\{t\("settings\.resetApp"\) right/g, 'label={t("settings.resetApp")} right');

fs.writeFileSync('index.html', c);
