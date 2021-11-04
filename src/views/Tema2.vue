<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Surtido del producto

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nbC4H5MRNDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h3 2.1 Estructura
    
    p.mb-4 El surtido se debe organizar en varios niveles, con rasgos similares en todas las secciones. Los comercios más pequeños tendrán sólo tres niveles de distribución; los más grandes toman su propia decisión en cuanto a los niveles que necesitan para gestionar de manera rentable todo el surtido. A través de la gestión por categorías responderemos a QUÉ productos agrupar estratégicamente:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Figura 1
      span #[i La gestión del surtido]
    .row.justify-content-center.mb-4
      .col-lg-8
        figure
          img(src='@/assets/curso/tema2/img01.svg')
          figcaption Nota. Tomada de Palomares (2011).

    p.mb-4 A continuación, se definen los diferentes niveles, para conocer las características de cada división, con el fin de poder estructurar adecuadamente el surtido de cualquier establecimiento comercial, independientemente del tipo de productos que se comercialicen, como se muestra:
    .row.justify-content-center.mb-4
      .col-lg-6
        img(src='@/assets/curso/tema2/img02.svg')(data-aos="flip-up")
    
    SlyderB.mb-5(:datos="datosSlyder")

    Separador
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h3 2.2 Características
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Amplitud")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Amplitud
            p Revela la cantidad de familias de productos y la variedad que se ofrecen al consumidor. En general, todo el surtido puede ser amplio o estrecho, como en los comercios especializados.    
          .col-md-4
            img(src='@/assets/curso/tema2/img09.png')
      .py-4.py-md-5(titulo="Profundidad")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Profundidad
            p La profundidad del surtido mide el número de referencias que posee una determinada familia o subfamilia de productos, por lo que vendrá dada por las diferentes marcas, modelos, tamaños, etc., que componen la oferta comercial del establecimiento.
          .col-md-4
            img(src='@/assets/curso/tema2/img10.png')
      .py-4.py-md-5(titulo="Coherencia")
        .row
          .col-md-12.mb-4
            h4 Coherencia
            p Muestra la homogeneidad del surtido, en el sentido de artículos complementarios o relacionados entre sí.
          .col-md-3.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/tema2/img11.png')
            h4 El surtido amplio (o ancho) y profundo
            p Presenta todos aquellos puntos de venta que quieren llenar ampliamente todas las necesidades. Está compuesto por muchas familias y un amplio número de referencias en el interior de cada familia. Es algo común en grandes superficies, hipermercados y grandes almacenes.
          .col-md-3.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/tema2/img12.png')
            h4 El surtido amplio (o ancho) y poco profundo
            p Se encuentra en tiendas, autoservicios, de conveniencia y de  descuento; tienen un gran número de familias, pero una pequeña cantidad de artículos dentro de cada familia, con poca variedad.
          .col-md-3.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/tema2/img13.png')
            h4 Un surtido estrecho y profundo
            p Este lo ofrecen los puntos de ventas especializadas, ya que manejan una extensa variedad de productos para unas determinadas familias. Tiendas, perfumerías, etc. 
          .col-md-3.mb-0
            figure.mb-4
              img(src='@/assets/curso/tema2/img14.png')
            h4 Un surtido estrecho y poco profundo
            p Abarca pocas familias y una pequeña cantidad de referencias; por ejemplo, los concesionarios de automóviles, las tiendas tradicionales, las ventas ambulantes. 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '1. Departamentos',
        texto:
          'Es la división más grande de la estructura del surtido, la cual reúne distintas secciones. Se caracterizan por ser unidades del local o negocio independientes entre sí.',
        imagen: require('@/assets/curso/tema2/img03.png'),
      },
      {
        titulo: '2. Secciones',
        texto:
          'Cada establecimiento comercial puede tener un jefe en las determinadas secciones; este debe crear nuevas ideas sobre el surtido, precios o ubicación de los productos, para que aumenten las ventas, descentralizando el proceso administrativo del <em>merchandising</em>.',
        imagen: require('@/assets/curso/tema2/img04.png'),
      },
      {
        titulo: '3. Categorías',
        texto:
          '<p>Están integradas por varias familias de productos, los cuales tienen características similares, aunque se trabaje con diferentes marcas. Ejemplo: toallas higiénicas con alas, sin alas, tipo maya, tipo tela, etc.</p><p>La categoría la define el consumidor, la manera en que este se comporta, para destacar los productos principales.</p><p>La categoría es un instrumento para la administración de la oferta, y así lograr estrategias importantes de exposición al consumidor; para ello, es importante la aplicación de tecnologías y la investigación de mercados.</p><p><img width="80" height="80" src="/downloads/alert.svg">Es importante, en la categoría, incluir los siguientes pasos: el papel de la categoría, la evaluación de la categoría, la medida del desempeño, la identificación de las estrategias, la implementación de tácticas, el desarrollo del plan, y la revisión de la categoría, con el fin de comprobar su efectividad.</p>',
        imagen: require('@/assets/curso/tema2/img05.png'),
      },
      {
        titulo: '4. Familias',
        texto:
          'Son la agrupación de productos dirigidos a satisfacer una necesidad general. Estos productos se deben agrupar de forma estratégica   para el tipo de clientela. Ejemplo: zapatos: tenis, botas, de tacón alto, de cordón, y ortopédicos.',
        imagen: require('@/assets/curso/tema2/img06.png'),
      },
      {
        titulo: '5. Artículos.',
        texto:
          'Son todos los productos, de manera general. Por ejemplo: utensilios de cocina.',
        imagen: require('@/assets/curso/tema2/img07.png'),
      },
      {
        titulo: '6. Referencias',
        texto:
          'Corresponden a unidades de venta que satisfacen la misma necesidad específica. Las referencias definen la marca, el formato, el modelo y el contenido del producto; habrá tantas como artículos disponga el establecimiento. Ejemplo: la marca de una crema facial.',
        imagen: require('@/assets/curso/tema2/img08.png'),
      },
    ],
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
