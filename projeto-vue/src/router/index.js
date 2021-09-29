import Vue from 'vue'
import VueRouter from 'vue-router'
import Venda from '../views/Venda.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/venda',
    name: 'Venda',
    component: Venda
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
