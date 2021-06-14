<template>
  <section class="cabeceroAlmacen">
      <router-link class="button" to="/almacen/categorias">
        Categorias
      </router-link>
      <router-link class="button" to="/almacen/articulos">
        Articulos
      </router-link>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
    .cabeceroAlmacen
        display: flex
        justify-content: center
        padding-top: 1rem
        width: 80vw
        height: auto
        //background: rgba(20, 180, 233, .1)
        background: rgba(10, 70, 93, .55)
        .button
            font-weight: bold
            font-size: 1.4rem
            width: 40%
            height: 2.5rem
            border: 2px solid rgba(21, 211, 211, .4)
            color: rgba(200, 210, 190, 1)
            background: rgba(24, 24, 24, .1)
            cursor: pointer
            transition: 1s
            text-decoration: none
            display: flex
            justify-content: center
            align-items: center
            border-radius: .7rem .7rem 0 0
            margin: 0 1rem
            &:hover
                border: 2px solid rgba(21, 211, 211, .9)
                color: rgba(21, 211, 211, .9)
            &:focus  
                border: 2px solid rgba(21, 211, 211, .9)
                color: rgba(21, 211, 211, .9)
                background: rgba(2, 28, 54, .5)
                
</style>