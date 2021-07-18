<template>
  <section class="acercaDe">
      <h2 class="title">Sistema de gestion de compras, ventas e inventario</h2>
      <p class="descripcion">
          Este sistema es un sistema web desarrollado utilizando las tecnologias del stack MEVN(MongoDB, Express, Vue.js y Node.js)
          Por lo cual esta completamente desarrollado en JavaScript tanto en el frontend como en el backend.
          <br>
          <br>
          Utiliza la arquitectura: Cliente - Servidor
          <br>
          <br>
          El frontend esta desarrollado en la versión 2 de Vue.js ya que es el framework de JavaScript con el cual me siento mas cómodo
          por su velocidad, fluidez, flexibilidad, progresividad, y por la forma en la cual me permite trabajar de una forma ordenada ya que separa
          el HTML, CSS y JavaScript y diseñado como una SPA(Single Page Application o Aplicación de 
          una sola página) lo cual quiere decir que se puede acceder a todas las funciones del sistema sin que sea recargada 
          la página, la cual ademas cuenta con un enrutamiento, para los estilos se utiliza el preprocesador sass y no se ocupa
          ningún framework de css
          <br>
          <br>
          Para el backend se utiliza Node.js en conjunto con el framework Express y utiliza ciertas librerias como:
          Mongoose, Axios y Chart.js y accede a una base de datos no relacional MongoDB
          <br>
          <br>
          Sistema desarrollado René Ramirez, Desarrollador Web - Julio del 2021
      </p>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
    .acercaDe
        display: flex
        justify-content: flex-start
        //flex-wrap: wrap
        flex-direction: column
        overflow-y: auto
        overflow-x: hidden
        width: 80vw
        .title
            font-size: 2.1rem
            color: rgb(100, 197, 192)
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
            text-align: center    
        .descripcion
            padding: 4rem
            color: white
            font-weight: bold
            text-align: justify
</style>