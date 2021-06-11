<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <section class="navy">
      <Porfile/>
      <hr>
      <Navy/>
    </section>
    <section class="content">
      <router-view/>
    </section>
  </div>
</template>
<script>
  import Porfile from './components/Porfile'
  import Navy from './components/Navy'
export default {
  components:{
    Porfile,
    Navy
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="sass">
  *
    padding: 0
    margin: 0
    box-sizing: border-box
  
  body
    font-family: sans-serif
    font-size: 16px

  #app
    background: rgba(233, 133, 136, .9)
    width: 100%
    height: 100%
    display: flex
    .navy
      display: flex
      justify-content: start
      flex-direction: column
      flex-wrap: wrap
      width: 20vw
      height: 100vh
      background: rgba(10, 70, 93, .9)
    .content
      display: flex
      width: 80vw
      height: 100vh
      background: rgba(2, 28, 54, .9)
  
  hr
    width: 80%
    margin: 0 auto

</style>
