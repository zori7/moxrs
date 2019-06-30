import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

window.axios = require('axios')

Vue.config.productionTip = false

Vue.use(ElementUI)

window.axios.defaults.baseURL = process.env.VUE_APP_URL + '/api'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.interceptors.request.use(config => {
    if (!localStorage.hasOwnProperty('vuex'))
        return config
    let store = JSON.parse(localStorage.vuex)
    let token = typeof store.token !== 'undefined' ? store.token : null
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

if (app.$store.getters.loggedIn)
    app.$store.dispatch('getAuthUser')
