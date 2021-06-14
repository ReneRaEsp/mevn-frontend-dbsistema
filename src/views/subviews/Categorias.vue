<template>
  <section class="Categorias">
      <CabeceroAlmacen/>
      <h3 class="title">Categorias</h3>
      <div class="modulo">
        <div class="busqueda">
            <input @input="filtrarPorNombreInput()" v-model="busqueda" class="input" type="text" placeholder="Buscar categoria..." name="search">
            <button @click="filtrarPorNombre()" class="submit" >Buscar</button>
        </div>
        <button class="mostrarT" @click="listar()">mostrar todo</button>
        <router-link class="agregar" to="/almacen/categorias/add">
            Agregar
        </router-link>
      </div>
      
    <table v-if="!buscando" style="width:90%">
        <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Opc</th>
        </tr>
        <tr v-for="categoria of categorias" :key="categoria._id">
            <td >{{categoria.nombre}}</td>
            <td >{{categoria.descripcion}}</td>
            <td >
                <div v-if="categoria.estado">
                    <span class="activo">
                        Activo
                    </span>
                </div>
                <div v-else>
                    <span class="inactivo">
                        Inactivo
                    </span>
                </div>
            </td>
            <td>
                <router-link :to="'/almacen/categorias/add'+categoria._id">
                    <i class="edit fas fa-edit"></i>
                </router-link>
                <button class="buttonDelete" @click="eliminarRegistro()">
                    <i class="delete fas fa-trash"></i>
                </button>
            </td>
        </tr>
    </table>
    <table v-else-if="buscando" style="width:90%">
        <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th></th>
        </tr>
        <tr v-for="resultado of resultados" :key="resultado.id">
            <td >{{resultado.nombre}}</td>
            <td >{{resultado.descripcion }}</td>
            <td >
                <div v-if="resultado.estado">
                    <span class="activo">
                        Activo
                    </span>
                </div>
                <div v-else>
                    <span class="inactivo">
                        Inactivo
                    </span>
                </div>
            </td>
            <td>
                <router-link :to="'/almacen/categorias/add'+resultado._id">
                    <i class="edit fas fa-edit"></i>
                </router-link>
                <button class="buttonDelete" @click="eliminarRegistro()">
                    <i class="delete fas fa-trash"></i>
                </button>
            </td>
        </tr>
    </table>
    <h3 v-if="sinCoincidencias" class="sinCoincidencias">No se han encotrado resultados<br> para su busqueda</h3>
    <span v-else></span>
        
        
  </section>
</template>

<script>
import axios from 'axios'
import CabeceroAlmacen from '../../components/almacen/CabeceroAlmacen.vue'
export default {
    data(){
        return {
            categorias:[],
            busqueda:'',
            buscando:false,
            resultados:[],
            sinCoincidencias:false              
        }
    },
    created() {
        this.listar()
    },
    methods:{
        listar(){
            let me= this;
            this.sinCoincidencias=false
            this.buscando=false
            axios.get('categoria/list').then(function (response){
                if(me.busqueda == ''){
                    me.categorias=response.data
                } else {
                    console.log('realizando busqueda')
                }
            }).catch(function(error){
                console.log(error)
            })
        },
        filtrarPorNombre(){
            console.log('inicia la funcion')
            let me = this
            me.resultados = []
            let r = []
            me.categorias.forEach(categoria =>{
                if(categoria.nombre === me.busqueda){
                    r.push(categoria)
                }           
            })
            me.resultados=r
            console.log(`resultados:${me.resultados}`)
            me.resultados == [] || me.resultados == '' || me.resultados == undefined? me.sinCoincidencias = true : me.sinCoincidencias = false
            me.buscando= true
        },filtrarPorNombreInput(){
            let me = this
            me.resultados = []
            let r = []
            me.categorias.forEach(categoria =>{
                console.log(!categoria.nombre.search(me.busqueda))
                if(!categoria.nombre.search(me.busqueda)){
                    //console.log(`eureka: ${categoria.nombre.search(me.busqueda)}`)
                    r.push(categoria)
                } else {
                    me.sinCoincidencias = true
                }           
            })
            me.resultados=r
            console.log(`resultados:${me.resultados}`)
            me.resultados == [] || me.resultados == '' || me.resultados == undefined? me.sinCoincidencias = true : me.sinCoincidencias = false
            me.buscando= true
        },eliminarRegistro(){
            
        }
    },
    components:{
        CabeceroAlmacen
    }
}
</script>

<style scoped lang="sass">
    .Categorias
        display: flex
        justify-content: start
        //flex-wrap: wrap
        flex-direction: column
        overflow: auto
        .title
            font-size: 2.1rem
            color: rgb(100, 197, 192)
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
            text-align: center
        .sinCoincidencias
            font-size: 2rem
            color: rgb(4, 4, 4)
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
            text-align: center
        .modulo
            display: flex
            justify-content: space-around
            padding: 1rem
            background: rgba(3, 33, 53, .7)
            border-radius: 1rem 1rem 0 0
            border-top: 3px solid rgba(10, 40, 40, .2)
            border-left: 3px solid rgba(10, 40, 40, .2)
            border-right: 3px solid rgba(10, 40, 40, .2)
            width: 90%
            align-self: center
            .busqueda
                .input
                    padding: .3rem
                    background: rgba(233,233,233,.7)
                    border: 3px solid rgba(10, 40, 40, .0)
                    border-radius: .7rem 0rem 0rem .7rem
                .submit
                    padding: .3rem
                    background: rgba(33,133,233,.5)
                    border: 3px solid rgba(10, 40, 40, .0)
                    border-radius: 0rem 1rem 1rem 0rem
                    color: white
                    font-weight: bold
                    transition: .5s
                    &:hover
                        opacity: .7
                        cursor: pointer
            .agregar
                padding: .3rem
                border-radius: .7rem .7rem .7rem .7rem
                border: 3px solid rgba(10, 40, 40, .0)
                background: rgba(33,133,233,.5)
                color: white
                font-weight: bold
                transition: .5s     
                text-decoration: none          
                &:hover
                    opacity: .7
                    cursor: pointer
            .mostrarT
                padding: .3rem
                margin-left: -4rem
                border-radius: .7rem .7rem .7rem .7rem
                border: 3px solid rgba(10, 40, 40, .0)
                background: rgba(33,73,23,.5)
                color: white
                font-weight: bold
                transition: .5s    
                &:hover
                    opacity: .7
                    cursor: pointer


    table
        border-collapse: collapse
        align-self: center
        background: rgba(220, 222, 222, .9)
        overflow: hidden
        margin-bottom: 2rem

    td, th
        border: 3px solid rgba(100, 140, 140, .7)
        text-align: center
        padding: 8px
        color: rgb(10, 43, 45)

    .activo
        color: rgba(10, 110, 230, .9)
        font-weight: bold

    .inactivo
        color: rgba(190, 100, 10, .9)
        font-weight: bold

    .edit
        color: rgb(105, 143, 53)
        margin: 0 .4rem
        font-size: 1.2rem
        transition: 1s
        &:hover
            color: rgb(170, 203, 73)
    .delete
        color: rgb(155, 44, 93)
        margin: 0 .4rem
        font-size: 1.2rem
        transition: 1s
        &:hover
            color: rgb(200, 74, 133)
    .buttonDelete
        background: rgba(0,0,0,0)
        border: 0px solid rgba(0,0,0,0)
        cursor: pointer
</style>