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
  },
  created(){
    //this.$store.dispatch('autoLogin')
  },
  computed:{
   /* logueado(){
      return this.$store.state.usuario
    },
    esAdministrador(){
      return this.$store.state.usuario && this.$store.usuario.rol == 'Administrador'
    },
    esAlmacenero(){
      return this.$store.state.usuario && this.$store.usuario.rol == 'Almacenero'
    },
    esVendedor(){
      return this.$store.state.usuario && this.$store.usuario.rol == 'Vendedor'
    }*/
  },
  methods:{

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
    background-image: url("assets/img/fondo.jpg")
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    width: 100%
    height: 100%
    display: flex
    .navy
      display: flex
      justify-content: flex-start
      flex-direction: column
      flex-wrap: no-wrap
      overflow: auto
      width: 20vw
      height: 100vh
      //background-image: url("assets/img/fondo.jpg")
      background: rgba(10, 70, 93, .55)
    .content
      display: flex
      width: 80vw
      height: 100vh
      background: rgba(2, 28, 54, .6)
  
  hr
    width: 80%
    margin: 0 auto

  ::-webkit-scrollbar
    background: rgba(2, 28, 54, .6)
    width: 15px
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
</style>
