import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../components/inicio.vue'
import registros from '../components/registros.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/registros',
      name: 'registros',
      component: registros
    },
   
  ]
})

export default router
