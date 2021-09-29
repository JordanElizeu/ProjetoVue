import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewProdutos from '../views/ViewProdutos.vue'
import Home from '../views/Home.vue'
import Venda from '../views/Venda.vue'

Vue.use(VueRouter)

const routes = [
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
  {
    path: '/vendas',
    name: 'Vendas',
    component: Venda
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
