<template>
  <section class="ventas">
    <CabeceroVentas />
    <h3 class="title">Ventas</h3>
    <div class="modulo">
      <div class="busqueda">
        <input
          @input="filtrarPorNombreInput()"
          v-model="busqueda"
          class="input"
          type="text"
          placeholder="Buscar por usuario..."
          name="search"
        />
        <button @click="filtrarPorNombreInput()" class="submit">Buscar</button>
      </div>
      <button class="mostrarT" @click="listar()">mostrar todo</button>
      <router-link class="agregar" to="/ventas/add">
        Agregar
      </router-link>
    </div>
    <table v-if="!buscando" style="width: 90%">
      <tr>
        <th>Usuario</th>
        <th>Cliente</th>
        <th>Tipo Comprobante</th>
        <th>Serie Comprobante</th>
        <th>Nro Comprobante</th>
        <th>Fecha</th>
        <th>Impuesto</th>
        <th>Total</th>
        <th>Estado</th>
        <th>Opciones</th>
      </tr>
      <tr v-for="venta of ventas" :key="venta._id">
        <td>{{ venta.usuario.nombre }}</td>
        <td>{{ venta.persona.nombre }}</td>
        <td>{{ venta.tipo_comprobante }}</td>
        <td>{{ venta.serie_comprobante }}</td>
        <td>{{ venta.num_comprobante }}</td>
        <td>{{ venta.createdAt }}</td>
        <td>{{ venta.impuesto }}</td>
        <td>{{ venta.total }}</td>
        <td>
          <div v-if="venta.estado">
            <span class="activo"> Activa </span>
          </div>
          <div v-else>
            <span class="inactivo"> Inactiva </span>
          </div>
        </td>
        <td>
          <router-link :to="'/ventas/add' + venta._id">
            <i class="edit fas fa-edit"></i>
          </router-link>
          <button
            v-if="venta.estado == 0"
            class="buttonDelete"
            @click="activar(venta._id)"
          >
            <i class="delete fas fa-lock-open"></i>
          </button>
          <button v-else class="buttonDelete" @click="desactivar(venta._id)">
            <i class="delete fas fa-lock"></i>
          </button>
          <router-link :to="'/ventas/detalles' + venta._id">
            <i class="detallesIco far fa-list-alt"
              ><span class="detalles">Detalles</span></i
            >
          </router-link>
        </td>
      </tr>
    </table>

    <table v-if="buscando" style="width: 90%">
      <tr>
        <th>Usuario</th>
        <th>Cliente</th>
        <th>Tipo Comprobante</th>
        <th>Serie Comprobante</th>
        <th>Nro Comprobante</th>
        <th>Fecha</th>
        <th>Impuesto</th>
        <th>Total</th>
        <th>Estado</th>
        <th>Opciones</th>
      </tr>
      <tr v-for="resultado of resultados" :key="resultado._id">
        <td>{{ resultado.usuario.nombre }}</td>
        <td>{{ resultado.persona.nombre }}</td>
        <td>{{ resultado.tipo_comprobante }}</td>
        <td>{{ resultado.serie_comprobante }}</td>
        <td>{{ resultado.num_comprobante }}</td>
        <td>{{ resultado.createdAt }}</td>
        <td>{{ resultado.impuesto }}</td>
        <td>{{ resultado.total }}</td>
        <td>
          <div v-if="resultado.estado">
            <span class="activo"> Activo </span>
          </div>
          <div v-else>
            <span class="inactivo"> Inactivo </span>
          </div>
        </td>
        <td>
          <router-link :to="'/ventas/add' + resultado._id">
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
          <router-link :to="'/ventas/detalles' + resultado._id">
            <i class="detallesIco far fa-list-alt"
              ><span class="detalles">Detalles</span></i
            >
          </router-link>
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
import axios from "axios";
import CabeceroVentas from "../../../components/ventas/CabeceroVentas.vue";
export default {
  data() {
    return {
      ventas: [],
      busqueda: "",
      buscando: false,
      resultados: [],
      sinCoincidencias: false,
    };
  },
  created() {
    this.listar();
  },
  methods: {
    listar() {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      this.sinCoincidencias = false;
      this.buscando = false;
      axios
        .get("venta/list", configuracion)
        .then((response) => {
          if (this.busqueda == "") {
            this.ventas = response.data;
            console.log("listo");
          } else {
            console.log("Realizando busqueda");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.limpiar();
    },
    filtrarPorNombreInput() {
      this.resultados = [];
      let r = [];
      this.ventas.forEach((venta) => {
        if (!venta.usuario.nombre.search(this.busqueda)) {
          r.push(venta);
        } else {
          this.sinCoincidencias = true;
        }
      });
      this.resultados = r;
      this.resultados == [] ||
      this.resultados == "" ||
      this.resultados == undefined
        ? (this.sinCoincidencias = true)
        : (this.sinCoincidencias = false);
      this.buscando = true;
    },
    limpiar() {
      (this.busqueda = ""),
        (this.buscando = false),
        (this.resultados = []),
        (this.sinCoincidencias = false);
    },

    activar(_id) {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .put("/venta/activate", { _id: _id }, configuracion)
        .then((response) => {
          console.log("Venta activada: " + response.data.nombre);
        })
        .catch((error) => {
          console.log(error);
        });
      this.limpiar();
      this.listar();
    },

    desactivar(_id) {
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .put("/venta/deactivate", { _id: _id }, configuracion)
        .then((response) => {
          console.log("Usuario desactivado: " + response.data.nombre);
        })
        .catch((error) => {
          console.log(error);
        });
      this.limpiar();
      this.listar();
    },
  },
  components: {
    CabeceroVentas,
  },
};
</script>
<style scoped lang="sass">
.ventas
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
    margin-bottom: 1rem
		padding: 1rem
		background: rgba(3, 33, 53, .7)
		border-radius: 1rem 1rem 1rem 1rem
		border-top: 3px solid rgba(10, 40, 40, .2)
		border-left: 3px solid rgba(10, 40, 40, .2)
		border-right: 3px solid rgba(10, 40, 40, .2)
		width: 91%
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
			margin-left: 0
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
		max-width: 60%

	td,	th
		border: 3px solid rgba(100, 140, 140, .7)
		text-align: center
		padding: .2rem
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

	.detallesIco
		color: rgb(15, 144, 243)
		margin: 0 .4rem
		font-size: 1.2rem
		transition: 1s
		&:hover
			color: rgb(200, 74, 133)

	.buttonDelete
		background: rgba(0,0,0,0)
		border: 0px solid rgba(0,0,0,0)
		cursor: pointer

	.detalles
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
		position: absolute
		font-weight: bold
		padding: .2rem
		color: rgba(3, 50, 31, .8)
		background: rgba(23, 150, 131, .7)
		border-radius: 1rem
		transform: translateX(-3rem)
		opacity: .0
		transition: .7s
		&:hover
			opacity: 1
</style>
