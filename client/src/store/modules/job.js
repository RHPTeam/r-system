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
  },
  formChange: state => {
    return state.formChange;
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
  },
  formChange: (state, payload) => {
    state.formChange = payload;
  },
  clearData: state => {
    state.job = {};
  },
  clearForm: (state, payload) => {
    state.formChange = payload;
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
  },
  formChange: async ({ commit }, payload) => {
    await commit("formChange", payload);
  },
  clearData: async ({ commit }) => {
    await commit("clearData");
  },
  clearForm: async ({ commit }) => {
    const formChange = {
      title: "",
      button: ""
    };
    await commit("clearForm", formChange);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
