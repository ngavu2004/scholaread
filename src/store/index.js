import { createStore } from 'vuex'
import { inject, toRefs } from "vue";
export default createStore({
  state: {
    Vue3GoogleOauth : inject("Vue3GoogleOauth"),
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
