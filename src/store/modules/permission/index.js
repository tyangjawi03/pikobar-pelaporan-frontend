import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  routes: [],
  addRoutes: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
