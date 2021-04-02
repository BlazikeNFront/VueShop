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
  width: 100%;
  height: 100%;
}
</style>
