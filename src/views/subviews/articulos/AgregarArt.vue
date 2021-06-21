<template>
  <section class="agregarArt">
    <h3 class="title">Agregar Artículo</h3>
	<br>
	<div @keyup.enter="guardar()" class="formAgregar">
		<div class="grupo">
			<div class="duo">
				<label class="label" for="codigo">Código</label>
				<br>
				<input v-model="codigo" class="input" name="codigo"
				placeholder="Código" type="text">
			</div>
			<div class="duo">
				<label class="label" for="">Nombre</label>
				<br>
				<input v-model="nombre" class="input" name="nombre"
				placeholder="Nombre..." type="text">
			</div>			
		</div>
		<div class="grupo">
			<div class="duo">
				<label for="descripcion" class="label">Descripción</label>
				<br>
				<input v-model="descripcion" class="input" name="descripcion"
				placeholder="Descripcion..." type="text" >
			</div>
			<div v-if="!editar" class="duo">
				<label class="label" for="categoria">Seleccionar Categoria</label>
				<select v-model="categoria" class="input cat" name="categoria">
					<option value="Seleccione una categoria" class="opcion" selected>Seleccione una categoria</option>
					<hr>
					<option class="opcion" v-for="opcion of opciones" :key="opcion._id" :value="opcion._id">{{opcion.nombre}}</option>					
				</select>
			</div>
		</div>
		<div class="grupo">
			<div class="duo">
				<label class="label" for="pVenta">Precio Venta</label>
				<br>
				<input v-model.number="pVenta" class="input" name="pVenta"
				placeholder="Precio Venta..." type="number">
			</div>
			<div class="duo">
				<label for="stock" class="label">Stock</label>
				<br>
				<input v-model.number="stock" class="input" name="stock"
			placeholder="stock" type="number">
			</div>			
		</div>
		<div class="grupo">
			<div class="duo">
				<router-link class="volver" to="/almacen/articulos">
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
			codigo:'',
			nombre:'',
			descripcion:'',
			categoria:'Seleccione una categoria',
			pVenta:0,
			stock:0,
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
				axios.post('articulo/add', {'categoria':this.categoria, 'codigo':this.codigo,
                'nombre':this.nombre, 'descripcion':this.descripcion,
				'precio_venta':this.pVenta, 'stock':this.stock}, configuracion)
				.then((response)=>{
					console.log('Articulo agregado exitosamente: ' + response.data.nombre)
				}).catch((error)=>{
					console.log(error)
					alert('no se pudo agregar el articulo')
				})
				this.limpiar()
				this.$router.push({path:'/almacen/articulos'})
			} else {
				let header = {'Token':this.$store.state.token}
				let configuracion = {headers:header}
				axios.put('usuario/update', {'_id':this.$router.currentRoute.params.id, 
                'categoria':this.categoria, 'codigo':this.codigo,
                'nombre':this.nombre, 'descripcion':this.descripcion,
				'precio_venta':this.pVenta, 'stock':this.stock 
                }, configuracion)
				.then((response)=>{
					console.log('Usuario actualizado exitosamente: ' + response.data.nombre)
				}).catch((error)=>{
					console.log(error)
					alert('No se pudo actualizar el usuario')
				})
				this.limpiar()
				this.$router.push({path:'/almacen/articulos'})
			}

			}else{
				console.log('Error en la validacion')
			}
		},
		opcion(){
			if(this.ruta == '/almacen/articulos/add'){
				this.editar=false
			} else {
				this.buscarPorId()
				this.editar=true
			}
		},
		buscarPorId(){
			let header = {'Token': this.$store.state.token}
			let configuracion = {headers:header}
			axios.get('articulo/query?_id='+this.$router.currentRoute.params.id, configuracion)
			.then((response)=>{
				this.codigo = response.data.codigo
				this.nombre = response.data.nombre
				this.categoria = response.data.categoria
				this.descripcion = response.data.descripcion
				this.pVenta = response.data.precio_venta
				this.stock = response.data.stock
			}).catch((error)=>{
				console.log('error del query: ' + error)
			})
		},
		doTrim(){
            this.codigo = this.codigo.trim()
			this.nombre = this.nombre.trim()
			this.descripcion = this.descripcion.trim()
		},
		validacion(){
			this.validar=0
			this.validarMensaje=[]
			this.doTrim()
			this.encontrarCategoriaInput()
            let codigo = this.codigo
			let nombre = this.nombre
			let descripcion = this.descripcion
			let pVenta = this.pVenta
			let stock = this.stock
			let categoria = this.categoria

			if(nombre.length < 1 || nombre.length > 50){
				this.validarMensaje.push('Debes ingresar un nombre y este no debe exceder los 50 caracteres')
			}
			if(codigo.length < 1 || codigo.length > 64){
				this.validarMensaje.push('Debes ingresar un codigo y este no debe exceder los 64 caracteres')
			}
			if(descripcion.length < 1 || descripcion.length > 255){
				this.validarMensaje.push('Debes ingresar una descripcion y este no debe exceder los 255 caracteres')
			}
			if(pVenta == 0 ){
				this.validarMensaje.push('Debes introducir un precio de venta')
			}
			if(categoria == 'Seleccione una categoria'){
				this.validarMensaje.push('Debes seleccionar una categoria')
			}
            if (stock == null || stock == undefined){
                this.validarMensaje.push('Debes ingresar el stock')
            }
			if(this.validarMensaje.length){
				this.validar=1
			}
			return this.validar
		},
		listarCategorias(){
			let header = {'Token':this.$store.state.token}
			let configuracion = {headers:header}
			axios.get('categoria/list', configuracion)
			.then((res)=>{
				this.opciones = res.data
			}).catch((error)=>{
				console.log(error)
			})
		},
		encontrarCategoriaInput(){
			let busqueda = this.categoria
			this.opciones.forEach(cat=>{
				if(busqueda == cat._id){
					this.categoria = cat
				} else {
					null
				}
			})
		},
		limpiar(){
			this.categoria=''
			this.nombre=''
			this.codigo=''
			this.descripcion=''
			this.pVenta=0
			this.stock=0
			this.editar=false
			this.ruta=''
		}
	},
	created(){
		this.opcion()
		this.listarCategorias()
	}
}
</script>
<style scoped lang="sass">
.agregarArt
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