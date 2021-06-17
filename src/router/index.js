import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: ()=> import(/* webpackChunkName: "inicio" */'../views/Inicio.vue'),
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
      administrador:true,
      almacenero:true,
      vendedor:true
    }
  },
  {
    path: '/almacen',
    name: 'Almacen',
    component: ()=> import(/* webpackChunkName: "almacen" */'../views/Almacen.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/almacen/categorias',
    name: 'AlmacenCategorias',
    component: ()=> import(/* webpackChunkName: "almacen-categorias" */'../views/subviews/Categorias.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/almacen/categorias/add',
    name: 'AgregarCat',
    component: ()=> import(/* webpackChunkName: "agregar-categorias" */'../views/subviews/AgregarCat.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/almacen/categorias/add:id',
    name: 'EditarCat',
    component: ()=> import(/* webpackChunkName: "agregar-categorias" */'../views/subviews/AgregarCat.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/almacen/articulos',
    name: 'AlmacenArticulos',
    component: ()=> import(/* webpackChunkName: "almacen-categorias" */'../views/subviews/Articulos.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/compras',
    name: 'Compras',
    component: ()=> import(/* webpackChunkName: "compras" */'../views/Compras.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: ()=> import(/* webpackChunkName: "ventas" */'../views/Ventas.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/accesos',
    name: 'Accesos',
    component: ()=> import(/* webpackChunkName: "accesos" */'../views/Accesos.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: ()=> import(/* webpackChunkName: "ingresos" */'../views/Consultas.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
    }
  },
  {
    path: '/acerca-de',
    name: 'AcercaD',
    component: ()=> import(/* webpackChunkName: "acercaDe" */'../views/AcercaDe.vue'),
    meta:{
      administrador: true,
      almacenero: false,
      vendedor: true
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
