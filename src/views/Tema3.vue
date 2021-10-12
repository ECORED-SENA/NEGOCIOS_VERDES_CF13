<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estrategias de exhibición
    
    p.mb-4 Estas se utilizan para dar a conocer, posicionar, preferir y elevar la notoriedad de los productos. Se debe tener en cuenta que las mejores ubicaciones se dan sobre #[strong el sentido del tráfico, de frente al consumidor, con excelente visibilidad, de preferencia]. Se aconseja cambiar la exhibición al menos dos veces por semana, con diferentes productos en el mobiliario; no se deben tener dos marcas a la vez.

    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        img(src='@/assets/curso/tema3/img01.png')(data-aos="fade-right")
      .col-lg-5.mb-0
        .tabla.acento-botones.p-4(data-aos="fade-left")
          p Es el conjunto de técnicas de atracción al cliente mediante la adecuada distribución de secciones, la adaptación permanente del surtido y la exposición apropiada de los productos, con el fin de incrementar la rentabilidad, con una mayor rotación de inventario y una mejor imagen comercializadora. (Pinzón, 2003)

</template>

<script>
export default {
  name: 'Tema3',
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
