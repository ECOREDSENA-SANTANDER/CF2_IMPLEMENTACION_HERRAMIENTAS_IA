<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-sm-12.col-lg-8
          p.mb-4 Este componente formativo presenta una explicación detallada sobre los #[i prompts] en el contexto de la inteligencia artificial, describiendo su importancia, principios fundamentales y técnicas para formularlos de manera efectiva. Se destacan características clave como claridad, contexto, directividad y simplicidad, así como los diferentes tipos de #[i prompts] según su propósito: informativos, creativos, analíticos y reflexivos.
          p.mb-0 Además, se incluyen ejemplos prácticos que ilustran la diferencia entre #[i prompts] efectivos y no efectivos, acompañados de casos de uso en áreas relevantes como la educación, la investigación y el desarrollo de contenidos digitales. El texto también aborda conceptos esenciales, tipos y aplicaciones de la inteligencia artificial predictiva y generativa, facilitando la comprensión de sus diferencias y usos prácticos mediante ejemplos cotidianos y tecnológicos actuales.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/xgby0E3L47I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Inteligencia Artificial generativa y predictiva – introducción


</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
