<template>
  <div class="sliderContainer">
    <h2>Latest Gear</h2>
    <ul>
      <li>
        <p class="sliderContainer__para sliderContainer__para--normal">RODS</p>
        <img
          class="sliderItem_visible"
          src="../../../assets/rodCategoryImage.jpg"
          alt="picture of fishing rod"
        />
        <p class="sliderContainer__para sliderContainer__para--hover">RODS</p>
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
      </li>
      <li>
        <div>
          <p class="sliderContainer__para sliderContainer__para--normal">
            REELS
          </p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/reelsCategoryImage.jpg"
          alt="picture of fishing reel"
        />
        <p class="sliderContainer__para sliderContainer__para--hover">REELS</p>
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
      </li>
      <li>
        <div>
          <p class="sliderContainer__para sliderContainer__para--normal">
            LURES
          </p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/luresCategoryImage.jpg"
          alt="picture of fishing reel"
        />
        <p class="sliderContainer__para sliderContainer__para--hover">LURES</p>
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
      </li>
      <li>
        <div>
          <p class="sliderContainer__para sliderContainer__para--normal">
            LINES
          </p>
        </div>
        <img
          class="sliderItem1"
          src="../../../assets/lineCategoryImage.jpg"
          alt="picture of fishing reel"
        />
        <p class="sliderContainer__para sliderContainer__para--hover">LINES</p>
        <router-link class="sliderContainer__link" :to="'/'"
          >Discover</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style lang='scss'>
.sliderContainer {
  width: 100%;
  height: 100%;
  font-family: $secondaryFont;

  h2 {
    position: relative;
    text-align: right;
    color: black;
    font-size: 5rem;
    font-family: $secondaryFont;
    font-weight: 800;
    margin-bottom: 2rem;
    &::before {
      position: absolute;
      top: -2rem;
      right: 0;
      content: "Discover";
      font-size: 2rem;
      color: gray;
    }
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
      .sliderContainer__para--normal {
        transform: translate(-50rem, -50%);
      }
      .sliderContainer__para--hover {
        transform: translate(-50%, -50%);
      }
      a {
        transform: translate(-50%, -50%);
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
.sliderContainer__para {
  display: block;
  position: absolute;
  font-size: 3rem;

  z-index: 100;
  font-family: $secondaryFont;
  font-weight: 800;
  color: white;
  transition: all 0.6s;
}
.sliderContainer__para--normal {
  bottom: 2rem;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
.sliderContainer__para--hover {
  top: 5rem;
  margin-left: 50%;

  transform: translate(-50rem, -50%);
}
.sliderContainer__link {
  display: block;
  @include centerAbsolute;
  text-decoration: none;
  width: 23rem;
  transform: translate(-50rem, -50%);
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
    left: -1rem;
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
    right: -1rem;
    display: block;
    width: 4rem;
    height: 0.2rem;
    background-color: white;
    transition: 0.2s all ease-in-out;
  }
  &:hover {
    color: #0bd3d3;
    transform: translate(1rem, -50%);
    &::before {
      width: 4rem;
      background-color: #0bd3d3;
    }
    &::after {
      width: 0rem;
      background-color: #0bd3d3;
    }
  }
}
</style>