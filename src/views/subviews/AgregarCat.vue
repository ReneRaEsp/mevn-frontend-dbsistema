<template>
  <section class="agregarCat">
      <CabeceroAlmacen/>
      <h3 class="title">Agregar Categoria</h3>
  </section>
</template>

<script>
import CabeceroAlmacen from '../../components/almacen/CabeceroAlmacen.vue'
export default {
    components:{
        CabeceroAlmacen
    }
}
</script>

<style scoped lang="sass">
    .agregarCat
        display: flex
        justify-content: start
        //flex-wrap: wrap
        flex-direction: column
        overflow: auto
        .title
            font-size: 2.1rem
            color: rgb(100, 197, 192)
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
            text-align: center
</style>