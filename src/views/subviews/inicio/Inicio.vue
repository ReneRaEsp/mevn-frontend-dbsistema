<template>
  <section class="Inicio">
    <h2 class="title">Bienvenido</h2>
    <div class="rejilla">
        <div class="almacen elemento">
            <h2 class="subtitle">Almacen</h2>
            <button>Categorias</button>
            <button>Articulos</button>
        </div>
        <div class="compras elemento">
            <h2 class="subtitle">Compras</h2>
            <button>Ingresos</button>
            <button>Proveedores</button>
        </div>
        <div class="ventas elemento">
            <h2 class="subtitle">Ventas</h2>
            <button>Ventas</button>
            <button>Clientes</button>
        </div>
    </div>
    <div class="subrejilla">
        <div class="elemento accesos">
            <button>Gestionar accesos</button>
        </div>
        <div class="elemento acerca">
            <button>Informacion acerca de la app</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {

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
            width: 100%
            height: 30%
            .accesos
            .acerca
            .elemento
                display: flex
                width: 30%
                flex-direction: column
                justify-content: flex-start
                padding: 1.5rem
                border: 3px solid rgba(20, 100, 190, .0)
                border-radius: 12px
                .subtitle
                    color: rgba(233, 233, 202, .9)
                    align-self: center
                    display: flex
                button
                    font-size: 18px
                    height: 3rem
                    width: 12rem
                    margin-top: 2rem
                    margin-left: auto
                    margin-right: auto
                    background: rgba(20, 90, 100, .7)
                    color: white 
                    font-weight: bold
                    border: 2px solid rgba(2, 2, 2, .1)
                    border-radius: 6px
                    transition: .9s
                    &:hover
                        background: rgba(20, 90, 100, .4)
                        border: 2px solid rgba(212, 212, 212, .3)
                        cursor: pointer
        .rejilla
            display: flex
            justify-content: space-around
            width: 100%
            height: 40%
            .almacen
                grid-area: almacen
                background: rgba(30, 22, 70, .7)
            .compras
                grid-area: compras
                background: rgba(50, 70, 110, .84)
            .ventas
                grid-area: ventas
                background: rgba(20, 50, 100, .7)
            .elemento
                display: flex
                flex-direction: column
                justify-content: flex-start
                padding: 1.5rem
                border: 3px solid rgba(20, 100, 190, .0)
                border-radius: 12px
                .subtitle
                    color: rgba(233, 233, 202, .9)
                    align-self: center
                    display: flex
                button
                    font-size: 18px
                    height: 3rem
                    width: 12rem
                    margin-top: 2rem
                    margin-left: auto
                    margin-right: auto
                    background: rgba(20, 90, 100, .7)
                    color: white 
                    font-weight: bold
                    border: 2px solid rgba(2, 2, 2, .1)
                    border-radius: 6px
                    transition: .9s
                    &:hover
                        background: rgba(20, 90, 100, .4)
                        border: 2px solid rgba(212, 212, 212, .3)
                        cursor: pointer


</style>