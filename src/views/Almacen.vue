<template>
  <section class="Almacen">
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

<style scope lang="sass">
    .Almacen
        display: flex
        justify-content: center
        flex-direction: column
        flex-wrap: wrap
        .title
            color: white                    
</style>