import axios from 'axios';
import UserService from '@/services/modules/user.service';
import CookieFunction from '@/utils/cookie';

const state = {
  status: '',
  token: CookieFunction.getCookie("sid") || '',
  user: {}
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
};

const mutations = {
  auth_request: (state) => {
    state.status = 'loading';
  },
  auth_success: (state, token, user) => {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  auth_error: (state) => {
    state.status = 'error';
  },
  logout: (state) => {
    state.status = '';
    state.token = '';
  }
};

const actions = {
  signIn: async ({commit}, user) => {
    commit('auth_request');
    const resData = await UserService.signIn(user);
    // set cookie
    CookieFunction.setCookie("sid", resData.data.data.token, 1);
    // set Authorization
    axios.defaults.headers.common['Authorization'] = resData.data.data.token;
    commit('auth_success', resData.data.data.token, user);
    if (!resData) {
      commit('auth_error')
      // remove cookie
      CookieFunction.removeCookie("sid");
    }
  },
  signUp: async ({commit}, user) => {
    commit('auth_request');
    const resData = await UserService.signUp(user);
    // set cookie
    CookieFunction.setCookie("sid", resData.data.data.token, 1);
    // set Authorization
    axios.defaults.headers.common['Authorization'] = resData.data.data.token;
    commit('auth_success', resData.data.data.token, user);
    if (!resData) {
      commit('auth_error')
      // remove cookie
      CookieFunction.removeCookie("sid");
    }
  },
  logOut: async ({commit}) => {
    commit('logout');
    // remove cookie
    CookieFunction.removeCookie("sid");
    // delete token on headers
    delete axios.defaults.headers.common['Authorization']
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
