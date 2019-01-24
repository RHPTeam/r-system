const state = {
  jobAll: [],
  jobs: [],
  job: {},
  formChange: {
    title: "",
    button: ""
  }
};

const getters = {
  jobAll: state => {
    return state.jobAll;
  },
  jobs: state => {
    return state.jobs;
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
