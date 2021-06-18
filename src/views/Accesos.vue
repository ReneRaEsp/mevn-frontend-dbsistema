<template>
  <section class="accesos">
    <router-view />
  </section>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped lang="sass">
.accesos
	display: flex
  justify-content: center
  width: 80vw
  flex-direction: column
  //flex-wrap: wrap
</style>