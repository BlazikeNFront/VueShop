<template>
  <header class="header">
    <promo-bar class="header__promoBar"></promo-bar>
    <div class="header__elements">
      <shop-logo class="header__logo"></shop-logo>
      <search-bar></search-bar>
      <card-container></card-container>

      <button @click="handleLoginButton" v-if="!loginForm">
        {{ buttonMsg }}
      </button>

      <router-link class="TESTING__ADMIN_CMS" to="/admin">ADMIN</router-link>
      <user-login
        v-if="loginForm && !token"
        @hideLoginForm="hideForm"
      ></user-login>
    </div>
  </header>
</template>
<script>
import PromoBar from "./headerComponents/promoBar.vue";
import ShopLogo from "../common/shopLogo.vue";
import SearchBar from "./headerComponents/searchBar.vue";
import CardContainer from "./headerComponents/cardContainer.vue";
import UserLogin from "../userAuth/userLogin.vue";

export default {
  components: {
    PromoBar,
    ShopLogo,
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
      console.log(this.token);
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
  flex-direction: column;

  button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    background: none;
    text-decoration: none;

    font-size: $font-bg;
  }
}
.header__elements {
  @include containerLaptop;
  @include flexLayout;
  height: 7rem;
  position: relative;
}
.header__logo {
  overflow: hidden;
  height: 7rem;
  & img {
    transform: translate(0, -1.5rem);
  }
}
.header__promoBar {
  height: 3rem;
  background-color: #2d2d2d;
  color: white;
}
</style>