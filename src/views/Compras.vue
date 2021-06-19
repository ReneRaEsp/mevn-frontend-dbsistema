<template>
  <section class="compras">
      <CabeceroCompras/>
      <CuerpoCompras/>
  </section>
</template>

<script>
import CabeceroCompras from '../components/compras/CabeceroCompras.vue'
import CuerpoCompras from '../components/compras/CuerpoCompras.vue'
export default {
  components:{
    CabeceroCompras,
    CuerpoCompras
  }
}
</script>

<style scoped lang="sass">
	.compras
		display: flex
		justify-content: center
		flex-direction: column
		flex-wrap: wrap    
</style>