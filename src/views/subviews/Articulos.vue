<template>
  <section class="Articulos">
      <CabeceroAlmacen/>
      <h3 class="title">Articulos</h3>
      <div class="modulo">
        <form class="busqueda">
            <input class="input" type="text" placeholder="Buscar articulo..." name="search">
            <button class="submit" type="submit">Buscar</button>
        </form>
        <button class="agregar">Agregar</button>
      </div>
      
      <table style="width:90%">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
        </tr>
        </table>
  </section>
</template>

<script>
import CabeceroAlmacen from '../../components/almacen/CabeceroAlmacen.vue'
export default {
    components:{
        CabeceroAlmacen
    }
}
</script>

<style scoped lang="sass">
    .Articulos
        display: flex
        justify-content: start
        flex-wrap: wrap
        flex-direction: column
        .title
            font-size: 2.1rem
            color: rgb(100, 197, 192)
            align-self: center
            margin-top: 1.5rem
            margin-bottom: 1.5rem
        .modulo
            display: flex
            justify-content: space-around
            padding: 1rem
            background: rgba(3, 33, 53, .7)
            border-radius: 1rem 1rem 0 0
            border-top: 3px solid rgba(10, 40, 40, .2)
            border-left: 3px solid rgba(10, 40, 40, .2)
            border-right: 3px solid rgba(10, 40, 40, .2)
            width: 90%
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
                &:hover
                    opacity: .7
                    cursor: pointer


    table
        border-collapse: collapse
        align-self: center
        background: rgba(220, 222, 222, .9)

    td, th
        border: 3px solid rgba(10, 40, 40, .5)
        text-align: left
        padding: 8px
        color: rgb(10, 43, 45)

</style>