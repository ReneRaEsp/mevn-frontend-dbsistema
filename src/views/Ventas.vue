<template>
  <section class="ventas">
      <h2>Ventas</h2>
      <CabeceroVentas/>
      <CuerpoVentas/>
  </section>
</template>

<script>
import CabeceroVentas from '../components/ventas/CabeceroVentas.vue'
import CuerpoVentas from '../components/ventas/CuerpoVentas.vue'
export default {
    components:{
        CabeceroVentas,
        CuerpoVentas
    }
}
</script>

<style scoped lang="sass">
    .ventas
        display: flex
        justify-content: center
        flex-direction: column
        flex-wrap: wrap               
</style>