<template>
  <header>
    <logo></logo>
    <search-bar></search-bar>
    <div class="cart"></div>
  </header>
</template>
<script>
import Logo from "./headerComponents/logo.vue";
import SearchBar from "./headerComponents/searchBar.vue";

export default {
  components: {
    Logo,
    SearchBar,
  },
};
</script>
<style lang='scss'>
header {
  height: 10rem;
  @include flexLayout;
  justify-content: space-around;
}
</style>