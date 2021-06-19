<template>
  <section class="almacen">
      <CabeceroAlmacen/>
      <CuerpoAlmacen/>
  </section>
</template>

<script>
import CabeceroAlmacen from '../components/almacen/CabeceroAlmacen.vue'
import CuerpoAlmacen from '../components/almacen/CuerpoAlmacen.vue'
export default {
    components:{
        CabeceroAlmacen,
        CuerpoAlmacen
    }
}
</script>

<style scoped lang="sass">
    .almacen
        display: flex
        justify-content: center
        flex-direction: column
        flex-wrap: wrap                 
</style>