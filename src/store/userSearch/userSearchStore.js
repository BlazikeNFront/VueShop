export default {
  namespaced: true,
  state() {
    return {
      searchResultData: null,
      query: null,
      productDetails: null,
    };
  },
  mutations: {
    setSearchResult(state, payload) {
      state.searchResultData = payload;
    },
    setQuery(state, payload) {
      state.query = payload;
    },
    setProductDetails(state, payload) {
      state.productDetails = payload;
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
    setQuery(context, payload) {
      context.commit(payload);
    },
    async setProductDetails(context, prodId) {
      try {
        const rawData = await fetch(
          `http://localhost:3000/getProductDetails/${prodId}`
        );
        const data = await rawData.json();
        context.commit("setProductDetails", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    getSearchResultData(state) {
      return state.searchResultData;
    },
    getQuery(state) {
      return state.query;
    },
    getProductDetails(state) {
      return state.productDetails;
    },
  },
};
