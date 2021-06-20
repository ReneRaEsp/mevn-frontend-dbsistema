<template>
  <section class="login">
    <h2 class="title">Acceder al sistema</h2>
    <div v-on:keyup.enter="ingresar()" class="formLogin">
      <input 
      class="input" 
      v-model="email" 
      type="email" 
      placeholder="Correo electronico...">
      <input 
      v-model="password"
      class="input" 
      type="password"
      placeholder="Contraseña...">
      <div class="mensajeError" v-for="mensaje of mensajes" :key="mensaje">
        <p class="error">* {{mensaje}}</p>
      </div>
      <button class="ingresar" @click="ingresar()">Ingresar</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      email:'',
      password:'',
      mensajes:[],
      errorMensaje:''
    }
  }, 
  methods:{
    ingresar(){
      this.validar()
      if(!this.mensajes.length){
      axios.post('/usuario/login', {'email':this.email, 'password':this.password})
      .then(response=>{
        return response.data
      })
      .then(data=>{
        this.$store.dispatch('guardarToken', data.tokenReturn)
        this.limpiar()
        this.$router.push({name:'Inicio'})
      })
      .catch(error=>{
        console.log(error)
        this.errorMensaje='Usuario inexistente o contraseña incorrecta'
        this.mensajes.push(this.errorMensaje)
      })
      } else {
        console.log('Debe validar los campos')
      }

    },
    validar(){
      this.mensajes=[]
      let mensaje=''
      if(this.email.length < 1){
        mensaje ='Debes introducir un email válido'
        this.mensajes.push(mensaje)
      }
      if(this.password.length < 1){
        mensaje='Debes introducir una contraseña válida'
        this.mensajes.push(mensaje)
      }
    },
    limpiar(){
      this.mensajes=[],
      this.errorMensaje='',
      this.email='',
      this.password=''
    }
  }
}
</script>

<style scoped lang="sass">
  .login
    display: flex
    justify-content: flex-start
    //flex-wrap: wrap
    flex-direction: column
    overflow: auto
    width: 80vw
    .title
      display: flex
      font-size: 1.5rem
      color: white
      background: rgba(3, 33, 53, .86)
      padding: .7rem
      border-radius: 1rem
      align-self: center
      margin-top: 5.5rem
      margin-bottom: 1.5rem
      text-align: center
    .formLogin
      align-self: center
      display: flex
      justify-content: center
      flex-wrap: no-wrap       
      flex-direction: column   
      max-width: auto
      width: auto
      max-height: auto
      height: auto
      padding: 3rem
      background: rgba(3, 33, 53, .9)
      border-radius: .7rem
      overflow: auto
      .input
        align-self: center
        width: 35vw
        min-width: auto
        height: 5vh
        padding: .5rem
        margin-top: 1rem
      .ingresar 
        width: 7rem
        padding: .3rem
        min-width: auto
        border-radius: .7rem .7rem .7rem .7rem
        border: 3px solid rgba(10, 40, 40, .0)
        background: rgba(33,133,233,.5)
        color: white
        font-weight: bold
        transition: .5s     
        text-decoration: none   
        align-self: center
        margin-top: 1rem  
        &:hover
          opacity: .7
          cursor: pointer
      .mensajeError
        min-height: 5vh
        .error
          font-weight: bold
          margin-top: 20px
          color: rgb(130, 50, 70)

           

    

</style>