<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La Inteligencia Artificial (IA) es un campo de la informática que busca que las máquinas imiten funciones humanas como  aprender, razonar, comunicarse y tomar decisiones. En este contexto, los #[i prompts] son instrucciones o preguntas que guían la generación de respuestas y su efectividad depende de la claridad, el contexto, la simplicidad, la directividad, la flexibilidad y el uso de ejemplos. Existen distintos tipos de #[i prompts] (informativos, creativos, analíticos y reflexivos) y su correcta formulación requiere evitar ambigüedades, dividir tareas complejas en pasos simples, usar ejemplos claros y adaptar el lenguaje a la audiencia. Por otra parte, se diferencian dos grandes tipos de IA: la predictiva, que analiza datos históricos para anticipar eventos y apoyar la toma de decisiones, con aplicaciones en salud, educación, comercio e industria; y la generativa, que crea contenido nuevo como textos, imágenes, música o código, usada en arte, medicina, entretenimiento y desarrollo de #[i software], pero que implica riesgos de plagio o desinformación. Ambas se complementan al combinar la capacidad de anticipar con la de crear, potenciando la innovación y transformando la interacción digital.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra un diagrama jerárquico sobre la Inteligencia Artificial generativa y predictiva, dividido en tres áreas principales: los prompts y sus características (tipos, técnicas de mejora, efectivos y no efectivos), la inteligencia artificial predictiva (tipos y criterios de aplicación) y la inteligencia artificial generativa (tipos y aplicaciones).")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
