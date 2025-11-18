export default {
  global: {
    Name: 'Inteligencia artificial generativa y predictiva',
    Description:
      'Este componente aborda el concepto de <i>prompts</i> en inteligencia artificial, destacando su importancia como instrucciones o preguntas que guían a los modelos de lenguaje para generar respuestas específicas y relevantes. Asimismo, se explican los conceptos básicos y las aplicaciones prácticas de la inteligencia artificial predictiva y generativa, resaltando las diferencias entre ambas, sus tipos, técnicas, aplicaciones y criterios éticos asociados. Todo ello se ejemplifica mediante situaciones cotidianas y entornos digitales, con el fin de facilitar su comprensión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<i>Prompts</i>: concepto y principios fundamentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de <i>prompts</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Técnicas de mejora de la interacción con modelos de inteligencia artificial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '<i>Prompts</i> efectivos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<i>Prompts</i> no efectivos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Inteligencia artificial predictiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de IA predictiva',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios de aplicación de la IA predictiva',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Inteligencia artificial generativa',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21720210_CF2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<i>Prompts</i>: concepto y principios fundamentales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2025). Aplicando <i>prompt</i> en una Inteligencia artificial generativa (<i>ChatGPT</i>).',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=tuJhXlC2z1Y&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Inteligencia artificial generativa',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2025). Generación de códigos de <i>software</i> con inteligencia artificial.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=l1eM-pZLVn0&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Inteligencia artificial generativa',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2025). Conociendo una inteligencia artificial generativa (<i>ChatGPT</i>).',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=nsiiw1GZHMk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'campo de la informática que busca que las máquinas imiten funciones humanas como aprender, razonar y decidir.',
    },
    {
      termino: 'Redes neuronales',
      significado:
        'algoritmos inspirados en el cerebro humano que permiten a la IA reconocer patrones y aprender.',
    },
    {
      termino: 'Aprendizaje automático (<i>machine learning</i>)',
      significado:
        'rama de la IA que entrena sistemas con datos para mejorar su desempeño sin programación explícita.',
    },
    {
      termino: 'Aprendizaje profundo (<i>deep learning</i>)',
      significado:
        'subcampo del <i>machine learning</i> que usa redes neuronales complejas para procesar grandes volúmenes de datos.',
    },
    {
      termino: 'Datos históricos',
      significado:
        'información recolectada en el pasado que se utiliza en IA predictiva para generar pronósticos.',
    },
    {
      termino: 'Predicción',
      significado:
        'estimación de eventos futuros a partir de patrones y datos previos.',
    },
    {
      termino: 'IA predictiva',
      significado:
        'tecnología que identifica patrones en datos pasados para anticipar comportamientos o riesgos.',
    },
    {
      termino: 'IA generativa',
      significado:
        'tecnología capaz de crear contenido nuevo como textos, imágenes, música o código.',
    },
    {
      termino: 'Modelos supervisados',
      significado:
        'algoritmos entrenados con datos etiquetados que guían las predicciones.',
    },
    {
      termino: 'Modelos no supervisados',
      significado:
        'algoritmos que buscan patrones en datos sin etiquetas previas.',
    },
    {
      termino: 'Regresión',
      significado:
        'técnica matemática para predecir valores numéricos en IA predictiva.',
    },
    {
      termino: 'Árboles de decisión',
      significado:
        'algoritmo que organiza decisiones en forma de árbol para clasificar o predecir resultados.',
    },
    {
      termino: 'Análisis de datos',
      significado: 'proceso de examinar datos para descubrir patrones útiles.',
    },
    {
      termino: 'Creatividad artificial',
      significado:
        'capacidad de la IA generativa para producir contenido original.',
    },
    {
      termino: 'Procesamiento del Lenguaje Natural (PLN)',
      significado:
        'tecnología que permite a la IA entender y generar lenguaje humano.',
    },
    {
      termino: '<i>Prompts</i>',
      significado:
        'instrucciones o preguntas que guían la generación de respuestas en modelos de IA.',
    },
    {
      termino: '<i>Chatbot</i>',
      significado: 'programa basado en IA que simula conversaciones humanas.',
    },
    {
      termino: 'Recomendadores',
      significado:
        'sistemas de IA que predicen y sugieren contenido personalizado, como en Netflix o Spotify.',
    },
    {
      termino: 'Mantenimiento predictivo',
      significado:
        'uso de IA para anticipar fallos en máquinas e infraestructura.',
    },
    {
      termino: 'Ética en IA',
      significado:
        'conjunto de principios para garantizar un uso responsable, transparente y seguro de la inteligencia artificial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Tapia, M. E., Eugenia Julissa, M. O., & Adriana Analy, E. Y. (2025). Implementación de las tecnologías inteligentes en el mercado laboral. Dilemas Contemporáneos: Educación, Política y Valore, Xii.',
    },

    {
      referencia:
        'López i Seuba, M. (2019). Internet de las cosas: la transformación digital de la sociedad. Ediciones de la U.',
    },

    {
      referencia:
        'Pineda Pertuz, C. M. (2021). Aprendizaje automático y profundo en <i>python</i>: una mirada hacia la inteligencia artificial. Ediciones de la U. ',
    },

    {
      referencia:
        'Wilderbeek, Francisco Leslie López del Castillo. (2024). Inteligencia artificial generativa: determinismo tecnológico o artefacto construido socialmente.',
    },

    {
      referencia:
        'Rodal Montero, E. (2020). Industria 4.0. Conceptos, tecnologías habilitadoras y retos. Ediciones Pirámide.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
