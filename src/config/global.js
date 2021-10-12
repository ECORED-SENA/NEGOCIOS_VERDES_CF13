export default {
  global: {
    componenteFormativo: 'Estrategias comerciales',
    descripcionCurso:
      '<em>Merchandising</em> son las diferentes técnicas comerciales que permiten mostrar lo mejor del aspecto físico e implementar  técnicas psicológicas para cada producto en los negocios y que se quieren vender.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Punto de venta físico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Punto de venta virtual',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Surtido del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estrategias de exhibición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Merchandising',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de merchandising',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Teoría del color',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Vitrinas',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'El lineal',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'La planimetría',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Planogramas',
            hash: 't_4_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.7',
            titulo: 'Software de gestión',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de exhibición',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de pitch',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Endomarketing ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Caridad, M., Salazar, C. y Castellano, M. (2017). Endomarketing: Estrategia dinamizadora para la responsabilidad social del sector universitario. Revista Espacios, 38(1), p. 6.',
      link: 'https://www.revistaespacios.com/a17v38n01/a17v38n01p06.pdf',
    },
    {
      referencia:
        'Garrido, J. (2011). Vender más en su tienda. Profit Editorial.',
    },
    {
      referencia:
        'Gianella, A. (2013). Visual marketing o el amor a primera vista. Ediciones de la U.',
    },
    {
      referencia:
        'Palomares, R. (2011). Merchandising. Teoría, Práctica y Estrategia. ESIC Editorial.',
    },
    {
      referencia:
        'Pinzón, H. (2003). Estudio Comportamiento del Consumidor en Bogotá D.C. Primera Aproximación.',
    },
    {
      referencia:
        'Prieto, H. (2010). Merchandising. La Seducción en el Punto de Venta. ECOE Ediciones.',
    },
  ],
  glosario: [
    {
      termino: 'E-commerce',
      significado:
        'es un tipo de comercio electrónico, es un método de compraventa de bienes, productos o servicios, valiéndose de Internet como medio, es decir, comerciar de manera online.',
    },
    {
      termino: 'Endomarketing',
      significado:
        'significa llevar a la práctica estrategias de venta entre los propios empleados.',
    },
    {
      termino: 'Máquina de vending',
      significado:
        'es un anglicismo que hace referencia a un tipo de comercialización de productos que se realiza a modo de autoservicio, a través de máquinas expendedoras.',
    },
    {
      termino: 'Marketing',
      significado:
        'es el conjunto de herramientas y métodos de análisis para descubrir la demanda de los productos o servicios.',
    },
    {
      termino: 'Merchandising',
      significado:
        'es la manera de tener mercancía adecuada en el lugar conveniente, con precios, cantidades y en el momento oportuno.',
    },
    {
      termino: 'Planograma',
      significado:
        'es una herramienta que permite presentar a la vista los productos, tal y como serán expuestos en el punto de venta.',
    },
    {
      termino: 'Punto de venta',
      significado:
        'es aquel espacio físico o virtual en el que una empresa establece contacto con su cliente potencial, pudiendo desarrollarse en este una transacción de compraventa.',
    },
    {
      termino: 'Software de gestión',
      significado:
        'es un programa informático que recoge y trata datos de los principales departamentos de la empresa.',
    },
    {
      termino: 'Storytelling',
      significado:
        'es la narración de historias, consiste en la comunicación de relatos, a través del uso de palabras, imágenes y elementos que ayuden a transmitir ese tipo de narraciones.',
    },
    {
      termino: 'Surtido',
      significado:
        'es el conjunto de artículos que un establecimiento comercial ofrece a la venta.',
    },
  ],
  complementario: [
    {
      texto:
        'López, B. (2017, septiembre 20). ¿Qué es el Merchandising? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Am6_RilX9xk',
    },
    {
      texto:
        'López, B. (2021, junio 13). 5 Mejores Herramientas de Marketing Online para el 2021 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XWSB_PDXk3s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
