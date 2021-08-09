<template>
  <div class="porfile">
      <div class="image">
          <img class="image-inner" src="../assets/logo.png" alt="" width="70" height="70">
      </div>
      <div class="title">
          <p class="title-inner">DB Sistema<br> MEVN</p>
      </div>
      <div v-on:click="closeMenu()" id="close-icon-container">
          <img id="close-icon" src="../assets/img/close.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        closeMenu(){
            document.getElementById('navy-1').style.display = "none";
            document.getElementById('navy-1').style.width = "0";
            document.getElementById('navy-1').style.position = "absolute";
            document.getElementById('navy-1').style.transform = "translateX(0)";
            document.getElementById('hamburger-icon').style.display = "flex";
        }

    }
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
        #close-icon-container
            background: white
            display: flex
            border-radius: 4px
            cursor: pointer
            margin: 7px

    @media screen and (min-width: 601px)
        .porfile
            #close-icon-container
                display: none
</style>