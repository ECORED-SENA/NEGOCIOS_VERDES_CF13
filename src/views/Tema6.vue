<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 #[i Endomarketing]
    
    p.mb-4 El #[i endomarketing] son  
      span.etiqueta #[strong estrategias, acciones enfocadas en las relaciones y bienestar o motivación de los trabajadores] 
      | de la empresa para obtener buenos resultados y, con esto, tener unos clientes satisfechos. Siempre se ha dicho que el marketing se ha posicionado como un sinónimo de objetivos enfocados solamente en los clientes finales, impulsándolos a tomar las decisiones para lograr la compra, y en las preferencias del consumidor por la empresa o marca. Se puede decir que el #[i endomarketing] es hacer “marketing interno”, ya que al motivar e informar a los empleados de la empresa, se tendrán mejores resultados y se alcanzarán los objetivos propuestos. (Caridad et al, 2017).

    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .h4 Estrategias
        p Las estrategias de #[i.text-bold endomarketing] incentivan a las personas que trabajan en una empresa a tener sentido de pertenencia y motivación. Las estrategias del #[i endomarketing] son:
      .col-lg-6.mb-0
        img(src='@/assets/curso/tema6/img01.png')

    .cajon.color-primario.p-4
      .row.align-items-center
        .col-lg-3.p-4
          img(src='@/assets/curso/tema6/img02.svg')
        .col-lg-8
          ul.lista-ul--color
            li 
              i.fas.fa-check-circle
              | Conocer al cliente interno y cubrir las necesidades. 
            li 
              i.fas.fa-check-circle
              | Alinear la estrategia de la organización con los trabajadores, teniendo claras la misión y visión para poder alcanzar los objetivos propuestos. 
            li 
              i.fas.fa-check-circle
              | Manejar las estrategias de marca y niveles de pertenencia hacia su labor.
            li 
              i.fas.fa-check-circle
              | Fortalecer el compromiso, logrando que el empleado tenga una alianza con el equipo de trabajo, al sentirse parte de él, y así poder alcanzar los objetivos. 
            li 
              i.fas.fa-check-circle
              | Vincular la red y la comunicación, a través de las cuales el mundo está en constante interacción. (Caridad et al, 2017)

</template>

<script>
export default {
  name: 'Tema6',
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
