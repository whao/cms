import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: {
      baseUrl: 'https://5ztux632e2.execute-api.us-east-1.amazonaws.com/',
      stage: 'testing'
    }
  },
  mutations: {

  },
  actions: {

  }
})
