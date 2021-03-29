<template>
  <div>
    <img
      class="logo"
      src="../../assets/companyLogo.png"
      alt="Taimen Company Logo"
      @click="redirectToMainPage"
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
.logo {
  width: 10rem;
  height: 10rem;
}
</style>
