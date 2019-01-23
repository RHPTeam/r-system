const state = {
    blogs: [],
    blogsTrend: [],
    blogsLastest: [],
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
    blogsTrend: state => {
        return state.blogsTrend;
    },
    blogsLastest: state => {
        return state.blogsLastest;
    },
    blog: state => {
        return state.blog;
    },
    blogsByUser: state => {
        return state.blogsByUser;
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
    create: (state, payload) => {
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
    getAllBlog: async({ commit }, payload) => {
        await commit("getAllBlog", payload);
    },
    getBlogsTrend: async({ commit }, payload) => {
        await commit("getBlogsTrend", payload);
    },
    getBlogsLastest: async({ commit }, payload) => {
        await commit("getBlogsLastest", payload);
    },
    create: async({ commit }, payload) => {
        await commit("create", payload);
    },
    updateBlog: async({ commit }, payload) => {
        await commit("updateBlog", payload);
    },
    showBlog: async({ commit }, payload) => {
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
    },
    clearData: async({ commit }) => {
        await commit("clearData");
    },
    clearForm: async({ commit }) => {
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