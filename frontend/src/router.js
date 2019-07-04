import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
const files = require.context('./@views', false, /\.vue$/)
let components = [];
files.keys().map(key => {
    let name = key.split('/').pop().split('.').shift();
    components[name] = files(key).default;
});

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/register',
            name: 'register',
            component: components['Register']
        },
        {
            path: '/login',
            name: 'login',
            component: components['Login']
        },
        {
            path: '/logout',
            name: 'logout',
            component: components['Logout']
        },
        {
            path: '/',
            name: 'home',
            component: components['Home'],
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/posts',
            name: 'posts',
            component: components['Posts'],
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/global-chat',
            name: 'global-chat',
            component: components['GlobalChat'],
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters['auth/loggedIn']) {
            next({
                name: 'login'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
