export default {
  global: {
    Name: 'Cultivo de palma de aceite: previvero, vivero y siembra.',
    Description:
      'En este componente formativo el aprendiz conocerá las etapas del ciclo productivo de la palma de aceite, desde el reconocimiento del terreno, diseño de la plantación, diseño de los lotes productivos, la selección técnica del material de siembra y sustratos, hasta la adecuación estratégica del terreno mediante el trazado, drenaje, preparación de suelo y siembra de plantas en sitio definitivo. Dicha siembra comprende realizar un alistamiento en vivero, transporte de las plantas del vivero al lugar definitivo y trasplante.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Tema 1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Subtema 1',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aceite de palma',
      significado:
        'aceite vegetal extraído del mesocarpio del fruto de la palma de aceite, utilizado en la industria alimentaria, cosmética, energética e industrial.',
    },
    {
      termino: 'Alistamiento en vivero',
      significado:
        'conjunto de actividades previas al traslado de las plantas al sitio definitivo, que incluye riego, rotación de bolsas y marcación de las plántulas para facilitar el trasplante.',
    },
    {
      termino: 'Altura efectiva del suelo',
      significado:
        'profundidad útil del suelo que permite el desarrollo adecuado del sistema radicular de la palma de aceite.',
    },
    {
      termino: 'Coberturas vegetales',
      significado:
        'plantas asociadas al cultivo de palma que protegen el suelo contra la erosión, conservan la humedad y mejoran la fertilidad.',
    },
    {
      termino: 'Crecimiento y desarrollo de la semilla',
      significado:
        'proceso biológico que inicia con la germinación e incluye la formación de la radícula, plúmula y raíces adventicias hasta el establecimiento de la plántula.',
    },
    {
      termino: 'Cuesco (endocarpio)',
      significado:
        'estructura dura que protege la almendra y el embrión de la semilla de palma de aceite.',
    },
    {
      termino: 'Diseño de la planeación',
      significado:
        'proceso de organización y distribución espacial del cultivo que define vías, drenajes, lotes, distancias de siembra y manejo a largo plazo de la plantación.',
    },
    {
      termino: 'Elaeis guineensis',
      significado:
        'nombre científico de la palma de aceite, especie oleaginosa de mayor rendimiento por hectárea a nivel mundial.',
    },
    {
      termino: 'Endospermo',
      significado:
        'tejido interno de la semilla que almacena nutrientes y alimenta al embrión durante la germinación.',
    },
    {
      termino: 'Fertilización',
      significado:
        'aplicación de nutrientes orgánicos o minerales al suelo o sustrato para suplir las necesidades nutricionales de la palma en vivero o campo.',
    },
    {
      termino: 'Germinación',
      significado:
        'proceso mediante el cual la semilla desarrolla la radícula y la plúmula, dando origen a una nueva planta.',
    },
    {
      termino: 'Inflorescencia',
      significado:
        'estructura reproductiva de la palma de aceite que contiene flores masculinas o femeninas y que, tras la fecundación, da origen al racimo de frutos.',
    },
    {
      termino: 'Labranza',
      significado:
        'conjunto de labores mecánicas realizadas sobre el suelo para mejorar su estructura, aireación y drenaje antes de la siembra.',
    },
    {
      termino: 'Material vegetal',
      significado:
        'semillas o plántulas utilizadas para el establecimiento del cultivo, seleccionadas por su calidad genética, física y sanitaria.',
    },
    {
      termino: 'Mesocarpio',
      significado:
        'pulpa fibrosa del fruto de la palma de aceite donde se concentra el aceite comercial.',
    },
    {
      termino: 'Mulch',
      significado:
        'cobertura orgánica utilizada sobre el suelo o las bolsas del vivero para conservar la humedad, reducir la erosión y controlar malezas.',
    },
    {
      termino: 'Plántula',
      significado:
        'planta joven que se desarrolla a partir de una semilla germinada durante las etapas de previvero y vivero.',
    },
    {
      termino: 'Plúmula',
      significado:
        'estructura embrionaria de la semilla que da origen a las hojas de la planta.',
    },
    {
      termino: 'Previvero',
      significado:
        'etapa inicial del cultivo en la que las plántulas se desarrollan en bolsas pequeñas y alta densidad, bajo sombra y condiciones controladas.',
    },
    {
      termino: 'Radícula',
      significado:
        'parte embrionaria de la semilla que origina la raíz principal de la planta.',
    },
    {
      termino: 'Riego',
      significado:
        'suministro controlado de agua para satisfacer las necesidades hídricas de la palma durante las etapas de vivero y establecimiento en campo.',
    },
    {
      termino: 'Selección en vivero',
      significado:
        'proceso periódico de evaluación y descarte de plántulas que presentan anormalidades, baja calidad o problemas sanitarios.',
    },
    {
      termino: 'Semillero',
      significado:
        'área destinada a la siembra y manejo inicial de semillas germinadas antes de su traslado al previvero o vivero.',
    },
    {
      termino: 'Siembra en sitio definitivo',
      significado:
        'traslado y establecimiento de las plantas provenientes del vivero en el terreno de producción, bajo condiciones adecuadas de suelo y clima.',
    },
    {
      termino: 'Sistema de siembra en tresbolillo',
      significado:
        'método de distribución de plantas en forma triangular que optimiza el uso del espacio, la luz solar y el desarrollo radicular.',
    },
    {
      termino: 'Sustrato',
      significado:
        'material que llena las bolsas del vivero y permite el anclaje, nutrición y desarrollo de las raíces de la plántula.',
    },
    {
      termino: 'Trazado de la plantación',
      significado:
        'proceso de marcación del terreno para definir la ubicación exacta de cada planta según el sistema de siembra y las distancias establecidas.',
    },
    {
      termino: 'Variedades de palma de aceite',
      significado:
        'tipos genéticos de la especie Elaeis guineensis (Dura, Pisífera y Tenera) que se diferencian por el grosor del cuesco, la cantidad de pulpa y el rendimiento en aceite.',
    },
    {
      termino: 'Vivero',
      significado:
        'etapa posterior al previvero donde las plántulas continúan su desarrollo en bolsas grandes, sin sombra y a baja densidad, hasta su traslado al campo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bustillo, A. (2014). Manejo de insectos plagas de la palma de aceite, con énfasis en control biológico.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/107659/Guia%20enfermedades%20y%20plagas%2022.pdf?sequence=11',
    },
    {
      referencia:
        'CENIPALMA, SENA, SAC y FONADE. (2002). Selección y descarte de plantas anormales de palma de aceite en viveros.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/84193',
    },
    {
      referencia:
        'CIRAD. (2008). Germinated oil palm seed: Recommendations for prenursery and nursery management.',
      link:
        'https://www.palmelit.com/en/content/download/4353/32854/version/4/file/Booklet-of-recommandations-for-prenursery-and-nursery-management-oil-palm-seeds-CIRAD.pdf',
    },
    {
      referencia:
        'Galeano Balaguera, P. (2025). Colombia alcanzó una producción de 1,7 millones de toneladas de aceite de palma en 2024.',
      link:
        'https://www.portafolio.co/negocios/industrias/colombia-alcanzo-una-produccion-de-1-7-millones-de-toneladas-de-aceite-de-palma-en-2024-622610',
    },
    {
      referencia:
        'Fedepalma. (s. f.). La agroindustria de la palma de aceite en Colombia.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/109788/Agroindustria%20de%20la%20palma%20de%20aceite%20en%20Colombia.pdf',
    },
    {
      referencia:
        'Fedepalma. (2016). Guía de bolsillo para el reconocimiento y manejo de las principales enfermedades e insectos plaga.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/107659/Guia%20enfermedades%20y%20plagas%2022.pdf?sequence=11',
    },
    {
      referencia:
        'Grupo Jaremar. (2016). Manual de Buenas Prácticas Agrícolas para la Producción Sostenible de la Palma Aceitera.',
      link:
        'https://fhia.org.hn/wp-content/uploads/manual_buenas_practicas.pdf',
    },
    {
      referencia: 'ICA. (2011). Manejo del picudo - Rhynchophorus palmarum L.',
      link:
        'https://www.ica.gov.co/getattachment/19e016c0-0d14-4412-af12-03eecfe398f2/Manejo-del-picudo--Rhynchophorus-palmarum-L--%28Cole.aspx',
    },
    {
      referencia: 'ICA. (2014). Resolución 4170 de 2014.',
      link: 'https://faolex.fao.org/docs/pdf/col144688.pdf',
    },
    {
      referencia:
        'INIAP. (2017). Guía para facilitar el aprendizaje en el manejo integrado del cultivo de Palma aceitera.',
      link: 'https://repositorio.iniap.gob.ec/handle/41000/4774',
    },
    {
      referencia:
        'INIFAB. (2011). Producción de planta en Paquete Tecnológico Palma de Aceite.',
      link:
        'https://www.gob.mx/inifap/prensa/inifap-desarrolla-tecnicas-para-producir-palma-de-aceite',
    },
    {
      referencia:
        'Narváez, J., Chilito, L., & Bastidas, S. (1996). Determinación de la madurez óptima de cosecha.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/143664',
    },
    {
      referencia:
        'Ortíz, R. & Fernández, O. (2000). Cultivo de la palma aceitera.',
      link: 'https://books.google.com.co/books?id=xZkO8yiPgf0C',
    },
    {
      referencia:
        'Prada, F., & Romero, M. (2012). Muestreo y análisis de racimos en el cultivo de palma de aceite.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/107697',
    },
    {
      referencia:
        'Rodríguez T., D. K. (2025). Producción de aceite de palma en Colombia crece 10% entre enero y mayo de 2025.',
      link:
        'https://www.portafolio.co/economia/agro/produccion-de-aceite-de-palma-en-colombia-crece-10-a-mayo-de-2025-633174',
    },
    {
      referencia: 'TECHNOSERVE. (2009). Manual técnico de palma africana.',
      link: 'https://studylib.es/doc/5470137/manual-tecnico-de-palma-africana',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
