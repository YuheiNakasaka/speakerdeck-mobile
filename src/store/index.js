import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    slideImageType: 1,
  },
  getters: {
    slideImageType (state) {
      return state.slideImageType;
    },
  },
  mutations: {
    SWITCH_SLIDE_IMAGE_TYPE (state) {
      state.slideImageType = state.slideImageType === 1 ? 2 : 1;
    },
  },
  actions: {
    switchSlideImageType ({ commit }) {
      commit('SWITCH_SLIDE_IMAGE_TYPE')
    },
  }
})

export default store
