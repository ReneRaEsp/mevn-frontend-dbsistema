<template>
  <section class="agregarProv">
    <h3 class="title">Agregar Ingreso</h3>
	<br>
	<div @keyup.enter="guardar()" class="formAgregar">
		<div class="grupo">
			<div class="duo">
				<label class="label" for="categoria">Usuario&nbsp;</label>
				
				<select v-model="usuario" class="input cat" name="usuarios">
					<option value="Seleccione una categoria" class="opcion" selected>Seleccione una usuario</option>
					<hr>
					<option class="opcion" v-for="usuario of usuarios" :key="usuario._id" :value="usuario._id">{{usuario.nombre}}</option>					
				</select>
			</div>
			<div class="duo">
				<label class="label" for="categoria">Proveedor&nbsp;</label>
				<select v-model="proveedor" class="input cat" name="usuarios">
					<option value="Seleccione una categoria" class="opcion" selected>Seleccione una proveedor</option>
					<hr>
					<option class="opcion" v-for="proveedor of proveedores" :key="proveedor._id" :value="proveedor._id">{{proveedor.nombre}}</option>					
				</select>
			</div>		
			<div class="duo">
				<label for="tipoComprobante" class="label">Tipo Comprobante</label>
				<br>
				<input v-model="tipoComprobante" class="input" name="tipoComprobante"
				placeholder="Tipo de comprobante..." type="text" >
			</div>
			
		</div>
		<div class="grupo">
			<div class="duo">
				<label for="serieComprobante" class="label">Serie Comprobante</label>
				<br>
				<input v-model="serieComprobante" class="input" name="serieComprobante"
				placeholder="Serie de comprobante..." type="number" >
			</div>
			<div class="duo">
				<label for="numComprobante" class="label">Número Comprobante</label>
				<br>
				<input v-model="numComprobante" class="input" name="numComprobante"
				placeholder="Numero de comprobante..." type="number" >
			</div>
			<div class="duo">
				<label for="impuesto" class="label">Impuesto</label>
				<br>
				<input v-model="impuesto" class="input" name="impuesto"
				placeholder="Impuesto..." type="number" >
			</div>
			
		</div>
		<div class="grupo">
			<div class="duo">
				<label for="total" class="label">Total</label>
				<br>
				<input v-model="total" class="input" name="total"
				placeholder="Total..." type="number" >
			</div>
			<div class="duo">
				<label for="codigo" class="label">Articulo</label>
				<br>
				<input v-model="codigo" class="input" name="codigo"
				type="text" placeholder="Codigo de articulo">
				<button class="guardar" @click="agregarArticulo()">
					Agregar articulo
				</button>
			</div>
		</div>
		<h3 class="tituloAgregados">Articulos agregados</h3>
		<div class="grupo articulosAgregados">
			
		</div>
		<div class="grupo">
			<div class="duo">
				<router-link class="volver" to="/compras/ingresos">
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
			tipoPersona:'Cliente',
			usuario:'',
			persona:'',
			proveedor:'',
			tipoComprobante:'',
			serieComprobante:'',
			numComprobante:'',
			impuesto:'',
			total:'',
			detalles:'',
			ruta:this.$router.currentRoute.fullPath,
			editar:false,
			validar:0,
			validarMensaje:[],
			opciones:[],
			usuarios:[],
			proveedores:[],
			articulos:[]
		}
	},
	methods:{
		guardar(){
			this.validacion()
			if(this.validar<=0){

			if(!this.editar){
				let header = {'Token':this.$store.state.token}
				let configuracion = {headers:header}
				axios.post('ingreso/add', {
							'tipo_persona':this.tipoPersona, 
							'nombre':this.nombre, 
							'tipo_documento':this.tipoDocumento,
							'num_documento':this.numDocumento, 
							'direccion':this.direccion,
							'telefono':this.telefono,
							'email':this.email
							}, configuracion)
				.then((response)=>{
					console.log('Persona agregada exitosamente: ' + response.data.nombre)
				}).catch((error)=>{
					console.log(error)
					alert('no se pudo agregar el articulo')
				})
				this.limpiar()
				this.$router.push({path:'/compras/ingresos'})
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
							'email':this.email
							}, configuracion)
				.then((response)=>{
					console.log('Persona actualizada exitosamente: ' + response.data.nombre)
				}).catch((error)=>{
					console.log(error)
					alert('No se pudo actualizar el usuario')
				})
				this.limpiar()
				this.$router.push({path:'/compras/ingresos'})
			}

			}else{
				console.log('Error en la validacion')
			}
		},
		opcion(){
			if(this.ruta == '/compras/ingresos/add' || this.ruta == '/'){
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
			this.numDocumento = this.numDocument.trim()
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
		listarUsuarios(){
			let header = {'Token': this.$store.state.token}
			let configuracion = {headers:header}
			axios.get('usuario/list', configuracion)
			.then((res)=>{
				this.usuarios = res.data
			})
			.catch((error)=>{
				console.log(error)
			})
		},
		listarProveedores(){
			let header = {'Token': this.$store.state.token}
			let configuracion = {headers:header}
			axios.get('persona/list-proveedores', configuracion)
			.then((res)=>{
				this.proveedores = res.data
			})
			.catch((error)=>{
				console.log(error)
			})
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
		this.listarUsuarios()
		this.listarProveedores()
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
		width: 95%
		height: 85%
		padding: 3rem
		background: rgba(3, 33, 53, .9)
		border-radius: .7rem
		overflow-y: auto
		overflow-x: hidden
		.tituloAgregados
			margin-bottom: 1rem
			color: rgb(93, 235, 235)
			font-size: 1.5rem
	
	
	.articulosAgregados
		width: 100%
		height: 20rem
		background: rgba(230, 200, 211, .2)	
	.grupo
		display: flex
		justify-content: space-evenly
		flex-direction: row
		.duo
			margin: 2rem
			.input
				align-self: flex-start
				width: 15vw
				min-width: auto
				height: 6vh
				padding: .5rem
				margin: 1rem
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