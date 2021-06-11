import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
 /* {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(*//* webpackChunkName: "about" *//* '../views/About.vue')
  }*/
  {
    path: '/',
    name: 'Articulos',
    component: ()=> import(/* webpackChunkName: "articulos" */'../views/Articulos.vue')
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: ()=> import(/* webpackChunkName: "categorias" */'../views/Categorias.vue')
  },
  {
    path: '/grafico',
    name: 'Grafico',
    component: ()=> import(/* webpackChunkName: "grafico" */'../views/Grafico.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: ()=> import(/* webpackChunkName: "categorias" */'../views/Ventas.vue')
  },
  {
    path: '/ingresos',
    name: 'Ingresos',
    component: ()=> import(/* webpackChunkName: "ingresos" */'../views/Ingresos.vue')
  },
  {
    path: '/almacen',
    name: 'Almacen',
    component: ()=> import(/* webpackChunkName: "almacen" */'../views/Almacen.vue')
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
