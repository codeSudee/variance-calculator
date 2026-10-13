import type { Dictionary } from "./en";

const de: Dictionary = {
  // ── Meta / SEO ────────────────────────────────────────────────
  "meta.title": "Varianz Rechner — Stichproben- & Populationsvarianz online",
  "meta.description":
    "Kostenloser Varianzrechner online für Stichprobenvarianz und Populationsvarianz. Fügen Sie einen beliebigen Datensatz ein und erhalten Sie Varianz, Standardabweichung, Mittelwert, Anzahl und Quadratsumme — mit jedem Schritt an Ihren echten Zahlen gezeigt.",
  "meta.ogImageAlt": "VarianceCalc — kostenloser Varianz Rechner online",
  "meta.appName": "Varianz Rechner",
  "meta.appDescription":
    "Kostenloser Varianzrechner online für Stichprobenvarianz und Populationsvarianz, mit Standardabweichung, Mittelwert, Anzahl, Quadratsumme und Schritt-für-Schritt-Rechnung an Ihren eigenen Daten.",

  // ── Chrome: skip link, header, footer, theme, language ────────
  "skip.calculator": "Zum Rechner springen",
  "skip.main": "Zum Hauptinhalt springen",
  "nav.home": "VarianceCalc Startseite",
  "nav.primary": "Hauptnavigation",
  "nav.guide": "Anleitung",
  "nav.faq": "FAQ",
  "nav.about": "Über uns",
  "nav.contact": "Kontakt",
  "nav.quickLinks": "Schnellzugriff",
  "nav.privacy": "Datenschutzerklärung",
  "nav.terms": "AGB",
  "footer.label": "Fußzeile",
  "footer.about": "Über uns",
  "footer.contact": "Kontakt",
  "footer.privacy": "Datenschutzerklärung",
  "footer.terms": "Allgemeine Geschäftsbedingungen",
  "footer.note": "Es verlassen keine Daten Ihr Gerät, es sei denn, Sie entscheiden sich, einen Link zu teilen.",
  "lang.label": "Sprache",
  "theme.toDark": "In den Dunkelmodus wechseln",
  "theme.toLight": "In den Hellmodus wechseln",
  "theme.title": "Dunkelmodus umschalten",

  // ── Hero ──────────────────────────────────────────────────────
  "hero.title": "Varianz, Schritt für Schritt berechnet",
  "hero.subtitle":
    "Fügen Sie einen beliebigen Datensatz ein — auch unordentliche Tabellenspalten. Erhalten Sie Stichproben- oder Populationsvarianz, Standardabweichung und den Mittelwert, mit jedem Schritt an Ihren echten Zahlen gezeigt.",

  // ── Guide ─────────────────────────────────────────────────────
  "guide.title": "Stichprobe oder Grundgesamtheit? Die Entscheidung, die viele stolpern lässt",
  "guide.intro":
    "Beide messen, wie stark Ihre Zahlen streuen. Der einzige Unterschied liegt darin, wodurch Sie teilen — und die falsche Wahl ist der häufigste Fehler bei der Varianz. So entscheiden Sie mit einem Blick.",
  "guide.sample.title": "Stichprobenvarianz",
  "guide.sample.body":
    "Ihre Daten sind eine <b>Teilmenge</b> einer größeren Gruppe, die Sie verstehen möchten. Teilt durch <code>n − 1</code>, damit die tatsächliche Streuung nicht unterschätzt wird.",
  "guide.sample.examples":
    "Umfragen, Experimente, eine Reihe von Messwerten, Testergebnisse einiger Schüler — <em>verwenden Sie dies, wann immer Ihre Zahlen eine Stichprobe aus einer größeren Grundgesamtheit sind, über die Sie Schlüsse ziehen möchten.</em>",
  "guide.population.title": "Populationsvarianz",
  "guide.population.body":
    "Ihre Daten sind die <b>gesamte Gruppe</b>, ohne dass etwas fehlt. Teilt durch <code>n</code> — die exakte Streuung dieser vollständigen Menge.",
  "guide.population.examples":
    "Jeder Mitarbeiter eines Unternehmens, alle Spiele einer Saison, eine vollständige Volkszählung — Fälle, in denen es keine größere Gruppe gibt, auf die man schließen könnte.",
  "guide.note":
    "Dieselben Daten, beide Wege: Die Stichprobenvarianz ist stets etwas größer als die Populationsvarianz, denn das Teilen durch die kleinere Zahl (<code>n − 1</code>) macht das Ergebnis größer. Dieser Unterschied schrumpft, je größer Ihr Datensatz wird.",

  // ── FAQ ───────────────────────────────────────────────────────
  "faq.title": "Fragen, beantwortet",
  "faq.1.q": "Soll ich Stichproben- oder Populationsvarianz verwenden?",
  "faq.1.a":
    "Verwenden Sie die Stichprobenvarianz (÷ n − 1), wenn Ihre Zahlen eine Stichprobe aus einer größeren Gruppe sind, über die Sie etwas erfahren möchten — Umfrageantworten, eine Reihe von Messungen, Testergebnisse einiger Schüler. Verwenden Sie die Populationsvarianz (÷ n) nur, wenn Ihre Zahlen die gesamte Gruppe sind, ohne dass etwas fehlt. Im Zweifel ist die Stichprobe die sicherere Voreinstellung; die Wahl der Population bei Stichprobendaten unterschätzt die tatsächliche Streuung leicht.",
  "faq.2.q": "Warum teilt die Stichprobenvarianz durch n − 1 statt durch n?",
  "faq.2.a":
    "Das nennt man die Bessel-Korrektur. Da der Mittelwert aus derselben Stichprobe geschätzt wird, würde das Teilen durch n die wahre Streuung systematisch unterschätzen. Das Teilen durch n − 1 (die Freiheitsgrade) korrigiert diese Verzerrung und liefert eine erwartungstreue Schätzung der Populationsvarianz.",
  "faq.3.q": "Was ist der Unterschied zwischen Varianz und Standardabweichung?",
  "faq.3.a":
    "Die Standardabweichung ist einfach die Quadratwurzel der Varianz. Die Varianz wird in quadrierten Einheiten angegeben (Euro², cm²), was schwer vorstellbar ist; die Standardabweichung ist wieder in den ursprünglichen Einheiten und daher leichter zu deuten. Wir zeigen beide.",
  "faq.4.q": "Wie soll ich meine Daten formatieren?",
  "faq.4.a":
    "So, wie Sie sie haben. Fügen Sie sie direkt aus einer Tabelle, einem Dokument ein oder tippen Sie sie von Hand — Werte können durch Kommas, Leerzeichen, Tabulatoren oder Zeilenumbrüche getrennt sein. Beachten Sie: Das Komma gilt immer als Trennzeichen, daher wird <code>91,100</code> als zwei Werte (91 und 100) gelesen; verwenden Sie für Dezimalzahlen einen Punkt (z. B. 2.5). Negative Zahlen funktionieren, und versehentliche Währungs- oder Prozentzeichen werden automatisch ignoriert.",
  "faq.5.q": "Warum ist die Stichprobenvarianz für einen einzelnen Wert undefiniert?",
  "faq.5.a":
    "Die Stichprobenvarianz teilt durch n − 1. Bei einem einzigen Datenpunkt ist dieser Nenner 0, und durch null zu teilen ist undefiniert. Fügen Sie einen weiteren Wert hinzu oder wechseln Sie zur Populationsvarianz — die durch n teilt und für einen einzelnen Punkt 0 ist.",
  "faq.6.q": "Werden meine Daten irgendwohin gesendet?",
  "faq.6.a":
    "Nein. Jede Berechnung läuft vollständig in Ihrem Browser — nichts, was Sie eingeben, wird hochgeladen, protokolliert oder gespeichert. Ihr Datensatz wird nur dann in eine URL geschrieben, wenn Sie ausdrücklich auf „Link kopieren“ klicken, um ihn zu teilen; das Eingeben oder Einfügen von Daten ändert die Adressleiste niemals von selbst.",
  "faq.7.q": "Was ist der Unterschied zwischen Stichproben- und Populationsvarianz?",
  "faq.7.a":
    "Der Unterschied liegt darin, wodurch Sie die Summe der quadrierten Abweichungen teilen. Die Stichprobenvarianz teilt durch n − 1 und wird verwendet, wenn Ihre Daten eine Teilmenge einer größeren Gruppe sind, über die Sie Schlüsse ziehen möchten. Die Populationsvarianz teilt durch n und wird nur verwendet, wenn Ihre Daten die gesamte Gruppe sind, ohne dass etwas fehlt. Die Stichprobenvarianz ist bei denselben Zahlen stets etwas größer, da das Teilen durch eine kleinere Zahl ein größeres Ergebnis liefert — dieser Unterschied wird kleiner, je größer der Datensatz wird.",
  "faq.8.q": "Warum erhalte ich bei nur einem Datenpunkt einen Fehler?",
  "faq.8.a":
    "Die Stichprobenvarianz teilt durch n − 1, und bei einem einzigen Wert wird dieser Nenner 0 — die Division durch null ist mathematisch undefiniert, es gibt also kein gültiges Ergebnis. Dieser Rechner erklärt das, anstatt NaN zurückzugeben. Wenn Sie ein Ergebnis für einen einzelnen Datenpunkt benötigen, wechseln Sie zur Populationsvarianz, die durch n teilt und korrekt 0 zurückgibt, da ein einzelner Wert keine Streuung von sich selbst hat.",
  "faq.9.q": "Welches Symbol steht für die Varianz?",
  "faq.9.a":
    "Die Populationsvarianz wird als σ² (kleines Sigma zum Quadrat) geschrieben, und die Stichprobenvarianz wird als s² geschrieben. Beide werden als „Varianz“ gelesen — das Quadratsymbol erinnert daran, dass die Varianz in quadrierten Einheiten der ursprünglichen Daten gemessen wird (zum Beispiel Euro² oder cm²), weshalb die Standardabweichung, ihre Quadratwurzel, oft daneben zur leichteren Deutung verwendet wird.",
  "faq.10.q": "Zeigt dieser Rechner die Schritte zur Berechnung der Varianz?",
  "faq.10.a":
    "Ja. Jedes Ergebnis enthält die vollständige ausgearbeitete Lösung mit Ihren tatsächlichen Zahlen — den Mittelwert, die Abweichung jedes Werts vom Mittelwert, die quadrierten Abweichungen, deren Summe und die abschließende Division durch n oder n − 1. Ein Abweichungs-Zahlenstrahl veranschaulicht zudem, wie weit jeder Wert vom Mittelwert entfernt liegt, sodass Sie die Antwort überprüfen und nachvollziehen können, wie sie zustande kam, statt nur eine Endzahl zu sehen.",
  "faq.11.q": "Kann ich die Varianz aus gruppierten Daten oder Häufigkeitsdaten berechnen?",
  "faq.11.a":
    "Nicht direkt — dieser Rechner erwartet eine Liste einzelner Rohwerte, keine Häufigkeitstabelle mit Wert/Anzahl-Paaren. Um ihn mit gruppierten Daten zu verwenden, entfalten Sie jeden Wert vor dem Einfügen nach seiner Häufigkeit (zum Beispiel wird ein Wert 5, der dreimal vorkommt, zu 5, 5, 5 in der Eingabe). Bei großen Häufigkeitstabellen wird das unpraktisch, da die gruppierte Varianz üblicherweise aus Klassenmitten und Häufigkeiten mit einer eigenen Formel berechnet wird und nicht aus Rohwerten.",

  // ── SEO long-form ─────────────────────────────────────────────
  "seo.title": "Über diesen Varianz Rechner",
  "seo.p1":
    "VarianceCalc ist ein kostenloser <b>Varianzrechner online</b>, gebaut für alle, die eine schnelle, genaue Antwort brauchen, ohne mit einer Tabellenformel oder dem Handbuchmodus eines wissenschaftlichen Taschenrechners zu ringen. Fügen Sie eine Liste von Zahlen ein — direkt aus Excel, Google Sheets, einem PDF-Bericht kopiert oder von Hand getippt — und das Tool liefert sofort Varianz, Standardabweichung, Mittelwert, Anzahl und Quadratsumme, wobei die zugrunde liegende Mathematik Schritt für Schritt mit Ihren eigenen Zahlen gezeigt wird. Es gibt keine Anmeldung, keine Installation, und keine Daten verlassen jemals Ihren Browser: Jede Berechnung läuft clientseitig, sodass die Nutzung mit sensiblen oder vertraulichen Zahlen sicher ist.",
  "seo.p2":
    "Was diesen <b>Varianz Rechner</b> von einem generischen Statistik-Widget abhebt, ist, dass er die Entscheidung zwischen Stichprobe und Grundgesamtheit als vollwertiges Merkmal behandelt und nicht als Nebensache. Legen Sie den Schalter um, um ihn als <b>Stichprobenvarianz</b>-Rechner zu nutzen, der durch <code>n − 1</code> (Bessel-Korrektur) für Datensätze teilt, die eine Teilmenge einer größeren Gruppe darstellen, über die Sie Schlüsse ziehen möchten — denken Sie an Umfrageantworten, eine Reihe von Labormessungen oder Noten einer Klasse, von der Sie verallgemeinern möchten. Oder schalten Sie ihn in einen <b>Populationsvarianz</b>-Rechner um, der durch <code>n</code> teilt, wenn Ihre Zahlen die vollständige Menge ohne Auslassung sind, wie jeder Mitarbeiter eines Unternehmens oder jedes Spiel einer abgeschlossenen Saison. Die Wahl des falschen Modus ist der mit Abstand häufigste Fehler bei der Varianz, daher blendet der Rechner eine verständliche Hilfestellung direkt neben dem Schalter ein, statt Sie raten zu lassen.",
  "seo.p3":
    "Unter der Haube ist der Parser darauf ausgelegt, reale, unordentliche Eingaben zu überstehen, statt der sauberen, kommagetrennten Listen, die die meisten Lehrbuch-Tools erwarten. Werte können durch Kommas, Leerzeichen, Tabulatoren, Semikolons oder Zeilenumbrüche in beliebiger Kombination getrennt sein, und der Rechner verarbeitet Dezimalzahlen, negative Zahlen und die wissenschaftliche Schreibweise korrekt. Da Kommas immer als Trennzeichen behandelt werden, wird eine eingefügte Zahl wie <code>91,100</code> als zwei Werte gelesen — 91 und 100 — und niemals stillschweigend zu einundneunzigtausendeinhundert zusammengeführt, ein subtiler Fehler, über den einfachere Tools stolpern. Versehentliche Währungssymbole (<code>$</code>) und Prozentzeichen (<code>%</code>) werden automatisch entfernt, und jedes Token, das sich weiterhin nicht als Zahl lesen lässt, wird klar gemeldet, statt ohne Erklärung verworfen zu werden.",
  "seo.p4":
    "Über die reine Endzahl hinaus ist dieser Varianz Rechner darauf ausgelegt, ebenso zu lehren wie zu rechnen. Jedes Ergebnis kommt mit der vollständigen Formel, ausgearbeitet mit Ihren tatsächlichen Daten — den Abweichungen vom Mittelwert, den quadrierten Abweichungen und der abschließenden Division — sodass Sie genau nachvollziehen können, wie die Antwort zustande kam, und sie gegen Ihre eigene Rechnung prüfen können. Ein Abweichungs-Zahlenstrahl veranschaulicht, wie weit jeder einzelne Wert vom Mittelwert entfernt liegt, was das Konzept der „Streuung“ konkret statt abstrakt macht — besonders nützlich für Studierende, die Varianz und Standardabweichung zum ersten Mal lernen. Auch Randfälle werden elegant behandelt: Eine Stichprobe mit einem einzigen Wert gibt eine klare Erklärung zurück statt eines verwirrenden <code>NaN</code>, und leere oder nicht-numerische Eingaben erzeugen eine hilfreiche Meldung statt eines stillen Fehlers.",
  "seo.p5":
    "Das gesamte Erlebnis ist darauf ausgelegt, Ihnen nicht im Weg zu stehen — keine erzwungene Kontoerstellung, und Ihre Daten verlassen niemals Ihren Browser. Wenn Sie ein bestimmtes Ergebnis teilen möchten, kodiert eine ausdrückliche Aktion „Link kopieren“ Ihren Datensatz und Modus in die URL; allein durch Tippen oder Einfügen wird nichts in die Adressleiste geschrieben. Ob Sie Studierender sind, der Hausaufgaben prüft, Forscher, der eine schnelle Plausibilitätskontrolle macht, oder Analyst, der einfach Varianz und Standardabweichung braucht, ohne ein vollständiges Statistikpaket zu öffnen — dieser Rechner ist gebaut, um Ihnen in Sekunden eine vertrauenswürdige, erklärte Antwort zu liefern.",

  // ── Calculator: server-rendered markup ────────────────────────
  "calc.heading": "Varianz Rechner",
  "calc.dataLabel": "Ihr Datensatz",
  "calc.clear": "Löschen",
  "calc.placeholder":
    "Zahlen einfügen oder eingeben — getrennt durch Kommas, Leerzeichen, Tabulatoren oder Zeilenumbrüche.\n\nz. B. 88, 92, 79, 93, 85",
  "calc.examplesLabel": "Beispiel ausprobieren",
  "calc.example.scores": "Testergebnisse",
  "calc.example.decimals": "Mit Dezimalzahlen",
  "calc.example.negatives": "Enthält negative Zahlen",
  "calc.example.spreadsheet": "Aus Tabelle eingefügt",
  "calc.modeLegend": "Welche Varianz?",
  "calc.mode.sample": "Stichprobe",
  "calc.mode.population": "Grundgesamtheit",
  "calc.empty": "Geben Sie einen Datensatz ein, und Ihre Ergebnisse erscheinen sofort hier — kein Knopfdruck nötig.",
  "calc.stat.sd": "Std.-Abweichung",
  "calc.stat.mean": "Mittelwert (x̄)",
  "calc.stat.count": "Anzahl (n)",
  "calc.stat.ss": "Quadratsumme",
  "calc.viz.caption": "Abstand jedes Werts vom Mittelwert",
  "calc.viz.value": "Wert",
  "calc.viz.mean": "Mittelwert",
  "calc.steps.heading": "Schritt für Schritt, mit Ihren Zahlen",

  // ── Calculator: client-side (shipped to the browser) ──────────
  "calc.label.sample": "Stichprobenvarianz (s²)",
  "calc.label.population": "Populationsvarianz (σ²)",
  "calc.copyLink": "Link kopieren",
  "calc.linkCopied": "Link kopiert",
  "calc.copyResults": "Ergebnisse kopieren",
  "calc.copied": "Kopiert",
  "calc.pressCopy": "⌘/Strg+C drücken",
  "calc.explain.sample":
    "Verwenden Sie dies, wenn Ihre Zahlen eine Stichprobe aus einer größeren Gruppe sind. Teilt durch n − 1 (Bessel-Korrektur), damit die Schätzung nicht zu niedrig verzerrt wird. Dies ist die häufigste Wahl.",
  "calc.explain.population":
    "Verwenden Sie dies nur, wenn Ihre Zahlen die gesamte Gruppe sind, die Sie interessiert — jedes Mitglied, ohne Auslassung. Teilt durch n.",
  "calc.status.valid.one": "{n} gültige Zahl",
  "calc.status.valid.other": "{n} gültige Zahlen",
  "calc.status.invalid.one": "Ungültiger Eintrag, nicht berücksichtigt: {list}",
  "calc.status.invalid.other": "Ungültige Einträge, nicht berücksichtigt: {list}",
  "calc.more": "+{n} weitere",
  "calc.quote": "„{s}“",
  "calc.listSep": ", ",
  "calc.invalidList": "Ungültige Einträge",
  "calc.warn.none.title": "Keine gültigen Zahlen gefunden",
  "calc.warn.none.body.one":
    "Dieser Eintrag ist keine Zahl, also gibt es nichts zu berechnen. Geben Sie Werte ein, getrennt durch Kommas, Leerzeichen, Tabulatoren oder Zeilenumbrüche — zum Beispiel: 4, 8, 15, 16, 23.",
  "calc.warn.none.body.other":
    "Keiner dieser Einträge ist eine Zahl, also gibt es nichts zu berechnen. Geben Sie Werte ein, getrennt durch Kommas, Leerzeichen, Tabulatoren oder Zeilenumbrüche — zum Beispiel: 4, 8, 15, 16, 23.",
  "calc.warn.some.title.one": "„{token}“ ist keine gültige Zahl",
  "calc.warn.some.title.other": "{n} Einträge sind keine gültigen Zahlen",
  "calc.warn.some.body.one":
    "Er wurde ausgelassen, daher verwenden die Ergebnisse nur {valid}. Korrigieren oder entfernen Sie ihn, um sicherzugehen, dass Ihre Ergebnisse Ihre Daten widerspiegeln.",
  "calc.warn.some.body.other":
    "Sie wurden ausgelassen, daher verwenden die Ergebnisse nur {valid}. Korrigieren oder entfernen Sie sie, um sicherzugehen, dass Ihre Ergebnisse Ihre Daten widerspiegeln.",
  "calc.undef.title": "Die Stichprobenvarianz ist für einen einzelnen Wert undefiniert",
  "calc.undef.body":
    "Die Stichprobenvarianz teilt durch n − 1, und bei einem Datenpunkt ist das 0 — durch null kann man nicht teilen. Fügen Sie mindestens einen weiteren Wert hinzu oder wechseln Sie zur Populationsvarianz (die durch n teilt und für einen einzelnen Punkt gleich 0 ist).",
  "calc.step1": "Den Mittelwert (Durchschnitt) bestimmen",
  "calc.step2": "Den Abstand jedes Werts vom Mittelwert quadrieren",
  "calc.step3": "Die quadrierten Abstände addieren (Quadratsumme)",
  "calc.step4.sample": "Durch n − 1 teilen",
  "calc.step4.population": "Durch n teilen",
  "calc.step5": "Die Quadratwurzel für die Standardabweichung ziehen",
  "calc.step.more": "… und {n} weitere",
  "calc.step.excluded": "Nicht berücksichtigt (keine Zahlen): {list}",
  "calc.viz.aria": "Zahlenstrahl, der jeden Datenpunkt und den Mittelwert zeigt",
  "calc.viz.deviation": "Abweichung",
  "calc.summary.sd": "Standardabweichung",
  "calc.summary.mean": "Mittelwert",
  "calc.summary.count": "Anzahl",
  "calc.summary.ss": "Quadratsumme",
  "calc.summary.warn.one": "Warnung: {n} ungültiger Eintrag ausgeschlossen: {list}",
  "calc.summary.warn.other": "Warnung: {n} ungültige Einträge ausgeschlossen: {list}",
};

export default de;
