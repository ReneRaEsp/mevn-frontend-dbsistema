<template>
  <section class="inicio">
    <h2 class="title">Inicio</h2>
    <router-view/>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
	.inicio
		display: flex
		justify-content: flex-start
		//flex-wrap: wrap
		flex-direction: column
		overflow-y: auto
		overflow-x: hidden
		width: 80vw
		.title
			font-size: 2.1rem
			color: rgb(100, 197, 192)
			align-self: center
			margin-top: 1.5rem
			margin-bottom: 1.5rem
			text-align: center
</style>