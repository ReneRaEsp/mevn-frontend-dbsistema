import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: ()=> import(/* webpackChunkName: "inicio" */'../views/subviews/ingresos/Ingresos'),
    meta:{
      libre: true,
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import(/* webpackChunkName: "login" */'../views/subviews/inicio/Login.vue'),
    meta:{
      libre:true,
    }
  },
  {
    path: '/almacen/categorias',
    name: 'AlmacenCategorias',
    component: ()=> import(/* webpackChunkName: "almacen-categorias" */'../views/subviews/categorias/Categorias.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: false
    }
  },
  {
    path: '/almacen/categorias/add',
    name: 'AgregarCat',
    component: ()=> import(/* webpackChunkName: "agregar-categorias" */'../views/subviews/categorias/AgregarCat.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: false
    }
  },
  {
    path: '/almacen/categorias/add:id',
    name: 'EditarCat',
    component: ()=> import(/* webpackChunkName: "agregar-categorias" */'../views/subviews/categorias/AgregarCat.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: false
    }
  },
  {
    path: '/almacen/articulos',
    name: 'AlmacenArticulos',
    component: ()=> import(/* webpackChunkName: "almacen-articulos" */'../views/subviews/articulos/Articulos.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: false
    }
  },
  {
    path: '/almacen/articulos/add',
    name: 'AgregarArt',
    component: ()=> import(/* webpackChunkName: "agregar-articulos" */'../views/subviews/articulos/AgregarArt.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: false
    }
  },  
  {
    path: '/almacen/articulos/add:id',
    name: 'EditarArt',
    component: ()=> import(/* webpackChunkName: "editar-articulos" */'../views/subviews/articulos/AgregarArt.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: false
    }
  },  
  {
    path: '/compras/ingresos',
    name: 'Ingresos',
    component: ()=> import(/* webpackChunkName: "ingresos" */ '../views/subviews/ingresos/Ingresos.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/compras/ingresos/add',
    name: 'AgregarIng',
    component: ()=> import(/* webpackChunkName: "agregar-ingresos" */ '../views/subviews/ingresos/AgregarIng.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/compras/ingresos/add:id',
    name: 'EditarIng',
    component: ()=> import(/* webpackChunkName: "editar-ingresos" */ '../views/subviews/ingresos/AgregarIng.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/compras/ingresos/detalles:id',
    name: 'DetallesIng',
    component: ()=> import(/* webpackChunkName: "detalles-ingresos" */ '../views/subviews/ingresos/DetallesIng.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/compras/proveedores',
    name: 'Proveedores',
    component: ()=> import(/* webpackChunkName: "proveedores" */ '../views/subviews/proveedores/Proveedores.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/compras/proveedores/add',
    name: 'AgregarProv',
    component: ()=> import(/* webpackChunkName: "agregar-proveedores" */ '../views/subviews/proveedores/AgregarProv.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/compras/proveedores/add:id',
    name: 'EditarProv',
    component: ()=> import(/* webpackChunkName: "editar-proveedores" */ '../views/subviews/proveedores/AgregarProv.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: ()=> import(/* webpackChunkName: "ventas" */'../views/subviews/ventas/VentasVista.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/ventas/clientes',
    name: 'Clientes',
    component: ()=> import (/* webpackChunkName: "clientes" */'../views/subviews/clientes/Clientes.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/ventas/clientes/add',
    name: 'AgregarCli',
    component: ()=> import (/* webpackChunkName: "agregar-clientes" */'../views/subviews/clientes/AgregarCli.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/ventas/clientes/add:id',
    name: 'EditarCli',
    component: ()=> import (/* webpackChunkName: "editar-clientes" */'../views/subviews/clientes/AgregarCli.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/accesos/usuarios',
    name: 'Usuarios',
    component: ()=> import(/* webpackChunkName: "accesos" */'../views/subviews/usuarios/Usuarios.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: false
    }
  },
  {
    path: '/accesos/add-user',
    name: 'AgregarUsuario',
    component: ()=> import(/* webpackChunkName: "agregar-usuarios" */'../views/subviews/usuarios/AgregarUsr.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: false
    }
  },
  {
    path: '/accesos/add-user:id',
    name: 'EditarUsuario',
    component: ()=> import(/* webpackChunkName: "editar-usuario" */'../views/subviews/usuarios/AgregarUsr.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: false
    }
  },
  {
    path: '/consultas/compras',
    name: 'ConsultasCompras',
    component: ()=> import(/* webpackChunkName: "consultas-compras" */'../views/subviews/consultasCompras/ConsultasComp.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: true
    }
  },
  {
    path: '/consultas/ventas',
    name: 'ConsultasVentas',
    component: ()=> import(/* webpackChunkName: "consultas-ventas" */'../views/subviews/consultasVentas/ConsultasVent.vue'),
    meta:{
      administrador: true,
      almacenero: true,
      vendedor: true
    }
  },
  {
    path: '/acerca-de',
    name: 'AcercaDe',
    component: ()=> import(/* webpackChunkName: "acercaDe" */'../views/AcercaDe.vue'),
    meta:{
      libre: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.libre)){
    next()
  } else if (store.state.usuario && store.state.usuario.rol == 'Administrador'){
    if (to.matched.some(record => record.meta.administrador)){
      next()
    }
  } else if (store.state.usuario && store.state.usuario.rol == 'Vendedor'){
    if (to.matched.some(record => record.meta.vendedor )){
      next()
    }
  } else if (store.state.usuario && store.state.usuario.rol == 'Almacenero'){
    if (to.matched.some(record => record.meta.almacenero )){
      next()
    }
  } else {
    next({name: 'Login' })
  }
}) 
export default router
