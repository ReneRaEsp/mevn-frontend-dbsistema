<template>
  <section class="proveedores">
      <CabeceroCompras/>
      <h3 class="title">Proveedores</h3>
      <div class="modulo">
        <div class="busqueda">
            <input @input="filtrarPorNombreInput()" v-model="busqueda" class="input" type="text" placeholder="Buscar categoria..." name="search">
            <button @click="filtrarPorNombre()" class="submit" >Buscar</button>
        </div>
        <button class="mostrarT" @click="listar()">mostrar todo</button>
        <router-link class="agregar" to="/compras/proveedores/add">
            Agregar
        </router-link>
      </div>
      
      <table v-if="!buscando" style="width:90%">
        <tr>
            <th>Nombre</th>
            <th>Documento Nro</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Opc</th>
        </tr>
        <tr v-for="proveedor of proveedores" :key="proveedor._id">
            <td v-if="proveedor.tipo_persona == 'Proveedor'">{{proveedor.nombre}}</td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">{{proveedor.num_documento}}</td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">{{proveedor.direccion}}</td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">{{proveedor.telefono}}</td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">{{proveedor.email}}</td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">{{proveedor.tipo_persona}}</td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">
                <div v-if="proveedor.estado">
                    <span class="activo">
                        Activa
                    </span>
                </div>
                <div v-else>
                    <span class="inactivo">
                        Inactiva
                    </span>
                </div>
            </td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">
                <router-link :to="'/compras/proveedores/add'+proveedor._id">
                    <i class="edit fas fa-edit"></i>
                </router-link>
                <button v-if="proveedor.estado == 0" class="buttonDelete" @click="activar(proveedor._id)">
                    <i class="delete fas fa-lock-open"></i>
                </button>
                <button v-else class="buttonDelete" @click="desactivar(proveedor._id)">
                   <i class="delete fas fa-lock"></i>
                </button>
            </td>
        </tr>
    </table>
    <table v-else-if="buscando" style="width:90%">
        <tr>
            <th>Nombre</th>
            <th>Documento Nro</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Opc</th>
        </tr>
        <tr v-for="resultado of resultados" :key="resultado._id">
            <td v-if="resultado.tipo_persona == 'Proveedor'">{{resultado.nombre}}</td>
            <td v-if="resultado.tipo_persona == 'Proveedor'">{{resultado.num_documento}}</td>
            <td v-if="resultado.tipo_persona == 'Proveedor'">{{resultado.direccion}}</td>
            <td v-if="resultado.tipo_persona == 'Proveedor'">{{resultado.telefono}}</td>
            <td v-if="resultado.tipo_persona == 'Proveedor'">{{resultado.email}}</td>
            <td v-if="resultado.tipo_persona == 'Proveedor'">{{resultado.tipo_persona}}</td>
            <td v-if="resultado.tipo_persona == 'Proveedor'">
                <div v-if="resultado.estado">
                    <span class="activo">
                        Activa
                    </span>
                </div>
                <div v-else>
                    <span class="inactivo">
                        Inactiva
                    </span>
                </div>
            </td>
            <td v-if="proveedor.tipo_persona == 'Proveedor'">
                <router-link :to="'/compras/proveedor/add'+proveedor._id">
                    <i class="edit fas fa-edit"></i>
                </router-link>
                <button v-if="proveedor.estado == 0" class="buttonDelete" @click="activar(proveedor._id)">
                    <i class="delete fas fa-lock-open"></i>
                </button>
                <button v-else class="buttonDelete" @click="desactivar(proveedor._id)">
                   <i class="delete fas fa-lock"></i>
                </button>
            </td>
        </tr>
    </table>
  </section>
</template>

<script>
import axios from 'axios'
import CabeceroCompras from '../../../components/compras/CabeceroCompras.vue'
export default {
    data(){
        return{
            proveedores:[],
            busqueda:'',
            buscando:false,
            resultados:[],
            sinCoincidencias:false
        }
    },
    created(){
        this.listar()
    },
    methods:{
        listar(){
            let header = {'Token':this.$store.state.token}
            let configuracion = {headers:header}
            this.sinCoincidencias = false
            this.buscando = false
            axios.get('persona/list-proveedores', configuracion)
            .then((response)=>{
                if (this.busqueda == ''){
                    this.proveedores=response.data
                } else {
                    console.log('Realizando busqueda')
                }
            }).catch((error)=>{
                console.log(error)
            })
            this.limpiar()
        },
        limpiar(){
            this.busqueda=''
            this.buscando=false
            this.resultados=[]
            this.sinCoincidencias=false
        },
        activar(_id){
            let header = {'Token' : this.$store.state.token}
            let configuracion ={ headers:header }
            axios.put('/persona/activate', {'_id':_id}, configuracion)
            .then((response)=>{
                console.log('Persona activada: ' + response.data.nombre)
                
            }).catch((error)=>{
                console.log(error)
            })
            this.limpiar()
            this.listar()
        },
        desactivar(_id){
            let header = {'Token' : this.$store.state.token}
            let configuracion ={ headers:header }
            axios.put('/persona/deactivate', {'_id':_id}, configuracion)
            .then((response)=>{
                console.log('Persona desactivada: ' + response.data.nombre)
                
            }).catch((error)=>{
                console.log(error)
            })
            this.limpiar()
            this.listar()
        }
    },
    components:{
        CabeceroCompras
    }
}
</script>

<style scoped lang="sass">
    .proveedores
        display: flex
        justify-content: flex-start
        flex-wrap: wrap
        flex-direction: column
        overflow: auto
        .title
            font-size: 2.1rem
            color: rgb(100, 197, 192)
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
        .modulo
            display: flex
            justify-content: space-around
            padding: 1rem
            flex-wrap: wrap
            background: rgba(3, 33, 53, .7)
            border-radius: 1rem 1rem 1rem 1rem
            margin-bottom: 1rem
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
                margin-left: 0rem
                border-radius: .7rem .7rem .7rem .7rem
                border: 3px solid rgba(10, 40, 40, .0)
                background: rgba(23,73,33,.5)
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
        padding: .3rem
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