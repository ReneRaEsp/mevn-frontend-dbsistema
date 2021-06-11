<template>
  <div class="porfile">
      <div class="image">
          <img class="image-inner" src="../assets/logo.png" alt="" width="70" height="70">
      </div>
      <div class="title">
          <p class="title-inner">DB Sistema<br> MEVN</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
    .porfile
        display: flex
        flex-wrap: wrap
        justify-content: center
        align-items: center
        margin-bottom: 1rem
        .image
            padding: 10px
            display: flex
            justify-content: center
            .image-inner
                margin: auto
        .title
            display: flex
            justify-content: center
            margin: auto
            .title-inner
                text-justify: center
                text-align: center
                font-size: 20px
                font-weight: bold
                margin: auto
                color: rgba(233, 233, 233, 1)
</style>