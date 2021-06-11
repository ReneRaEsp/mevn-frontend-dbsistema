<template>
<div>
  <ul class="navy-inner">
      <li class="list-element">
          <router-link class="button" to="/">Articulos</router-link>
      </li>
      <li class="list-element">
          <router-link class="button" to="/categorias">Categorias</router-link>
      </li>
      <li class="list-element">
          <router-link class="button" to="/ventas">Ventas</router-link>
      </li>
      <li class="list-element">
          <router-link class="button" to="/ingresos">Ingresos</router-link>
      </li>
      <li class="list-element">
          <router-link class="button" to="/almacen">Almacen</router-link>
      </li>
      <li class="list-element">
          <router-link class="button" to="/grafico">Grafico</router-link>
      </li>
      <li class="list-element">
          <router-link class="button" to="/acerca-de">Acerca de</router-link>
      </li>
  </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
    .navy-inner
        display: flex
        justify-content: center
        flex-wrap: wrap
        flex-direction: column
        color: white
        margin-top: .3rem
        padding: .5rem
        .list-element
            color: white
            display: flex
            justify-content: center
            margin-top: 1rem
            .button
                font-weight: bold
                font-size: 1.2rem
                width: 100%
                height: 2.5rem
                border: 2px solid rgba(21, 211, 211, .0)
                color: rgba(200, 210, 190, 1)
                background: rgba(24, 24, 24, .1)
                cursor: pointer
                transition: 1s
                text-decoration: none
                display: flex
                justify-content: center
                align-items: center
                &:hover
                    border: 2px solid rgba(21, 211, 211, .9)
                    color: rgba(21, 211, 211, .9)
                &:focus  
                    border: 2px solid rgba(21, 211, 211, .9)
                    color: rgba(21, 211, 211, .9)
                    background: rgba(2, 28, 54, .5)

</style>