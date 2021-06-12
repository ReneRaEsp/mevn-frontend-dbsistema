<template>
  <section class="Categorias">
      <CabeceroAlmacen/>
      <h3 class="title">Categorias</h3>
      <div class="modulo">
        <div class="busqueda">
            <input v-on:input="filtrarPorNombre()" v-model="busqueda" class="input" type="text" placeholder="Buscar categoria..." name="search">
            <button @click="filtrarPorNombre()" class="submit" >Buscar</button>
        </div>
        <button class="mostrarT" @click="listar()">mostrar todo</button>
        <button class="agregar">Agregar</button>
      </div>
      
    <table v-if="!buscando" style="width:90%">
        <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
        </tr>
        <tr v-for="categoria of categorias" :key="categoria.id">
            <td >{{categoria.nombre}}</td>
            <td >{{categoria.descripcion }}</td>
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
        </tr>
    </table>
    <table v-else style="width:90%">
        <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
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
                if(!me.buscando){
                    me.categorias=response.data
                } else {
                    me.filtrarPorNombre()
                }
            }).catch(function(error){
                console.log(error)
            })
        },
        filtrarPorNombre(){
            this.resultados = [];
            this.categorias.forEach(categoria =>{
                if(categoria.nombre == this.busqueda){
                    this.resultados.push(categoria)
                }
            })
            this.resultados == [] || this.resultados == '' ? this.sinCoincidencias = true : this.sinCoincidencias = false
            this.buscando=true
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
        flex-wrap: wrap
        flex-direction: column
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

    td, th
        border: 3px solid rgba(10, 40, 40, .5)
        text-align: center
        padding: 8px
        color: rgb(10, 43, 45)

    .activo
        color: rgba(10, 110, 230, .9)
        font-weight: bold

    .inactivo
        color: rgba(190, 100, 10, .9)
        font-weight: bold

</style>