<template>
  <div id="app">
    <section id="navy-1" class="navy">
      <Porfile />
      <hr />
      <Navy />
    </section>
    <section id="open-navy-icon">
      <img v-on:click="showMenu()" id="hamburger-icon" src="./assets/img/hamburger.svg" alt="">          
    </section>
    <section class="content">
      <router-view />
    </section>
  </div>
</template>
<script>
import Porfile from "./components/Porfile";
import Navy from "./components/Navy";
export default {
  components: {
    Porfile,
    Navy,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    showMenu(){
      document.getElementById('navy-1').style.display = "flex";
      document.getElementById('navy-1').style.width = "50vw";
      document.getElementById('navy-1').style.position = "absolute";
      document.getElementById('navy-1').style.transform = "translateX(0)";
      document.getElementById('hamburger-icon').style.display = "none";
    },
  },
};
</script>
<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box

body
  font-family: sans-serif
  font-size: 16px
  overflow: hidden

#app
  background-image: url("assets/img/fondo.jpg")
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  height: 100%
  display: flex
  overflow: hidden
  .navy
    display: flex
    justify-content: flex-start
    flex-direction: column
    flex-wrap: no-wrap
    overflow: auto
    width: 20vw
    height: 100vh
    transform: translateX(0)
    //background-image: url("assets/img/fondo.jpg")
    background: rgba(10, 70, 93, .55)
  .content
    display: flex
    width: 80vw
    height: 100vh
    overflow: hidden
    background: rgba(2, 28, 54, .6)
  #open-navy-icon
    display: none
    justify-content: flex-start
    position: fixed
    align-items: center
    flex-direction: column
    flex-wrap: no-wrap
    #hamburger-icon
      display: block
      margin-top: 3rem
      transform: translateX(1rem)
      width: 3rem
      height: 2rem
      cursor: pointer

hr
  width: 80%
  margin: 0 auto

::-webkit-scrollbar
  background: rgba(2, 28, 54, .6)
  width: 15px
  border-radius: 1rem
  &:hover
    background: rgba(2, 28, 54, .5)

::-webkit-scrollbar-track
  background: gba(20, 128, 154, .6)

::-webkit-scrollbar-thumb
  background: rgba(12, 18, 34, .6)
  width: 1px
  border-radius: 1rem
  &:hover
    background: rgba(12, 18, 34, .4)
  &:active
    background: rgba(12, 18, 34, .8)


@media screen and (max-width: 600px)
  #app
    .navy
      display: none
      transform: translateX(-20vw)
    #open-navy-icon
      display: flex
    .content
      width: 100vw

  body
    font-size: 8px
  
@media screen and (min-width: 601px)
  #app
    .navy
      display: flex
      transform: translateX(0)
    #open-navy-icon
      display: none
    .content
      width: 80vw

</style>
