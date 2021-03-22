export default {
  namespaced: true,
  state() {
    return {
      showOrderDetails: false,
    };
  },
  mutations: {
    closeShowOrderDetails(state) {
      state.showOrderDetails = false;
    },
    openShowOrderDetails(state) {
      state.showOrderDetails = true;
    },
  },

  actions: {
    closeShowOrderDetails(context) {
      context.commit("closeShowOrderDetails");
    },
    openShowOrderDetails(context) {
      context.commit("openShowOrderDetails");
    },
  },
  getters: {
    showOrderDetails(state) {
      return state.showOrderDetails;
    },
  },
};
