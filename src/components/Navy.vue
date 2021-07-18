<template>
  <div>
    <ul class="navy-inner">
      <li class="list-element">
        <router-link class="button" to="/">Inicio</router-link>
      </li>
      <li v-if="!logueado" class="list-element">
        <router-link class="button" to="/login">Iniciar Sesion</router-link>
      </li>
      <li v-if="esAdministrador || esAlmacenero" class="list-element">
        <router-link class="button" to="/almacen/categorias"
          >Almacen</router-link
        >
      </li>
      <li v-if="esAdministrador || esVendedor" class="list-element">
        <router-link class="button" to="/compras/ingresos">Compras</router-link>
      </li>
      <li v-if="esAdministrador || esVendedor" class="list-element">
        <router-link class="button" to="/ventas">Ventas</router-link>
      </li>
      <li v-if="esAdministrador" class="list-element">
        <router-link class="button" to="/accesos/usuarios">Accesos</router-link>
      </li>
     <li
        v-if="esAdministrador || esVendedor || esAlmacenero"
        class="list-element"
      >
        <router-link class="button" to="/consultas/compras">Consultas</router-link>
      </li>
      <li class="list-element">
        <router-link class="button" to="/acerca-de">Acerca de</router-link>
      </li>
      <li v-if="logueado" class="list-element">
        <button class="button" @click="salir()">Cerrar Sesion</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("autoLogin");
  },
  computed: {
    logueado() {
      return this.$store.state.usuario;
    },
    esAdministrador() {
      return (
        this.$store.state.usuario &&
        this.$store.state.usuario.rol == "Administrador"
      );
    },
    esAlmacenero() {
      return (
        this.$store.state.usuario &&
        this.$store.state.usuario.rol == "Almacenero"
      );
    },
    esVendedor() {
      return (
        this.$store.state.usuario && this.$store.state.usuario.rol == "Vendedor"
      );
    },
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
  },
};
</script>

<style scoped lang="sass">
.navy-inner
    display: flex
    justify-content: center
    flex-direction: column
    color: white
    margin-top: .3rem
    padding: .5rem
    overflow: auto
    .list-element
        color: white
        display: flex
        justify-content: center
        margin-top: .7rem
        .button
            font-weight: bold
            font-size: 1rem
            width: 100%
            height: 2.5rem
            border: 2px solid rgba(21, 211, 211, .01)
            color: rgba(200, 210, 190, 1)
            background: rgba(24, 24, 24, .1)
            cursor: pointer
            transition: 1s
            text-align: center
            text-decoration: none
            display: flex
            justify-content: center
            align-items: center
            border-radius: .7rem
            &:hover
                border: 2px solid rgba(21, 211, 211, .9)
                color: rgba(21, 211, 211, .9)
                &:focus
                    border: 2px solid rgba(21, 211, 211, .9)
                    color: rgba(21, 211, 211, .9)
                    background: rgba(2, 28, 54, .5)
</style>