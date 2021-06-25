<template>
  <section class="agregarProv">
	
    <h3 class="title">Detalles Ingresos</h3>
	<br>
	
	<div class="formAgregar">
		
		<div class="grupo">
			
			<div class="duo">
				<label class="label">Tipo de<br> comprobante</label>
				<p class="detalle">{{tipo_comprobante}}</p>
			</div>
			<div class="duo">
				<label class="label">Serie de<br> comprobante</label>
				<p class="detalle">{{serie_comprobante}}</p>
			</div>
			<div class="duo">
				<label class="label">Número de<br> comprobante</label>
				<p class="detalle">{{num_comprobante}}</p>
			</div>
			
					
		</div>
		<div class="grupo">
			<div class="duo">
				<label class="label">Usuario</label>
				<p class="detalle">{{usuario.nombre}}</p>
			</div>
			<div class="duo">
				<label class="label">Proveedor</label>
				<p class="detalle">{{persona.nombre}}</p>
			</div>
			<div class="duo">
				<label class="label">Estado</label>
				<div v-if="estado == 1">
					<p class="detalle">Activo</p>
				</div>
				<div v-else>
					<p class="detalle">Inactivo</p>
				</div>
			</div>	
			<div class="duo">
				<label class="label">Impuesto</label>
				<p class="detalle">{{impuesto}}</p>
			</div>
			<div class="duo">
				<label class="label">Total</label>
				<p class="detalle">{{total}}</p>
			</div>
			<div class="duo">
				<label class="label">Fecha de creacion</label>
				<p class="detalle">{{fecha}}</p>
			</div>
		</div>
		<h2 class="detalleTitle">Articulos asociados: </h2>
		<div v-for="detalle of detalles" :key="detalle._id" class="grupo">
			
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<!--<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>
			<div class="duo">
				<label class="labelArticulo" ><b>{{ detalle.articulo}}</b></label>
				<p class="detalleArticulo"><b>Cantidad: </b><span class="render"> &nbsp;{{ detalle.cantidad}}</span></p>
				<p class="detalleArticulo"><b>Precio: </b><span class="render"> &nbsp;{{ detalle.precio}}</span></p>
				<p class="detalleArticulo"><b>Id: </b><span class="render"> &nbsp;{{ detalle._id}}</span></p>
			</div>-->

			
		</div>		     
    </div>
	<router-link class="volver" to="/compras/ingresos">
		Volver
	</router-link>
  </section>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			usuario:'',
			persona:'',
			tipo_comprobante:'',
			serie_comprobante:'',
			num_comprobante:'',
			fecha:'',
			impuesto:'',
			total:'',
			estado:'',
			detalles:[]
		}
	},
	methods:{
		buscarPorId(){
			let header = {'Token': this.$store.state.token}
			let configuracion = {headers:header}
			axios.get('ingreso/query?_id='+this.$router.currentRoute.params.id, configuracion)
			.then((response)=>{
				this.usuario = response.data.usuario
				this.persona = response.data.persona
				this.tipo_comprobante = response.data.tipo_comprobante
				this.serie_comprobante = response.data.serie_comprobante
				this.num_comprobante = response.data.num_comprobante
				this.fecha = response.data.cretedAt
				this.impuesto = response.data.impuesto
				this.total = response.data.total
				this.estado =  response.data.estado
				this.detalles = response.data.detalles
			}).catch((error)=>{
				console.log('error del query: ' + error)
			})
		}
	},
	created(){
		this.buscarPorId()
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
		height: 70%
		padding: 3rem
		background: rgba(3, 33, 53, .8)
		//background: rgba(23, 133, 153, .5)
		border-radius: .7rem
		overflow-y: auto
		overflow-x: hidden
	.detalleTitle
		font-size: 18px
		color: white
		background: rgba(3, 33, 53, .01)
		padding: .7rem
		border-radius: 1rem
		align-self: center
		margin-top: 1.5rem
		margin-bottom: .8rem
		text-align: center


	.grupo
		display: flex
		justify-content: space-evenly
		flex-wrap: wrap
		flex-direction: row
		.duo
			display: flex
			flex-direction: column
			align-content: center
			justify-content: center
			padding: .7rem
			margin: .5rem
			border-radius: .5rem
			background: rgba(13, 63, 73, .8)
			min-height: 5rem
			height: auto
			.labelArticulo
				color: rgba(190, 190, 90, .8)
				font-size: 16px
				text-align: center
				font-weight: bold
				display: flex
				justify-content: center
				margin-bottom: 1rem
			.detalleArticulo
				padding: .5rem
				display: flex
				justify-content: start
				color: rgba(120, 200, 200, .9)
				font-weight: 200
				font-size: 12px
			.label
				color: rgba(190, 190, 90, .8)
				font-size: 14px
				text-align: center
				font-weight: bold
				display: flex
				justify-content: center
			.detalle
				padding: .5rem
				display: flex
				justify-content: center
				color: white
				//color: rgba(222, 220, 233, 1)
				font-weight: 300


	.volver
		display: flex
		justify-content: center
		width: 7rem
		padding: .3rem
		margin-right: 3rem
		min-width: auto
		border-radius: .7rem .7rem .7rem .7rem
		border: 3px solid rgba(10, 40, 40, .0)
		background: rgba(43,43,53,.79)
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

.render
	color: rgba(220, 220, 220, .89)
			
	
</style>