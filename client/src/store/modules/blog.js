const state = {
  blogs: [],
  blogsTrend: [],
  blogsLastest: [],
  blogsPopular: [],
  blogsFeature: [],
  blog: {},
  blogsByUser: [],
  blogsOther: [],
  formChange: {
    title: "",
    button: ""
  }
};

const getters = {
  blogs: state => {
    return state.blogs;
  },
  blogsTrend: state => {
    return state.blogsTrend;
  },
  blogsLastest: state => {
    return state.blogsLastest;
  },
  blogsPopular: state => {
    return state.blogsPopular;
  },
  blogsFeature: state => {
    return state.blogsFeature;
  },
  blog: state => {
    return state.blog;
  },
  blogsByUser: state => {
    return state.blogsByUser;
  },
  blogsOther: state => {
    return state.blogsOther;
  },
  formChange: state => {
    return state.formChange;
  }
};

const mutations = {
  getAllBlog: (state, payload) => {
    state.blogs = payload;
  },
  getBlogsTrend: (state, payload) => {
    state.blogsTrend = payload;
  },
  getBlogsLastest: (state, payload) => {
    state.blogsLastest = payload;
  },
  getBlogsPopular: (state, payload) => {
    state.blogsPopular = payload;
  },
  getBlogsFeature: (state, payload) => {
    state.blogsFeature = payload;
  },
  createBlog: (state, payload) => {
    state.blogsByUser.unshift(payload);
  },
  updateBlog: (state, payload) => {
    state.blog = payload;
  },
  showBlog: (state, payload) => {
    state.blog = payload;
  },
  showByUser: (state, payload) => {
    const data = payload.reverse();
    state.blogsByUser = data;
  },
  getBlogsOther: (state, payload) => {
    state.blogsOther = payload;
  },
  deleteBlog: (state, payload) => {
    state.blogsByUser.splice(payload, 1);
  },
  formChange: (state, payload) => {
    state.formChange = payload;
  },
  clearData: state => {
    state.blog = {};
  },
  clearForm: (state, payload) => {
    state.formChange = payload;
  }
};

const actions = {
  getAllBlog: async ({ commit }, payload) => {
    await commit("getAllBlog", payload);
  },
  getBlogsTrend: async ({ commit }, payload) => {
    await commit("getBlogsTrend", payload);
  },
  getBlogsLastest: async ({ commit }, payload) => {
    await commit("getBlogsLastest", payload);
  },
  getBlogsPopular: async ({ commit }, payload) => {
    await commit("getBlogsPopular", payload);
  },
  getBlogsFeature: async ({ commit }, payload) => {
    await commit("getBlogsFeature", payload);
  },
  createBlog: async ({ commit }, payload) => {
    await commit("createBlog", payload);
  },
  updateBlog: async ({ commit }, payload) => {
    await commit("updateBlog", payload);
  },
  showBlog: async ({ commit }, payload) => {
    await commit("showBlog", payload);
  },
  showByUser: async ({ commit }, payload) => {
    await commit("showByUser", payload);
  },
  getBlogsOther: async ({ commit }, payload) => {
    await commit("getBlogsOther", payload);
  },
  deleteBlog: async ({ commit }, payload) => {
    await commit("deleteBlog", payload);
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
