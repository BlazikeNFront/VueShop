<template>
  <main>
    <!-- <main-information-box></main-information-box>
    <main-slider></main-slider> -->
    <search-result></search-result>
  </main>
</template>
<script>
/* import MainInformationBox from "./mainInformationBox/mainInformationBox.vue";
import MainSlider from "./slider/mainSlider.vue"; */
import SearchResult from "./searchResult/searchResult.vue";
/* import WeekOfferBox from "./currentOffersBox/currentOfferBox.vue"; */
export default {
  components: {
    /*  MainInformationBox,
    MainSlider, */
    SearchResult,
    /*     WeekOfferBox, */
  },
};
</script>
<style lang='scss'>
main {
  margin: 2rem auto;
  width: 100%;
  overflow: hidden;
  color: $primiary-color;
  @include setBorders(3px, 5px);
}
</style>
