export default {
  namespaced: true,
  state() {
    return {
      searchResultData: null,
    };
  },
  mutations: {
    setSearchResult(state, payload) {
      state.searchResultData = payload;
    },
  },
  actions: {
    async handleSearchRequest(context, query) {
      try {
        const rawData = await fetch(
          `http://localhost:3000/searchProducts/:${query}`
        );
        const payload = await rawData.json();
        if (rawData.status !== 200) {
          throw new Error("Server side error");
        }
        context.commit("setSearchResult", payload);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    getSearchResultData(state) {
      return state.searchResultData;
    },
  },
};
