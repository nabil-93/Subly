const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const correctDE = `{
    "welcome.title1": "Willkommen bei", "welcome.title2": "Subly",
    "welcome.subtitle": "Behalte deine Abonnements im Blick. Wie sollen wir dich nennen?",
    "welcome.placeholder": "Dein Name", "welcome.cta": "Loslegen →",
    "home.greeting": "Guten Tag", "home.subscriptions": "Abonnements",
    "home.activeCount": "Du hast {count} aktiv",
    "home.totalMonth": "Gesamt pro Monat", "home.perYear": "Pro Jahr",
    "home.upcoming": "Anstehend", "home.activeBadge": "{count} aktiv",
    "home.empty": "Noch keine Abos", "home.emptyHint": "um dein erstes hinzuzufügen.",
    "home.emptyTap": "Tippe auf",
    "card.today": "Heute", "card.overdue": "Überfällig", "card.nextPayment": "Nächste Zahlung",
    "calendar.expenses": "Ausgaben", "calendar.bookings": "{n} Buchungen",
    "calendar.today": "Heute", "calendar.total": "Gesamt",
    "insights.title": "Einblicke", "insights.subtitle": "Deine Ausgabenanalyse",
    "insights.monthlyExp": "Monatliche Ausgaben", "insights.activeBadge": "{n} AKTIV",
    "insights.perYear": "{amount} pro Jahr", "insights.trend": "6-Monats-Verlauf",
    "insights.catDist": "Kategorien-Verteilung", "insights.month": "Monat",
    "insights.allSubs": "Alle Abonnements", "insights.totalMonth": "Gesamt / Monat",
    "insights.percentSpending": "% der Ausgaben", "insights.all": "Alle",
    "insights.noData": "Füge Abos hinzu, um Statistiken zu sehen",
    "settings.title": "Einstellungen", "settings.notifications": "Benachrichtigungen",
    "settings.push": "Push-Benachrichtigungen", "settings.testPush": "Test-Benachrichtigung senden",
    "settings.send": "Senden", "settings.appearance": "Darstellung",
    "settings.currency": "Währung", "settings.language": "Sprache",
    "settings.data": "Daten", "settings.activeSubs": "Aktive Abonnements",
    "settings.resetSubs": "Abos auf Standard zurücksetzen", "settings.resetSubsConfirm": "Wirklich alle Abos zurücksetzen?",
    "settings.account": "Konto", "settings.resetApp": "App komplett zurücksetzen",
    "settings.resetAppConfirm": "Wirklich alles zurücksetzen?",
    "settings.cancel": "Abbrechen", "settings.yes": "Ja",
    "settings.editName": "Tippe ✏️ zum Bearbeiten", "settings.version": "Subly v1.0.0",
    "nav.home": "Home", "nav.calendar": "Kalender", "nav.insights": "Einblicke", "nav.settings": "Optionen",
    "add.title": "Abonnement hinzufügen", "add.editTitle": "Abo bearbeiten",
    "add.stepName": "Name & Icon", "add.stepCategory": "Kategorie", "add.stepPrice": "Preis",
    "add.stepDate": "Startdatum", "add.stepCycle": "Abrechnung", "add.stepPayment": "Zahlungsmethode",
    "add.namePlaceholder": "z.B. Netflix, Spotify…",
    "add.bankName": "Bankname", "add.bankNamePlaceholder": "z.B. N26, Sparkasse",
    "add.last4": "Letzte 4 Ziffern (optional)", "add.last4Placeholder": "1234",
    "add.back": "Zurück", "add.next": "Weiter →", "add.add": "Hinzufügen ✓",
    "add.save": "Speichern ✓", "add.customDays": "Alle wieviel Tage?", "add.days": "Tage",
    "add.startDate": "Startdatum:", "add.cycleMonatlich": "Monatlich",
    "add.cycleWoechentlich": "Wöchentlich", "add.cycleJaehrlich": "Jährlich", "add.cycleCustom": "Benutzerdefiniert",
    "add.namePreview": "Abo-Name",
    "edit.color": "Farbe", "edit.icon": "Icon", "edit.nextPayment": "Nächste Zahlung",
    "edit.name": "Name",
    "detail.nextDebit": "Nächste Abbuchung", "detail.almostDue": "⚠ Bald fällig",
    "detail.autoRenew": "Automatische Verlängerung",
    "detail.autoRenewActive": "Aktiv – wird automatisch verlängert", "detail.autoRenewOff": "Deaktiviert",
    "detail.yearly": "Jährlich", "detail.cycle": "Zyklus", "detail.payments": "Zahlungen",
    "detail.history": "Zahlungsverlauf", "detail.pending": "Ausstehend", "detail.paid": "Bezahlt",
    "detail.close": "Schließen", "detail.edit": "✏️ Bearbeiten", "detail.confirmDel": "Sicher?", "detail.yes": "Ja",
    "days.today": "Heute", "days.tomorrow": "Morgen", "days.before": "vor {n} Tagen", "days.in": "in {n} Tagen",
    "cycle.everyN": "alle {n} Tage"
  }`;

// Find the boundaries of the corrupted de: object
const startIndex = content.indexOf('de: {');
const endIndex = content.indexOf('en: {');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + 'de: ' + correctDE + ',\n  ' + content.substring(endIndex);
  fs.writeFileSync('index.html', content);
}

