import Vue from 'vue'
import VueRouter from 'vue-router'
import Time from '../views/Time.vue'
import Classificacao from '../views/Classificacao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
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
