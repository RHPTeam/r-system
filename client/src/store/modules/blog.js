const state = {
  blogs: [],
  blog: {},
  blogsByUser: [],
  formChange: {
    title: "",
    button: ""
  }
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
  },
  formChange: state => {
    return state.formChange
  }
};

const mutations = {
  getAllBlog: (state, payload) => {
    state.blogs = payload;
  },
  create: (state, payload) => {
    state.blogsByUser.push(payload);
  },
  updateBlog: (state, payload) => {
    state.blog = payload;
  },
  showBlog: (state, payload) => {
    state.blog = payload;
  },
  showByUser: (state, payload) => {
    state.blogsByUser = payload;
  },
  deleteBlog: (state, payload) => {
    state.blogsByUser.splice(payload, 1);
  },
  formChange: (state, payload) => {
    state.formChange = payload
  },
  clearData: (state) => {
    state.blog = {}
  },
  clearForm: (state, payload) => {
    state.formChange = payload
  }
};

const actions = {
  getAllBlog: async ({commit}, payload) => {
    await commit("getAllBlog", payload);
  },
  create: async ({commit}, payload) => {
    await commit("create", payload);
  },
  updateBlog: async ({commit}, payload) => {
    await commit("updateBlog", payload)
  },
  showBlog: async ({
                     commit
                   }, payload) => {
    await commit("showBlog", payload);
  },
  showByUser: async ({commit}, payload) => {
    await commit("showByUser", payload);
  },
  deleteBlog: async ({commit}, payload) => {
    await commit("deleteBlog", payload);
  },
  formChange: async ({commit}, payload) => {
    await commit("formChange", payload);
  },
  clearData: async ({commit}) => {
    await commit("clearData");
  },
  clearForm: async ({commit}) => {
    const formChange = {
      title: '',
      button: ''
    }
    await commit("clearForm", formChange);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
