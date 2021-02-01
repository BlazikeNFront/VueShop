<template>
  <div class="sliderContainer">
    <ul>
      <li>
        <div class="sliderItem__categoryOverlay">
          <p>RODS</p>
        </div>
        <img
          class="sliderItem_visible"
          src="../../../assets/rodCategoryImage.jpeg"
          alt="picture of fishing rod"
        />
      </li>
      <li>
        <div>
          <p>REELS</p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/nowe/imageForReels.jpeg"
          alt="picture of fishing reel"
        />
      </li>
      <li>
        <div>
          <p>LURES</p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/luresCategoryImage.png"
          alt="picture of fishing reel"
        />
      </li>
      <li>
        <div>
          <p>LINES</p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/lineCategoryImage.jpeg"
          alt="picture of fishing reel"
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.sliderContainer {
  width: 100%;
  height: 40rem;
  ul {
    @include flexLayout;
    justify-content: initial;
    height: 100%;
  }

  li {
    position: relative;
    height: inherit;
    width: 25%;
    overflow: hidden;
    cursor: pointer;
    transition: all 1s ease;
    &:hover {
      width: 70%;
      img {
        opacity: 1;
      }

      p {
        top: 10%;
        background-color: black;
        padding: 0.5rem;
        @include setBorders(1px, 5px);
      }
    }
    p {
      @include centerAbsolute;
      font-size: $font-bg;
      transition: all 1s ease;
    }

    img {
      height: inherit;
      opacity: 0.1;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>