const state = {
  jobs: []
};

const getters = {
  jobs: state => {
    return state.jobs;
  }
};

const mutations = {
  index: (state, payload) => {
    state.jobs = payload;
  },
  push: (state, payload) => {
    state.jobs.push(payload)
  },
  pop: (state, payload) => {
    state.jobs.splice(payload, 1)
  }
};

const actions = {
  index: async ({ commit }, payload) => {
    await commit("index", payload);
  },
  create: async ({ commit }, payload) => {
    await commit("push", payload)
  },
  delete: async ({ commit }, payload) => {
    await commit("pop", payload)
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
