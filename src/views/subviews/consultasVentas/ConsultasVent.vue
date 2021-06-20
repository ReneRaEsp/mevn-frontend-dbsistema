<template>
  <section class="consultasVentas">
	<CabeceroConsultas/>
    <h2 class="title">Consultas Ventas works!</h2>
  </section>
</template>

<script>
import CabeceroConsultas from '../../../components/consultas/CabeceroConsultas.vue'
export default {
	components:{
		CabeceroConsultas
	}
}
</script>

<style scoped lang="sass">
	.consultasVentas
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