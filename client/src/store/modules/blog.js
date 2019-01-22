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
    index: (state, payload) => {
        state.blogs = payload;
    },
    create: (state, payload) => {
        state.blogsByUser.push(payload);
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
    }
};

const actions = {
    index: async({ commit }, payload) => {
        await commit("index", payload);
    },
    create: async({ commit }, payload) => {
        await commit("create", payload);
    },
    showBlog: async({
        commit
    }, payload) => {
        await commit("showBlog", payload);
    },
    showByUser: async({ commit }, payload) => {
        await commit("showByUser", payload);
    },
    deleteBlog: async({ commit }, payload) => {
        await commit("deleteBlog", payload);
    },
    formChange: async({ commit }, payload) => {
        await commit("formChange", payload);
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};