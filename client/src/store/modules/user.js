const state = {
  users: [],
  user: {} // khong bao gio gia tri la string
};

const getters = {
  users: state => {
    return state.users;
  },
  user: state => {
    return state.user;
  }
};

const mutations = {
  index: (state, payload) => {
    state.users = payload;
  },
  create: (state, payload) => {
    state.users = payload;
  },
  show: (state, payload) => {
    state.user = payload;
  }
};

const actions = {
  index: async ({ commit }, payload) => {
    await commit("index", payload);
  },
  createUser: async ({ commit }, payload) => {
    await commit("createUser", payload);
  },
  show: async ({ commit }, payload) => {
    await commit("show", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
