export default {
  namespaced: true,
  state() {
    return {
      token: null,
    };
  },
  mutations: {
    handleLogin(state, payload) {
      state.token = payload.token;
    },
    logout(state) {
      state.token = null;
    },
  },
  actions: {
    async handleLogin(context, payload) {
      try {
        const userData = {
          email: payload.userName,
          password: payload.password,
        };
        const data = await fetch("http://localhost:3000/userAuth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await JSON.stringify(userData),
        });

        const dataJSON = await data.json();
        if (data.status !== 200) {
          return dataJSON.message;
        } else {
          const payload = {
            token: dataJSON,
          };

          context.commit("handleLogin", payload);
        }
      } catch (err) {
        console.log(err);
      }
    },
    logout(context) {
      context.commit("logout");
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
};
