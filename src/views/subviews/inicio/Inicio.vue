<template>
  <section class="Inicio">
    <h2 class="title">Bienvenido</h2>
    <div class="rejilla">
        <div v-if="esAdministrador || esAlmacenero" class="almacen elemento">
            <h2 class="subtitle">Almacen</h2>
            <router-link class="button" to="/almacen/categorias">
                Categorias
            </router-link>
            <router-link class="button" to="/almacen/articulos">
                Articulos
            </router-link>
        </div>
        <div v-if="esAdministrador || esVendedor" class="compras elemento">
            <h2 class="subtitle">Compras</h2>
            <router-link class="button" to="/compras/ingresos">
                Ingresos
            </router-link>
            <router-link class="button" to="/compras/proveedores">
                Proveedores
            </router-link>
        </div>
        <div v-if="esAdministrador || esVendedor" class="ventas elemento">
            <h2 class="subtitle">Ventas</h2>
            <router-link class="button" to="/ventas/clientes">
                Clientes
            </router-link>
            <router-link class="button" to="/ventas">
                Ventas
            </router-link>
        </div>
        <div class="consultas elemento">
            <h2 class="subtitle">Consultas</h2>
            <router-link v-if="esAdministrador || esAlmacenero" class="button" to="/consultas/compras">
                Consultar Compras
            </router-link>
            <router-link v-if="esAdministrador || esVendedor" class="button" to="/consultas/ventas">
                Consultar Ventas
            </router-link>
        </div>
    </div>
    <div class="subrejilla">
        <div v-if="esAdministrador" class="elemento accesos">
            <router-link class="button" to="/accesos/usuarios">
                Gestionar accesos
            </router-link>
        </div>
        <div v-if="esAdministrador || esVendedor || esAlmacenero" class="elemento acerca">
            <router-link class="button" to="/acerca-de">
                Informacion de la app
            </router-link>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    computed: {
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
    }
}
</script>

<style scoped lang="sass">
    .Inicio
        display: flex
        justify-content: flex-start
        align-items: center
        flex-direction: column
        width: 100%
        height: 100%
        .title
            color:  rgb(223, 233, 223)
            margin-top: 2rem
            margin-bottom: 3rem
            font-size: 3rem
        .subrejilla
            margin-top: 2rem
            display: flex
            justify-content: space-evenly
            flex-wrap: wrap
            overflow: auto
            width: 100%
            height: 30%
            .accesos
            .acerca
            .elemento
                display: flex
                width: 30%
                flex-wrap: wrap
                width: 49%
                flex-direction: column
                justify-content: flex-start
                padding: 1.5rem
                border: 3px solid rgba(20, 100, 190, .0)
                border-radius: 12px
                .subtitle
                    color: rgba(233, 233, 202, .9)
                    align-self: center
                    display: flex
                .button
                    display: flex
                    justify-content: center
                    align-items: center
                    text-decoration: none
                    font-size: 18px
                    height: 3.7rem
                    width: 100%
                    margin-top: 2rem
                    margin-left: auto
                    margin-right: auto
                    //background: rgba(20, 90, 100, .7)
                    background: rgba(43, 100, 130, .7)
                    color: rgba(200, 190, 200, 1)
                    font-weight: bold
                    border: 2px solid rgba(2, 2, 2, .1)
                    border-radius: 6px
                    transition: .9s
                    &:hover
                        background: rgba(20, 90, 100, .4)
                        color: rgba(250, 220, 200, .9)
                        border: 2px solid rgba(212, 212, 212, .3)
                        cursor: pointer
        .rejilla
            display: flex
            justify-content: space-around
            flex-wrap: wrap
            overflow: auto
            width: 100%
            height: 40%
            .almacen
                background: rgba(30, 22, 70, .7)
            .compras
                background: rgba(50, 70, 110, .84)
            .ventas
                background: rgba(20, 50, 100, .7)
            .consultas
                background: rgba(13, 40, 80, .7)
            .elemento
                display: flex
                flex-direction: column
                justify-content: flex-start
                height: auto
                width: auto
                padding: 1.5rem
                border: 3px solid rgba(20, 100, 190, .0)
                border-radius: 12px
                .subtitle
                    color: rgba(233, 233, 202, .9)
                    align-self: center
                    display: flex
                .button
                    font-size: 18px
                    text-align: center
                    text-decoration: none
                    display: flex
                    justify-content: center
                    align-items: center
                    padding: auto
                    height: 3rem
                    width: 12rem
                    margin-top: 2rem
                    margin-left: auto
                    margin-right: auto
                    //background: rgba(20, 90, 100, .7)
                    background: rgba(120, 190, 200, .7)
                    color: white 
                    font-weight: bold
                    border: 2px solid rgba(2, 2, 2, .1)
                    border-radius: 6px
                    transition: .9s
                    &:hover
                        background: rgba(20, 90, 100, .12)
                        border: 2px solid rgba(212, 212, 212, .3)
                        cursor: pointer


</style>