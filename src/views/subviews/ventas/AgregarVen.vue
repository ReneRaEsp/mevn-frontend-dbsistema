<template>
  <section class="agregarProv">
    <div @keyup.enter="guardar()" class="formAgregar">
      <h3 class="title">Agregar o editar Venta</h3>
      <div class="grupo">
        <div class="duo">
          <label class="label" for="cliente">Cliente</label>
          <br />
          <select
            v-if="!this.editar"
            v-model="cliente"
            class="input cat"
            name="cliente"
          >
            <option value="Seleccione un cliente" class="opcion" selected
              >Seleccione una cliente</option
            >
            <hr />
            <option
              class="opcion"
              v-for="cliente of clientes"
              :key="cliente._id"
              :value="cliente._id"
              >{{ cliente.nombre }}</option
            >
          </select>
          <div class="modificar" v-if="this.editar">
            <input class="input" :value="cliente.nombre" type="text" />
            <p @click="modificarProv()" class="modText">Modificar cliente</p>
          </div>
          <select
            v-if="this.modificar.prov && this.editar"
            v-model="tipoComprobante"
            class="input cat"
            name="usuarios"
          >
            <option value="Seleccione una categoria" class="opcion" selected
              >Seleccione cliente</option
            >
            <hr />
            <option
              class="opcion"
              v-for="cliente of clientes"
              :key="cliente._id"
              :value="cliente"
              >{{ cliente.nombre }}</option
            >
          </select>
        </div>
        <div class="duo">
          <label class="label" for="categoria">Tipo Comprobante</label>
          <br />
          <select
            v-if="!this.editar"
            v-model="tipoComprobante"
            class="input cat"
            name="usuarios"
          >
            <option value="Seleccione una categoria" class="opcion" selected
              >Seleccione comprobante</option
            >
            <hr />
            <option
              class="opcion"
              v-for="comprobante of tiposComprobante"
              :key="comprobante"
              :value="comprobante"
              >{{ comprobante }}</option
            >
          </select>
          <div class="modificar" v-if="this.editar">
            <input class="input" :value="this.tipoComprobante" type="text" />
            <p @click="modificarTComp()" class="modText">
              Modificar tipo comprobante
            </p>
          </div>
          <select
            v-if="this.modificar.tComp && this.editar"
            v-model="tipoComprobante"
            class="input cat"
            name="usuarios"
          >
            <option value="Seleccione una categoria" class="opcion" selected
              >Seleccione comprobante</option
            >
            <hr />
            <option
              class="opcion"
              v-for="comprobante of tiposComprobante"
              :key="comprobante"
              :value="comprobante"
              >{{ comprobante }}</option
            >
          </select>
        </div>
        <div class="duo">
          <label for="serieComprobante" class="label">Serie Comprobante</label>
          <br />
          <input
            v-model.number="serieComprobante"
            class="input"
            name="serieComprobante"
            placeholder="Serie de comprobante..."
            type="number"
          />
        </div>
      </div>
      <div class="grupo">
        <div class="duo">
          <label for="numComprobante" class="label">Número Comprobante</label>
          <br />
          <input
            v-model.number="numComprobante"
            class="input"
            name="numComprobante"
            placeholder="Numero de comprobante..."
            type="number"
          />
        </div>
        <div class="duo">
          <label for="impuesto" class="label">Impuesto</label>
          <br />
          <input
            v-model.number="impuesto"
            class="input"
            name="impuesto"
            placeholder="Impuesto..."
            type="number"
          />
        </div>
      </div>
      <div class="grupo">
        <div class="duo">
          <label for="precio" class="label">Precio</label>
          <br />
          <input
            v-model.number="precio"
            class="input"
            name="precio"
            type="number"
            placeholder="Precio articulo"
          />
        </div>
        <div class="duo">
          <label for="cantidad" class="label">Cantidad</label>
          <br />
          <input
            v-model.number="cantidad"
            class="input"
            name="cantidad"
            type="number"
            placeholder="Cantidad"
            @input="calcularSubtotal()"
          />
        </div>
        <div class="duo">
          <label for="codigo" class="label">Articulo</label>
          <br />
          <input
            v-model="codigo"
            class="input"
            name="codigo"
            type="text"
            placeholder="Codigo de articulo"
            @input="cargarPrecioArticulo()"
          />
        </div>
        <div class="duo">
          <label for="descuento" class="label">Descuento</label>
          <br />
          <input
            v-model="descuento"
            class="input"
            name="descuento"
            type="text"
            placeholder="Descuento del articulo"
          />
        </div>
        <div class="duo">
          <label for=""></label>
          <br />
          <button class="guardar" @click="agregarArticulo()">
            Agregar lote de articulos
          </button>
        </div>
      </div>
      <div v-if="articulos.length" class="moduloArt">
        <div class="grupo">
          <div class="duo">
            <h4 class="tituloAgregados">Monto total: {{ total }}</h4>
            <h4 class="tituloAgregados">
              Lotes de articulos agregados: {{ articulos.length }}
            </h4>
          </div>
        </div>
        <div class="grupo">
          <div class="duo">
            <h3 class="tituloAgregados">Articulos agregados</h3>
          </div>
        </div>
        <div class="grupo articulosAgregados">
          <div
            v-for="(articulo, index) of articulos"
            :key="articulo._id"
            class="duo articuloDuo"
          >
            <i @click="eliminarArt(index)" class="equis fas fa-times"></i>
            <label class="labelArticulo"
              ><b>{{ articulo.articulo }}</b></label
            >
            <p class="detalleArticulo">
              <b>Precio por unidad: </b
              ><span class="render"> &nbsp;{{ articulo.precio }}</span>
            </p>
            <p class="detalleArticulo">
              <b>Cantidad: </b
              ><span class="render"> &nbsp;{{ articulo.cantidad }}</span>
            </p>
            <p class="detalleArticulo">
              <b>Precio total: </b
              ><span class="render"> &nbsp;{{ articulo.subTotal }}</span>
            </p>
            <p class="detalleArticulo">
              <b>Id: </b><span class="render"> &nbsp;{{ articulo._id }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="grupo">
        <div class="duo botones">
          <button class="guardar" @click="guardar()">
            Guardar venta
          </button>
          <router-link class="guardar volver" to="/ventas">
            Volver sin guardar
          </router-link>
        </div>
      </div>
      <div class="divErrores" v-for="mensaje of validarMensaje" :key="mensaje">
        <p class="errores">* {{ mensaje }}</p>
      </div>
      <br />
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: this.$store.state.usuario,
      cliente: "",
      tipoComprobante: "",
      tiposComprobante: [
        "Factura",
        "Boleta",
        "Factura Electronica",
        "Boleta Electronica",
      ],
      serieComprobante: "",
      numComprobante: "",
      impuesto: "",
      descuento: "",
      codigo: "",
      venta: {},
      total: 0,
      precio: "",
      cantidad: "",
      subTotal: 0,
      ruta: this.$router.currentRoute.fullPath,
      editar: false,
      validar: 0,
      validarMensaje: [],
      usuarios: [],
      clientes: [],
      articulos: [],
      modificar: {
        tComp: false,
        prov: false,
        usuario: false,
      },
    };
  },
  methods: {
    guardar() {
      this.validacion();
      if (this.validar <= 0) {
        if (!this.editar) {
          let header = { Token: this.$store.state.token };
          let configuracion = { headers: header };
          axios
            .post(
              "venta/add",
              {
                usuario: this.usuario,
                persona: this.cliente,
                tipo_comprobante: this.tipoComprobante,
                serie_comprobante: this.serieComprobante,
                num_comprobante: this.numComprobante,
                impuesto: this.impuesto,
                total: this.total,
                detalles: this.articulos,
              },
              configuracion
            )
            .then((response) => {
              console.log(
                "Venta agregada exitosamente: " + response.data.nombre
              );
            })
            .catch((error) => {
              console.log(error);
              alert("no se pudo agregar el ingreso");
            });
          this.limpiar();
          this.$router.push({ path: "/ventas" });
        } else {
          let header = { Token: this.$store.state.token };
          let configuracion = { headers: header };
          axios
            .put(
              "venta/update",
              {
                usuario: this.usuario,
                persona: this.cliente,
                tipo_comprobante: this.tipoComprobante,
                serie_comprobante: this.serieComprobante,
                num_comprobante: this.numComprobante,
                impuesto: this.impuesto,
                total: this.total,
                detalles: this.articulos,
              },
              configuracion
            )
            .then((response) => {
              console.log(
                "Venta actualizada exitosamente: " + response.data.nombre
              );
            })
            .catch((error) => {
              console.log(error);
              alert("No se pudo actualizar el ingreso");
            });
          this.limpiar();
          this.$router.push({ path: "/ventas" });
        }
      } else {
        console.log("Error en la validacion");
      }
    },
    opcion() {
      if (this.ruta == "/ventas/add" || this.ruta == "/") {
        this.editar = false;
      } else {
        this.buscarPorId();
        this.editar = true;
      }
    },
    buscarPorId() {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get(
          "venta/query?_id=" + this.$router.currentRoute.params.id,
          configuracion
        )
        .then((response) => {
          this.usuario = response.data.usuario;
          this.cliente = response.data.persona;
          this.tipoComprobante = response.data.tipo_comprobante;
          this.serieComprobante = response.data.serie_comprobante;
          this.numComprobante = response.data.num_comprobante;
          this.impuesto = response.data.impuesto;
          this.total = response.data.total;
          this.articulos = response.data.detalles;
        })
        .catch((error) => {
          console.log("error del query: " + error);
        });
    },
    validacion() {
      this.validar = 0;
      this.validarMensaje = [];

      if (
        this.serieComprobante.length < 1 ||
        this.serieComprobante.length > 7
      ) {
        this.validarMensaje.push(
          "Debe ingresar el numero de serie del comprobante y este no puede ser mayor a 7"
        );
      }
      if (this.numComprobante.length < 1 || this.numComprobante.length > 10) {
        this.validarMensaje.push(
          "Debe ingresar el numero del comprobante y este no puede ser mayor a 10"
        );
      }
      if (this.impuesto.length < 1 || this.impuesto.length > 10) {
        this.validarMensaje.push(
          "Debe ingresar el impuesto y este no puede ser mayor a 10 caracteres"
        );
      }
      if (this.validarMensaje.length) {
        this.validar = 1;
      }
      return this.validar;
    },
    listarUsuarios() {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("usuario/list", configuracion)
        .then((res) => {
          this.usuarios = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    listarClientes() {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("persona/list-clientes", configuracion)
        .then((res) => {
          this.clientes = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    agregarArticulo() {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      this.calcularSubtotal();
      axios
        .get("articulo/query-codigo?codigo=" + this.codigo, configuracion)
        .then((res) => {
          this.articulos.push({
            _id: res.data._id,
            articulo: res.data.nombre,
            cantidad: this.cantidad,
            precio: res.data.precio_venta,
            subTotal: this.subTotal,
            descuento: this.descuento,
          });
          this.indice++;
          this.total =this.total + this.subTotal;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cargarPrecioArticulo() {
      this.cantidad = "";
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("articulo/query-codigo?codigo=" + this.codigo, configuracion)
        .then((res) => {
          this.precio = res.data.precio_venta;
          console.log(this.precio);
        });
    },
    calcularSubtotal() {
      this.subTotal = this.cantidad * this.precio;
    },
    limpiar() {
      this.precio = 0;
      this.cantidad = 0;
      this.codigo = 0;
      this.subTotal = 0;
    },
    eliminarArt(index) {
      let restar = this.articulos[index].subTotal;
      this.total = this.total - restar;
      this.articulos.splice(index, 1);
    },
    modificarTComp() {
      !this.modificar.tComp
        ? (this.modificar.tComp = true)
        : (this.modificar.tComp = false);
    },
    modificarProv() {
      !this.modificar.prov
        ? (this.modificar.prov = true)
        : (this.modificar.prov = false);
    },
    modificarUsuario() {
      !this.modificar.usuario
        ? (this.modificar.usuario = true)
        : (this.modificar.usuario = false);
    },
  },
  created() {
    this.opcion();
    this.listarUsuarios();
    this.listarClientes();
  },
};
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
		background: rgba(3, 33, 53, .4)
		padding: .7rem
		border-radius: 1rem
		align-self: center
		margin-top: .2rem
		margin-bottom: 4rem
		margin-left: 13rem
		margin-right: 13rem
		text-align: center
	.formAgregar
		align-self: center
		display: flex
		justify-content: center
		flex-wrap: wrap
		flex-direction: row
		width: 100%
		height: 100%
		padding: 1rem
		background: rgba(3, 33, 53, .2)
		border-radius: .7rem
		overflow-y: auto
		overflow-x: auto
		.tituloAgregados
			margin-bottom: 1rem
			color: rgb(33, 235, 235)
			font-size: 1rem
			margin-left: 13rem
			margin-right: 13rem
			text-align: center


	.articulosAgregados
		width: 100%
		height: auto
		background: rgba(23, 20, 21, .3)
		padding: .5rem
	.grupo
		display: flex
		flex-wrap: wrap
		justify-content: space-evenly
		flex-direction: row
		width: 100%
		.articuloDuo
			background: rgba(24, 27, 27, .8)
			padding: .2rem
			border-radius: 1rem
			width: auto
		.botones
			display: flex
			justify-content: center
		.pFila
			height: 2rem
		.duo
			margin: 1.3rem
			display: flex
			flex-direction: column
			justify-content: flex-start
			align-content: flex-start
			.modificar
				display: flex
				flex-direction: column
				align-items: center
				justify-content: center
				.modText
					color: rgb(30, 20, 100)
					&:hover
						cursor: pointer
			.input
				align-self: flex-start
				width: 10rem
				min-width: auto
				height: 5vh
				padding: .5rem
				margin: 1rem
			.label
				color: white
				font-weight: bold
				margin: 1rem
				margin-left: auto
				margin-right: auto
				//margin-left: 20px
			.equis
				display: flex
				align-self: flex-end
				color: rgba(140, 30, 30, .8)
				&:hover
					cursor: pointer
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
				justify-content: flex-start
				color: rgba(120, 200, 200, .9)
				font-weight: 200
				font-size: 12px



			.guardar
				width: 12rem
				padding: .7rem
				margin-left: 2rem
				margin-right: 2rem
				margin-top: 2rem
				margin-bottom: 2rem
				font-weight: bold
				min-width: auto
				border-radius: .4rem .4rem .4rem .4rem
				border: 3px solid rgba(10, 10, 10, .4)
				background: rgba(33,133,233,.5)
				color: white
				font-weight: bold
				transition: .5s
				text-decoration: none
				align-self: center
				font-size: 1.2rem
				margin-top: 1rem
				//transform: translateX(9rem)
				&:hover
					opacity: 0.7
					cursor: pointer
			.volver
				background: rgba(73,73,83,.79)
				text-align: center

.moduloArt
	background: rgba(23, 43, 53, .7)
	border-radius: 1rem
	width: 100%


.opcion, .cat
	color: rgba(20,120,130,.9)
	font-weight: bold

.render
	color: rgba(233, 233, 233, .9)
</style>
