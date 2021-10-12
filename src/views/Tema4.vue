<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Merchandising

    p.mb-4 Cuando se habla de #[i merchandising], en su significado, se encuentra mercancía o mercadería, “el producto en acción”; su función principal es que el consumidor pase de compras potenciales a compras reales.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        .bloque-texto-a.color-primario.p-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-3.mb-lg-0
              img(src='@/assets/curso/tema4/img01.svg')(data-aos="fade-right")
            .col-lg-8
              .bloque-texto-a__texto.p-3(data-aos="fade-left")
                p Es el conjunto de técnicas de atracción al cliente mediante la adecuada distribución de secciones, la adaptación permanente del surtido y la exposición apropiada de los productos, con el fin de incrementar la rentabilidad, con una mayor rotación de inventario y una mejor imagen comercializadora. (Pinzón, 2003)

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        p.mb-4 Es el conjunto de técnicas de atracción al cliente mediante la adecuada distribución de secciones, la adaptación permanente del surtido y la exposición apropiada de los productos, con el fin de incrementar la rentabilidad, con una mayor rotación de inventario y una mejor imagen comercializadora. (Pinzón, 2003)
        p 
          span.etiqueta El #[i merchandising] 
          | es de gran importancia, ya que produce un valor agregado a los elementos, lo que los hace únicos frente a la competencia, haciendo que dicho producto crezca, se fortalezca y perdure, y finalmente obteniendo el principal objetivo, que es el consumidor, lo que hace más rentable el negocio. 
      .col-lg-5.mb-0
        img(src='@/assets/curso/tema4/img02.png')(data-aos="fade-left")
    
    Separador
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h3 4.1 Tipos de #[i merchandising]

    p.mb-4 Conozca algunos tipos de #[i merchandising]: 
    
    .tarjeta.color-gris.p-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/tema4/img03.svg')(data-aos="fade-right")
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/tema4/img04.svg')
        .col-lg-3.mb-4
          img(src='@/assets/curso/tema4/img05.svg')(data-aos="fade-left")
        .col-lg-9.mb-4
          p.text-center Profundice en cada uno de ellos:
        .col-lg-9.mb-4
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema4/img06.svg')
            .tarjeta.color-jade.p-3(x="15%" y="87%")
              .row.justify-content-center.mb-4
                .col-9.p-4
                  img(src='@/assets/curso/tema4/img07.png')
              p Es cuando las empresas realizan sus propias actividades, es decir, de manera interna. Por ejemplo, volantes, descuentos, muestras, degustación. Con esto se logra la predilección de sus productos, logrando así la compra del consumidor final.
                  
            .tarjeta.color-jade.p-3(x="50%" y="87%")
              .row.justify-content-center.mb-4
                .col-9.p-4
                  img(src='@/assets/curso/tema4/img08.png')
              p Es donde el distribuidor enseña su punto de venta de una forma original y atractiva al consumidor. Un punto a favor con este tipo de merchandising es la importancia de la relación con el cliente.      
            .tarjeta.color-jade.p-3(x="85%" y="87%")
              .row.justify-content-center.mb-4
                .col-9.p-4
                  img(src='@/assets/curso/tema4/img09.png')
              p Se realiza cuando el consumidor utiliza herramientas virtuales. El punto más importante es llegar a los hogares a través de las páginas de Internet, creando avisos y todo tipo de ofertas, donde el cliente tenga una gran variedad al momento de escoger el producto dentro de su misma casa. (Gianella, 2013)

    Separador
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h3 4.2 Teoría del color

    p.mb-4 La parte emocional se encuentra ligada al color, el color no tiene existencia si no hay luz y objeto. (Gianella, 2013)
    .h4 Algo más sobre significación y simbología del color, en la siguiente infografía.

    .tarjeta.color-gris.p-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-8.mb-4.mb-lg-0
          .h4.text-center Significación y simbología del color 
          p.text-center La teoría del color, que es esencial para toda comunicación visual, puede moldear la experiencia del cliente. Puederesaltar, oscurecer o llamar la atención sobre los artículos de la tienda.
        .col-lg-7
           ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema4/img10.svg')
            .tarjeta.color-jade.p-3(x="97%" y="13%")
              p #[strong Rojo]: llama la atención enormemente, ya que produce emociones de sangre, guerra, fuego, incendios, alegrías, acción, pasión, desconfianza y rabia.
            .tarjeta.color-jade.p-3(x="97%" y="25%")
              p #[strong Violeta]: místico, melancólico y algo introvertido.
            .tarjeta.color-jade.p-3(x="97%" y="38%")
              p #[strong Azul]: es pacífico, se asocia con el cielo, el agua, simboliza lo espiritual y es también el color del infinito y de los sueños.
            .tarjeta.color-jade.p-3(x="97%" y="50%")
              p #[strong Verde]: es equilibrio, se compone con el amarillo (calor) y el azul (frio), produce frescura, paz y es relajante.
            .tarjeta.color-jade.p-3(x="97%" y="63%")
              p #[strong Amarillo]: se vincula con la intelectualidad, significa envidia, ira, impulsividad, afectividad, jovialidad.
            .tarjeta.color-jade.p-3(x="97%" y="75%")
              p #[strong Naranja]: simboliza entusiasmo y exaltación.
            .tarjeta.color-jade.p-3(x="97%" y="87%")
              p #[strong Marrón]: asemeja la madera y la tierra, transporta al otoño.
          
    Separador
    #t_4_3.titulo-segundo(data-aos="fade-right")
      .h3 4.3 Vitrinas

    p.mb-4 Las vitrinas o escaparates forman la imagen corporativa de la empresa. Para llamar la atención del peatón y hacerlo detener, se debe tener en cuenta: 
      span.etiqueta la iluminación, la combinación del color, la buena exhibición de la mercancía, y precios y rebajas, 
      | para que atraiga y sea competitivo.
    p.mb-4 Para llamar la atención y competir entre sí, es importante la exhibición de carteles, ya sean en vinilo, papel, lonas, madera, acrílicos, neón y argón.
    figure.mb-4(data-aos="flip-down")
      img(src='@/assets/curso/tema4/img11.png')  
    
    Separador
    #t_4_4.titulo-segundo(data-aos="fade-right")
      .h3 4.4 El Lineal

    p.mb-4 La exhibición de mercancía lineal es la longitud de exposición de los productos en el establecimiento. En este concepto, se incluyen las estanterías, las góndolas, los mostradores, e incluso el suelo si se usa para exponer o exhibir las mercancías. Esto es importante para los consumidores, ya que día a día se está recordando el producto que se debe consumir. El lineal tiene familias que componen el surtido:
    .h4 Clases de lineales
    figure.mb-4(data-aos="flip-down")
      img(src='@/assets/curso/tema4/img12.svg')  
    
    #t_4_5.titulo-segundo(data-aos="fade-right")
      .h3 4.5 La planimetría
    
    p.mb-4 Consiste en aquella necesidad que se crea para los dueños de los establecimientos o negocios con el propósito de satisfacer todas aquellas presiones que ejercen los fabricantes en lo referente a la ubicación de los productos en los puntos de venta. Esta es una técnica de merchandising que se utiliza con el fin de mejorar la rentabilidad y visión del producto, organizando de manera estética los productos que se utilizan para un mismo fin, en vitrinas, estanterías y góndolas.

    .row.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        figure.mb-4(data-aos="flip-down")
          img(src='@/assets/curso/tema4/img13.png')  

    #t_4_6.titulo-segundo(data-aos="fade-right")
      .h3 4.6 Planogramas

    p.mb-4 Planograma es el diseño gráfico que determina la posición de un producto en la góndola, en el estante, linear o expositor, de acuerdo con su surtido o gestión por categoría. Antes, muy pocos tenían acceso a estos archivos de gestión de espacios, pero en la actualidad es todo lo contrario, ya que permite utilizar diferentes #[i softwares], la gran mayoría en el 
      span.etiqueta #[strong Spaceman Profesional], 
      | donde se permite guardar la base de datos estándar en la industria, perfeccionando espacios, inversión, inventario, las cadenas de suministro y hasta compartir dicha información, para así aún lograr un mejor manejo y aplicación del #[i merchandising]. 
    p.mb-4  
      strong Cabe recalcar que es necesario contar con el apoyo de los proveedores para realizar el análisis según las dinámicas del mercado. Hasta hace un tiempo, las empresas destinaban solo un 20 % para publicidad en el punto de venta; en la actualidad, se hace hasta en un 50 %, ya que de esto depende la vida del producto.
    .row.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        figure.mb-4(data-aos="flip-down")
          img(src='@/assets/curso/tema4/img14.svg')
    p.mb-4 Cada producto debe tener una relación de acuerdo con la participación del mercado. Por ejemplo, si se tiene un 30 % en la participación, el producto debería tener el 30% en la exhibición. No se debe olvidar que el consumidor es el principal objetivo y que, de 10 productos exhibidos, este compra 7 productos por impulso. (Gianella, 2013)

    #t_4_7.titulo-segundo(data-aos="fade-right")
      .h3 4.7 Software de gestión

    p.mb-4 Es una herramienta para controlar y organizar la producción de una empresa, ayuda a los administradores a conservar la información importante de cada operación que se hace en el transcurso del día. En el software de gestión de punto de venta, se puede instalar de dos formas:

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema4/img15.svg')
          .h4.text-white.text-center Instalación local
          p.text-white Esta corresponde a cuando se instala en equipos físicos de una empresa, la cual debe adquirir unas licencias para poder tener el funcionamiento del software.
      .col-lg-5.mb-0(data-aos="fade-left")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-4
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema4/img16.svg')
          .h4.text-center Basado en la nube
          p Esta se hace a través de acceso a Internet, donde la empresa maneja la información en la nube.
          br

    .h4.mb-4 Beneficios del software del punto de venta
    
    .tarjeta.color-lima.p-4
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          img(src='@/assets/curso/tema4/img17.svg') 
        .col-lg-6.mb-lg-0
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle
              | Permite crear informes de ventas
            li 
              i.fas.fa-check-circle
              | Mejora la calidad de los procesos
            li 
              i.fas.fa-check-circle
              | Mejora la competitividad
            li 
              i.fas.fa-check-circle
              | Ayuda a tener el control de administrador     

</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped></style>
