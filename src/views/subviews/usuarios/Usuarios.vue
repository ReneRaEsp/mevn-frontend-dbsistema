<template>
  <section class="usuarios">
    <h3 class="title">Gestion de usuarios</h3>
    <div class="modulo">
      <div class="busqueda">
        <input
          @input="filtrarPorNombreInput()"
          v-model="busqueda"
          class="input"
          type="text"
          placeholder="Buscar usuario..."
          name="search"
        />
        <button @click="filtrarPorNombreInput()" class="submit">Buscar</button>
      </div>
      <button class="mostrarT" @click="listar()">mostrar todo</button>
      <router-link class="agregar" to="/accesos/add-user">
        Agregar
      </router-link>
    </div>
    <table v-if="!buscando" style="width: 90%">
      <tr>
        <th>Email</th>
        <th>Nombre</th>
        <th>Num Doc</th>
        <th>Rol</th>
        <th>Telefono</th>
        <th>Estado</th>
        <th>opc</th>
      </tr>
      <tr v-for="usuario of usuarios" :key="usuario._id">
        <td>{{ usuario.email }}</td>
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.num_documento }}</td>
        <td>{{ usuario.rol }}</td>
        <td>{{ usuario.telefono }}</td>
        <td>
          <div v-if="usuario.estado">
            <span class="activo"> Activo </span>
          </div>
          <div v-else>
            <span class="inactivo"> Inactivo </span>
          </div>
        </td>
        <td>
          <router-link :to="'/accesos/add-user' + usuario._id">
            <i class="edit fas fa-edit"></i>
          </router-link>
          <button
            v-if="usuario.estado == 0"
            class="buttonDelete"
            @click="activar(usuario._id)"
          >
            <i class="delete fas fa-lock-open"></i>
          </button>
          <button
            v-else
            class="buttonDelete"
            @click="desactivar(usuario._id)"
          >
            <i class="delete fas fa-lock"></i>
          </button>
        </td>
      </tr>
    </table>
    <table v-else-if="buscando" style="width: 90%">
      <tr>
        <th>Email</th>
        <th>Nombre</th>
        <th>Num Doc</th>
        <th>Rol</th>
        <th>Telefono</th>
        <th>Estado</th>
        <th>opc</th>
      </tr>
      <tr v-for="resultado of resultados" :key="resultado._id">
        <td>{{ resultado.email }}</td>
        <td>{{ resultado.nombre }}</td>
        <td>{{ resultado.num_documento }}</td>
        <td>{{ resultado.rol }}</td>
        <td>{{ resultado.telefono }}</td>
        <td>
          <div v-if="resultado.estado">
            <span class="activo"> Activo </span>
          </div>
          <div v-else>
            <span class="inactivo"> Inactivo </span>
          </div>
        </td>
        <td>
          <router-link :to="'/accesos/add-user' + resultado._id">
            <i class="edit fas fa-edit"></i>
          </router-link>
          <button
            v-if="resultado.estado == 0"
            class="buttonDelete"
            @click="activar(resultado._id)"
          >
            <i class="delete fas fa-lock-open"></i>
          </button>
          <button
            v-else
            class="buttonDelete"
            @click="desactivar(resultado._id)"
          >
            <i class="delete fas fa-lock"></i>
          </button>
        </td>
      </tr>
    </table>
    <h3 v-if="sinCoincidencias" class="sinCoincidencias">
      No se han encotrado resultados<br />
      para su busqueda
    </h3>
    <span v-else></span>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      usuarios: [],
      busqueda: "",
      buscando: false,
      resultados: [],
      sinCoincidencias: false,
    }
  },
  created() {
    this.listar()
  },
  methods: {
      listar(){
          let header = {'Token' : this.$store.state.token}
          let configuracion = {headers:header}
          this.sinCoincidencias=false
          this.buscando=false
          axios.get('usuario/list', configuracion)
          .then((response)=>{
              if(this.busqueda == ''){
                  this.usuarios = response.data
              }else {
                  console.log('Realizando busqueda')
              }
          }).catch((error)=>{
              console.log(error)
          })
          this.limpiar()
        },
        filtrarPorNombreInput(){
          this.resultados=[]
          let r = []
          this.usuarios.forEach(usuario=>{
            if(!usuario.nombre.search(this.busqueda)){
            r.push(usuario)
            }else{
              this.sinCoincidencias = true
            }
          })
          this.resultados=r 
          this.resultados == [] || this.resultados == '' || this.resultados == undefined ? this.sinCoincidencias = true : this.sinCoincidencias = false
          this.buscando=true
        },
        limpiar(){
            this.busqueda='',
            this.buscando=false,
            this.resultados=[],
            this.sinCoincidencias=false
        },activar(_id){
          let header = {'Token':this.$store.state.token}
          let configuracion ={headers:header}
          axios.put('/usuario/activate', {'_id':_id}, configuracion)
          .then((response)=>{
            console.log('Categoria activada: ' + response.data.nombre)
        }).catch((error)=>{
			console.log(error)		
		})
		this.limpiar()
		this.listar()
        },
		desactivar(_id){
			let header = {'Token':this.$store.state.token}
			let configuracion ={headers:header}
			axios.put('/usuario/deactivate', {'_id':_id}, configuracion)
			.then((response)=>{
				console.log('Categoria desactivada: ' + response.data.nombre)
			}).catch((error)=>{
				console.log(error)
			})
			this.limpiar()
			this.listar()
		}
  }
}
</script>
<style scoped lang="sass">
.usuarios
	display: flex
	justify-content: start
	//flex-wrap: wrap
	flex-direction: column
	overflow-y: auto
	overflow-x: auto
	width: 80vw
	height: 100vh
	background: rgba(20, 180, 233, .1)
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
		flex-wrap: wrap
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
		overflow: auto
		margin-bottom: 2rem
		max-width: 90%

	td,	th
		border: 3px solid rgba(100, 140, 140, .7)
		text-align: center
		padding: 8px
		color: rgb(10, 43, 45)
		overflow: auto
	
	tr
		overflow: auto

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