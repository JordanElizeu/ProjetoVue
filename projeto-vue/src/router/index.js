import Vue from 'vue'
import VueRouter from 'vue-router'
import Time from '../views/Time.vue'
import ViewProdutos from '../views/ViewProdutos.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vendas',
    name: 'Time',
    component: Time
  },
  {
    path: '/produtos',
    name: 'ViewProdutos',
    component: ViewProdutos
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
