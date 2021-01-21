<template>
  <div class="logo" @click="redirectToMainPage"></div>
</template>
<script>
export default {
  methods: {
    redirectToMainPage() {
      console.log("redirect via vue-router");
    },
  },
};
</script>
<style lang='scss'>
.logo {
  width: 10rem;
  height: 100%;
  background-image: url("../../../assets/companyLogo.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
