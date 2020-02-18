import Vue from 'vue'
import store from '../src/store'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'font-awesome/css/font-awesome.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
