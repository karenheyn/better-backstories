import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    PDFpaid: false,
  },
  mutations: {
    paid(state) {
      state.PDFpaid === true;
    },
  },
  actions: {},
  modules: {},
});
