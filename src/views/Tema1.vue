<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 #[i Prompts]: concepto y principios fundamentales

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los  #[i prompts] son instrucciones, preguntas o indicaciones diseñadas para guiar la producción de un resultado específico, especialmente en el contexto de la inteligencia artificial y el procesamiento del lenguaje natural. En esencia, son entradas que se proporcionan a un modelo de lenguaje para generar respuestas, textos o realizar tareas. La claridad y precisión de un  #[i prompt] determinan directamente la calidad y relevancia de las respuestas generadas.

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Importancia de los #[i prompts]

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 El uso efectivo de  #[i prompts] es fundamental en diversos campos, desde la redacción creativa hasta la programación, el análisis de datos y la educación. Un  #[i prompt] bien formulado no solo mejora la calidad de la respuesta, sino que también optimiza la eficiencia del proceso de interacción con los modelos de lenguaje.

      p.mb-5(data-aos='fade-right') Comprender cómo diseñar un  #[i prompt] efectivo permite:
      .row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img.wcus-1.m-auto(src='@/assets/curso/temas/t1/3.svg' alt='')
            .tarjeta.color-primario
              .p-4.mt-3
                p.mb-0.text-center #[b Maximizar la precisión de las respuestas:] un  #[i prompt] claro y detallado reduce la probabilidad de respuestas ambiguas o irrelevantes.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img.wcus-1.m-auto(src='@/assets/curso/temas/t1/4.svg' alt='')
            .tarjeta.color-primario
              .p-4.mt-3
                p.mb-0.text-center #[b Ahorro de tiempo y recursos:] al generar resultados más certeros desde el inicio, se disminuye la necesidad de múltiples correcciones o ajustes.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img.wcus-2.m-auto(src='@/assets/curso/temas/t1/5.svg' alt='')
            .tarjeta.color-primario
              .p-4.mt-3
                p.mb-0.text-center #[b Facilitar la creatividad y exploración:]  #[i prompts] bien elaborados pueden inspirar nuevas ideas o enfoques en proyectos creativos, académicos o profesionales.

      .bg-full-width.bg-fondo-1.mb-5(data-aos='fade-right')
        .p-full-width
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 1.] Principios fundamentales  de los #[i prompts]
          .tabla-a.color-secundario.mb-0
            table(alt="Los  #[i prompts] son instrucciones clave que guían a los modelos de lenguaje para generar respuestas precisas y relevantes. Su efectividad depende de principios como claridad, contexto, directividad, flexibilidad y simplicidad. Incluir ejemplos dentro del  #[i prompt] ayuda a orientar al modelo hacia el estilo o formato deseado. Aplicar estos principios permite obtener resultados más coherentes, útiles y creativos en diversas tareas.")
              thead
                tr
                  th.wcus-3 Principio
                  th Descripción
                  th Beneficios
                  th Ejemplo práctico
                  th Recomendaciones
              tbody
                tr
                  td.fw-bold Claridad
                  td.textcus-1 El #[i prompt] debe ser específico y comprensible, evitando ambigüedades que puedan generar respuestas confusas o irrelevantes.
                  td.textcus-1 Mejora la precisión y relevancia de la respuesta; reduce errores de interpretación.
                  td.textcus-1 "Describe las principales causas del cambio climático."
                  td.textcus-1 Usa lenguaje directo, evita términos vagos o generalizaciones.

                tr
                  td.fw-bold Contexto
                  td.textcus-1 Proporcionar información adicional o antecedentes relevantes para que el modelo comprenda mejor la situación.
                  td.textcus-1 Genera respuestas coherentes y alineadas con el tema; facilita análisis más profundo.
                  td.textcus-1 "Explica la fotosíntesis considerando los distintos tipos de plantas."
                  td.textcus-1 Incluye datos importantes, referencias o escenarios cuando sea necesario.

                tr
                  td.fw-bold Directividad
                  td.textcus-1 Indicar claramente el tipo de respuesta esperado, usando verbos de acción como “enumera”, “describe”, “explica”, “analiza”.
                  td.textcus-1 Orienta al modelo y reduce la necesidad de aclaraciones adicionales; mejora la utilidad de la respuesta.
                  td.textcus-1 "Enumera cinco ventajas de la energía solar."
                  td.textcus-1 Selecciona verbos precisos y evita instrucciones abiertas que generen respuestas muy vagas.

                tr
                  td.fw-bold Flexibilidad
                  td.textcus-1 Permitir cierto margen de creatividad para que el modelo ofrezca respuestas diversas e innovadoras.
                  td.textcus-1 Fomenta la creatividad, el pensamiento crítico y soluciones originales.
                  td.textcus-1 "Crea una historia sobre un robot que aprende emociones."
                  td.textcus-1 Balancea la flexibilidad con directividad: guía sin restringir demasiado.

                tr
                  td.fw-bold Simplicidad
                  td.textcus-1 Mantener el lenguaje sencillo y directo, evitando jerga técnica innecesaria.
                  td.textcus-1 Facilita la comprensión por parte del modelo; reduce respuestas confusas.
                  td.textcus-1 "Resume el capítulo sobre la segunda guerra mundial en 3 frases."
                  td.textcus-1 Usa oraciones cortas y palabras comunes; divide instrucciones complejas en pasos.

                tr
                  td.fw-bold Ejemplos
                  td.textcus-1 Incluir ejemplos dentro del  #[i prompt] que muestren el estilo, formato o enfoque deseado.
                  td.textcus-1 Ayuda al modelo a entender mejor lo esperado; aumenta la calidad del resultado.
                  td.textcus-1 "Escribe un poema similar a este ejemplo: 'el sol brilla sobre el mar...'."
                  td.textcus-1 Proporciona ejemplos representativos y relevantes, sin saturar el  #[i prompt].


      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Tipos de #[i Prompts]
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/6.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Comprender qué son los prompts, sus tipos y cómo formularlos de manera efectiva es clave para aprovechar al máximo las capacidades de la IA, mejorar la precisión de las respuestas y fomentar la creatividad en distintos ámbitos, desde la educación hasta la investigación y el desarrollo de contenidos digitales. Existen diferentes tipos de  #[i prompts] que pueden ser utilizados dependiendo de la finalidad deseada.
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 2.] Tipos de #[i prompts]
      .tabla-a.color-secundario.mb-5(data-aos='fade-right')
        table(alt="Los  prompts se clasifican según su finalidad: informativos, para obtener datos precisos; creativos, para generar ideas o narrativas originales; analíticos, para evaluar y analizar información; y reflexivos, para fomentar la reflexión y la expresión de opiniones. Formular prompts efectivos, siguiendo principios como claridad, contexto y directividad, permite obtener respuestas más precisas, coherentes y creativas.")
          thead
            tr
              th.wcus-3 Tipo de  #[i Prompt]
              th Descripción
              th Ejemplo
              th Objetivo
          tbody
            tr
              td.fw-bold.textcus-1 Informativo
              td.textcus-1 Solicita información específica y concreta.
              td.textcus-1 "¿Cuáles son las causas del cambio climático?"
              td.textcus-1 Obtener datos precisos y verificables.

            tr
              td.fw-bold.textcus-1 Creativo
              td.textcus-1 Genera ideas originales, narrativas o soluciones innovadoras.
              td.textcus-1 "Escribe una historia corta sobre un viaje a otro planeta."
              td.textcus-1 Fomentar creatividad y pensamiento imaginativo.

            tr
              td.fw-bold.textcus-1 Analítico
              td.textcus-1 Se centra en el análisis y evaluación de datos, situaciones o problemas.
              td.textcus-1 "Analiza los principales desafíos de implementar energías renovables."
              td.textcus-1 Facilitar el razonamiento crítico y la comprensión profunda.

            tr
              td.fw-bold.textcus-1 Reflexivo
              td.textcus-1 Invita a la reflexión o a expresar opiniones personales.
              td.textcus-1 "¿Qué impacto tiene la tecnología en nuestras relaciones personales?"
              td.textcus-1 Promover la introspección y la argumentación fundamentada.



      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/t1/7.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La formulación de  #[i prompts] efectivos es un arte y una ciencia que requiere práctica y comprensión. Siguiendo los principios fundamentales de claridad, contexto, directividad, flexibilidad, simplicidad y ejemplos, es posible mejorar significativamente la interacción con modelos de lenguaje. Un buen  #[i prompt] no solo es la clave para obtener información precisa, sino que también fomenta la innovación y la creatividad en el uso de tecnología avanzada.




      Separador      
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Técnicas de mejora de la interacción con modelos de inteligencia artificial
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/8.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Crear  #[i prompts] efectivos es fundamental para obtener los resultados deseados al interactuar con modelos de inteligencia artificial. La calidad del  #[i prompt] puede determinar la relevancia y precisión de las respuestas generadas. A continuación, se presentan diversas técnicas y estrategias que contribuyen a la creación de  #[i prompts] eficaces.

      .tarjeta.bg-fondo-2.p-5.mb-5(data-aos='fade-right')
        SlyderA(tipo="b")
          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Claridad en la formulación
              p.mb-3 Formular el #[i prompt] de manera clara, precisa y sin ambigüedades.
              p.mb-0 En lugar de “¿cuáles son las mejores prácticas?”, usar “¿cuáles son las mejores prácticas para la enseñanza en línea en educación superior?”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/11.png', alt='')
          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Contextualización del #[i prompt] 
              p.mb-3 Ofrecer contexto relevante que guíe al modelo hacia una respuesta adecuada.  
              p.mb-0 “En el contexto de la educación, ¿qué es la IA y cómo puede mejorar la experiencia de aprendizaje?”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/12.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Uso de ejemplos
              p.mb-3 Incluir ejemplos en el #[i prompt] para clarificar el formato o el tipo de respuesta esperada.  
              p.mb-0 “Genera un resumen de 200 palabras sobre los efectos del cambio climático. Por ejemplo: el cambio climático afecta la agricultura al modificar patrones de lluvia…”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/13.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Instrucciones paso a paso
              p.mb-3 Dividir la tarea en pasos secuenciales para facilitar el procesamiento.  
              p.mb-0 “Primero, explica qué es el aprendizaje automático. Luego, describe su aplicación en medicina y finalmente discute sus beneficios”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/14.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Estímulos creativos
              p.mb-3 Emplear un lenguaje que sugiera creatividad favorece respuestas innovadoras y originales.  
              p.mb-0 “Imagínate que eres un científico del futuro. ¿Cómo describirías el impacto de la tecnología en la humanidad en 2050?”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/15.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Limitaciones y especificaciones
              p.mb-3 Definir con claridad formato, extensión o tono deseado en la respuesta.  
              p.mb-0 “Redacta un correo electrónico formal de invitación para una conferencia, no debe exceder las 150 palabras”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/16.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Probar y refinar
              p.mb-3 Ajustar los #[i prompts] mediante un proceso iterativo de prueba y corrección.  
              p.mb-0 Si un #[i prompt] no da el resultado esperado, modificar la formulación hasta alcanzar la precisión deseada.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/17.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Comprender al usuario
              p.mb-3 Adaptar el lenguaje y los ejemplos según la audiencia o usuario final.  
              p.mb-0 Para un estudiante universitario, usar lenguaje técnico; para público general, simplificar y proporcionar definiciones.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/18.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Fomentar la reflexión crítica
              p.mb-3 Formular preguntas que inviten al análisis profundo y balanceado.  
              p.mb-0 “¿Cuáles son los pros y contras del uso de la inteligencia artificial en el ámbito laboral? Sustenta tu opinión con ejemplos”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/19.png', alt='')

          .row.justify-content-center.pcus-1
            .col-sm-12.col-lg-6
              h4 Utilización de palabras clave
              p.mb-3 Incorporar términos clave que dirijan la atención del modelo a temas concretos.  
              p.mb-0 “Habla sobre la sostenibilidad en la industria de la moda y menciona materiales reciclables y producción ética”.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/20.png', alt='')


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-1.p-4
            p.mb-0 Las técnicas para elaborar #[i prompts] efectivos son fundamentales para optimizar la interacción con los modelos de inteligencia artificial. Al aplicar estrategias adecuadas, es posible obtener resultados más precisos y relevantes.















      Separador      
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 #[i Prompts] efectivos
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Los #[i prompts] efectivos comparten un conjunto de características que facilitan la generación de respuestas relevantes, coherentes y de alta calidad. Estas no solo orientan al modelo, sino que también permiten al usuario obtener con mayor precisión el tipo de información que busca. A continuación, se presentan dichas características:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-2")
            .div(titulo="Claridad")
              p.mb-3 Un #[i prompt] claro y bien estructurado es fundamental, ya que la ausencia de ambigüedades facilita que el modelo comprenda la solicitud y reduzca errores de interpretación. 
              p.mb-0 #[b Ejemplo:] en lugar de preguntar “¿cuáles son las mejores prácticas?”, se puede formular “¿cuáles son las mejores prácticas para la enseñanza en línea en educación superior?”.
            .div(titulo="Contexto")
              p.mb-3 Proporcionar un marco o información de referencia relevante guía al modelo hacia respuestas más alineadas con la intención del usuario.
              p.mb-0 #[b Ejemplo:] en vez de preguntar “¿qué es la inteligencia artificial?”, resulta más útil “en el contexto de la educación, ¿qué es la inteligencia artificial y cómo puede mejorar la experiencia de aprendizaje?”.

            .div(titulo="Especificidad")
              p.mb-3 Indicar con precisión el tipo de respuesta deseada (ya sea un resumen, una comparación, una explicación sencilla, un esquema o un análisis crítico) mejora la efectividad del #[i prompt].
              p.mb-0 #[b Ejemplo:] “compara las características de la democracia y la dictadura en términos de participación ciudadana”.

            .div(titulo="Adaptación a la audiencia")
              p.mb-3 Un buen #[i prompt] considera a quién va dirigida la respuesta, ajustando el nivel de lenguaje, los ejemplos y la complejidad.
              p.mb-0 #[b Ejemplo:] “explica cómo funciona la fotosíntesis en términos sencillos, adecuados para un niño de 10 años”.

            .div(titulo="Instrucciones detalladas")
              p.mb-3 Cuando la tarea es compleja, dividir la solicitud en pasos o incluir instrucciones adicionales facilita que el modelo organice la respuesta de manera ordenada y completa.
              p.mb-0 #[b Ejemplo:] “primero, define qué es el aprendizaje automático. Luego, describe una aplicación en medicina y finalmente analiza sus beneficios”.

            .div(titulo="Limitaciones y especificaciones")
              p.mb-3 Establecer límites claros (como la extensión, el tono o el formato) enfoca la respuesta en lo realmente necesario y evita resultados demasiado amplios.
              p.mb-0 #[b Ejemplo:] “redacta un correo formal de invitación a una conferencia en no más de 150 palabras”.

            .div(titulo="Inclusión de palabras clave")
              p.mb-3 La integración de términos clave dentro del #[i prompt] ayuda al modelo a centrarse en conceptos o áreas específicas, garantizando que la respuesta incluya los elementos solicitados.
              p.mb-0 #[b Ejemplo:] “redacta un texto sobre sostenibilidad en la moda que incluya los conceptos: materiales reciclables y producción ética”.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/21.png', alt='')


      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Ejemplos de #[i prompts]  efectivos:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.bg-fondo-3.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-4
                  img(src='@/assets/curso/temas/t1/22.svg')
            .bg-color-3.py-1.wcus-4.m-auto.px-3.mb-4
              h4.mb-0.text-center Ejemplo 1: generación de resúmenes
            p.mb-4 #[b #[i Prompt:]] "resume el capítulo 3 del libro Cien años de soledad en cinco frases."
            p.mb-0 #[b Razonamiento:] este #[i prompt] es claro y específico, lo que permite que el modelo se enfoque en un segmento concreto de la obra.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.bg-fondo-3.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-4
                  img(src='@/assets/curso/temas/t1/23.svg')
            .bg-color-3.py-1.wcus-4.m-auto.px-3.mb-4
              h4.mb-0.text-center Ejemplo 2: comparación
            p.mb-4 #[b #[i Prompt:]]  "compara las características de la democracia y la dictadura en términos de participación ciudadana."
            p.mb-0 #[b Razonamiento:] este #[i prompt] especifica tanto el tema como el enfoque, lo que dirige al modelo a explorar aspectos clave de la comparación.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
            .tarjeta--boton.bg-fondo-3.p-4.hcard-1
              .row.justify-content-center.mb-4
                .col-4
                    img(src='@/assets/curso/temas/t1/24.svg')
              .bg-color-3.py-1.wcus-4.m-auto.px-3.mb-4
                h4.mb-0.text-center Ejemplo 3: explicación técnica
              p.mb-4 #[b #[i Prompt:]] "explica cómo funciona la fotosíntesis en términos sencillos, adecuados para un niño de 10 años."
              p.mb-0 #[b Razonamiento:] al definir una audiencia objetivo, este #[i prompt] ayuda a ajustar el nivel de complejidad del lenguaje y la información proporcionada.




      Separador      
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 #[i Prompts] no efectivos
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/10.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Por otro lado, existen #[i prompts] que no logran generar las respuestas esperadas debido a la ausencia de claridad, contexto o especificidad. A continuación, se presentan algunos ejemplos de #[i prompts] que pueden resultar ineficaces. A continuación, sus principales características:  

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9
          TabsA.color-primario
            .tarjeta.bg-fondo-4.p-5(titulo="Ambigüedad")
              p.mb-3 Un #[i prompt] ambiguo carece de precisión en la solicitud, lo que puede dar lugar a interpretaciones múltiples o respuestas irrelevantes. Esta falta de claridad dificulta que el modelo entienda el enfoque exacto de la pregunta.
              p.mb-0 #[b Ejemplo:] “cuéntame sobre el libro” no indica si se busca un resumen, una descripción de personajes, el análisis de la trama o la valoración crítica.
            .tarjeta.bg-fondo-4.p-5(titulo="Falta de contexto")
              p.mb-3 Sin un marco de referencia o información de apoyo, el modelo no cuenta con pistas suficientes para comprender el tema central. Esto genera respuestas desconectadas de la intención real del usuario.
              p.mb-0 #[b Ejemplo:] “¿por qué es importante?” resulta ineficaz, ya que no aclara qué aspecto, tema o situación se está evaluando.
            .tarjeta.bg-fondo-4.p-5(titulo="Generalidad")
              p.mb-3 Los #[i prompts] demasiado amplios o vagos impiden al modelo enfocar su respuesta en un área concreta, lo que produce resultados superficiales o poco útiles. 
              p.mb-0 #[b Ejemplo:] “explícame todo sobre la historia” es tan general que el modelo podría ofrecer una respuesta extensa, pero sin profundidad en los aspectos de interés para el usuario.

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/25.png', alt='')

      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Ejemplos de #[i prompts] no efectivos:


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.bg-fondo-3.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-4
                  img(src='@/assets/curso/temas/t1/26.svg')
            .bg-color-3.py-1.wcus-4.m-auto.px-3.mb-4
              h4.mb-0.text-center Ejemplo 1: pregunta ambigua
            p.mb-4 #[b #[i Prompt:]]  “cuéntame sobre el libro.”
            p.mb-0 #[b Razonamiento:] este #[i prompt] es demasiado impreciso y no define qué aspecto del libro se desea explorar (trama, personajes, tema, análisis, etc.). La falta de especificidad genera respuestas generales y poco útiles.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.bg-fondo-3.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-4
                  img(src='@/assets/curso/temas/t1/27.svg')
            .bg-color-3.py-1.wcus-4.m-auto.px-3.mb-4
              h4.mb-0.text-center Ejemplo 2: falta de contexto
            p.mb-4 #[b #[i Prompt:]]  “¿por qué es importante?”
            p.mb-0 #[b Razonamiento:] al no indicar el tema al que se refiere “importante”, el modelo carece de un marco de referencia para responder de manera coherente y relevante.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.bg-fondo-3.p-4.hcard-1
            .row.justify-content-center.mb-4
              .col-4
                    img(src='@/assets/curso/temas/t1/28.svg')
              .bg-color-3.py-1.wcus-4.m-auto.px-3.mb-4
                h4.mb-0.text-center Ejemplo 3: demasiado general
              p.mb-4 #[b #[i Prompt:]] “explícame todo sobre la historia.”
              p.mb-0 #[b Razonamiento:] esta solicitud es excesivamente amplia y no delimita un enfoque particular. El modelo puede generar una respuesta extensa, pero superficial y sin atender a un área específica de interés.



      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Casos de uso

      p.mb-5(data-aos='fade-right') Diferentes situaciones requieren diferentes tipos de #[i prompts]. A continuación, se presentan algunos casos de uso que ilustran cómo los #[i prompts] efectivos y no efectivos impactan en los resultados.
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.mb-cus
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 3.] Casos  de uso #[i Prompts]
          .tabla-a.color-secundario.mb-0
            table.tabla-3(alt="")
              thead
                tr
                  th Casos efectivos
                  th Casos no efectivos
              tbody
                tr
                  td.textcus-1 
                    | #[b Educación:] un profesor puede pedir resúmenes o análisis mediante #[i prompts] claros, promoviendo el pensamiento crítico y la comprensión.
                  td.textcus-1 
                    | #[b Interacción con clientes:] #[i prompts] vagos en sistemas de soporte pueden generar malentendidos y frustración.

                tr
                  td.textcus-1 
                    | #[b Investigación:] los investigadores que formulan #[i prompts] específicos pueden recopilar información relevante de manera eficiente.
                  td.textcus-1 
                    | #[b Búsqueda de información:] preguntas imprecisas en motores de búsqueda producen resultados irrelevantes.

                tr
                  td.textcus-1 
                    | #[b Desarrollo de contenido:] creadores de contenido utilizan #[i prompts] concretos para obtener ideas y guías que apoyan su proceso creativo.
                  td.textcus-1 
                    | #[b Educación no estructurada:] estudiantes con #[i prompts] ambiguos pueden sentirse desorientados, afectando su aprendizaje y motivación.
        .col-sm-12.col-lg-6.mb-cus
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 4.] Casos de uso de la  IA en la vida real
          .tabla-a.color-secundario.mb-0
            table.tabla-4(alt="")
              thead
                tr
                  th.wcus-5 Ámbito
                  th Ejemplo
              tbody
                tr
                  td.textcus-1 #[b Mapas y navegación]
                  td.textcus-1 Google Maps analiza el tráfico y accidentes para recomendar la mejor ruta.

                tr
                  td.textcus-1 #[b Recomendaciones personalizadas]
                  td.textcus-1 Redes sociales y tiendas #[i online] sugieren videos, canciones o productos según preferencias.

                tr
                  td.textcus-1 #[b Asistentes virtuales]
                  td.textcus-1 Alexa, Siri o Google Assistant responden preguntas y ayudan con recordatorios.

                tr
                  td.textcus-1 #[b Educación personalizada]
                  td.textcus-1 Plataformas ajustan ejercicios y contenidos al ritmo y necesidades de cada estudiante.

                tr
                  td.textcus-1 #[b Cuidado de la salud]
                  td.textcus-1 Dispositivos inteligentes monitorean signos vitales y sistemas analizan radiografías para detectar enfermedades.

                tr
                  td.textcus-1 #[b Domótica]
                  td.textcus-1 Hogares inteligentes regulan temperatura, encienden luces o detectan intrusos mediante #[i IA].


      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/29.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Entender estos casos ayuda a ver que la IA está presente en la vida diaria y que no es algo lejano o complicado, sino una herramienta que resuelve problemas reales y puede mejorar la vida en diferentes áreas: salud, educación, trabajo, transporte y entretenimiento.

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
