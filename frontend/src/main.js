import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
window.axios = require('axios')

Vue.use(ElementUI)

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
