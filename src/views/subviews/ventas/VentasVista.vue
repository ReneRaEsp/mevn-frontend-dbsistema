<template>
  <section class="ventasVista">
    <CabeceroVentas/>
	<h2>Ventas v</h2> 
  </section>
</template>

<script>
import CabeceroVentas from '../../../components/ventas/CabeceroVentas.vue'
export default {
  components:{
    CabeceroVentas
  }
}
</script>

<style scoped lang="sass">
	.ventasVista
		display: flex
		justify-content: start
		flex-direction: column
		flex-wrap: wrap   
</style>