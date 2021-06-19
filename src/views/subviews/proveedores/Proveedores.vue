<template>
  <section class="proveedores">
      <CabeceroCompras/>
      <h2 class="title">Proveedores</h2>
  </section>
</template>

<script>
import CabeceroCompras from '../../../components/compras/CabeceroCompras.vue'
export default {
    components:{
        CabeceroCompras
    }
    
}
</script>

<style scoped lang="sass">
    .proveedores
        display: flex
        justify-content: start
        //flex-wrap: wrap
        flex-direction: column
        overflow-y: auto
        overflow-x: hidden
        .title
            font-size: 2.1rem
            color: rgb(100, 197, 192)
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
            text-align: center 
</style>