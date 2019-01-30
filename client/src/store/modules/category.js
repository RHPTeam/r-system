const state = {
    categories: [],
    category: {}
};

const getters = {
    categories: state => {
        return state.categories;
    },
    category: state => {
        return state.category;
    }
};

const mutations = {
    index: (state, payload) => {
        state.categories = payload;
    },
    create: (state, payload) => {
        state.categories = payload;
    },
    showCategory: (state, payload) => {
        state.category = payload;
    }
};

const actions = {
    index: async({ commit }, payload) => {
        await commit("index", payload);
    },
    createCategory: async({ commit }, payload) => {
        await commit("createCategory", payload);
    },
    showCategory: async({ commit }, payload) => {
        await commit("showCategory", payload);
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};