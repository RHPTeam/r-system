const state = {
  jobs: [],
  job: {}
};

const getters = {
  jobs: state => {
    return state.jobs;
  },
  job: state => {
    return state.job;
  }
};

const mutations = {
  index: (state, payload) => {
    state.jobs = payload;
  },
  push: (state, payload) => {
    state.jobs.push(payload);
  },
  pop: (state, payload) => {
    state.jobs.splice(payload, 1);
  },
  show: (state, payload) => {
    state.job = payload;
  }
};

const actions = {
  index: async ({ commit }, payload) => {
    await commit("index", payload);
  },
  create: async ({ commit }, payload) => {
    await commit("push", payload);
  },
  delete: async ({ commit }, payload) => {
    await commit("pop", payload);
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
