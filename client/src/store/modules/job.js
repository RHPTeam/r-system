const state = {
  jobAll: [],
  jobByUser: [],
  job: {}
};

const getters = {
  jobAll: state => {
    return state.jobAll;
  },
  jobByUser: state => {
    return state.jobByUser;
  },
  job: state => {
    return state.job;
  }
};

const mutations = {
  getAllJob: (state, payload) => {
    state.jobAll = payload;
  },
  getJobUser: (state, payload) => {
    state.jobByUser = payload;
  },
  push: (state, payload) => {
    state.jobs.push(payload);
  },
  pop: (state, payload) => {
    state.jobByUser.splice(payload, 1);
  },
  show: (state, payload) => {
    state.job = payload;
  }
};

const actions = {
  getAllJob: async ({ commit }, payload) => {
    await commit("getAllJob", payload);
  },
  getJobUser: async ({ commit }, payload) => {
    await commit("getJobUser", payload);
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
