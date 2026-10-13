import type { Dictionary } from "./en";

const es: Dictionary = {
  // ── Meta / SEO ────────────────────────────────────────────────
  "meta.title": "Calculadora de varianza — varianza muestral y poblacional",
  "meta.description":
    "Calculadora de varianza online y gratuita para varianza muestral y varianza poblacional. Pega cualquier conjunto de datos y obtén la varianza, la desviación estándar, la media, el conteo y la suma de cuadrados con cada paso explicado.",
  "meta.ogImageAlt": "VarianceCalc — calculadora de varianza online y gratuita",
  "meta.appName": "Calculadora de varianza",
  "meta.appDescription":
    "Calculadora de varianza online y gratuita para varianza muestral y varianza poblacional, con desviación estándar, media, conteo, suma de cuadrados y el procedimiento paso a paso sobre tus propios datos.",

  // ── Chrome: skip link, header, footer, theme, language ────────
  "skip.calculator": "Saltar a la calculadora",
  "skip.main": "Saltar al contenido principal",
  "nav.home": "Inicio de VarianceCalc",
  "nav.primary": "Principal",
  "nav.guide": "Guía",
  "nav.faq": "Preguntas frecuentes",
  "nav.about": "Acerca de",
  "nav.contact": "Contacto",
  "nav.quickLinks": "Enlaces rápidos",
  "nav.privacy": "Política de privacidad",
  "nav.terms": "Términos",
  "footer.label": "Pie de página",
  "footer.about": "Acerca de nosotros",
  "footer.contact": "Contáctanos",
  "footer.privacy": "Política de privacidad",
  "footer.terms": "Términos y condiciones",
  "footer.note": "Ningún dato sale de tu dispositivo a menos que decidas compartir un enlace.",
  "lang.label": "Idioma",
  "theme.toDark": "Cambiar al modo oscuro",
  "theme.toLight": "Cambiar al modo claro",
  "theme.title": "Alternar modo oscuro",

  // ── Hero ──────────────────────────────────────────────────────
  "hero.title": "La varianza, resuelta paso a paso",
  "hero.subtitle":
    "Pega cualquier conjunto de datos, incluidas columnas desordenadas de una hoja de cálculo. Obtén la varianza muestral o poblacional, la desviación estándar y la media, con cada paso explicado sobre tus números reales.",

  // ── Guide ─────────────────────────────────────────────────────
  "guide.title": "¿Muestral o poblacional? La decisión que confunde a todos",
  "guide.intro":
    "Ambas miden qué tan dispersos están tus números. La única diferencia es entre qué divides, y elegir mal es el error más común al calcular la varianza. Así puedes decidir de un solo vistazo.",
  "guide.sample.title": "Varianza muestral",
  "guide.sample.body":
    "Tus datos son un <b>subconjunto</b> de un grupo mayor que quieres comprender. Divide entre <code>n − 1</code> para no subestimar la dispersión real.",
  "guide.sample.examples":
    "Encuestas, experimentos, un lote de mediciones, las calificaciones de algunos estudiantes: <em>úsala siempre que tus números sean una muestra tomada de una población mayor sobre la que quieres sacar conclusiones.</em>",
  "guide.population.title": "Varianza poblacional",
  "guide.population.body":
    "Tus datos son el <b>grupo completo</b>, sin dejar nada fuera. Divide entre <code>n</code>: la dispersión exacta de ese conjunto completo.",
  "guide.population.examples":
    "Todos los empleados de una empresa, todos los partidos de una temporada, un censo completo: casos en los que no hay un grupo mayor del que inferir.",
  "guide.note":
    "Con los mismos datos, de ambas formas: la varianza muestral siempre es un poco mayor que la poblacional, porque dividir entre el número menor (<code>n − 1</code>) hace que el resultado sea mayor. Esa diferencia se reduce a medida que crece tu conjunto de datos.",

  // ── FAQ ───────────────────────────────────────────────────────
  "faq.title": "Preguntas, respondidas",
  "faq.1.q": "¿Debo usar la varianza muestral o la poblacional?",
  "faq.1.a":
    "Usa la varianza muestral (÷ n − 1) cuando tus números sean una muestra tomada de un grupo mayor sobre el que quieres aprender: respuestas de una encuesta, un lote de mediciones, resultados de algunos estudiantes. Usa la varianza poblacional (÷ n) solo cuando tus números sean el grupo completo, sin dejar nada fuera. Ante la duda, la muestral es la opción más segura; elegir la poblacional sobre datos muestrales subestima ligeramente la dispersión real.",
  "faq.2.q": "¿Por qué la varianza muestral divide entre n − 1 en lugar de n?",
  "faq.2.a":
    "Se llama corrección de Bessel. Como la media se estima a partir de la misma muestra, dividir entre n subestimaría sistemáticamente la dispersión real. Dividir entre n − 1 (los grados de libertad) corrige ese sesgo y ofrece una estimación insesgada de la varianza poblacional.",
  "faq.3.q": "¿Cuál es la diferencia entre varianza y desviación estándar?",
  "faq.3.a":
    "La desviación estándar es simplemente la raíz cuadrada de la varianza. La varianza está en unidades al cuadrado (dólares², cm²), lo cual es difícil de imaginar; la desviación estándar vuelve a las unidades originales, por lo que es más fácil de interpretar. Mostramos ambas.",
  "faq.4.q": "¿Cómo debo dar formato a mis datos?",
  "faq.4.a":
    "Como los tengas. Pégalos directamente desde una hoja de cálculo, un documento, o escríbelos a mano: los valores pueden separarse por comas, espacios, tabulaciones o saltos de línea. Los decimales y los números negativos funcionan, y los símbolos de moneda o porcentaje sueltos se ignoran automáticamente.",
  "faq.5.q": "¿Por qué la varianza muestral no está definida para un único valor?",
  "faq.5.a":
    "La varianza muestral divide entre n − 1. Con un solo dato ese denominador es 0, y dividir entre cero no está definido. Añade otro valor o cambia a la varianza poblacional, que divide entre n y es 0 para un único punto.",
  "faq.6.q": "¿Mis datos se envían a algún sitio?",
  "faq.6.a":
    "No. Cada cálculo se ejecuta por completo en tu navegador: nada de lo que escribes se sube, se registra ni se almacena. Tu conjunto de datos solo se incluye en una URL si haces clic explícitamente en «Copiar enlace» para compartirlo; escribir o pegar datos nunca cambia la barra de direcciones por sí solo.",
  "faq.7.q": "¿Cuál es la diferencia entre varianza muestral y poblacional?",
  "faq.7.a":
    "La diferencia está en entre qué divides la suma de las desviaciones al cuadrado. La varianza muestral divide entre n − 1 y se usa cuando tus datos son un subconjunto tomado de un grupo mayor sobre el que quieres sacar conclusiones. La varianza poblacional divide entre n y se usa solo cuando tus datos son el grupo completo, sin dejar nada fuera. La varianza muestral siempre es un poco mayor para los mismos números, ya que dividir entre un número menor produce un resultado mayor; esa diferencia se reduce a medida que crece el conjunto de datos.",
  "faq.8.q": "¿Por qué obtengo un error con un solo dato?",
  "faq.8.a":
    "La varianza muestral divide entre n − 1, y con un solo valor ese denominador se vuelve 0: la división entre cero no está definida matemáticamente, así que no hay un resultado válido que mostrar. Esta calculadora lo explica en lugar de devolver NaN. Si necesitas un resultado para un único dato, cambia a la varianza poblacional, que divide entre n y devuelve correctamente 0, ya que un solo valor no tiene dispersión respecto a sí mismo.",
  "faq.9.q": "¿Qué símbolo representa la varianza?",
  "faq.9.a":
    "La varianza poblacional se escribe como σ² (sigma minúscula al cuadrado), y la varianza muestral se escribe como s². Ambas se leen como «varianza»; el símbolo al cuadrado recuerda que la varianza se mide en unidades al cuadrado de los datos originales (por ejemplo, dólares² o cm²), razón por la cual la desviación estándar, su raíz cuadrada, suele usarse junto a ella para facilitar la interpretación.",
  "faq.10.q": "¿Esta calculadora muestra los pasos para calcular la varianza?",
  "faq.10.a":
    "Sí. Cada resultado incluye la solución completa desarrollada con tus números reales: la media, la desviación de cada valor respecto a la media, las desviaciones al cuadrado, su suma y la división final entre n o n − 1. Una recta numérica de desviaciones también muestra qué tan lejos se sitúa cada valor de la media, para que puedas verificar la respuesta y entender cómo se llegó a ella en lugar de ver solo un número final.",
  "faq.11.q": "¿Puedo calcular la varianza a partir de datos agrupados o de frecuencia?",
  "faq.11.a":
    "No directamente: esta calculadora espera una lista de valores individuales sin procesar, no una tabla de frecuencias con pares de valor y conteo. Para usarla con datos agrupados, expande cada valor según su frecuencia antes de pegarlo (por ejemplo, un valor de 5 que aparece 3 veces se convierte en 5, 5, 5 en la entrada). Para tablas de frecuencia grandes esto resulta poco práctico, ya que la varianza agrupada suele calcularse a partir de marcas de clase y frecuencias con una fórmula específica en vez de valores sin procesar.",

  // ── SEO long-form ─────────────────────────────────────────────
  "seo.title": "Acerca de esta calculadora de varianza",
  "seo.p1":
    "VarianceCalc es una <b>calculadora de varianza online</b> gratuita, creada para cualquiera que necesite una respuesta rápida y precisa sin pelear con la fórmula de una hoja de cálculo ni con el modo manual de una calculadora científica. Pega una lista de números —copiada directamente de Excel, Google Sheets, un informe en PDF o escrita a mano— y la herramienta devuelve al instante la varianza, la desviación estándar, la media, el conteo y la suma de cuadrados, con las operaciones mostradas paso a paso usando tus propios números. No hay registro, ni instalación, y ningún dato sale nunca de tu navegador: cada cálculo se ejecuta en el cliente, así que puedes usarla con cifras sensibles o confidenciales sin problema.",
  "seo.p2":
    "Lo que distingue a esta <b>calculadora de varianza</b> de un widget de estadística genérico es que trata la decisión entre muestra y población como una función central y no como algo secundario. Activa el interruptor para usarla como <b>calculadora de varianza muestral</b>, dividiendo entre <code>n − 1</code> (corrección de Bessel) para conjuntos de datos que representan un subconjunto de un grupo mayor sobre el que quieres sacar conclusiones: respuestas de encuestas, un lote de mediciones de laboratorio o las notas de una clase que quieres generalizar. O conviértela en una <b>calculadora de varianza poblacional</b>, dividiendo entre <code>n</code>, cuando tus números sean el conjunto completo sin dejar nada fuera, como todos los empleados de una empresa o todos los partidos de una temporada terminada. Elegir el modo equivocado es el error más común al calcular la varianza, así que la calculadora ofrece orientación en lenguaje sencillo junto al interruptor en lugar de dejarte adivinar.",
  "seo.p3":
    "Por dentro, el analizador está diseñado para sobrevivir a entradas reales y desordenadas, no a las listas limpias separadas por comas que esperan la mayoría de las herramientas de manual. Los valores pueden separarse por comas, espacios, tabulaciones, puntos y comas o saltos de línea en cualquier combinación, y la calculadora maneja correctamente los decimales, los números negativos y la notación científica. Como las comas siempre se tratan como separadores, un número pegado como <code>91,100</code> se lee como dos valores —91 y 100— y nunca se fusiona silenciosamente en noventa y un mil cien, un error sutil que confunde a las herramientas más simples. Los símbolos de moneda sueltos (<code>$</code>) y los signos de porcentaje (<code>%</code>) se eliminan automáticamente, y cualquier elemento que aún no pueda leerse como número se informa con claridad en lugar de descartarse sin explicación.",
  "seo.p4":
    "Más allá del número principal, esta calculadora de varianza está pensada para enseñar tanto como para calcular. Cada resultado viene con la fórmula completa desarrollada con tus datos reales —las desviaciones respecto a la media, las desviaciones al cuadrado y la división final—, para que puedas seguir exactamente cómo se llegó a la respuesta y cotejarla con tu propio trabajo. Una recta numérica de desviaciones muestra qué tan lejos se sitúa cada valor de la media, lo que hace que el concepto de «dispersión» sea concreto en lugar de abstracto, algo especialmente útil para los estudiantes que aprenden la varianza y la desviación estándar por primera vez. Los casos límite también se manejan con elegancia: una muestra de un solo valor devuelve una explicación clara en lugar de un confuso <code>NaN</code>, y una entrada vacía o no numérica produce un mensaje útil en vez de fallar en silencio.",
  "seo.p5":
    "Toda la experiencia está diseñada para no estorbar: sin creación de cuentas obligatoria, y tus datos nunca salen de tu navegador. Si quieres compartir un resultado concreto, la acción explícita «Copiar enlace» codifica tu conjunto de datos y el modo en la URL; nada se escribe en la barra de direcciones solo por escribir o pegar. Ya seas un estudiante revisando la tarea, un investigador haciendo una comprobación rápida o un analista que solo necesita la varianza y la desviación estándar sin abrir un paquete estadístico completo, esta calculadora está hecha para darte una respuesta fiable y explicada en segundos.",

  // ── Calculator: server-rendered markup ────────────────────────
  "calc.heading": "Calculadora de varianza",
  "calc.dataLabel": "Tu conjunto de datos",
  "calc.clear": "Borrar",
  "calc.placeholder":
    "Pega o escribe números, separados por comas, espacios, tabulaciones o saltos de línea.\n\np. ej. 88, 92, 79, 93, 85",
  "calc.examplesLabel": "Prueba un ejemplo",
  "calc.example.scores": "Calificaciones",
  "calc.example.decimals": "Con decimales",
  "calc.example.negatives": "Incluye negativos",
  "calc.example.spreadsheet": "Pegado de hoja de cálculo",
  "calc.modeLegend": "¿Qué varianza?",
  "calc.mode.sample": "Muestral",
  "calc.mode.population": "Poblacional",
  "calc.empty": "Introduce un conjunto de datos y tus resultados aparecen aquí al instante, sin botón que pulsar.",
  "calc.stat.sd": "Desv. estándar",
  "calc.stat.mean": "Media (x̄)",
  "calc.stat.count": "Conteo (n)",
  "calc.stat.ss": "Suma de cuadrados",
  "calc.viz.caption": "La distancia de cada valor respecto a la media",
  "calc.viz.value": "valor",
  "calc.viz.mean": "media",
  "calc.steps.heading": "Paso a paso, con tus números",

  // ── Calculator: client-side (shipped to the browser) ──────────
  "calc.label.sample": "Varianza muestral (s²)",
  "calc.label.population": "Varianza poblacional (σ²)",
  "calc.copyLink": "Copiar enlace",
  "calc.linkCopied": "Enlace copiado",
  "calc.copyResults": "Copiar resultados",
  "calc.copied": "Copiado",
  "calc.pressCopy": "Pulsa ⌘/Ctrl+C",
  "calc.explain.sample":
    "Úsala cuando tus números sean una muestra tomada de un grupo mayor. Divide entre n − 1 (corrección de Bessel) para que la estimación no quede sesgada demasiado baja. Es la opción más común.",
  "calc.explain.population":
    "Úsala solo cuando tus números sean el grupo completo que te interesa: cada miembro, sin dejar nada fuera. Divide entre n.",
  "calc.status.valid.one": "{n} número válido",
  "calc.status.valid.other": "{n} números válidos",
  "calc.status.invalid.one": "Entrada no válida, no incluida: {list}",
  "calc.status.invalid.other": "Entradas no válidas, no incluidas: {list}",
  "calc.more": "+{n} más",
  "calc.quote": "«{s}»",
  "calc.listSep": ", ",
  "calc.invalidList": "Entradas no válidas",
  "calc.warn.none.title": "No se encontraron números válidos",
  "calc.warn.none.body.one":
    "Esta entrada no es un número, así que no hay nada que calcular. Introduce valores separados por comas, espacios, tabulaciones o saltos de línea; por ejemplo: 4, 8, 15, 16, 23.",
  "calc.warn.none.body.other":
    "Ninguna de estas entradas es un número, así que no hay nada que calcular. Introduce valores separados por comas, espacios, tabulaciones o saltos de línea; por ejemplo: 4, 8, 15, 16, 23.",
  "calc.warn.some.title.one": "«{token}» no es un número válido",
  "calc.warn.some.title.other": "{n} entradas no son números válidos",
  "calc.warn.some.body.one":
    "Se dejó fuera, por lo que los resultados usan solo {valid}. Corrígela o elimínala para asegurarte de que tus resultados reflejen tus datos.",
  "calc.warn.some.body.other":
    "Se dejaron fuera, por lo que los resultados usan solo {valid}. Corrígelas o elimínalas para asegurarte de que tus resultados reflejen tus datos.",
  "calc.undef.title": "La varianza muestral no está definida para un único valor",
  "calc.undef.body":
    "La varianza muestral divide entre n − 1, y con un solo dato eso es 0: no se puede dividir entre cero. Añade al menos un valor más o cambia a la varianza poblacional (que divide entre n y equivale a 0 para un único punto).",
  "calc.step1": "Calcula la media (promedio)",
  "calc.step2": "Eleva al cuadrado la distancia de cada valor respecto a la media",
  "calc.step3": "Suma las distancias al cuadrado (suma de cuadrados)",
  "calc.step4.sample": "Divide entre n − 1",
  "calc.step4.population": "Divide entre n",
  "calc.step5": "Saca la raíz cuadrada para obtener la desviación estándar",
  "calc.step.more": "… y {n} más",
  "calc.step.excluded": "No incluidos (no son números): {list}",
  "calc.viz.aria": "Recta numérica que muestra cada dato y la media",
  "calc.viz.deviation": "desviación",
  "calc.summary.sd": "Desviación estándar",
  "calc.summary.mean": "Media",
  "calc.summary.count": "Conteo",
  "calc.summary.ss": "Suma de cuadrados",
  "calc.summary.warn.one": "Advertencia: se excluyó {n} entrada no válida: {list}",
  "calc.summary.warn.other": "Advertencia: se excluyeron {n} entradas no válidas: {list}",
};

export default es;
