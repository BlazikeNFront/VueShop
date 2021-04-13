<template>
  <header class="header">
    <promo-bar class="header__promoBar"></promo-bar>
    <div class="header__elements">
      <shop-logo class="header__logo"></shop-logo>
      <search-bar></search-bar>
      <button @click="handleUserButton" class="header__button">
        <font-awesome-icon
          :class="{ loggedUserIcon: token }"
          :icon="['fa', 'user']"
        ></font-awesome-icon>
      </button>
      <user-cart></user-cart>

      <router-link class="header__adminLink" :to="{ name: 'admin-cms' }"
        >ADMIN</router-link
      >
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
      if (this.token) {
        this.$router.push({ name: "user-menu" });
      } else {
        this.$router.push({ name: "user-login" });
      }
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
.header {
  height: 10rem;
  @include flexLayout;
  flex-direction: column;
}
.header__button {
  @include buttonTransparent;
  width: 3rem;
  height: 3rem;
  font-size: $font-bg;
}
.header__adminLink {
  @include button;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  &:hover {
    color: black;
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
.loggedUserIcon {
  color: #108ba2;
}
</style>