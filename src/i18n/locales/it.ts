import type { Dictionary } from "./en";

const it: Dictionary = {
  // ── Meta / SEO ────────────────────────────────────────────────
  "meta.title": "Calcolatore Varianza — Varianza Campionaria e Popolazione",
  "meta.description":
    "Calcolatore varianza online e gratuito per varianza campionaria e varianza della popolazione. Incolla qualsiasi set di dati per ottenere varianza, deviazione standard, media, conteggio e somma dei quadrati — con ogni passaggio mostrato sui tuoi numeri reali.",
  "meta.ogImageAlt": "VarianceCalc — calcolatore varianza online e gratuito",
  "meta.appName": "Calcolatore Varianza",
  "meta.appDescription":
    "Calcolatore varianza online e gratuito per varianza campionaria e varianza della popolazione, con deviazione standard, media, conteggio, somma dei quadrati e calcolo passo passo sui tuoi dati.",

  // ── Chrome: skip link, header, footer, theme, language ────────
  "skip.calculator": "Vai al calcolatore",
  "skip.main": "Vai al contenuto principale",
  "nav.home": "Home di VarianceCalc",
  "nav.primary": "Principale",
  "nav.guide": "Guida",
  "nav.faq": "FAQ",
  "nav.about": "Chi siamo",
  "nav.contact": "Contatti",
  "nav.quickLinks": "Link rapidi",
  "nav.privacy": "Informativa sulla privacy",
  "nav.terms": "Termini",
  "footer.label": "Piè di pagina",
  "footer.about": "Chi siamo",
  "footer.contact": "Contattaci",
  "footer.privacy": "Informativa sulla privacy",
  "footer.terms": "Termini e condizioni",
  "footer.note": "Nessun dato lascia il tuo dispositivo, a meno che tu non scelga di condividere un link.",
  "lang.label": "Lingua",
  "theme.toDark": "Passa alla modalità scura",
  "theme.toLight": "Passa alla modalità chiara",
  "theme.title": "Attiva/disattiva modalità scura",

  // ── Hero ──────────────────────────────────────────────────────
  "hero.title": "La varianza, calcolata passo passo",
  "hero.subtitle":
    "Incolla qualsiasi set di dati — comprese le colonne disordinate di un foglio di calcolo. Ottieni la varianza campionaria o della popolazione, la deviazione standard e la media, con ogni passaggio mostrato sui tuoi numeri reali.",

  // ── Guide ─────────────────────────────────────────────────────
  "guide.title": "Campione o popolazione? La scelta che manda in confusione",
  "guide.intro":
    "Entrambe misurano quanto sono dispersi i tuoi numeri. L’unica differenza è per cosa dividi — e scegliere quella sbagliata è l’errore più comune sulla varianza. Ecco come decidere in un colpo d’occhio.",
  "guide.sample.title": "Varianza campionaria",
  "guide.sample.body":
    "I tuoi dati sono un <b>sottoinsieme</b> di un gruppo più ampio che vuoi comprendere. Divide per <code>n − 1</code> per non sottostimare la dispersione reale.",
  "guide.sample.examples":
    "Sondaggi, esperimenti, una serie di rilevazioni, i voti di alcuni studenti — <em>usala ogni volta che i tuoi numeri sono un campione estratto da una popolazione più ampia sulla quale vuoi trarre conclusioni.</em>",
  "guide.population.title": "Varianza della popolazione",
  "guide.population.body":
    "I tuoi dati sono l’<b>intero gruppo</b>, senza nulla escluso. Divide per <code>n</code> — la dispersione esatta di quell’insieme completo.",
  "guide.population.examples":
    "Ogni dipendente di un’azienda, tutte le partite di una stagione, un censimento completo — casi in cui non c’è un gruppo più ampio da inferire.",
  "guide.note":
    "Stessi dati, in entrambi i modi: la varianza campionaria è sempre un po’ più grande di quella della popolazione, perché dividere per il numero più piccolo (<code>n − 1</code>) rende il risultato maggiore. Quel divario si riduce man mano che il set di dati cresce.",

  // ── FAQ ───────────────────────────────────────────────────────
  "faq.title": "Domande, con risposta",
  "faq.1.q": "Devo usare la varianza campionaria o della popolazione?",
  "faq.1.a":
    "Usa la varianza campionaria (÷ n − 1) quando i tuoi numeri sono un campione estratto da un gruppo più ampio che vuoi conoscere — risposte a un sondaggio, una serie di misurazioni, i risultati dei test di alcuni studenti. Usa la varianza della popolazione (÷ n) solo quando i tuoi numeri sono l’intero gruppo, senza nulla escluso. In caso di dubbio, il campione è l’opzione predefinita più sicura; scegliere la popolazione su dati campionari sottostima leggermente la dispersione reale.",
  "faq.2.q": "Perché la varianza campionaria divide per n − 1 invece che per n?",
  "faq.2.a":
    "Si chiama correzione di Bessel. Poiché la media è stimata dallo stesso campione, dividere per n sottostimerebbe sistematicamente la dispersione reale. Dividere per n − 1 (i gradi di libertà) corregge questa distorsione, fornendo una stima non distorta della varianza della popolazione.",
  "faq.3.q": "Qual è la differenza tra varianza e deviazione standard?",
  "faq.3.a":
    "La deviazione standard è semplicemente la radice quadrata della varianza. La varianza è espressa in unità al quadrato (dollari², cm²), difficile da immaginare; la deviazione standard riporta i valori nelle unità originali, quindi è più facile da interpretare. Mostriamo entrambe.",
  "faq.4.q": "Come devo formattare i miei dati?",
  "faq.4.a":
    "Come li hai. Incolla direttamente da un foglio di calcolo, da un documento, oppure digitali a mano — i valori possono essere separati da virgole, spazi, tabulazioni o interruzioni di riga. I decimali e i numeri negativi funzionano, e gli eventuali simboli di valuta o percentuale vengono ignorati automaticamente. Poiché la virgola è sempre trattata come separatore, per i decimali usa il punto (ad esempio 2.5).",
  "faq.5.q": "Perché la varianza campionaria non è definita per un singolo valore?",
  "faq.5.a":
    "La varianza campionaria divide per n − 1. Con un solo punto dati quel denominatore è 0, e dividere per zero non è definito. Aggiungi un altro valore, oppure passa alla varianza della popolazione — che divide per n ed è 0 per un singolo punto.",
  "faq.6.q": "I miei dati vengono inviati da qualche parte?",
  "faq.6.a":
    "No. Ogni calcolo viene eseguito interamente nel tuo browser — nulla di ciò che digiti viene caricato, registrato o archiviato. Il tuo set di dati viene inserito in un URL solo se fai clic esplicitamente su “Copia link” per condividerlo; digitare o incollare dati non modifica mai da solo la barra degli indirizzi.",
  "faq.7.q": "Qual è la differenza tra varianza campionaria e della popolazione?",
  "faq.7.a":
    "La differenza sta in ciò per cui dividi la somma degli scarti al quadrato. La varianza campionaria divide per n − 1 e si usa quando i tuoi dati sono un sottoinsieme estratto da un gruppo più ampio sul quale vuoi trarre conclusioni. La varianza della popolazione divide per n e si usa solo quando i tuoi dati sono l’intero gruppo, senza nulla escluso. La varianza campionaria è sempre leggermente più grande a parità di numeri, poiché dividere per un numero più piccolo produce un risultato maggiore — quel divario si riduce man mano che il set di dati cresce.",
  "faq.8.q": "Perché ottengo un errore con un solo punto dati?",
  "faq.8.a":
    "La varianza campionaria divide per n − 1, e con un singolo valore quel denominatore diventa 0 — la divisione per zero è matematicamente indefinita, quindi non c’è alcun risultato valido da mostrare. Questo calcolatore lo spiega invece di restituire NaN. Se ti serve un risultato per un solo punto dati, passa alla varianza della popolazione, che divide per n e restituisce correttamente 0, poiché un singolo valore non ha dispersione rispetto a sé stesso.",
  "faq.9.q": "Quale simbolo rappresenta la varianza?",
  "faq.9.a":
    "La varianza della popolazione si scrive σ² (sigma minuscola al quadrato), mentre la varianza campionaria si scrive s². Entrambe si leggono “varianza” — il simbolo al quadrato ricorda che la varianza è misurata in unità al quadrato dei dati originali (ad esempio, dollari² o cm²), motivo per cui la deviazione standard, la sua radice quadrata, viene spesso usata insieme ad essa per un’interpretazione più semplice.",
  "faq.10.q": "Questo calcolatore mostra i passaggi per il calcolo della varianza?",
  "faq.10.a":
    "Sì. Ogni risultato include la soluzione completa svolta usando i tuoi numeri reali — la media, lo scarto di ciascun valore dalla media, gli scarti al quadrato, la loro somma e la divisione finale per n o n − 1. Una linea numerica degli scarti mostra anche quanto ciascun valore è distante dalla media, così puoi verificare la risposta e capire come ci si è arrivati invece di vedere solo un numero finale.",
  "faq.11.q": "Posso calcolare la varianza da dati raggruppati o di frequenza?",
  "faq.11.a":
    "Non direttamente — questo calcolatore si aspetta un elenco di singoli valori grezzi, non una tabella di frequenza con coppie valore/conteggio. Per usarlo con dati raggruppati, espandi ogni valore secondo la sua frequenza prima di incollarlo (ad esempio, un valore di 5 che ricorre 3 volte diventa 5, 5, 5 nell’input). Per tabelle di frequenza grandi questo diventa poco pratico, poiché la varianza per dati raggruppati si calcola tipicamente dai valori centrali e dalle frequenze con una formula dedicata anziché dai valori grezzi.",

  // ── SEO long-form ─────────────────────────────────────────────
  "seo.title": "Informazioni su questo calcolatore varianza",
  "seo.p1":
    "VarianceCalc è un <b>calcolatore varianza online</b> e gratuito, pensato per chiunque abbia bisogno di una risposta rapida e accurata senza combattere con la formula di un foglio di calcolo o con la modalità manuale di una calcolatrice scientifica. Incolla un elenco di numeri — copiato direttamente da Excel, Google Sheets, un report in PDF, oppure digitato a mano — e lo strumento restituisce all’istante varianza, deviazione standard, media, conteggio e somma dei quadrati, con la matematica sottostante mostrata passo passo usando i tuoi numeri. Non serve registrarsi, non c’è alcuna installazione e nessun dato lascia mai il tuo browser: ogni calcolo viene eseguito lato client, quindi è sicuro usarlo con dati sensibili o riservati.",
  "seo.p2":
    "Ciò che distingue questo <b>calcolatore varianza</b> da un generico widget di statistica è che tratta la scelta tra campione e popolazione come una funzione di primo piano anziché come un ripensamento. Attiva l’interruttore per usarlo come <b>calcolatore varianza campionaria</b>, dividendo per <code>n − 1</code> (correzione di Bessel) per set di dati che rappresentano un sottoinsieme di un gruppo più ampio sul quale vuoi trarre conclusioni — pensa alle risposte di un sondaggio, a una serie di misurazioni di laboratorio o ai voti di una classe da cui vuoi generalizzare. Oppure passa a <b>calcolatore varianza della popolazione</b>, dividendo per <code>n</code>, quando i tuoi numeri sono l’insieme completo senza nulla escluso, come ogni dipendente di un’azienda o ogni partita di una stagione conclusa. Scegliere la modalità sbagliata è l’errore più comune sulla varianza, perciò il calcolatore mostra indicazioni in linguaggio semplice accanto all’interruttore invece di lasciarti indovinare.",
  "seo.p3":
    "Sotto il cofano, il parser è costruito per sopravvivere a input reali e disordinati anziché agli elenchi puliti e separati da virgole che la maggior parte degli strumenti da manuale si aspetta. I valori possono essere separati da virgole, spazi, tabulazioni, punti e virgola o interruzioni di riga in qualsiasi combinazione, e il calcolatore gestisce correttamente decimali, numeri negativi e notazione scientifica. Poiché le virgole sono sempre trattate come separatori, un numero incollato come <code>91,100</code> viene letto come due valori — 91 e 100 — mai unito silenziosamente in novantunmilacento, un bug sottile che manda in errore gli strumenti più semplici. I simboli di valuta sparsi (<code>$</code>) e i segni di percentuale (<code>%</code>) vengono rimossi automaticamente, e qualsiasi token che ancora non può essere letto come numero viene segnalato chiaramente invece di essere scartato senza spiegazione.",
  "seo.p4":
    "Oltre al numero principale, questo calcolatore varianza è pensato per insegnare tanto quanto calcola. Ogni risultato è accompagnato dalla formula completa svolta usando i tuoi dati reali — gli scarti dalla media, gli scarti al quadrato e la divisione finale — così puoi seguire esattamente come si è arrivati alla risposta e verificarla con il tuo lavoro. Una linea numerica degli scarti mostra quanto ciascun valore è distante dalla media, il che rende concreto anziché astratto il concetto di \"dispersione\", particolarmente utile per gli studenti che imparano varianza e deviazione standard per la prima volta. Anche i casi limite sono gestiti con eleganza: un campione con un solo valore restituisce una spiegazione chiara invece di un confuso <code>NaN</code>, e un input vuoto o non numerico produce un messaggio utile anziché un errore silenzioso.",
  "seo.p5":
    "L’intera esperienza è progettata per non intralciarti — nessuna creazione di account forzata, e i tuoi dati non lasciano mai il tuo browser. Se vuoi condividere un risultato specifico, un’azione esplicita \"Copia link\" codifica il tuo set di dati e la modalità nell’URL; nulla viene scritto nella barra degli indirizzi solo digitando o incollando. Che tu sia uno studente che controlla i compiti, un ricercatore che fa una rapida verifica o un analista che ha semplicemente bisogno di varianza e deviazione standard senza aprire un pacchetto statistico completo, questo calcolatore è pensato per darti una risposta affidabile e spiegata in pochi secondi.",

  // ── Calculator: server-rendered markup ────────────────────────
  "calc.heading": "Calcolatore varianza",
  "calc.dataLabel": "Il tuo set di dati",
  "calc.clear": "Cancella",
  "calc.placeholder":
    "Incolla o digita numeri — separati da virgole, spazi, tabulazioni o nuove righe.\n\nes. 88, 92, 79, 93, 85",
  "calc.examplesLabel": "Prova un esempio",
  "calc.example.scores": "Voti dei test",
  "calc.example.decimals": "Con decimali",
  "calc.example.negatives": "Include negativi",
  "calc.example.spreadsheet": "Incolla da foglio di calcolo",
  "calc.modeLegend": "Quale varianza?",
  "calc.mode.sample": "Campione",
  "calc.mode.population": "Popolazione",
  "calc.empty": "Inserisci un set di dati e i tuoi risultati appaiono qui all’istante — nessun pulsante da premere.",
  "calc.stat.sd": "Deviaz. standard",
  "calc.stat.mean": "Media (x̄)",
  "calc.stat.count": "Conteggio (n)",
  "calc.stat.ss": "Somma dei quadrati",
  "calc.viz.caption": "La distanza di ciascun valore dalla media",
  "calc.viz.value": "valore",
  "calc.viz.mean": "media",
  "calc.steps.heading": "Passo passo, con i tuoi numeri",

  // ── Calculator: client-side (shipped to the browser) ──────────
  "calc.label.sample": "Varianza campionaria (s²)",
  "calc.label.population": "Varianza della popolazione (σ²)",
  "calc.copyLink": "Copia link",
  "calc.linkCopied": "Link copiato",
  "calc.copyResults": "Copia risultati",
  "calc.copied": "Copiato",
  "calc.pressCopy": "Premi ⌘/Ctrl+C",
  "calc.explain.sample":
    "Usala quando i tuoi numeri sono un campione estratto da un gruppo più ampio. Divide per n − 1 (correzione di Bessel) affinché la stima non sia distorta verso il basso. È la scelta più comune.",
  "calc.explain.population":
    "Usala solo quando i tuoi numeri sono l’intero gruppo che ti interessa — ogni membro, senza nulla escluso. Divide per n.",
  "calc.status.valid.one": "{n} numero valido",
  "calc.status.valid.other": "{n} numeri validi",
  "calc.status.invalid.one": "Voce non valida, non inclusa: {list}",
  "calc.status.invalid.other": "Voci non valide, non incluse: {list}",
  "calc.more": "+{n} altri",
  "calc.quote": "«{s}»",
  "calc.listSep": ", ",
  "calc.invalidList": "Voci non valide",
  "calc.warn.none.title": "Nessun numero valido trovato",
  "calc.warn.none.body.one":
    "Questa voce non è un numero, quindi non c’è nulla da calcolare. Inserisci valori separati da virgole, spazi, tabulazioni o nuove righe — ad esempio: 4, 8, 15, 16, 23.",
  "calc.warn.none.body.other":
    "Nessuna di queste voci è un numero, quindi non c’è nulla da calcolare. Inserisci valori separati da virgole, spazi, tabulazioni o nuove righe — ad esempio: 4, 8, 15, 16, 23.",
  "calc.warn.some.title.one": "«{token}» non è un numero valido",
  "calc.warn.some.title.other": "{n} voci non sono numeri validi",
  "calc.warn.some.body.one":
    "È stata esclusa, quindi i risultati usano solo {valid}. Correggila o rimuovila per essere certo che i risultati riflettano i tuoi dati.",
  "calc.warn.some.body.other":
    "Sono state escluse, quindi i risultati usano solo {valid}. Correggile o rimuovile per essere certo che i risultati riflettano i tuoi dati.",
  "calc.undef.title": "La varianza campionaria non è definita per un singolo valore",
  "calc.undef.body":
    "La varianza campionaria divide per n − 1, e con un solo punto dati è 0 — non puoi dividere per zero. Aggiungi almeno un altro valore, oppure passa alla varianza della popolazione (che divide per n ed è uguale a 0 per un singolo punto).",
  "calc.step1": "Trova la media",
  "calc.step2": "Eleva al quadrato la distanza di ciascun valore dalla media",
  "calc.step3": "Somma le distanze al quadrato (somma dei quadrati)",
  "calc.step4.sample": "Dividi per n − 1",
  "calc.step4.population": "Dividi per n",
  "calc.step5": "Estrai la radice quadrata per la deviazione standard",
  "calc.step.more": "… e altri {n}",
  "calc.step.excluded": "Non inclusi (non numeri): {list}",
  "calc.viz.aria": "Linea numerica che mostra ciascun punto dati e la media",
  "calc.viz.deviation": "scarto",
  "calc.summary.sd": "Deviazione standard",
  "calc.summary.mean": "Media",
  "calc.summary.count": "Conteggio",
  "calc.summary.ss": "Somma dei quadrati",
  "calc.summary.warn.one": "Attenzione: esclusa {n} voce non valida: {list}",
  "calc.summary.warn.other": "Attenzione: escluse {n} voci non valide: {list}",
} as const;

export default it;
