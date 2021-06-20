<template>
  <section class="acercaDe">
      <h1 class="title">Acerca De</h1>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
    .acercaDe
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