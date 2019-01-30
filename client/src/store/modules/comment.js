const state = {
  comments: [],
  comment: {},
  commentsByBlog: []
};

const getters = {
  // comments: state => {
  //     return state.comments;
  // },
  comment: state => {
    return state.comment;
  },
  commentsByBlog: state => {
    return state.commentsByBlog;
  }
};

const mutations = {
  // showAllComments: (state, payload) => {
  //     state.comments = payload;
  // },
  createCommentBlog: (state, payload) => {
    state.commentsByBlog.unshift(payload);
  },
  showComment: (state, payload) => {
    state.comment = payload;
  },
  commentsByBlog: (state, payload) => {
    const data = payload.reverse();
    state.commentsByBlog = data;
  },
  deleteCommentBlog: (state, payload) => {
    state.commentsByBlog.splice(payload, 1);
  }
};

const actions = {
  // showAllComments: async({
  //     commit
  // }, payload) => {
  //     await commit("showAllComments", payload);
  // },
  createCommentBlog: async ({ commit }, payload) => {
    await commit("createCommentBlog", payload);
  },
  showComment: async ({ commit }, payload) => {
    await commit("showComment", payload);
  },
  commentsByBlog: async ({ commit }, payload) => {
    await commit("commentsByBlog", payload);
  },
  deleteCommentBlog: async ({ commit }, payload) => {
    await commit("deleteCommentBlog", payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
