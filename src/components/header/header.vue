<template>
  <header>
    <logo></logo>
    <search-bar></search-bar>
    <card-container></card-container>

    <button @click="handleLoginButton" v-if="!loginForm">
      {{ buttonMsg }}
    </button>
    <user-login
      v-if="loginForm && !token"
      @hideLoginForm="hideForm"
    ></user-login>
  </header>
</template>
<script>
import Logo from "./headerComponents/logo.vue";
import SearchBar from "./headerComponents/searchBar.vue";
import CardContainer from "./headerComponents/cardContainer.vue";
import UserLogin from "../userAuth/userLogin.vue";

export default {
  components: {
    Logo,
    SearchBar,
    CardContainer,
    UserLogin,
  },

  data() {
    return {
      loginForm: false,
    };
  },

  methods: {
    hideForm() {
      this.loginForm = false;
    },
    handleLoginButton() {
      if (this.token) {
        this.$store.dispatch("UserAuth/logout");
      } else {
        this.loginForm = true;
      }
    },
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
    },

    buttonMsg() {
      if (this.token) {
        return "Logout";
      } else {
        return "Login";
      }
    },
  },
};
</script>
<style lang='scss'>
header {
  height: 10rem;
  @include flexLayout;
  justify-content: space-around;
  button {
    border: 2px solid $primiary-color;
    border-radius: 5px;
    padding: 0.5rem;
    background: none;
    text-decoration: none;
    color: $primiary-color;
    font-size: $font-bg;
  }
}
</style>