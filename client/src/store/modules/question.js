const state = {
  questions: [],
}
const  getters = {
  questions: state => {
    return state.questions
  }
}
const  mutations = {
  index: (state,payload) => {
    state.questions =payload
  }
}
const stations = {
  index: async ({commit},payload) => {
    await commit("index",payload)
  }
}
export default {
  state,
  getters,
  mutations,
  stations
}
