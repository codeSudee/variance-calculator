import type { Dictionary } from "./en";

const fr: Dictionary = {
  // ── Meta / SEO ────────────────────────────────────────────────
  "meta.title": "Calculatrice de variance — variance échantillon et population",
  "meta.description":
    "Calculatrice de variance en ligne gratuite pour la variance d'un échantillon et la variance de la population. Collez vos données pour obtenir variance, écart type, moyenne, effectif et somme des carrés, avec chaque étape détaillée.",
  "meta.ogImageAlt": "VarianceCalc — calculatrice de variance en ligne gratuite",
  "meta.appName": "Calculatrice de variance",
  "meta.appDescription":
    "Calculatrice de variance en ligne gratuite pour la variance d'un échantillon et la variance de la population, avec écart type, moyenne, effectif, somme des carrés et calcul détaillé sur vos propres données.",

  // ── Chrome: skip link, header, footer, theme, language ────────
  "skip.calculator": "Aller à la calculatrice",
  "skip.main": "Aller au contenu principal",
  "nav.home": "Accueil VarianceCalc",
  "nav.primary": "Principale",
  "nav.guide": "Guide",
  "nav.faq": "FAQ",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.quickLinks": "Liens rapides",
  "nav.privacy": "Politique de confidentialité",
  "nav.terms": "Conditions",
  "footer.label": "Pied de page",
  "footer.about": "À propos",
  "footer.contact": "Nous contacter",
  "footer.privacy": "Politique de confidentialité",
  "footer.terms": "Conditions générales",
  "footer.note": "Aucune donnée ne quitte votre appareil, sauf si vous choisissez de partager un lien.",
  "lang.label": "Langue",
  "theme.toDark": "Passer au mode sombre",
  "theme.toLight": "Passer au mode clair",
  "theme.title": "Basculer le mode sombre",

  // ── Hero ──────────────────────────────────────────────────────
  "hero.title": "La variance, calculée étape par étape",
  "hero.subtitle":
    "Collez n'importe quel jeu de données — même des colonnes de tableur en désordre. Obtenez la variance d'un échantillon ou de la population, l'écart type et la moyenne, avec chaque étape détaillée sur vos vrais chiffres.",

  // ── Guide ─────────────────────────────────────────────────────
  "guide.title": "Échantillon ou population ? Le choix qui piège tout le monde",
  "guide.intro":
    "Les deux mesurent la dispersion de vos chiffres. La seule différence tient au diviseur — et se tromper de choix est l'erreur de variance la plus fréquente. Voici comment décider d'un coup d'œil.",
  "guide.sample.title": "Variance d'un échantillon",
  "guide.sample.body":
    "Vos données sont un <b>sous-ensemble</b> d'un groupe plus large que vous voulez comprendre. Le calcul divise par <code>n − 1</code> pour ne pas sous-estimer la dispersion réelle.",
  "guide.sample.examples":
    "Sondages, expériences, un lot de mesures, les notes de quelques élèves — <em>utilisez-la chaque fois que vos chiffres sont un échantillon tiré d'une population plus large sur laquelle vous voulez conclure.</em>",
  "guide.population.title": "Variance de la population",
  "guide.population.body":
    "Vos données représentent le <b>groupe entier</b>, sans rien laisser de côté. Le calcul divise par <code>n</code> — la dispersion exacte de cet ensemble complet.",
  "guide.population.examples":
    "Tous les employés d'une entreprise, tous les matchs d'une saison, un recensement complet — les cas où il n'y a pas de groupe plus large sur lequel inférer.",
  "guide.note":
    "Mêmes données, deux méthodes : la variance d'un échantillon est toujours un peu plus grande que la variance de la population, car diviser par le plus petit nombre (<code>n − 1</code>) augmente le résultat. Cet écart se réduit à mesure que votre jeu de données grandit.",

  // ── FAQ ───────────────────────────────────────────────────────
  "faq.title": "Vos questions, nos réponses",
  "faq.1.q": "Dois-je utiliser la variance d'un échantillon ou de la population ?",
  "faq.1.a":
    "Utilisez la variance d'un échantillon (÷ n − 1) quand vos chiffres sont un échantillon tiré d'un groupe plus large que vous cherchez à connaître — réponses à un sondage, un lot de mesures, les résultats de quelques élèves. Utilisez la variance de la population (÷ n) uniquement quand vos chiffres représentent le groupe entier, sans rien laisser de côté. En cas de doute, l'échantillon est le choix par défaut le plus sûr ; choisir la population sur des données d'échantillon sous-estime légèrement la dispersion réelle.",
  "faq.2.q": "Pourquoi la variance d'un échantillon divise-t-elle par n − 1 plutôt que par n ?",
  "faq.2.a":
    "On appelle cela la correction de Bessel. Comme la moyenne est estimée à partir du même échantillon, diviser par n sous-estimerait systématiquement la dispersion réelle. Diviser par n − 1 (les degrés de liberté) corrige ce biais et donne une estimation sans biais de la variance de la population.",
  "faq.3.q": "Quelle est la différence entre la variance et l'écart type ?",
  "faq.3.a":
    "L'écart type est simplement la racine carrée de la variance. La variance s'exprime en unités au carré (dollars², cm²), difficile à se représenter ; l'écart type revient aux unités d'origine, donc plus facile à interpréter. Nous affichons les deux.",
  "faq.4.q": "Comment dois-je mettre en forme mes données ?",
  "faq.4.a":
    "Comme vous les avez. Collez-les directement depuis un tableur, un document, ou saisissez-les à la main — les valeurs peuvent être séparées par des virgules, des espaces, des tabulations ou des sauts de ligne. Les décimales et les nombres négatifs fonctionnent, et les symboles de devise ou de pourcentage parasites sont ignorés automatiquement. Comme la virgule sert toujours de séparateur, écrivez les décimales avec un point (par exemple 2.5).",
  "faq.5.q": "Pourquoi la variance d'un échantillon est-elle indéfinie pour une seule valeur ?",
  "faq.5.a":
    "La variance d'un échantillon divise par n − 1. Avec un seul point de donnée, ce dénominateur vaut 0, et diviser par zéro est indéfini. Ajoutez une autre valeur, ou passez à la variance de la population — qui divise par n et vaut 0 pour un seul point.",
  "faq.6.q": "Mes données sont-elles envoyées quelque part ?",
  "faq.6.a":
    "Non. Chaque calcul s'exécute entièrement dans votre navigateur — rien de ce que vous saisissez n'est téléversé, journalisé ou stocké. Votre jeu de données n'est placé dans une URL que si vous cliquez explicitement sur « Copier le lien » pour le partager ; saisir ou coller des données ne modifie jamais la barre d'adresse de lui-même.",
  "faq.7.q": "Quelle est la différence entre la variance d'un échantillon et de la population ?",
  "faq.7.a":
    "La différence tient à ce par quoi vous divisez la somme des carrés des écarts. La variance d'un échantillon divise par n − 1 et sert quand vos données sont un sous-ensemble tiré d'un groupe plus large sur lequel vous voulez conclure. La variance de la population divise par n et ne sert que lorsque vos données représentent le groupe entier, sans rien laisser de côté. La variance d'un échantillon est toujours un peu plus grande pour les mêmes chiffres, car diviser par un nombre plus petit donne un résultat plus grand — cet écart se réduit à mesure que le jeu de données grandit.",
  "faq.8.q": "Pourquoi ai-je une erreur avec un seul point de donnée ?",
  "faq.8.a":
    "La variance d'un échantillon divise par n − 1, et avec une seule valeur ce dénominateur vaut 0 — la division par zéro est mathématiquement indéfinie, il n'y a donc aucun résultat valide à afficher. Cette calculatrice l'explique au lieu de renvoyer NaN. Si vous avez besoin d'un résultat pour un seul point, passez à la variance de la population, qui divise par n et renvoie correctement 0, puisqu'une seule valeur n'a aucune dispersion par rapport à elle-même.",
  "faq.9.q": "Quel symbole représente la variance ?",
  "faq.9.a":
    "La variance de la population s'écrit σ² (sigma minuscule au carré), et la variance d'un échantillon s'écrit s². Les deux se lisent « variance » — le symbole au carré rappelle que la variance se mesure en unités au carré des données d'origine (par exemple dollars² ou cm²), ce qui explique pourquoi l'écart type, sa racine carrée, est souvent utilisé à ses côtés pour une interprétation plus facile.",
  "faq.10.q": "Cette calculatrice affiche-t-elle les étapes du calcul de la variance ?",
  "faq.10.a":
    "Oui. Chaque résultat inclut la solution complète détaillée avec vos vrais chiffres — la moyenne, l'écart de chaque valeur à la moyenne, les carrés des écarts, leur somme et la division finale par n ou n − 1. Une droite graduée des écarts visualise aussi la distance de chaque valeur à la moyenne, pour que vous puissiez vérifier la réponse et comprendre comment elle a été obtenue plutôt que de voir seulement un chiffre final.",
  "faq.11.q": "Puis-je calculer la variance à partir de données groupées ou de fréquences ?",
  "faq.11.a":
    "Pas directement — cette calculatrice attend une liste de valeurs brutes individuelles, et non un tableau de fréquences par paires valeur/effectif. Pour l'utiliser avec des données groupées, développez chaque valeur selon sa fréquence avant de coller (par exemple, une valeur de 5 apparaissant 3 fois devient 5, 5, 5 dans la saisie). Pour de grands tableaux de fréquences, cela devient peu pratique, car la variance groupée se calcule généralement à partir des centres de classe et des fréquences avec une formule dédiée plutôt qu'à partir de valeurs brutes.",

  // ── SEO long-form ─────────────────────────────────────────────
  "seo.title": "À propos de cette calculatrice de variance",
  "seo.p1":
    "VarianceCalc est une <b>calculatrice de variance en ligne</b> gratuite conçue pour quiconque a besoin d'une réponse rapide et exacte sans se battre avec une formule de tableur ou le mode manuel d'une calculatrice scientifique. Collez une liste de nombres — copiée directement depuis Excel, Google Sheets, un rapport PDF, ou saisie à la main — et l'outil renvoie instantanément la variance, l'écart type, la moyenne, l'effectif et la somme des carrés, avec les calculs détaillés étape par étape sur vos propres chiffres. Aucune inscription, aucune installation, et aucune donnée ne quitte jamais votre navigateur : chaque calcul s'exécute côté client, il est donc sûr de l'utiliser avec des chiffres sensibles ou confidentiels.",
  "seo.p2":
    "Ce qui distingue cette <b>calculatrice de variance</b> d'un simple widget statistique, c'est qu'elle traite le choix entre échantillon et population comme une fonctionnalité de premier plan plutôt qu'un détail. Basculez l'interrupteur pour l'utiliser comme <b>calculatrice de variance d'un échantillon</b>, divisant par <code>n − 1</code> (correction de Bessel) pour des jeux de données représentant un sous-ensemble d'un groupe plus large sur lequel vous cherchez à conclure — réponses à un sondage, un lot de mesures de laboratoire, ou les notes d'une classe à généraliser. Ou passez-la en <b>calculatrice de variance de la population</b>, divisant par <code>n</code>, quand vos chiffres forment l'ensemble complet sans rien laisser de côté, comme tous les employés d'une entreprise ou tous les matchs d'une saison terminée. Choisir le mauvais mode est l'erreur de variance la plus fréquente, c'est pourquoi la calculatrice affiche des conseils en langage clair juste à côté de l'interrupteur au lieu de vous laisser deviner.",
  "seo.p3":
    "En coulisses, l'analyseur est conçu pour résister à des saisies réelles et désordonnées, et non aux listes propres séparées par des virgules qu'attendent la plupart des outils scolaires. Les valeurs peuvent être séparées par des virgules, des espaces, des tabulations, des points-virgules ou des sauts de ligne dans n'importe quelle combinaison, et la calculatrice gère correctement les décimales, les nombres négatifs et la notation scientifique. Comme les virgules sont toujours traitées comme des séparateurs, un nombre collé tel que <code>91,100</code> est lu comme deux valeurs — 91 et 100 — jamais fusionné en silence en quatre-vingt-onze mille cent, un bug subtil qui piège les outils plus simples. Les symboles de devise (<code>$</code>) et de pourcentage (<code>%</code>) parasites sont retirés automatiquement, et tout élément qui ne peut toujours pas être lu comme un nombre est signalé clairement au lieu d'être écarté sans explication.",
  "seo.p4":
    "Au-delà du chiffre principal, cette calculatrice de variance est conçue pour enseigner autant qu'elle calcule. Chaque résultat s'accompagne de la formule complète détaillée avec vos vraies données — les écarts à la moyenne, les carrés des écarts et la division finale — pour que vous puissiez suivre exactement comment la réponse a été obtenue et la vérifier par rapport à votre propre travail. Une droite graduée des écarts visualise la distance de chaque valeur individuelle à la moyenne, ce qui rend la notion de « dispersion » concrète plutôt qu'abstraite, particulièrement utile aux élèves qui découvrent la variance et l'écart type. Les cas particuliers sont aussi gérés avec soin : un échantillon d'une seule valeur renvoie une explication claire au lieu d'un <code>NaN</code> déroutant, et une saisie vide ou non numérique produit un message utile plutôt qu'un échec silencieux.",
  "seo.p5":
    "Toute l'expérience est pensée pour ne pas vous gêner — pas de création de compte imposée, et vos données ne quittent jamais votre navigateur. Si vous voulez partager un résultat précis, une action explicite « Copier le lien » encode votre jeu de données et votre mode dans l'URL ; rien n'est écrit dans la barre d'adresse simplement en saisissant ou en collant. Que vous soyez un élève vérifiant ses devoirs, un chercheur faisant un contrôle rapide, ou un analyste qui a juste besoin de la variance et de l'écart type sans ouvrir un logiciel de statistiques complet, cette calculatrice est faite pour vous donner une réponse fiable et expliquée en quelques secondes.",

  // ── Calculator: server-rendered markup ────────────────────────
  "calc.heading": "Calculatrice de variance",
  "calc.dataLabel": "Votre jeu de données",
  "calc.clear": "Effacer",
  "calc.placeholder":
    "Collez ou saisissez des nombres — séparés par des virgules, des espaces, des tabulations ou des sauts de ligne.\n\nex. 88, 92, 79, 93, 85",
  "calc.examplesLabel": "Essayez un exemple",
  "calc.example.scores": "Notes d'examen",
  "calc.example.decimals": "Avec décimales",
  "calc.example.negatives": "Avec des négatifs",
  "calc.example.spreadsheet": "Collage de tableur",
  "calc.modeLegend": "Quelle variance ?",
  "calc.mode.sample": "Échantillon",
  "calc.mode.population": "Population",
  "calc.empty": "Saisissez un jeu de données et vos résultats apparaissent ici instantanément — aucun bouton à presser.",
  "calc.stat.sd": "Écart type",
  "calc.stat.mean": "Moyenne (x̄)",
  "calc.stat.count": "Effectif (n)",
  "calc.stat.ss": "Somme des carrés",
  "calc.viz.caption": "Distance de chaque valeur à la moyenne",
  "calc.viz.value": "valeur",
  "calc.viz.mean": "moyenne",
  "calc.steps.heading": "Étape par étape, avec vos chiffres",

  // ── Calculator: client-side (shipped to the browser) ──────────
  "calc.label.sample": "Variance d'un échantillon (s²)",
  "calc.label.population": "Variance de la population (σ²)",
  "calc.copyLink": "Copier le lien",
  "calc.linkCopied": "Lien copié",
  "calc.copyResults": "Copier les résultats",
  "calc.copied": "Copié",
  "calc.pressCopy": "Appuyez sur ⌘/Ctrl+C",
  "calc.explain.sample":
    "Utilisez ceci quand vos chiffres sont un échantillon tiré d'un groupe plus large. Divise par n − 1 (correction de Bessel) pour que l'estimation ne soit pas biaisée vers le bas. C'est le choix le plus fréquent.",
  "calc.explain.population":
    "Utilisez ceci uniquement quand vos chiffres représentent le groupe entier qui vous intéresse — chaque membre, sans rien laisser de côté. Divise par n.",
  "calc.status.valid.one": "{n} nombre valide",
  "calc.status.valid.other": "{n} nombres valides",
  "calc.status.invalid.one": "Entrée invalide, non incluse : {list}",
  "calc.status.invalid.other": "Entrées invalides, non incluses : {list}",
  "calc.more": "+{n} de plus",
  "calc.quote": "« {s} »",
  "calc.listSep": ", ",
  "calc.invalidList": "Entrées invalides",
  "calc.warn.none.title": "Aucun nombre valide trouvé",
  "calc.warn.none.body.one":
    "Cette entrée n'est pas un nombre, il n'y a donc rien à calculer. Saisissez des valeurs séparées par des virgules, des espaces, des tabulations ou des sauts de ligne — par exemple : 4, 8, 15, 16, 23.",
  "calc.warn.none.body.other":
    "Aucune de ces entrées n'est un nombre, il n'y a donc rien à calculer. Saisissez des valeurs séparées par des virgules, des espaces, des tabulations ou des sauts de ligne — par exemple : 4, 8, 15, 16, 23.",
  "calc.warn.some.title.one": "« {token} » n'est pas un nombre valide",
  "calc.warn.some.title.other": "{n} entrées ne sont pas des nombres valides",
  "calc.warn.some.body.one":
    "Elle a été écartée, donc les résultats n'utilisent que {valid}. Corrigez-la ou retirez-la pour être sûr que vos résultats reflètent vos données.",
  "calc.warn.some.body.other":
    "Elles ont été écartées, donc les résultats n'utilisent que {valid}. Corrigez-les ou retirez-les pour être sûr que vos résultats reflètent vos données.",
  "calc.undef.title": "La variance d'un échantillon est indéfinie pour une seule valeur",
  "calc.undef.body":
    "La variance d'un échantillon divise par n − 1, et avec un seul point de donnée cela fait 0 — on ne peut pas diviser par zéro. Ajoutez au moins une valeur de plus, ou passez à la variance de la population (qui divise par n et vaut 0 pour un seul point).",
  "calc.step1": "Calculer la moyenne",
  "calc.step2": "Élever au carré la distance de chaque valeur à la moyenne",
  "calc.step3": "Additionner les carrés des distances (somme des carrés)",
  "calc.step4.sample": "Diviser par n − 1",
  "calc.step4.population": "Diviser par n",
  "calc.step5": "Prendre la racine carrée pour obtenir l'écart type",
  "calc.step.more": "… et {n} de plus",
  "calc.step.excluded": "Non inclus (pas des nombres) : {list}",
  "calc.viz.aria": "Droite graduée montrant chaque point de donnée et la moyenne",
  "calc.viz.deviation": "écart",
  "calc.summary.sd": "Écart type",
  "calc.summary.mean": "Moyenne",
  "calc.summary.count": "Effectif",
  "calc.summary.ss": "Somme des carrés",
  "calc.summary.warn.one": "Avertissement : {n} entrée invalide exclue : {list}",
  "calc.summary.warn.other": "Avertissement : {n} entrées invalides exclues : {list}",
} as const;

export default fr;
