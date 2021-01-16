<template>
  <div class="sliderContainer">
    <ul>
      <li class="sliderImg">
        <img alt="tiger trout photo" src="../../../assets/sliderImg1.jpg" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.sliderContainer {
  width: 100%;

  .sliderImg {
    position: relative;
    width: 100%;
    height: 70rem;
    img {
      width: 100%;
      height: inherit;
      opacity: 0.2;
    }
  }
}
</style>