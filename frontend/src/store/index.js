import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tz: null
  },
  mutations: {
    setTz (state, tz) {
      state.tz = tz
    }
  },
  modules: {
    auth
  },
  plugins: [createPersistedState()]
})
