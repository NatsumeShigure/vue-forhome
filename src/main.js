import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'

import headerSidebar from './components/header-sidebar'
import headerNav from './components/header-nav'
import footerNav from './components/footer-nav'
import Menu from './components/menu'
import fixedRight from './components/fixed-right'
Vue.component("header-sidebar", headerSidebar)
Vue.component("header-nav", headerNav)
Vue.component("footer-nav", footerNav)
Vue.component("Menu", Menu)
Vue.component("fixed-right", fixedRight)

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')