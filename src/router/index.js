import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index'
import guanyuweijia from '@/views/guanyuweijia'
import xinwenzhongxin from "@/views/xinwenzhongxin"

Vue.use(VueRouter)

const routes = [{
  path: '/xinwenzhongxin',
  name: 'xinwenzhongxin',
  component: xinwenzhongxin
}, {
  path: '/guanyuweijia',
  name: 'guanyuweijia',
  component: guanyuweijia
}, {
  path: '/',
  name: 'index',
  component: index
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router