const state = {
  posts: []
};

const getters = {
  posts: state => {
    return state.posts;
  }
};

const mutations = {
  getAllPosts: (state, payload) => {
    state.posts = payload;
  }
};

const actions = {
  getAllPosts: ({ commit }, payload) => {
    commit("getAllPosts", payload)
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
