import Vue from 'vue'
import Vuex from 'vuex'

import kanban from './kanban'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    kanban
  }
})
