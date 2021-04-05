<template>
  <header class="header">
    <promo-bar class="header__promoBar"></promo-bar>
    <div class="header__elements">
      <shop-logo class="header__logo"></shop-logo>
      <search-bar></search-bar>
      <button @click="handleUserButton">
        <font-awesome-icon :icon="['fa', 'user']"></font-awesome-icon>
      </button>
      <user-cart></user-cart>

      <router-link class="TESTING__ADMIN_CMS" to="/admin">ADMIN</router-link>
    </div>
  </header>
</template>
<script>
import PromoBar from "./headerComponents/promoBar.vue";
import ShopLogo from "../common/shopLogo.vue";
import SearchBar from "./headerComponents/searchBar.vue";

import UserCart from "./headerComponents/userCart.vue";
export default {
  components: {
    PromoBar,
    ShopLogo,
    SearchBar,
    UserCart,
  },

  methods: {
    handleUserButton() {
      this.$router.push({ name: "user-login" });
    },
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
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
    @include buttonTransparent;
    width: 3rem;
    height: 3rem;
    font-size: $font-bg;
    svg {
      color: black;
    }
  }
}
.header__elements {
  @include containerLaptop;
  @include flexLayout;
  height: 7rem;
  position: relative;
}
.header__logo {
  width: 25rem;
  height: 7rem;
  cursor: pointer;
}
.header__promoBar {
  height: 4rem;
  background-color: #2d2d2d;
  color: white;
}
</style>