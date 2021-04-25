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
        <router-link class="sliderContainer__link" :to="rodsLink"
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
        <router-link class="sliderContainer__link" :to="reelsLink"
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
        <router-link class="sliderContainer__link" :to="luresLink"
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
        <router-link class="sliderContainer__link" :to="linesLink"
          >Discover</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    rodsLink() {
      return {
        name: "search-for-product",
        params: {
          searchQuery: "rod",
        },
        query: {
          page: 1,
        },
      };
    },
    reelsLink() {
      return {
        name: "search-for-product",
        params: {
          searchQuery: "reel",
        },
        query: {
          page: 1,
        },
      };
    },
    luresLink() {
      return {
        name: "search-for-product",
        params: {
          searchQuery: "lure",
        },
        query: {
          page: 1,
        },
      };
    },
    linesLink() {
      return {
        name: "search-for-product",
        params: {
          searchQuery: "line",
        },
        query: {
          page: 1,
        },
      };
    },
  },
};
</script>
<style lang='scss'>
.sliderContainer {
  width: 100%;
  height: 100%;
  font-family: $secondaryFont;

  h2 {
    position: relative;
    text-align: right;
    color: black;
    font-size: 4rem;
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
    flex-direction: column;
    height: 50rem;
    border-radius: 30px;
    overflow: hidden;
  }
  li {
    height: inherit;
    width: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 1s ease;
    background-color: black;
    img {
      opacity: 0.4;
    }
    &:hover {
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
  font-size: 5rem;
  z-index: 100;
  font-family: $secondaryFont;
  font-weight: 600;
  color: white;

  transition: all 0.6s;
}
.sliderContainer__para--normal {
  top: 50%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
.sliderContainer__para--hover {
  display: none;
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
  color: $light-blue;
  font-size: 5rem;
  letter-spacing: 2px;
  transition: all 0.6s;
  &::before {
    content: "";
    position: absolute;
    top: 58%;
    left: -4rem;
    display: block;
    width: 4rem;
    height: 0.2rem;
    background-color: $light-blue;
    transition: 0.2s all ease-in-out;
  }
  &::after {
    content: "";
    position: absolute;
    top: 58%;
    right: -4rem;
    display: block;
    width: 4rem;
    height: 0.2rem;
    background-color: $light-blue;
    transition: 0.2s all ease-in-out;
  }
  &:hover {
    color: $light-blue;
    transform: translate(1rem, -50%);
    &::before {
      width: 4rem;
      background-color: $light-blue;
    }
    &::after {
      width: 0rem;
      background-color: $light-blue;
    }
  }
}
@media (min-width: 768px) {
  .sliderContainer {
    ul {
      flex-direction: row;

      li {
        width: 25%;
        p {
          font-size: 4rem;
        }
        img {
          opacity: 0.4;
        }
        &:hover {
          width: 70%;
          img {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>