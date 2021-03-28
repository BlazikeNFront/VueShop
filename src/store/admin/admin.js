export default {
  namespaced: true,
  state() {
    return {
      showOrderDetails: false,
      numberOfPages: null,
      orders: null,
    };
  },
  mutations: {
    closeShowOrderDetails(state) {
      state.showOrderDetails = false;
    },
    openShowOrderDetails(state) {
      state.showOrderDetails = true;
    },
    setOrdersData(state, payload) {
      state.orders = payload;
    },
    setNumberOfPages(state, payload) {
      state.numberOfPages = payload;
    },
  },

  actions: {
    closeShowOrderDetails(context) {
      context.commit("closeShowOrderDetails");
    },
    openShowOrderDetails(context) {
      context.commit("openShowOrderDetails");
    },
    async fetchOrders(context, payload) {
      try {
        const { token, page } = payload;

        const rawData = await fetch(
          `http://localhost:3000/admin/getOrders?page=${page}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (rawData.status !== 200) {
          throw new Error("Couldnt fetched data from server");
        }
        const ordersData = await rawData.json();

        const { data, totalItems } = ordersData;
        const numberOfPages = Math.ceil(totalItems / 10);
        context.commit("setOrdersData", data);
        context.commit("setNumberOfPages", numberOfPages);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    showOrderDetails(state) {
      return state.showOrderDetails;
    },
    getNumberOfPages(state) {
      return state.numberOfPages;
    },
    getOrders(state) {
      return state.orders;
    },
  },
};
