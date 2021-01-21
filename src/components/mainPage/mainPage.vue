<template>
  <main>
    <main-information-box></main-information-box>
    <main-slider></main-slider>
    <card-box></card-box>
  </main>
</template>
<script>
import MainInformationBox from "./mainInformationBox/mainInformationBox.vue";
import MainSlider from "./slider/mainSlider.vue";
export default {
  components: {
    MainInformationBox,
    MainSlider,
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