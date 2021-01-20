<template>
  <div class="logo" @click="redirectToMainPage"></div>
</template>
<script>
export default {
  methods: {
    redirectToMainPage() {
      console.log("redirect with vue-router");
    },
  },
};
</script>
<style lang='scss'>
</style>
