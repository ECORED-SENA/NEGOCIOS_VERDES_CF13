<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 En el siguiente componente, se quiere dar a conocer la importancia y las diferentes formas de aplicación del #[i merchandising].

    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/intro/img01.svg')(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/intro/img02.svg')
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/intro/img03.svg')(data-aos="fade-left")
      .col-lg-4.mb-4.mb-lg-0.d-flex
        img(src='@/assets/curso/intro/img04.svg')(data-aos="fade-right")
      .col-lg-4.mb-0.d-flex
        img(src='@/assets/curso/intro/img05.svg')(data-aos="fade-left")

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/intro/img06.png')(data-aos="fade-right")
      .col-lg-8.mb-lg-0
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
          p El #[i merchandising] va de la mano con el #[i marketing], da a conocer las técnicas comerciales y permite demostrar el aspecto físico y la implementación de pautas psicológicas para cada producto que se tenga en los negocios y que se quiera vender al comprador eventual.
        
        p El #[i merchandising] da a entender entonces que este es un método donde se puede presentar una forma más activa de 
          span.etiqueta rotación, visibilidad y venta de los productos. 
          | Es muy importante para todas las empresas que deseen sobrevivir en un planeta tan competitivo y desafiante como este. El #[i merchandising] moderno afecta a todos (consumidores y empresarios), es necesario revisar a fondo todas las opciones que se ofrecen en este amplio sector.

    .h4.mb-4 El concepto de #[i merchandising] más extenso recalca que:

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              img(src='@/assets/curso/intro/img07.svg')(data-aos="fade-right")
            .col-lg-9.d-flex
              .bloque-texto-a__texto.p-4(data-aos="fade-left")
                p Es el estudio o investigación de la forma de saciar todas aquellas necesidades de un grupo social, a través del intercambio, y poder mantener la supervivencia de los productos, por ende, de la empresa o negocios.

    p.mb-4 Entonces se abordará a fondo un gran tema, que es de gran utilidad para cualquier persona o empresa: 
      span.etiqueta Tener un negocio próspero y obtener ese margen de utilidad, tanto para la vida de la empresa como para la satisfacción y orgullo del cliente. 
      | ¡Sí! Esto es algo posible de lograr, con las técnicas y la aplicación correcta.
    .h4 Bienvenidos a #[i merchandising].
    p Para la elaboración de este componente, se abordaron varios autores conocidos en estrategias comerciales, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de los negocios verdes.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
