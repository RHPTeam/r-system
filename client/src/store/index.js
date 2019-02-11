import Vue from "vue";
import Vuex from "vuex";

import currentTab from "./modules/currentTab";
import user from "./modules/user";
import anwser from "./modules/answer";
import blog from "./modules/blog";
import job from "./modules/job";
import category from "./modules/category";
import post from "./modules/post";
import comment from "./modules/comment";
import auth from "./modules/auth"

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true,
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
  },
  modules: {
    auth,
    currentTab,
    user,
    anwser,
    blog,
    job,
    category,
    post,
    comment
  }
});
