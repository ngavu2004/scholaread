import { createStore } from 'vuex'
import { inject, toRefs } from "vue";
export default createStore({
  state: {
    user: null,
    showLogin: false,
  },
  mutations: {
    updateUser(state, userdata) {
      state.user = userdata
    },
  },
  actions: {
  },
  modules: {
  }
})
