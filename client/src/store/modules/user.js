const state = {
  users: []
};

const getters = {
  users: state => {
    return state.users;
  }
};

const mutations = {
  create: (state, payload) => {
    state.users = payload;
  }
};

const actions = {
  createUser: async ({ commit }, payload) => {
    await commit("createUser", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
