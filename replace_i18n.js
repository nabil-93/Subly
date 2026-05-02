const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const TRANSLATIONS = {
  de: {
    "welcome.title1": "Willkommen bei", "welcome.title2": "Subly",
    "welcome.subtitle": "Behalte deine Abonnements im Blick. Wie sollen wir dich nennen?",
    "welcome.placeholder": "Dein Name", "welcome.cta": "Loslegen →",
    "home.greeting": "Guten Tag", "home.subscriptions": "Abonnements",
    "home.totalMonth": "Gesamt pro Monat", "home.perYear": "Pro Jahr",
    "home.upcoming": "Anstehend",
    "home.empty": "Noch keine Abos",
    "card.nextPayment": "Nächste Zahlung",
    "insights.title": "Einblicke", "insights.subtitle": "Deine Ausgabenanalyse",
    "insights.monthlyExp": "Monatliche Ausgaben",
    "insights.trend": "6-Monats-Verlauf",
    "insights.catDist": "Kategorien-Verteilung",
    "insights.allSubs": "Alle Abonnements",
    "settings.title": "Einstellungen", "settings.notifications": "Benachrichtigungen",
    "settings.push": "Push-Benachrichtigungen", "settings.testPush": "Test-Benachrichtigung senden",
    "settings.appearance": "Darstellung",
    "settings.currency": "Währung", "settings.language": "Sprache",
    "settings.data": "Daten", "settings.activeSubs": "Aktive Abonnements",
    "settings.account": "Konto", "settings.resetApp": "App komplett zurücksetzen",
    "settings.cancel": "Abbrechen", "settings.yes": "Ja",
    "add.title": "Abonnement hinzufügen", "add.editTitle": "Abo bearbeiten",
    "add.stepName": "Name & Icon", "add.stepCategory": "Kategorie", "add.stepPrice": "Preis",
    "add.stepDate": "Startdatum", "add.stepCycle": "Abrechnung", "add.stepPayment": "Zahlungsmethode",
    "add.bankName": "Bankname", "add.last4": "Letzte 4 Ziffern (optional)",
    "add.back": "Zurück", "add.next": "Weiter →",
    "add.startDate": "Startdatum:",
    "edit.color": "Farbe", "edit.icon": "Icon", "edit.nextPayment": "Nächste Zahlung",
    "edit.name": "Name",
    "detail.nextDebit": "Nächste Abbuchung", "detail.almostDue": "⚠ Bald fällig",
    "detail.autoRenew": "Automatische Verlängerung",
    "detail.yearly": "Jährlich", "detail.cycle": "Zyklus", "detail.payments": "Zahlungen",
    "detail.history": "Zahlungsverlauf", "detail.pending": "Ausstehend", "detail.paid": "Bezahlt",
    "detail.close": "Schließen"
  }
};

const map = TRANSLATIONS.de;

// Some specific safe replacements:
content = content.replace(/>Willkommen bei</g, '>{t("welcome.title1")}<');
content = content.replace(/<span style=\{\{ color:"#7C9A57" \}\}>Subly<\/span>/g, '<span style={{ color:"#7C9A57" }}>{t("welcome.title2")}</span>');
content = content.replace(/>Behalte deine Abonnements im Blick\. Wie sollen wir dich nennen\?</g, '>{t("welcome.subtitle")}<');
content = content.replace(/placeholder="Dein Name"/g, 'placeholder={t("welcome.placeholder")}');
content = content.replace(/Loslegen →/g, '{t("welcome.cta")}');

content = content.replace(/Guten Tag/g, '{t("home.greeting")}');
content = content.replace(/<div style=\{H\.title\}>Abonnements<\/div>/g, '<div style={H.title}>{t("home.subscriptions")}</div>');
content = content.replace(/Du hast \{subs\.length\} aktiv/g, '{t("home.activeCount").replace("{count}", subs.length)}');
content = content.replace(/>Gesamt pro Monat</g, '>{t("home.totalMonth")}<');
content = content.replace(/>Pro Jahr</g, '>{t("home.perYear")}<');
content = content.replace(/>Anstehend</g, '>{t("home.upcoming")}<');
content = content.replace(/\{subs\.length\} aktiv/g, '{t("home.activeBadge").replace("{count}", subs.length)}');
content = content.replace(/>Noch keine Abos</g, '>{t("home.empty")}<');
content = content.replace(/>Nächste Zahlung</g, '>{t("card.nextPayment")}<');

