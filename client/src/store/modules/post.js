const state = {
  post: {},
  posts: []
};

const getters = {
  post: state => {
    return state.post;
  },
  posts: state => {
    return state.posts;
  }
};

const mutations = {
  getPost: (state, payload) => {
    state.post = payload;
  },
  getAllPosts: (state, payload) => {
    state.posts = payload;
  }
};

const actions = {
  getPost: ({ commit }, payload) => {
    commit("getPost", payload);
  },
  getAllPosts: ({ commit }, payload) => {
    commit("getAllPosts", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
