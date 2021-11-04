<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Plan de exhibición

    #t_5_1.titulo-segundo(data-aos="fade-right")
      .h3 5.1 Tipos de exhibición
    
    p.mb-4 Descubra los tipos de exhibición:
    
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-sky.p-4(titulo="Punto focal")
        .h4 Punto focal
        p.mb-4 Es el elemento central de la presentación de la mercancía. Tener en cuenta un artículo o producto clave, el cual ayuda a impactar para sobresalir entre los demás.
        .row
          .col-lg-6
            img(src='@/assets/curso/tema5/img01.png')
      .tarjeta.color-sky.p-4(titulo="Repetición")
        .h4 Repetición
        p.mb-4 Se visualiza claramente el producto en el punto de venta, se repiten tanto elementos verticales como horizontales, lo que se denomina bloque de productos.
        .row
          .col-lg-6
            img(src='@/assets/curso/tema5/img02.png')
      .tarjeta.color-sky.p-4(titulo="Equilibrio")
        .h4 Equilibrio
        p.mb-4 Permite que la persona enfoque su mirada fácilmente sobre la exhibición, esto se logra haciendo que el lado izquierdo sea el espejo del lado derecho.
        .row
          .col-lg-6
            img(src='@/assets/curso/tema5/img03.png')
      .tarjeta.color-sky.p-4(titulo="Color")
        .h4 Color
        p.mb-4 Se puede lograr que una exhibición sencilla se convierta en la mejor, con esto se puede lograr impulsar la venta de más productos.
        .row
          .col-lg-6
            img(src='@/assets/curso/tema5/img04.png')
      .tarjeta.color-sky.p-4(titulo="Ritmo")
        .h4 Ritmo
        p.mb-4 Facilita dando armonía y orden a la exhibición, a través de la secuencia constante de los productos.
        .row
          .col-lg-6
            img(src='@/assets/curso/tema5/img05.png')
      .tarjeta.color-sky.p-4(titulo="Elevator Pitch")
        .h4 #[i Elevator Pitch]
        p.mb-4 Esta es una presentación relativamente corta, en la que se da a conocer o se describe una empresa, sea cual sea su actividad, y sea cual sea el estado actual del desarrollo de la idea de negocio.
        p.mb-4 Para poder crear un modelo #[i pitch], hay que tener en cuenta lo siguiente:
        ul.lista-ul--color
          li 
            i.fas.fa-check-circle
            | A quién en concreto va orientada  la presentación.
          li 
            i.fas.fa-check-circle
            | Cuál es la finalidad de este #[i pitch]. 
          li 
            i.fas.fa-check-circle
            | Cómo se va a fabricar  esta presentación. 
        .row
          .col-lg-6
            img(src='@/assets/curso/tema5/img06.png')

    #t_5_2.titulo-segundo(data-aos="fade-right")
      .h3 5.2 Tipos de #[i pitch]
    
    p.mb-4 Conozca los tipos de #[i pitch] a continuación:

     figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aZon_yknh3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema5',
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
