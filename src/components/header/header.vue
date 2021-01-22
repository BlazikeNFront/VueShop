<template>
  <header>
    <logo></logo>
    <search-bar></search-bar>
    <card-container></card-container>
  </header>
</template>
<script>
import Logo from "./headerComponents/logo.vue";
import SearchBar from "./headerComponents/searchBar.vue";
import CardContainer from "./headerComponents/cardContainer.vue";

export default {
  components: {
    Logo,
    SearchBar,
    CardContainer,
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