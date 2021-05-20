import { createStore } from 'vuex'
import { inject, toRefs } from "vue";
export default createStore({
  state: {
    Vue3GoogleOauth : inject("Vue3GoogleOauth"),
    user: null,
    showLogin: false,
  },
  mutations: {
    updateUser(state, userdata) {
      state.user = userdata
    },
    toggleLogin(state) {
      state.showLogin = !state.showLogin
    }
  },
  actions: {
  },
  modules: {
  }
})
