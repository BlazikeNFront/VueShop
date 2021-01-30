<template>
  <div class="mainPage">
    <search-result></search-result>
  </div>
</template>
<script>
import SearchResult from "../../components/mainPage/searchResult/searchResult.vue";

export default {
  components: {
    SearchResult,
  },
};
</script>
<style lang='scss'>
.mainPage {
  margin: 2rem auto;
  width: 100%;
  overflow: hidden;
  color: $primiary-color;
  @include setBorders(3px, 5px);
}
</style>
