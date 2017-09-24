import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    backgrounds: {},
    monsters: {},
    character: {},
    classes: {},
    conditions: {},
    feats: {},
    items: {},
    races: {},
    rules: {},
    spells: {}
  },
  mutations: {
    setData (state, { stateName, data }) {
      state[stateName] = data
    }
  },
  actions: {
    async getData ({ commit }, { stateName, endpoint }) {
      const request = await Vue.http.get(endpoint)
      console.log(request)
      commit('setData', { stateName: stateName, data: request.data })
    }
  }
})

export default store
