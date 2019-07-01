import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  getters: {
    loggedIn: state => !!state.token
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    register ({ commit, state, dispatch }, credentials) {
      return new Promise (resolve => {
        axios.post('register', {
          email: credentials.email,
          name: credentials.name,
          password: credentials.password,
          password_confirmation: credentials.password_confirmation
        }).then(res => {
          let token = res.data.token
          commit('setToken', token)
          dispatch('getAuthUser')
          window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          resolve()
        })
      })
    },
    login ({ commit, state, dispatch }, credentials) {
      return new Promise (resolve => {
        axios.post('login', {
          email: credentials.email,
          password: credentials.password
        }).then(res => {
          let token = res.data.token
          commit('setToken', token)
          window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          dispatch('getAuthUser')
          resolve()
        })
      })
    },
    logout ({ commit }) {
      axios.post('logout').then(res => {
        commit('setToken', null)
        commit('setUser', null)
      })
    },
    getAuthUser ({ commit }) {
      axios.get('user').then(res => {
        commit('setUser', res.data)
      }).catch(e => {
        commit('setUser', null)
        commit('setToken', null)
      })
    }
  },
  plugins: [PersistedState()]
})
