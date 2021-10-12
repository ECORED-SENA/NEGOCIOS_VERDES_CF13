<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Punto de venta

    p.mb-4 Un punto de venta es un lugar físico (tienda), o virtual (#[i ecommerce]), en el que la empresa tiene contacto con un posible consumidor o cliente potencial. Este espacio puede ser físico, es decir, puede hallarse físicamente, pudiendo el cliente acudir a dicho lugar. O, por otro lado, puede tratarse de un espacio virtual, un portal #[i web] donde se halla un negocio #[i online]. Existen varios tipos de punto de venta:

    Separador
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h3 1.1 Punto de venta físico

    p.mb-4 Es el que se encuentra disponible para la atención al público. Existen diversos tipos de punto de venta físicos:
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-primario.p-4
          .h4.text-center Punto de venta físico inmóvil.
        img(src='@/assets/curso/tema1/img01.png')(data-aos="fade-right")
        .tarjeta.color-acento-botones.p-4
          p Una tienda, un local comercial.
          br             
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-primario.p-4
          .h4.text-center Punto de venta físico móvil.
        img(src='@/assets/curso/tema1/img02.png')
        .tarjeta.color-acento-botones.p-4
          p Un camión, una furgoneta, o vehículo. 
          br      
      .col-lg-4.mb-0
        .tarjeta.color-primario.p-4
          .h4.text-center Punto de venta autoservicio.
        img(src='@/assets/curso/tema1/img03.png')(data-aos="fade-left")
        .tarjeta.color-acento-botones.p-4
          p Una máquina de vending o máquina expendedora.

    Separador
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h3 1.2	Punto de venta virtual
    
    p.mb-4 Es aquel punto de venta que no es físico, que se encuentra en Internet. Es el caso del comercio online, con los #[i ecommerce]. Aquí es posible diferenciar dos tipos, que se ven a continuación:

    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-primario.p-4
          .h4.text-center Punto de venta virtual propio 
        img(src='@/assets/curso/tema1/img04.png')(data-aos="fade-right")
        .tarjeta.color-acento-botones.p-4
          p es un punto de venta propio, desde un portal #[i web].
      .col-lg-8.mb-4.mb-lg-0
        .tarjeta.color-primario.p-4
          .h4.text-center Marketplace 
        img(src='@/assets/curso/tema1/img05.png')(data-aos="fade-left")
        .tarjeta.color-acento-botones.p-4
          p es un sitio de comercio electrónico que conecta a los vendedores con los compradores. A menudo se le conoce como un mercado electrónico y todas las transacciones son administradas por el propietario del sitio web. Las empresas utilizan los mercados en línea para llegar a los clientes que desean comprar sus productos y servicios. Ejemplos de mercados en línea incluyen Amazon, eBay o Mercadolibre.
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

<style lang="sass" scoped></style>
