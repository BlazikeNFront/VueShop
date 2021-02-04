<template>
  <header>
    <logo></logo>
    <search-bar></search-bar>
    <card-container></card-container>

    <button @click="toggleLoginForm" v-if="!loginForm">Login</button>
    <user-login v-else @hideLoginForm="toggleLoginForm"></user-login>
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
  emits: {},
  data() {
    return {
      loginForm: false,
    };
  },
  methods: {
    toggleLoginForm() {
      this.loginForm = !this.loginForm;
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