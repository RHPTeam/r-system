const state = {
  blogs: [],
  blog: {},
  blogsByUser: []
};

const getters = {
  blogs: state => {
    return state.blogs;
  },
  blog: state => {
    return state.blog;
  },
  blogsByUser: state => {
    return state.blogsByUser;
  }
};

const mutations = {
  index: (state, payload) => {
    state.blogs = payload;
  },
  create: (state, payload) => {
    state.blogsByUser.push(payload);
  },
  show: (state, payload) => {
    state.blog = payload;
  },
  showByUser: (state, payload) => {
    state.blogsByUser = payload;
  },
  deleteBlog: (state, payload) => {
    state.blogsByUser.splice(payload, 1);
  }
};

const actions = {
  index: async ({ commit }, payload) => {
    await commit("index", payload);
  },
  create: async ({ commit }, payload) => {
    await commit("create", payload);
  },
  show: async ({ commit }, payload) => {
    await commit("show", payload);
  },
  showByUser: async ({ commit }, payload) => {
    await commit("showByUser", payload);
  },
  deleteBlog: async ({ commit }, payload) => {
    await commit("deleteBlog", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
