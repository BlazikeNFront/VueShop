<template>
  <main>
    <main-slider></main-slider>
    <div class="commonCategories">
      <ul>
        <li>Rods</li>
        <li>Reels</li>
        <li>Lures</li>
        <li>Lines</li>
      </ul>
    </div>
  </main>
</template>
<script>
import MainSlider from "./slider/slider.vue";

export default {
  components: {
    MainSlider,
  },
};
</script>
<style lang='scss' scoped>
main {
  margin: 0 auto;
  width: 100%;
  overflow: hidden;

  color: $primiary-color;
}
</style>