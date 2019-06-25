import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  	{
  		path: '/register',
  		name: 'register',
  		component: Register
  	},
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
