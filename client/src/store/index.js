import Vue from "vue";
import Vuex from "vuex";
import currentTab from "./modules/currentTab";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statusMenu: false
  },
  getters: {
    statusMenu: state => {
      return state.statusMenu;
    }
  },
  mutations: {
    changeStatusMenu: (state, payload) => {
      state.statusMenu = payload;
    }
  },
  actions: {
    changeStatusMenu: ({ commit }, payload) => {
      commit("changeStatusMenu", payload);
    }
  },
  modules:{
    currentTab
  }
});
