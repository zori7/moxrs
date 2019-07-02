import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
window.axios = require('axios')
Vue.config.productionTip = false

Vue.mixin({
    filters: {
        date (val) {
            return moment(val).isSame(moment(), 'day') ? moment(val).fromNow() : moment(val).format('Do MMMM YYYY \- H:mm')
        }
    }
})

Vue.prototype.$eventHub = new Vue()

window.axios.defaults.baseURL = process.env.VUE_APP_URL + '/api'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.interceptors.request.use(config => {
    if (!localStorage.hasOwnProperty('vuex'))
        return config
    let store = JSON.parse(localStorage.vuex)
    let token = typeof store.auth.token !== 'undefined' ? store.auth.token : null
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

if (app.$store.getters['auth/loggedIn'])
    app.$store.dispatch('auth/getAuthUser')
