<template>
  <div class="sliderContainer">
    <p>Discover</p>
    <h2>Latest Gear</h2>
    <ul>
      <li>
        <p class="sliderContainer__categoryPara">RODS</p>
        <img
          class="sliderItem_visible"
          src="../../../assets/rodCategoryImage.jpg"
          alt="picture of fishing rod"
        />
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
      </li>
      <li>
        <div>
          <p class="sliderContainer__categoryPara">REELS</p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/nowe/imageForReels.jpeg"
          alt="picture of fishing reel"
        />
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
      </li>
      <li>
        <div>
          <p class="sliderContainer__categoryPara">LURES</p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/luresCategoryImage.png"
          alt="picture of fishing reel"
        />
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
      </li>
      <li>
        <div>
          <p class="sliderContainer__categoryPara">LINES</p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/lineCategoryImage.jpeg"
          alt="picture of fishing reel"
        />
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
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
  height: 100%;
  font-family: $secondaryFont;

  p {
    text-align: right;
    font-size: $font-md;
  }
  h2 {
    text-align: right;
    color: black;
    font-size: 5rem;
    font-family: $secondaryFont;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  ul {
    @include flexLayout;
    justify-content: initial;
    height: 40rem;
    border-radius: 30px;
    overflow: hidden;
  }
  li {
    height: inherit;
    width: 25%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 1s ease;
    background-color: black;
    &:hover {
      width: 70%;
      & img {
        opacity: 0.4;
      }
      p {
        transform: translate(-50rem, 0);
      }
    }

    img {
      height: inherit;
      background-color: black;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.sliderContainer__categoryPara {
  display: block;
  position: absolute;
  bottom: 2rem;
  margin-left: 50%;
  transform: translate(-50%);
  z-index: 100;
  font-family: $secondaryFont;
  font-weight: 800;
  color: white;
  font-size: 3rem;
  transition: all 0.6s;
}

.sliderContainer__link {
  display: block;
  @include centerAbsolute;
  text-decoration: none;

  // transform: translate(-50rem, 0);
  z-index: 100;
  font-family: $secondaryFont;
  font-weight: 800;
  color: white;
  font-size: 3rem;
  transition: all 0.6s;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 0rem;
    height: 0.2rem;
    background-color: #292d2d;
    transition: 0.2s all ease-in-out;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -6rem;
    display: block;
    width: 4rem;
    height: 0.2rem;
    background-color: white;
    transition: 0.2s all ease-in-out;
  }
  /*   &:hover {
    color: #0bd3d3;
    &::before {
      width: 4rem;
      background-color: #0bd3d3;
    }
    &::after {
      width: 0rem;
      background-color: #0bd3d3;
    }
  } */
}
</style>