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
  }
})

export default store
