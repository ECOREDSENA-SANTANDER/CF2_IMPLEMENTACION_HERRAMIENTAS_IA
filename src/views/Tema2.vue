<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Inteligencia artificial predictiva
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9
          .row.mb-5.tarjeta--container
            .col-sm-12.col-lg-4.d-none.d-lg-block.bg-fondo-5.py-5
              img.w-75.m-auto(src='@/assets/curso/temas/t1/31.svg', alt='')
            .col-sm-12.col-lg-8.bg-color-4.pcus-2.justify-content-center.d-flex.flex-column
              .bg-color-5.wcus-4.py-2.px-3.mb-4
                h4.mb-0.text-white ¿Qué es la IA predictiva?
              p.mb-0 La inteligencia artificial predictiva es una rama de la IA que utiliza datos del pasado para identificar patrones y predecir eventos futuros. Se basa en estadística y aprendizaje automático (#[i Machine Learning]) para anticipar comportamientos, necesidades o riesgos en distintos contextos.
          
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-6.col-lg-4.mb-cus
              .tarjeta-avatar-b.mb-0.hcard-2
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/t2/2.svg' alt='')
                .tarjeta.bg-color-6
                  .p-4
                   p.mb-0 #[b Descriptivo:] explica lo que ya pasó.
            .col-sm-12.col-md-6.col-lg-4.mb-cus
              .tarjeta-avatar-b.mb-0.hcard-2
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/t2/3.svg' alt='')
                .tarjeta.bg-color-7
                  .p-4
                   p.mb-0 #[b Prescriptivo:] sugiere qué acciones tomar.
            .col-sm-12.col-md-6.col-lg-4
              .tarjeta-avatar-b.mb-0.hcard-2
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/t2/4.svg' alt='')
                .tarjeta.bg-color-8
                  .p-3
                   p.mb-0 #[b Predictivo:] se enfoca en el futuro, anticipando lo que puede ocurrir.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='')

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 ¿Cómo funciona la IA predictiva?
      

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          LineaTiempoD.color-acento-botones
            .row(numero="a" titulo="Recolección de datos")
              .col-sm-12.col-lg-12
                p.mb-0 Se recopilan datos relevantes y confiables (registros médicos, ventas, sensores, interacciones digitales, redes sociales, etc.).
            .row(numero="b" titulo="Limpieza y organización")
              .col-sm-12.col-lg-12
                p.mb-0 Los datos deben estar bien estructurados, ya que su calidad impacta directamente en la precisión de las predicciones.

            .row(numero="c" titulo="Modelado de la información")
              .col-sm-12.col-lg-12
                p.mb-0 Los algoritmos seleccionan las variables más influyentes y construyen modelos que simulan relaciones entre múltiples factores.

            .row(numero="d" titulo="Entrenamiento con <i>Machine Learning</i>")
              .col-sm-12.col-lg-12
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-robot.icon-list
                    p.mb-0 #[b Regresión (lineal / logística):] predecir valores o probabilidades.
                  li.d-flex
                    i.fas.fa-robot.icon-list
                    p.mb-0 #[b Árboles de decisión:] clasificar escenarios o resultados.
                  li.d-flex
                    i.fas.fa-robot.icon-list
                    p.mb-0 #[b Redes neuronales:] identificar patrones complejos.
                  li.d-flex.mb-0 
                    i.fas.fa-robot.icon-list
                    p.mb-0 #[b Máquinas de soporte vectorial:] separar categorías y detectar anomalías.

            .row(numero="e" titulo="Validación del modelo")
              .col-sm-12.col-lg-12
                p.mb-0 Se comparan predicciones con datos reales, usando métricas como #[b tasa de error, precisión o sensibilidad].

            .row(numero="f" titulo="Implementación en entornos reales")
              .col-sm-12.col-lg-12
                p.mb-0 El modelo se aplica para procesar nuevos datos en tiempo real y generar predicciones útiles.

          
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png', alt='')


      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de modelos predictivos

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.px-5.py-4.mb-cus.hcard-4
              .row.justify-content-center.mb-4
                .col-12
                    img(src='@/assets/curso/temas/t2/6.png')          
              h3.text-center.text-white Supervisados
              p.mb-3.text-white Se entrenan con datos ya etiquetados (ejemplo: identificar correos como “#[i spam]” o “no #[i spam]”).
            .col-md.tarjeta.bg-color-9.px-5.py-4.hcard-4
              .row.justify-content-center.mb-4
                .col-12
                    img(src='@/assets/curso/temas/t2/7.png')          
              h3.text-center.text-white No supervisados
              p.mb-3.text-white Buscan patrones ocultos en datos no clasificados (ejemplo: segmentar clientes según hábitos de compra).

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Casos de uso

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/8.png', alt='')
        .col-sm-12.col-lg-9
          SlyderF.circl-arrow.mb-4(columnas="col-md-6 col-lg-6 col-xl-4")
            .tarjeta.bg-color-10.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/9.svg', alt='')
              p.mb-0.text-center #[b Salud:] detección temprana de enfermedades o riesgos médicos.

            .tarjeta.bg-color-10.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/10.svg', alt='')
              p.mb-0.text-center #[b Educación:] predicción del abandono escolar y personalización de contenidos.

            .tarjeta.bg-color-10.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/11.svg', alt='')
              p.mb-0.text-center #[b Comercio electrónico:] pronóstico de productos más demandados y optimización de inventarios.

            .tarjeta.bg-color-10.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/12.svg', alt='')
              p.mb-0.text-center #[b Industria:] mantenimiento predictivo para evitar fallos en máquinas.

            .tarjeta.bg-color-10.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/13.svg', alt='')
              p.mb-0.text-center #[b Entretenimiento:] recomendaciones personalizadas (Netflix, Spotify).

            .tarjeta.bg-color-10.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/14.svg', alt='')
              p.mb-0.text-center #[b Otros:] pronóstico climático, detección de fraudes, tráfico urbano, campañas de #[i marketing].


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.bg-color-11.pcus-3.d-flex.flex-column.justify-content-center.mb-cus
          .bg-color-5.wcus-4.py-2.px-3.mb-3
            h4.mb-0.text-white ¿Qué es la IA predictiva?
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 Anticipa riesgos y problemas antes de que ocurran.
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 Mejora la toma de decisiones en empresas e instituciones.
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 Descubre patrones ocultos en grandes volúmenes de datos.
            li.d-flex.mb-0
              i.fas.fa-robot.icon-list
              p.mb-0 Optimiza recursos y procesos en tiempo real.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/15.svg', alt='')
        .col-sm-12.col-lg-5
          .row.mb-4.d-none.d-lg-block
            .col-2
              img(src='@/assets/curso/temas/t2/16.svg', alt='')
          .bg-color-5.wcus-4.py-2.px-3.mb-4
            h4.mb-0.text-white Desafíos y aspectos éticos
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Privacidad:] proteger los datos personales.
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Equidad:]  evitar sesgos que discriminen.
            li.d-flex
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Transparencia:]  explicar cómo y por qué se toman decisiones.
            li.d-flex.mb-0
              i.fas.fa-robot.icon-list
              p.mb-0 #[b Responsabilidad social:]  usar las predicciones para el bienestar y no solo para el beneficio económico.
        

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/17.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 La #[b IA predictiva] convierte datos en conocimiento y conocimiento en #[b decisiones inteligentes]. Su aplicación ya transforma áreas como la salud, la educación, la industria y el comercio, y seguirá siendo una herramienta esencial para enfrentar los desafíos del futuro, siempre que se use con ética, transparencia y responsabilidad.

      .tarjeta.color-primario.p-3.mb-5(data-aos='fade-right')
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t2/18.svg", alt="")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Video: Webinar Inteligencia Artificial & #[i Machine Learning] como base predictiva
                p.mb-0 Se invita a explorar en siguiente video.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=MDz8R6Bw6k4&ab_channel=AssistConsultores" target="_blank")
                  span Ir al sitio
                  i.fas.fa-video








      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Tipos de IA predictiva
      
      
      .row.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar-2.hcard
            img(src='@/assets/curso/temas/t2/19.svg')
            .tarjeta.bg-color-10.hcard-3
              .p-4
                h4.mt-3.text-center Regresión lineal y logística
                p.mb-0.text-center Predicen valores numéricos (regresión lineal) o la probabilidad de que algo pase, como “sí / no” (regresión logística). 

        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar-2.hcard
            img(src='@/assets/curso/temas/t2/20.svg')
            .tarjeta.bg-color-10.hcard-3
              .p-4
                h4.mt-3.text-center Árboles de decisión
                p.mb-0.text-center Dividen datos en opciones y ayudan a tomar decisiones automáticas, como clasificar correos en #[i spam] o no #[i spam]. 
        
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar-2.hcard
            img(src='@/assets/curso/temas/t2/21.svg')
            .tarjeta.bg-color-10.hcard-3
              .p-4
                h4.mt-3.text-center Redes neuronales
                p.mb-0.text-center Aprenden de grandes volúmenes de datos y detectan patrones muy complejos, usados en reconocimiento de voz o imagen. 

        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .tarjeta-avatar-2.hcard
            img(src='@/assets/curso/temas/t2/22.svg')
            .tarjeta.bg-color-10.hcard-3
              .p-4
                h4.mt-3.text-center Máquinas de soporte vectorial
                p.mb-0.text-center Clasifican datos en categorías, muy utilizadas en medicina y detección de fraudes.

      .row.align-items-center.mb-5.titulo-icono-2(data-aos='fade-right')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Ejemplos prácticos digitales 

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10.position-relative
          .avatar.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/t2/27.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/23.svg", alt="alt").img100
              .col
                h4 Recomendaciones en plataformas
                p.mb-0 Netflix o Spotify predicen qué series, películas o canciones gustarán, según lo que se ha visto. 
                
          .crd.crd--avatarHorizontal.crd.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/23.svg", alt="alt").img100
              .col
                h4 Salud digital
                p.mb-0 #[i Apps] que analizan signos vitales y alertan sobre posibles riesgos antes de que se manifiesten enfermedades. 

          .crd.crd--avatarHorizontal-2.crd.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/23.svg", alt="alt").img100
              .col
                h4 #[i E-commerce]
                p.mb-0 Amazon predice qué productos comprarán los usuarios y recomienda ofertas personalizadas, optimizando el inventario. 

          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/26.svg", alt="alt").img100
              .col
                h4 Mantenimiento predictivo
                p.mb-0 #[i Apps] en fábricas anticipan cuándo una máquina podría fallar y avisan antes de que esto ocurra. 





      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Criterios de aplicación de la IA predictiva
      
      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.tarjeta.bg-color-4.px-5.py-4.mb-cus.hcard-7
          .row.justify-content-center.mb-4
            .col-5
                img(src='@/assets/curso/temas/t2/28.svg')      
          p.mb-0.text-center #[b Disponibilidad de datos históricos:] sin datos previos, la IA predictiva no puede “aprender”. 
        .col-sm-12.col-md-6.col-lg-3.tarjeta.bg-color-1.px-5.py-4.mb-cus.hcard-7
          .row.justify-content-center.mb-4
            .col-5
                img(src='@/assets/curso/temas/t2/29.svg')      
          p.mb-0.text-center #[b Calidad de los datos:] los datos deben ser confiables y representativos para que la predicción sea precisa. 
        .col-sm-12.col-md-6.col-lg-3.tarjeta.bg-color-4.px-5.py-4.mb-cus.hcard-7
          .row.justify-content-center.mb-4
            .col-5
                img(src='@/assets/curso/temas/t2/30.svg')      
          p.mb-0.text-center #[b Claridad del objetivo:] es fundamental tener claro qué se desea predecir (por ejemplo, rotación de estudiantes, ventas, enfermedades).
        .col-sm-12.col-md-6.col-lg-3.tarjeta.bg-color-1.px-5.py-4.hcard-7
          .row.justify-content-center.mb-4
            .col-5
                img(src='@/assets/curso/temas/t2/31.svg')      
          p.mb-0.text-center #[b Ética y privacidad:] garantizar el manejo seguro y ético de los datos antes de implementar soluciones predictivas, especialmente #[i online].
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
