const state = {
  anwser: {}
};

const getters = {
  getAnwser: state => {
    return state.anwser;
  }
};

const mutations = {
  setAnwser(state, payload) {
    state.anwser = payload;
  }
};

const actions = {
  setAnwser: ({ commit }, payload) => {
    commit("setAnwser", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
