<template>
  <section class="clientes">
      <CabeceroVentas/>
      <h2>Clientes</h2>
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
	.clientes
		display: flex
		justify-content: flex-start
		flex-direction: column
		flex-wrap: wrap               
</style>