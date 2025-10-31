<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Inteligencia artificial generativa
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-12.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.flex-column.d-flex
          .bg-color-5.wcus-4.py-2.px-3.mb-4
                h4.mb-0.text-white ¿Qué es la IA generativa?
          p.mb-3 La #[b inteligencia artificial generativa] es una tecnología capaz de crear contenido nuevo como textos, imágenes, música o videos, a partir de lo que ha aprendido de muchos ejemplos.
          p.mb-3 #[b Funciona como un artista digital:] no copia, sino que inventa algo original basándose en patrones aprendidos.
          p.mb-0 #[b Ejemplo:] si se le pide una historia, genera un texto único; si se le pide un dibujo, crea una imagen inédita.

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Diferencia con la IA predictiva


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.px-5.py-4.mb-cus.hcard-4
              .row.justify-content-center.mb-4
                .col-12
                    img(src='@/assets/curso/temas/t3/2.png')          
              h3.text-center.text-white IA predictiva
              p.mb-3.text-white Analiza datos del pasado para anticipar lo que podría suceder (ejemplo: clima, ventas, riesgos).
            .col-md.tarjeta.bg-color-9.px-5.py-4.hcard-4
              .row.justify-content-center.mb-4
                .col-12
                    img(src='@/assets/curso/temas/t3/3.png')          
              h3.text-center.text-white IA generativa
              p.mb-3.text-white Crea desde cero cosas nuevas, como un pintor, escritor o músico digital.

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 ¿Cómo funciona la IA generativa?

      .row.mb-5.align-items-center.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar.hcard
            img(src='@/assets/curso/temas/t3/4.svg')
            .tarjeta.bg-color-5.hcard-5
              .p-4
                h4.mt-3.text-center.text-white Aprendizaje de patrones
                p.mb-0.text-center.text-white Usa grandes cantidades de datos para detectar regularidades (textos, imágenes, sonidos).

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar.hcard
            img(src='@/assets/curso/temas/t3/5.svg')
            .tarjeta.bg-color-5.hcard-5
              .p-4
                h4.mt-3.text-center.text-white Redes neuronales
                p.mb-0.text-center.text-white Modelos inspirados en el cerebro humano que permiten comprender y recrear información compleja.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar.hcard
            img(src='@/assets/curso/temas/t3/6.svg')
            .tarjeta.bg-color-5.hcard-5
              .p-4
                h4.mt-3.text-center.text-white Generación de contenido
                p.mb-0.text-center.text-white Con lo aprendido, produce resultados inéditos como historias, melodías, ilustraciones o códigos de programación.


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4
          .bg-color-4.pcus-3.d-flex.flex-column.mb-cus.justify-content-center
            .bg-color-13.wcus-4.py-2.px-3.mb-3
              h4.mb-0.text-white Tipos de IA generativa
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-robot.icon-list
                p.mb-0 #[b Generación de texto:] ChatGPT, Bard.
              li.d-flex
                i.fas.fa-robot.icon-list
                p.mb-0 #[b Generación de imágenes:] DALL·E, Midjourney, Stable Diffusion.
              li.d-flex
                i.fas.fa-robot.icon-list
                p.mb-0 #[b Generación de música:] IA que compone melodías originales.
              li.d-flex.mb-0
                i.fas.fa-robot.icon-list
                p.mb-0 #[b Generación de código:] herramientas que ayudan a programar automáticamente.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          .bg-color-14.p-5.my-3
            img(src='@/assets/curso/temas/t3/7.svg', alt='')
        .col-sm-12.col-lg-5
          .bg-color-5.wcus-4.py-2.px-3.mb-4
            h4.mb-0.text-white Aplicaciones de la IA generativa
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Educación:] creación de ejercicios personalizados, resúmenes y explicaciones.
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Arte y diseño:] producción de imágenes, bocetos y conceptos creativos.
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Medicina:] diseño de nuevos medicamentos o apoyo en diagnósticos.
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Entretenimiento:] generación de historias interactivas, videojuegos y música.
            li.d-flex.mb-0
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Tecnología:] #[i chatbots] más naturales y asistentes que producen código.


      img(data-aos='fade-right').mb-5.d-none.d-lg-block(src='@/assets/curso/temas/t3/8.png')

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
          .row.align-items-center.mb-5.titulo-icono
            .col-auto.titulo-icono-img
              img(src='@/assets/curso/temas/bg/1.svg', alt='')
            .col
              h3.mb-0.titulo-icono-text.px-0.py-2 Ventajas
          .bg-color-11.pcus-3.d-flex.flex-column.mb-cus.justify-content-center
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-robot.icon-list
                p.mb-0 Fomenta la creatividad e innovación.
              li.d-flex
                i.fas.fa-robot.icon-list
                p.mb-0 Ahorra tiempo en la creación de contenidos.
              li.d-flex
                i.fas.fa-robot.icon-list
                p.mb-0 Personaliza experiencias en educación, comercio y entretenimiento.
              li.d-flex.mb-0
                i.fas.fa-robot.icon-list
                p.mb-0 Apoya en investigación y desarrollo en múltiples áreas.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/9.png', alt='')


      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Retos y aspectos éticos

      .row.mb-5.justify-content-center(data-aos='fade-right')
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.hcard-6
            .tarjeta-numerada__numero
              .h2 1
            p.mb-0 #[b Propiedad intelectual:] riesgo de copiar sin permiso.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5.hcard-6
            .tarjeta-numerada__numero
              .h2 2
            p.mb-0 #[b Desinformación:] posibilidad de generar noticias falsas.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.hcard-6
            .tarjeta-numerada__numero
              .h2 3
            p.mb-0 #[b Uso responsable:] garantizar transparencia y ética en su aplicación.

      .row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .tarjeta-avatar-c
            .tarjeta-avatar-c__img.d-none.d-lg-block
              img.w-50.m-auto(src='@/assets/curso/temas/t3/10.svg' alt='')
            .tarjeta.bg-color-11
                p.mb-0.p-4 La #[b IA generativa] es una herramienta poderosa que combina creatividad y tecnología. Junto con la IA predictiva, une la capacidad de #[b anticipar el futuro] con la de #[b crear soluciones originales], transformando la educación, la salud, la industria y la vida digital.

      .tarjeta.color-primario.p-3.mb-5(data-aos='fade-right')
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t2/18.svg", alt="")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Video: Inteligencia artificial generativa | ¿Qué es IA generativa? | Inteligencia Artificial
                p.mb-0 Se invita a explorar en siguiente video.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RtT3gJ3VQIk&ab_channel=Tecnolog%C3%ADa4.0" target="_blank")
                  span Ir al sitio
                  i.fas.fa-video




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

<style lang="sass"></style>
