<template>
  <section class="agregarUsr">
    <h3 class="title">Agregar Usuario</h3>
	<br>
	<div @keyup.enter="guardar()" class="formAgregar">
		<div class="grupo">
			<div class="duo">
				<label class="label" for="email">Email</label>
				<br>
				<input v-model="email" class="input" name="email"
				placeholder="Email" type="email">
			</div>
			<div class="duo">
				<label class="label" for="">Nombre</label>
				<br>
				<input v-model="nombre" class="input" name="nombre"
				placeholder="Nombre" type="text">
			</div>			
		</div>
		<div class="grupo">
			<div class="duo">
				<label for="numDoc" class="label">Documento</label>
				<br>
				<input v-model="documento" class="input" name="numDoc"
				placeholder="Numero de documento" type="number" >
			</div>
			<div class="duo">
				<label class="label" for="rol">Rol</label>
				<br>
				<input v-model="rol" class="input" name="rol"
				placeholder="rol" type="text">
			</div>
		</div>
		<div class="grupo">
			<div class="duo">
				<label class="label" for="password">Password</label>
				<br>
				<input v-model="password" class="input" name="password"
				placeholder="Contraseña" type="password">
			</div>
			<div class="duo">
				<label for="confirmar" class="label">Confirmar</label>
				<br>
				<input v-model="confirmar" class="input" name="confirmar"
			placeholder="Confirmar contraseña" type="password">
			</div>			
		</div>
		<div class="grupo">
			<div class="duo">
				<label class="label" for="telefono">Telefono</label>
				<br>
				<input v-model="telefono" class="input" name="telefono"
				placeholder="Telefono" type="number">
			</div>
			<div class="duo">
				<label class="label" for="direccion">Direccion</label>
				<br>
				<input v-model="direccion" class="input" name="direccion"
				placeholder="Direccion" type="text">
			</div>
		</div>
		<div class="grupo">
			<div class="duo">
				<router-link class="volver" to="/accesos/usuarios">
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
			email:'',
			nombre:'',
			documento:'',
			rol:'',
			password:'',
			confirmar:'',
			direccion:'',
			telefono:'',
			ruta:this.$router.currentRoute.fullPath,
			editar:false,
			validar:0,
			validarMensaje:[]
		}
	},
	methods:{
		guardar(){
			this.validacion()
			if(this.validar<=0){

			if(!this.editar){
				let header = {'Token':this.$store.state.token}
				let configuracion = {headers:header}
				axios.post('usuario/add', {'email':this.email, 'nombre':this.nombre,
				'num_documento':this.documento, 'rol':this.rol, 'password':this.password,
				'telefono':this.telefono, 'direccion':this.direccion}, configuracion)
				.then((response)=>{
					console.log('Usuario agregado exitosamente: ' + response.data.nombre + ' email: ' + response.data.email)
				}).catch((error)=>{
					console.log(error)
					alert('no se pudo agregar el usuario')
				})
				this.limpiar()
				this.$router.push({path:'/accesos/usuarios'})
			} else {
				let header = {'Token':this.$store.state.token}
				let configuracion = {headers:header}
				axios.put('usuario/update', {'_id':this.$router.currentRoute.params.id, 'nombre':this.nombre, 'email':this.email, 'num_documento':this.documento, 'rol':this.rol, 'direccion':this.direccion, 'telefono':this.telefono, 'password':this.password}, configuracion)
				.then((response)=>{
					console.log('Usuario actualizado exitosamente: ' + response.data.nombre)
				}).catch((error)=>{
					console.log(error)
					alert('No se pudo actualizar el usuario')
				})
				this.limpiar()
				this.$router.push({path:'/accesos/usuarios'})
			}

			}else{
				console.log('Error en la validacion')
			}
		},
		opcion(){
			if(this.ruta == '/accesos/add-user'){
				this.editar=false
			} else {
				this.buscarPorId()
				this.editar=true
			}
		},
		buscarPorId(){
			let header = {'Token': this.$store.state.token}
			let configuracion = {headers:header}
			axios.get('usuario/query?_id='+this.$router.currentRoute.params.id, configuracion)
			.then((response)=>{
				this.email = response.data.email
				this.nombre = response.data.nombre
				this.documento = response.data.num_documento
				this.rol = response.data.rol
				this.direccion = response.data.direccion
				this.telefono = response.data.telefono
				this.password = response.data.password
			}).catch((error)=>{
				console.log('error del query: ' + error)
			})
		},
		doTrim(){
			this.nombre = this.nombre.trim()
			this.email =  this.email.trim()
			this.documento = this.documento.trim()
			this.rol = this.rol.trim()
			this.direccion = this.direccion.trim()
			this.password = this.password.trim()
			this.confirmar = this.confirmar.trim()
		},
		validacion(){
			this.validar=0
			this.validarMensaje=[]
			this.doTrim()
			let nombre = this.nombre
			let email =  this.email
			let documento = this.documento
			let rol = this.rol
			let direccion = this.direccion
			let password = this.password
			let confirmar = this.confirmar
			if(nombre.length < 1 || nombre.length > 50){
				this.validarMensaje.push('Debes ingresar un nombre y este no debe exceder los 50 caracteres')
			}
			if(email.length < 1 || email.length > 50){
				this.validarMensaje.push('Debes ingresar un email y este no debe exceder los 50 caracteres')
			}
			if(documento.length < 1 || documento.length > 20){
				this.validarMensaje.push('Debes ingresar un documento y este no debe exceder los 20 caracteres')
			}
			if(rol != 'Administrador'){
				if(rol != 'Almacenero'){
					if(rol != 'Vendedor'){
						this.validarMensaje.push('Los unicos roles validos son "Administrador", "Almacenero" y "Vendedor"')
					}
				}
			}
			if(direccion.length < 1 || direccion.length > 70){
				this.validarMensaje.push('Debes ingresar un direccion y este no debe exceder los 50 caracteres')
			}
			if(password.length < 1 || password.length > 64){
				this.validarMensaje.push('Debes introducir un password y este debe ser menos a 64 caracteres')
			}
			if(password !== confirmar){
				this.validarMensaje.push('Los password que has ingresado no coinciden')
			}
			if(this.validarMensaje.length){
				this.validar=1
			}
			return this.validar
		},
		limpiar(){
			this.email = ''
			this.nombre = ''
			this.documento = 0
			this.rol = ''
			this.direccion = ''
			this.telefono = 0
			this.password = ''
			this.confirmar = ''
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
.agregarUsr
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
		width: 75%
		height: 80%
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
				height: 5vh
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
			
	
</style>