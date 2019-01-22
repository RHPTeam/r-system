const state = {
  jobs: [],
  job: {},
  formChange: {
    title: "",
    button: ""
  }
};

const getters = {
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
  },
  formChange: async ({ commit }, payload) => {
    await commit("formChange", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
