const state = {
  jobAll: [],
  jobByUser: [],
  job: {},
  formChangeJob: {
    title: "",
    button: ""
  }
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
  },
  formChangeJob: state => {
    return state.formChangeJob;
  },
};

const mutations = {
  getAllJob: (state, payload) => {
    state.jobAll = payload;
  },
  getJobUser: (state, payload) => {
    state.jobByUser = payload;
  },
  push: (state, payload) => {
    state.jobByUser.push(payload);
  },
  pop: (state, payload) => {
    state.jobByUser.splice(payload, 1);
  },
  show: (state, payload) => {
    state.job = payload;
  },
  formChangeJob: (state, payload) => {
    state.formChangeJob = payload;
  },
  updateJob: (state,payload) => {
    state.job =payload;
  },
  clearData: state => {
    state.job = {};
  },
  clearForm: (state, payload) => {
    state.formChangeJob = payload;
  }
};

const actions = {
  getAllJob: async ({ commit }, payload) => {
    await commit("getAllJob", payload);
  },
  getJobUser: async ({ commit }, payload) => {
    await commit("getJobUser", payload);
  },
  createJob: async ({ commit }, payload) => {
    await commit("push", payload);
  },
  delete: async ({ commit }, payload) => {
    await commit("pop", payload);
  },
  show: async ({ commit }, payload) => {
    await commit("show", payload);
  },
  formChangeJob: async ({ commit }, payload) => {
    await commit("formChangeJob", payload);
  },
  updateJob: async ({commit}, payload) => {
    await  commit("updateJob", payload);
  },
  clearData: async ({ commit }) => {
    await commit("clearData");
  },
  clearForm: async ({ commit }) => {
    const formChangeJob = {
      title: "",
      button: ""
    };
    await commit("clearForm", formChangeJob);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
