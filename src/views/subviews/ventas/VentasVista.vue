<template>
  <section class="ventasVista">
    <CabeceroVentas/>
	<h2 class="title">Ventas</h2> 
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
		justify-content: flex-start
		flex-direction: column
		flex-wrap: wrap
		.title
			font-size: 2.1rem
			color: rgb(100, 197, 192)
			align-self: center
			margin-top: 1.5rem
			margin-bottom: 1.5rem
			text-align: center
</style>