import Vue from 'vue'
import VueRouter from 'vue-router'
import Classificacao from '../views/Classificacao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Classificacao',
    component: Classificacao
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
