// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/css/swiper.css'
import './assets/fonts/iconfont.css'
import anime from 'animejs/lib/anime.es.js'
import animate from 'animate.css'
Vue.prototype.$anime = anime
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(animate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
