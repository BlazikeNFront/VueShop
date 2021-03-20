export default {
  namespaced: true,
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addItemToCart(state, payload) {
      state.cart = payload;
      console.log(state.cart);
    },
    deleteItemFromCart(state, payload) {
      state.cart = payload;
    },
    resetCart(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    addItemtoCart(context, payload) {
      const id = payload._id;
      const newCart = [...context.state.cart];

      const productIndex = newCart.findIndex((product) => (product._id = id));

      if (productIndex < 0) {
        payload.quantity = 1;
        newCart.push(payload);
        context.commit("addItemToCart", newCart);
      } else {
        newCart[productIndex].quantity++;
      }
      context.dispatch("updateCartInDb");
    },

    deleteItemFromCart(context, payload) {
      const id = payload;
      const newCard = [...context.state.card];
      const productIndex = newCard.find((product) => (product.id = id));
      newCard[productIndex].quantity--;
      if (newCard[productIndex].quantity === 0) {
        newCard.splice(productIndex, 1);
      }
      context.commit("deleteItemFromCart", newCard);
      context.dispatch("updateCartInDb");
    },
    resetCart(context) {
      context.commit("resetCart", []);
      context.dispatch("updateCartInDb");
    },
    async updateCartInDb(context) {
      try {
        const cart = context.getters["getCart"];
        const token = context.rootGetters["UserAuth/getToken"];

        const payload = {
          cart,
          token,
        };
        const updateCartResult = await fetch(
          "http://localhost:3000/updateUserCart",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );
        console.log(updateCartResult);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
  },
};
