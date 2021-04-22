<template>
  <div class="header__logo" @click="redirectToMainPage">
    <img
      class="header__fishImg"
      src="../../../assets/companyFishIcon.png"
      alt="Taimen Company Logo"
    />
    <img
      class="header__textImg"
      src="../../../assets/companyTextLogo.png"
      alt="Taimen Company Logo"
    />
  </div>
</template>
<script>
export default {
  methods: {
    redirectToMainPage() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang='scss'>
.header__logo {
  @include flexLayout;
  width: 9.5rem;
  height: 7rem;
  cursor: pointer;
}
.header__fishImg {
  width: 12rem;
  height: 100%;
}
.header__textImg {
  display: none;
  width: 14rem;
  height: 100%;
  @media (min-width: 768px) {
    display: block;
  }
}
</style>
