<template>
  <section class="agregarProv">
    <h3 class="title">Agregar Proveedor</h3>
	<br>
	<div @keyup.enter="guardar()" class="formAgregar">
		<div class="grupo">
			<div class="duo">
				<label class="label" for="nombre">Nombre</label>
				<br>
				<input v-model="nombre" class="input" name="nombre"
				placeholder="Nombre" type="text">
			</div>
			<div class="duo">
				<label class="label" for="tipoDocumento">Tipo de documento</label>
				<br>
				<input v-model="tipoDocumento" class="input" name="tipoDocumento"
				placeholder="Tipo de documento..." type="text">
			</div>			
		</div>
		<div class="grupo">
			<div class="duo">
				<label for="numDocumento" class="label">Número de documento</label>
				<br>
				<input v-model="numDocumento" class="input" name="numDocumento"
				placeholder="Número de doumento..." type="text" >
			</div>
			<div class="duo">
				<label class="label" for="direccion">Dirección</label>
				<br>
				<input v-model="direccion" type="text" class="input" name="direccion"
				placeholder="Dirección...">
			</div>
		</div>
		<div class="grupo">
			<div class="duo">
				<label class="label" for="pVenta">Teléfono</label>
				<br>
				<input v-model="telefono" class="input" name="telefono"
				placeholder="Teléfono..." type="text">
			</div>
			<div class="duo">
				<label for="email" class="label">Email</label>
				<br>
				<input v-model="email" class="input" name="email"
			placeholder="email" type="email">
			</div>			
		</div>
		<div class="grupo">
			<div class="duo">
				<router-link class="volver" to="/compras/proveedores">
					Volver sin guardar
				</router-link>
				<button class="guardar" @click="guardar()">
					Guardar
				</button>
			</div>
		</div>
        <div class="divErrores" v-for="mensaje of validarMensaje" :key="mensaje">
            <p class="errores">* {{mensaje}} </p>
        </div>
		<br>
        
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			tipoPersona:'Proveedor',
			nombre:'',
			tipoDocumento:'',
			numDocumento:'',
			direccion:'',
			email:'',
			telefono:'',
			ruta:this.$router.currentRoute.fullPath,
			editar:false,
			validar:0,
			validarMensaje:[],
			opciones:[]
		}
	},
	methods:{
		guardar(){
			this.validacion()
			if(this.validar<=0){

			if(!this.editar){
				let header = {'Token':this.$store.state.token}
				let configuracion = {headers:header}
				axios.post('persona/add', {
				'nombre':this.nombre, 
				'tipo_persona':this.tipoPersona,
				'tipo_documento':this.tipoDocumento,
                'num_documento':this.numDocumento, 
				'direccion':this.direccion,
				'telefono':this.telefono,
				'email':this.email}, configuracion)
				.then((response)=>{
					console.log('Persona agregada exitosamente: ' + response.data.nombre)
				}).catch((error)=>{
					console.log(error)
					alert('no se pudo agregar el articulo')
				})
				this.limpiar()
				this.$router.push({path:'/compras/proveedores'})
			} else {
				let header = {'Token':this.$store.state.token}
				let configuracion = {headers:header}
				axios.put('persona/update', {
				'_id':this.$router.currentRoute.params.id, 
                'tipo_persona':this.tipoPersona,
				'nombre':this.nombre, 
				'tipo_documento':this.tipoDocumento,
                'num_documento':this.numDocumento, 
				'direccion':this.direccion,
				'telefono':this.telefono,
				'email':this.email}, configuracion)
				.then((response)=>{
					console.log('Persona actualizada exitosamente: ' + response.data.nombre)
				}).catch((error)=>{
					console.log(error)
					alert('No se pudo actualizar el usuario')
				})
				this.limpiar()
				this.$router.push({path:'/compras/proveedores'})
			}

			}else{
				console.log('Error en la validacion')
			}
		},
		opcion(){
			if(this.ruta == '/compras/proveedores/add'){
				this.editar=false
			} else {
				this.buscarPorId()
				this.editar=true
			}
		},
		buscarPorId(){
			let header = {'Token': this.$store.state.token}
			let configuracion = {headers:header}
			axios.get('persona/query?_id='+this.$router.currentRoute.params.id, configuracion)
			.then((response)=>{
				this.nombre = response.data.nombre
				this.tipoDocumento = response.data.tipo_documento
				this.numDocumento = response.data.num_documento
				this.direccion = response.data.direccion
				this.email = response.data.email
				this.telefono = response.data.telefono
			}).catch((error)=>{
				console.log('error del query: ' + error)
			})
		},
		doTrim(){
            this.nombre = this.nombre.trim()
			this.tipoDocumento = this.tipoDocumento.trim()
			this.numDocumento = this.numDocumento.trim()
			this.direccion = this.direccion.trim()
			this.email = this.email.trim()
			this.telefono = this.telefono.trim()
		},
		validacion(){
			this.validar=0
			this.validarMensaje=[]
			this.doTrim()
            let tipoDocumento = this.tipoDocumento
			let nombre = this.nombre
			let numDocumento = this.numDocumento
			let direccion = this.direccion
			let email = this.email
			let telefono = this.telefono

			if(nombre.length < 1 || nombre.length > 50){
				this.validarMensaje.push('Debes ingresar un nombre y este no debe exceder los 50 caracteres')
			}
			if(tipoDocumento.length < 1 || tipoDocumento.length > 20){
				this.validarMensaje.push('Debes introducir el tipo de documento y este no debe exceder los 20 caracteres')
			}
			if(numDocumento.length < 1 || numDocumento.length > 20){
				this.validarMensaje.push('Debes introducir el nombre del documento y este no debe exceder los 20 caracteres')
			}
			if(direccion.length < 1 || direccion.length > 70){
				this.validarMensaje.push('Debes introducir una dirección y esta no puede exceder los 70 caracteres')
			}
			if(telefono.length < 1 || telefono.length > 20){
				this.validarMensaje.push('Debes introducir un telefono y este no puede exceder los 20 caracteres')
			}
            if(email.length < 1 || email.length > 50){
				this.validarMensaje.push('Debes introducir un email y este no puede exceder los 50 caracteres')
			}
			if(this.validarMensaje.length){
				this.validar=1
			}
			return this.validar
		},
		limpiar(){
			this.nombre=''
			this.tipoDocumento=''
			this.numDocumento=''
			this.direccion=''
			this.email=''
			this.telefono=''
			this.editar=false
			this.ruta=''
		}
	},
	created(){
		this.opcion()
	}
}
</script>
<style scoped lang="sass">
.agregarProv
	display: flex
	justify-content: center
	align-self: center
	width: 80vw
	height: 100vh
	flex-wrap: wrap
	flex-direction: column
	overflow: auto
	.title
		font-size: 1.5rem
		color: white
		background: rgba(3, 33, 53, .86)
		padding: .7rem
		border-radius: 1rem
		align-self: center
		margin-top: .2rem
		margin-bottom: .2rem
		text-align: center
	.formAgregar
		align-self: center
		display: flex
		justify-content: center
		flex-wrap: wrap
		flex-direction: row
		width: 65%
		height: 70%
		padding: 3rem
		background: rgba(3, 33, 53, .9)
		border-radius: .7rem
		overflow-y: auto
		overflow-x: hidden
		.textArea
			min-width: 20vw
			min-height: 20vh
			width: 35vw
			height: 20vh
			max-width: 35vw
			max-height: 35vh
			align-self: center
			padding: .5rem
		.divErrores	
			display: flex
			justify-content: center
			flex-direction: row
			flex-wrap: wrap
			.errores
				font-size: 12px
				font-weight: bold
				color: rgb(200, 80, 80)
				margin-top: 1rem

	.grupo
		display: flex
		justify-content: space-evenly
		flex-direction: row
		.duo
			margin-left: 2rem
			margin-right: 2rem
			.input
				align-self: flex-start
				width: 20vw
				min-width: auto
				height: 6vh
				padding: .5rem
				margin-top: 1rem
			.label
				color: white
				font-weight: bold
				margin-left: 20px


			.guardar
				width: 7rem
				padding: .3rem
				margin-left: 3rem
				font-weight: bold
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
				//transform: translateX(9rem)
				&:hover
					opacity: 0.7
					cursor: pointer

			.volver
				width: 7rem
				padding: .3rem
				margin-right: 3rem
				min-width: auto
				border-radius: .7rem .7rem .7rem .7rem
				border: 3px solid rgba(10, 40, 40, .0)
				background: rgba(73,73,83,.79)
				color: white
				font-weight: bold
				transition: .5s
				text-decoration: none
				align-self: center
				margin-top: 1rem
				//transform: translateX(9rem)
				&:hover
					opacity: 0.7
					cursor: pointer

.opcion, .cat
	color: rgba(20,120,130,.9)
	font-weight: bold
			
	
</style>
<!--<template>
  <section class="agregarProv">
      <h2>Agregar Proveedores</h2>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">

</style>-->