import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
window.moment = require('moment-timezone')
import 'element-ui/lib/theme-chalk/index.css'
import EchoClient from 'laravel-echo'
window.marked = require('marked')
window.io = require('socket.io-client')
window._ = require('lodash')

Vue.use(ElementUI)
window.axios = require('axios')
Vue.config.productionTip = false

Vue.mixin({
    filters: {
        date (val) {
            let tz = null;
            if (localStorage.hasOwnProperty('vuex')) {
                let vuex = JSON.parse(localStorage.vuex)
                if (vuex.hasOwnProperty('tz'))
                    tz = vuex.tz
            }
            return moment(val).isSame(moment(), 'minute') ? moment(val).tz(tz).fromNow() : moment(val).tz(tz).format('Do MMMM YYYY \- H:mm')
        }
    }
})

Vue.component('md', {
    props: {
        t: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            marked: ''
        }
    },
    watch: {
        t (val) {
            this.md(val)
        }
    },
    template: '<span v-html="marked"></span>',
    methods: {
        md: _.debounce(function (val) {
            this.marked = marked(val)
        }, 500)
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

let hostname = process.env.VUE_APP_URL.split('/')[2]

window.Echo = new EchoClient({
    broadcaster: 'socket.io',
    host: hostname + ':6001'
})

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

if (app.$store.getters['auth/loggedIn'])
    app.$store.dispatch('auth/getAuthUser')
