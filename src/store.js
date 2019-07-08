import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    api: {
      url: 'https://5ztux632e2.execute-api.us-east-1.amazonaws.com/testing'
    },
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  }
})

export default store;