content = content.replace(/<div style=\{INS\.title\}>Einblicke<\/div>/g, '<div style={INS.title}>{t("insights.title")}</div>');
content = content.replace(/>Deine Ausgabenanalyse</g, '>{t("insights.subtitle")}<');
content = content.replace(/>Monatliche Ausgaben</g, '>{t("insights.monthlyExp")}<');
content = content.replace(/>6-Monats-Verlauf</g, '>{t("insights.trend")}<');
content = content.replace(/>Kategorien-Verteilung</g, '>{t("insights.catDist")}<');
content = content.replace(/>Alle Abonnements</g, '>{t("insights.allSubs")}<');

content = content.replace(/<div style=\{S\.title\}>Einstellungen<\/div>/g, '<div style={S.title}>{t("settings.title")}</div>');
content = content.replace(/"Benachrichtigungen"/g, 't("settings.notifications")');
content = content.replace(/"Push-Benachrichtigungen"/g, 't("settings.push")');
content = content.replace(/"Test-Benachrichtigung senden"/g, 't("settings.testPush")');
content = content.replace(/"Darstellung"/g, 't("settings.appearance")');
content = content.replace(/"Währung"/g, 't("settings.currency")');
content = content.replace(/"Sprache"/g, 't("settings.language")');
content = content.replace(/"Daten"/g, 't("settings.data")');
content = content.replace(/Aktive Abonnements/g, '{t("settings.activeSubs")}');
content = content.replace(/"Konto"/g, 't("settings.account")');
content = content.replace(/"App komplett zurücksetzen"/g, 't("settings.resetApp")');
content = content.replace(/>Abbrechen</g, '>{t("settings.cancel")}<');
content = content.replace(/>Ja</g, '>{t("settings.yes")}<');

content = content.replace(/>Abonnement hinzufügen</g, '>{t("add.title")}<');
content = content.replace(/>Abo bearbeiten</g, '>{t("add.editTitle")}<');
content = content.replace(/>Name & Icon</g, '>{t("add.stepName")}<');
content = content.replace(/>Kategorie</g, '>{t("add.stepCategory")}<');
content = content.replace(/>Preis</g, '>{t("add.stepPrice")}<');
content = content.replace(/>Startdatum</g, '>{t("add.stepDate")}<');
content = content.replace(/>Abrechnung</g, '>{t("add.stepCycle")}<');
content = content.replace(/>Zahlungsmethode</g, '>{t("add.stepPayment")}<');
content = content.replace(/>Bankname</g, '>{t("add.bankName")}<');
content = content.replace(/>Letzte 4 Ziffern \(optional\)</g, '>{t("add.last4")}<');
content = content.replace(/>Zurück</g, '>{t("add.back")}<');
content = content.replace(/>Weiter →</g, '>{t("add.next")}<');
content = content.replace(/>Startdatum:</g, '>{t("add.startDate")}<');

content = content.replace(/>Farbe</g, '>{t("edit.color")}<');
content = content.replace(/>Icon</g, '>{t("edit.icon")}<');
content = content.replace(/>Name</g, '>{t("edit.name")}<');

content = content.replace(/>Nächste Abbuchung</g, '>{t("detail.nextDebit")}<');
content = content.replace(/>⚠ Bald fällig</g, '>{t("detail.almostDue")}<');
content = content.replace(/>Automatische Verlängerung</g, '>{t("detail.autoRenew")}<');
content = content.replace(/>Jährlich</g, '>{t("detail.yearly")}<');
content = content.replace(/>Zyklus</g, '>{t("detail.cycle")}<');
content = content.replace(/>Zahlungen</g, '>{t("detail.payments")}<');
content = content.replace(/>Zahlungsverlauf</g, '>{t("detail.history")}<');
content = content.replace(/>Ausstehend</g, '>{t("detail.pending")}<');
content = content.replace(/>Bezahlt</g, '>{t("detail.paid")}<');
content = content.replace(/>Schließen</g, '>{t("detail.close")}<');

fs.writeFileSync('index.html', content);
