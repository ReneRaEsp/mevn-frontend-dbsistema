<template>
  <section class="agregarCat">
      <CabeceroAlmacen/>
      <h3 class="title">Agregar Categoria</h3>
      <div class="formAgregar">
          <input v-model="nombre" class="input" placeholder="Nombre" type="text">
          <br>
          <textarea v-model="descripcion" class="textArea" placeholder="Descripcion" name="" id="" cols="10" rows="5"></textarea>
          <button class="guardar" @click="guardar()">
              Guardar
          </button>
      </div>
      <router-link class="volver" to="/almacen/categorias">
          Volver sin guardar
      </router-link>
  </section>
</template>

<script>
import CabeceroAlmacen from '../../components/almacen/CabeceroAlmacen.vue'
import axios from 'axios'
export default {
    data(){
        return{
            nombre:'',
            descripcion:'',
            ruta:this.$router.currentRoute.fullPath,
            editar:false,
        }
    },
    methods:{
        guardar(){
            if (!this.editar){
                axios.post('categoria/add', {'nombre': this.nombre, 'descripcion': this.descripcion})
                .then((response)=>{
                    console.log('documento agregado exitosamente: ' + response.data.nombre)
                }).catch((error)=>{
                    console.log(error)
                    alert('no se pudo agregar el registro')
                })
                this.$router.push({path: '/almacen/categorias/'})
            } else {
                axios.put('categoria/update', {'_id':this.$router.currentRoute.params.id, 'nombre':this.nombre, 'descripcion':this.descripcion})
                .then((response)=>{
                    console.log('documento actualizado exitosamente: ' + response.data.nombre)
                }).catch((error)=>{
                    console.log(error)
                    alert('no se pudo actualizar el registro')
                })
                this.$router.push({path: '/almacen/categorias/'})
            }
        },
        opcion(){
            if(this.ruta === '/almacen/categorias/add'){
                console.log('agregar')
                this.editar=false
            }else{
                console.log('editar')
                this.buscarPorId()
                this.editar=true
            }
        },
        buscarPorId(){
            axios.get('categoria/query?_id='+this.$router.currentRoute.params.id)
            .then((response)=>{
                console.log('respuesta' + response.data.nombre)
                this.nombre = response.data.nombre
                this.descripcion = response.data.descripcion
            }).catch((error)=>{
                console.log('error del query :' + error)
            })
            console.log(this.$router.currentRoute.params.id)
        }
    },
    created() {
        this.opcion()
    },
    components:{
        CabeceroAlmacen
    }
}
</script>

<style scoped lang="sass">
    .agregarCat
        display: flex
        justify-content: start
        //flex-wrap: wrap
        flex-direction: column
        overflow: auto
        .title
            font-size: 1.5rem
            color: white
            background: rgba(3, 33, 53, .86)
            padding: .7rem
            border-radius: 1rem
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
            text-align: center
        .formAgregar
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
            .textArea
                min-width: 20vw
                min-height: 20vh
                width: 35vw
                height: 20vh
                max-width: 35vw
                max-height: 35vh
                align-self: center
                padding: .5rem
            .input
                align-self: center
                width: 35vw
                min-width: auto
                height: 5vh
                padding: .5rem
                margin-top: 1rem
            .guardar
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
                transform: translateX(9rem)       
                &:hover
                    opacity: .7
                    cursor: pointer   
        .volver
            width: 7rem
            padding: .3rem
            border-radius: .7rem .7rem .7rem .7rem
            border: 3px solid rgba(10, 40, 40, .0)
            background: rgba(33,43,43,1)
            color: white
            font-weight: bold
            transition: .5s     
            text-decoration: none
            text-align: center
            align-self: center
            margin-top: 1rem
            transform: translateX(-15rem)       
            &:hover
                opacity: .7
                cursor: pointer   
             

</style>