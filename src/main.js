import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'
import './assets/css/global.css'

import headerNav from './components/header-nav'
import footerNav from './components/footer-nav'
Vue.component("header-nav", headerNav)
Vue.component("footer-nav", footerNav)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')