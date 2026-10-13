import type { Dictionary } from "./en";

const pt: Dictionary = {
  // ── Meta / SEO ────────────────────────────────────────────────
  "meta.title": "Calculadora de Variância — Variância Amostral e Populacional",
  "meta.description":
    "Calculadora de variância online e gratuita para variância amostral e variância populacional. Cole qualquer conjunto de dados para calcular variância, desvio padrão, média, contagem e soma dos quadrados — com cada passo mostrado nos seus números reais.",
  "meta.ogImageAlt": "VarianceCalc — calculadora de variância online e gratuita",
  "meta.appName": "Calculadora de Variância",
  "meta.appDescription":
    "Calculadora de variância online e gratuita para variância amostral e variância populacional, com desvio padrão, média, contagem, soma dos quadrados e resolução passo a passo nos seus próprios dados.",

  // ── Chrome: skip link, header, footer, theme, language ────────
  "skip.calculator": "Ir para a calculadora",
  "skip.main": "Ir para o conteúdo principal",
  "nav.home": "Início do VarianceCalc",
  "nav.primary": "Principal",
  "nav.guide": "Guia",
  "nav.faq": "Perguntas frequentes",
  "nav.about": "Sobre",
  "nav.contact": "Contato",
  "nav.quickLinks": "Links rápidos",
  "nav.privacy": "Política de Privacidade",
  "nav.terms": "Termos",
  "footer.label": "Rodapé",
  "footer.about": "Sobre Nós",
  "footer.contact": "Fale Conosco",
  "footer.privacy": "Política de Privacidade",
  "footer.terms": "Termos e Condições",
  "footer.note": "Nenhum dado sai do seu dispositivo, a menos que você opte por compartilhar um link.",
  "lang.label": "Idioma",
  "theme.toDark": "Mudar para o modo escuro",
  "theme.toLight": "Mudar para o modo claro",
  "theme.title": "Alternar modo escuro",

  // ── Hero ──────────────────────────────────────────────────────
  "hero.title": "Variância, resolvida passo a passo",
  "hero.subtitle":
    "Cole qualquer conjunto de dados — inclusive colunas bagunçadas de planilha. Obtenha a variância amostral ou populacional, o desvio padrão e a média, com cada passo mostrado nos seus números reais.",

  // ── Guide ─────────────────────────────────────────────────────
  "guide.title": "Amostral ou populacional? A escolha que confunde as pessoas",
  "guide.intro":
    "Ambas medem o quão dispersos estão os seus números. A única diferença é por qual valor você divide — e escolher o errado é o erro mais comum ao calcular variância. Veja como decidir num piscar de olhos.",
  "guide.sample.title": "Variância amostral",
  "guide.sample.body":
    "Seus dados são um <b>subconjunto</b> de um grupo maior que você quer entender. Divide por <code>n − 1</code> para não subestimar a dispersão real.",
  "guide.sample.examples":
    "Pesquisas, experimentos, um lote de medições, notas de alguns alunos — <em>use isto sempre que seus números forem uma amostra retirada de uma população maior sobre a qual você quer tirar conclusões.</em>",
  "guide.population.title": "Variância populacional",
  "guide.population.body":
    "Seus dados são o <b>grupo inteiro</b>, sem deixar nada de fora. Divide por <code>n</code> — a dispersão exata desse conjunto completo.",
  "guide.population.examples":
    "Todos os funcionários de uma empresa, todos os jogos de uma temporada, um censo completo — casos em que não há um grupo maior a inferir.",
  "guide.note":
    "Mesmos dados, das duas formas: a variância amostral é sempre um pouco maior que a populacional, porque dividir pelo número menor (<code>n − 1</code>) aumenta o resultado. Essa diferença diminui conforme o conjunto de dados cresce.",

  // ── FAQ ───────────────────────────────────────────────────────
  "faq.title": "Perguntas, respondidas",
  "faq.1.q": "Devo usar a variância amostral ou populacional?",
  "faq.1.a":
    "Use a variância amostral (÷ n − 1) quando seus números forem uma amostra retirada de um grupo maior sobre o qual você quer aprender — respostas de pesquisa, um lote de medições, resultados de provas de alguns alunos. Use a variância populacional (÷ n) apenas quando seus números forem o grupo inteiro, sem deixar nada de fora. Na dúvida, a amostral é a opção mais segura; escolher a populacional para dados de amostra subestima levemente a dispersão real.",
  "faq.2.q": "Por que a variância amostral divide por n − 1 em vez de n?",
  "faq.2.a":
    "Isso se chama correção de Bessel. Como a média é estimada a partir da própria amostra, dividir por n subestimaria sistematicamente a dispersão verdadeira. Dividir por n − 1 (os graus de liberdade) corrige esse viés, fornecendo uma estimativa não enviesada da variância populacional.",
  "faq.3.q": "Qual é a diferença entre variância e desvio padrão?",
  "faq.3.a":
    "O desvio padrão é simplesmente a raiz quadrada da variância. A variância está em unidades ao quadrado (reais², cm²), o que é difícil de visualizar; o desvio padrão volta às unidades originais, sendo mais fácil de interpretar. Mostramos os dois.",
  "faq.4.q": "Como devo formatar meus dados?",
  "faq.4.a":
    "Do jeito que você tiver. Cole direto de uma planilha, de um documento, ou digite à mão — os valores podem ser separados por vírgulas, espaços, tabulações ou quebras de linha. Como a vírgula é sempre tratada como separador, use um ponto para os decimais (por exemplo, 2.5). Números negativos funcionam, e símbolos avulsos de moeda ou porcentagem são ignorados automaticamente.",
  "faq.5.q": "Por que a variância amostral é indefinida para um único valor?",
  "faq.5.a":
    "A variância amostral divide por n − 1. Com um único ponto de dados, esse denominador é 0, e dividir por zero é indefinido. Adicione outro valor ou mude para a variância populacional — que divide por n e é 0 para um único ponto.",
  "faq.6.q": "Meus dados são enviados para algum lugar?",
  "faq.6.a":
    "Não. Cada cálculo roda inteiramente no seu navegador — nada do que você digita é enviado, registrado ou armazenado. Seu conjunto de dados só é colocado em uma URL se você clicar explicitamente em “Copiar link” para compartilhá-lo; digitar ou colar dados nunca altera a barra de endereços por conta própria.",
  "faq.7.q": "Qual é a diferença entre variância amostral e populacional?",
  "faq.7.a":
    "A diferença está em por qual valor você divide a soma dos desvios ao quadrado. A variância amostral divide por n − 1 e é usada quando seus dados são um subconjunto retirado de um grupo maior sobre o qual você quer tirar conclusões. A variância populacional divide por n e é usada apenas quando seus dados são o grupo inteiro, sem deixar nada de fora. A variância amostral é sempre um pouco maior para os mesmos números, já que dividir por um número menor produz um resultado maior — essa diferença diminui conforme o conjunto de dados cresce.",
  "faq.8.q": "Por que recebo um erro com apenas um ponto de dados?",
  "faq.8.a":
    "A variância amostral divide por n − 1, e com um único valor esse denominador vira 0 — a divisão por zero é matematicamente indefinida, então não há resultado válido a mostrar. Esta calculadora explica isso em vez de retornar NaN. Se você precisa de um resultado para um único ponto de dados, mude para a variância populacional, que divide por n e retorna corretamente 0, já que um único valor não tem dispersão em relação a si mesmo.",
  "faq.9.q": "Qual símbolo representa a variância?",
  "faq.9.a":
    "A variância populacional é escrita como σ² (sigma minúsculo ao quadrado), e a variância amostral é escrita como s². Ambas são lidas como “variância” — o símbolo ao quadrado lembra que a variância é medida em unidades ao quadrado dos dados originais (por exemplo, reais² ou cm²), razão pela qual o desvio padrão, sua raiz quadrada, costuma ser usado ao lado dela para facilitar a interpretação.",
  "faq.10.q": "Esta calculadora mostra os passos para calcular a variância?",
  "faq.10.a":
    "Sim. Cada resultado inclui a resolução completa usando seus números reais — a média, o desvio de cada valor em relação à média, os desvios ao quadrado, sua soma e a divisão final por n ou n − 1. Uma reta numérica de desvios também visualiza o quão longe cada valor está da média, para que você possa verificar a resposta e entender como ela foi obtida, em vez de apenas ver um número final.",
  "faq.11.q": "Posso calcular a variância a partir de dados agrupados ou de frequência?",
  "faq.11.a":
    "Não diretamente — esta calculadora espera uma lista de valores brutos individuais, não uma tabela de frequência com pares de valor/contagem. Para usá-la com dados agrupados, expanda cada valor pela sua frequência antes de colar (por exemplo, um valor 5 que ocorre 3 vezes vira 5, 5, 5 na entrada). Para tabelas de frequência grandes isso fica impraticável, já que a variância agrupada costuma ser calculada a partir de pontos médios e frequências com uma fórmula dedicada, em vez de valores brutos.",

  // ── SEO long-form ─────────────────────────────────────────────
  "seo.title": "Sobre esta calculadora de variância",
  "seo.p1":
    "O VarianceCalc é uma <b>calculadora de variância online</b> e gratuita, feita para quem precisa de uma resposta rápida e precisa sem batalhar com fórmulas de planilha ou o modo manual de uma calculadora científica. Cole uma lista de números — copiada direto do Excel, do Google Sheets, de um relatório em PDF ou digitada à mão — e a ferramenta retorna instantaneamente a variância, o desvio padrão, a média, a contagem e a soma dos quadrados, com toda a matemática mostrada passo a passo usando seus próprios números. Não há cadastro, não há instalação, e nenhum dado sai do seu navegador: cada cálculo roda no lado do cliente, então é seguro usar com números sensíveis ou proprietários.",
  "seo.p2":
    "O que diferencia esta <b>calculadora de variância</b> de um widget genérico de estatística é que ela trata a decisão entre amostral e populacional como um recurso de primeira classe, e não como um detalhe secundário. Ative o botão para usá-la como <b>calculadora de variância amostral</b>, dividindo por <code>n − 1</code> (correção de Bessel) para conjuntos de dados que representam um subconjunto de um grupo maior sobre o qual você quer tirar conclusões — pense em respostas de pesquisa, um lote de medições de laboratório ou notas de uma turma a partir das quais você quer generalizar. Ou mude para a <b>calculadora de variância populacional</b>, dividindo por <code>n</code>, quando seus números forem o conjunto completo, sem deixar nada de fora, como todos os funcionários de uma empresa ou todos os jogos de uma temporada encerrada. Escolher o modo errado é o erro mais comum ao calcular variância, então a calculadora exibe orientações em linguagem simples logo ao lado do botão, em vez de deixar você adivinhar.",
  "seo.p3":
    "Nos bastidores, o analisador foi construído para sobreviver a entradas reais e bagunçadas, em vez das listas limpas e separadas por vírgulas que a maioria das ferramentas de livro-texto espera. Os valores podem ser separados por vírgulas, espaços, tabulações, ponto e vírgula ou quebras de linha em qualquer combinação, e a calculadora lida corretamente com decimais, números negativos e notação científica. Como as vírgulas são sempre tratadas como separadores, um número colado como <code>91,100</code> é lido como dois valores — 91 e 100 — nunca mesclado silenciosamente em noventa e um mil e cem, um bug sutil que engana ferramentas mais simples. Símbolos avulsos de moeda (<code>$</code>) e de porcentagem (<code>%</code>) são removidos automaticamente, e qualquer token que ainda assim não puder ser lido como número é reportado com clareza, em vez de ser descartado sem explicação.",
  "seo.p4":
    "Além do número principal, esta calculadora de variância foi feita para ensinar tanto quanto calcular. Cada resultado vem com a fórmula completa resolvida usando seus dados reais — os desvios em relação à média, os desvios ao quadrado e a divisão final — para que você acompanhe exatamente como a resposta foi obtida e a confira com o seu próprio trabalho. Uma reta numérica de desvios visualiza o quão longe cada valor individual está da média, o que torna o conceito de \"dispersão\" concreto em vez de abstrato, especialmente útil para estudantes que aprendem variância e desvio padrão pela primeira vez. Casos extremos também são tratados com elegância: uma amostra de valor único retorna uma explicação clara em vez de um confuso <code>NaN</code>, e entradas vazias ou não numéricas produzem uma mensagem útil, em vez de uma falha silenciosa.",
  "seo.p5":
    "Toda a experiência foi projetada para não atrapalhar — sem criação forçada de conta, e seus dados nunca saem do seu navegador. Se você quiser compartilhar um resultado específico, uma ação explícita de \"Copiar link\" codifica seu conjunto de dados e o modo na URL; nada é gravado na barra de endereços apenas por digitar ou colar. Seja você um estudante conferindo a lição de casa, um pesquisador fazendo uma checagem rápida ou um analista que só precisa da variância e do desvio padrão sem abrir um pacote estatístico completo, esta calculadora foi feita para lhe dar uma resposta confiável e explicada em segundos.",

  // ── Calculator: server-rendered markup ────────────────────────
  "calc.heading": "Calculadora de variância",
  "calc.dataLabel": "Seu conjunto de dados",
  "calc.clear": "Limpar",
  "calc.placeholder":
    "Cole ou digite números — separados por vírgulas, espaços, tabulações ou novas linhas.\n\nex.: 88, 92, 79, 93, 85",
  "calc.examplesLabel": "Experimente um exemplo",
  "calc.example.scores": "Notas de provas",
  "calc.example.decimals": "Com decimais",
  "calc.example.negatives": "Inclui negativos",
  "calc.example.spreadsheet": "Colado de planilha",
  "calc.modeLegend": "Qual variância?",
  "calc.mode.sample": "Amostral",
  "calc.mode.population": "Populacional",
  "calc.empty": "Insira um conjunto de dados e seus resultados aparecem aqui na hora — sem botão para apertar.",
  "calc.stat.sd": "Desvio padrão",
  "calc.stat.mean": "Média (x̄)",
  "calc.stat.count": "Contagem (n)",
  "calc.stat.ss": "Soma dos quadrados",
  "calc.viz.caption": "Distância de cada valor em relação à média",
  "calc.viz.value": "valor",
  "calc.viz.mean": "média",
  "calc.steps.heading": "Passo a passo, com os seus números",

  // ── Calculator: client-side (shipped to the browser) ──────────
  "calc.label.sample": "Variância amostral (s²)",
  "calc.label.population": "Variância populacional (σ²)",
  "calc.copyLink": "Copiar link",
  "calc.linkCopied": "Link copiado",
  "calc.copyResults": "Copiar resultados",
  "calc.copied": "Copiado",
  "calc.pressCopy": "Pressione ⌘/Ctrl+C",
  "calc.explain.sample":
    "Use isto quando seus números forem uma amostra retirada de um grupo maior. Divide por n − 1 (correção de Bessel) para que a estimativa não fique enviesada para baixo. Esta é a escolha mais comum.",
  "calc.explain.population":
    "Use isto apenas quando seus números forem o grupo inteiro que lhe interessa — todos os membros, sem deixar nada de fora. Divide por n.",
  "calc.status.valid.one": "{n} número válido",
  "calc.status.valid.other": "{n} números válidos",
  "calc.status.invalid.one": "Entrada inválida, não incluída: {list}",
  "calc.status.invalid.other": "Entradas inválidas, não incluídas: {list}",
  "calc.more": "+{n} mais",
  "calc.quote": "“{s}”",
  "calc.listSep": ", ",
  "calc.invalidList": "Entradas inválidas",
  "calc.warn.none.title": "Nenhum número válido encontrado",
  "calc.warn.none.body.one":
    "Esta entrada não é um número, então não há nada a calcular. Insira valores separados por vírgulas, espaços, tabulações ou novas linhas — por exemplo: 4, 8, 15, 16, 23.",
  "calc.warn.none.body.other":
    "Nenhuma dessas entradas é um número, então não há nada a calcular. Insira valores separados por vírgulas, espaços, tabulações ou novas linhas — por exemplo: 4, 8, 15, 16, 23.",
  "calc.warn.some.title.one": "“{token}” não é um número válido",
  "calc.warn.some.title.other": "{n} entradas não são números válidos",
  "calc.warn.some.body.one":
    "Ela foi deixada de fora, então os resultados usam apenas {valid}. Corrija-a ou remova-a para ter certeza de que seus resultados refletem seus dados.",
  "calc.warn.some.body.other":
    "Elas foram deixadas de fora, então os resultados usam apenas {valid}. Corrija-as ou remova-as para ter certeza de que seus resultados refletem seus dados.",
  "calc.undef.title": "A variância amostral é indefinida para um único valor",
  "calc.undef.body":
    "A variância amostral divide por n − 1, e com um ponto de dados isso é 0 — não se pode dividir por zero. Adicione pelo menos mais um valor, ou mude para a variância populacional (que divide por n e é igual a 0 para um único ponto).",
  "calc.step1": "Encontre a média",
  "calc.step2": "Eleve ao quadrado a distância de cada valor em relação à média",
  "calc.step3": "Some as distâncias ao quadrado (soma dos quadrados)",
  "calc.step4.sample": "Divida por n − 1",
  "calc.step4.population": "Divida por n",
  "calc.step5": "Extraia a raiz quadrada para o desvio padrão",
  "calc.step.more": "… e mais {n}",
  "calc.step.excluded": "Não incluídos (não são números): {list}",
  "calc.viz.aria": "Reta numérica mostrando cada ponto de dados e a média",
  "calc.viz.deviation": "desvio",
  "calc.summary.sd": "Desvio padrão",
  "calc.summary.mean": "Média",
  "calc.summary.count": "Contagem",
  "calc.summary.ss": "Soma dos quadrados",
  "calc.summary.warn.one": "Aviso: {n} entrada inválida excluída: {list}",
  "calc.summary.warn.other": "Aviso: {n} entradas inválidas excluídas: {list}",
} as const;

export default pt;
