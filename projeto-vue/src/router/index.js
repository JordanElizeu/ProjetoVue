import Vue from 'vue'
import VueRouter from 'vue-router'
import Time from '../views/Time.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
