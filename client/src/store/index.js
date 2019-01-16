import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statusMenu: false,
    themeName: "light"
  },
  getters: {
    statusMenu: state => {
      return state.statusMenu;
    },
    themeName: state => {
      return state.themeName;
    }
  },
  mutations: {
    changeStatusMenu: (state, payload) => {
      state.statusMenu = payload;
    },
    changeTheme: (state, payload) => {
      state.themeName = payload;
    }
  },
  actions: {
    changeStatusMenu: ({ commit }, payload) => {
      commit("changeStatusMenu", payload);
    },
    changeTheme: ({ commit }, payload) => {
      commit("changeTheme", payload);
    }
  }
});
