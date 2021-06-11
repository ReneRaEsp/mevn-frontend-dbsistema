import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: ()=> import(/* webpackChunkName: "articulos" */'../views/Inicio.vue')
  },
  {
    path: '/almacen',
    name: 'Almacen',
    component: ()=> import(/* webpackChunkName: "almacen" */'../views/Almacen.vue')
  },
  {
    path: '/compras',
    name: 'Compras',
    component: ()=> import(/* webpackChunkName: "articulos" */'../views/Compras.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: ()=> import(/* webpackChunkName: "ventas" */'../views/Ventas.vue')
  },
  {
    path: '/accesos',
    name: 'Accesos',
    component: ()=> import(/* webpackChunkName: "accesos" */'../views/Accesos.vue')
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: ()=> import(/* webpackChunkName: "ingresos" */'../views/Consultas.vue')
  },
  {
    path: '/acerca-de',
    name: 'AcercaD',
    component: ()=> import(/* webpackChunkName: "acercaDe" */'../views/AcercaDe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
