import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index'
import guanyuweijia from '@/views/guanyuweijia'

Vue.use(VueRouter)

const routes = [{
  path: '/guanyuweijia',
  component: guanyuweijia
}, {
  path: '/',
  component: index
}]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router