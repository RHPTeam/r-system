const state = {
  tab_name: ""
};

const getters = {
  getName: state => {
    return state.tab_name;
  }
};

const mutations = {
  setName(state, payload) {
    state.getName = payload;
  }
};

const actions = {
  setName: ({ commit }, payload) => {
    commit("setName", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
