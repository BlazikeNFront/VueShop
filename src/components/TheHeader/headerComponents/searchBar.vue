<template>
  <div class="searchBarContainer">
    <form>
      <drop-down
        class="searchBarContainer__dropdown"
        defaultCategory="Search In"
        :listOfCategories="['Rods', 'Reels', 'Lures', 'Lines', 'Any']"
        @categoryChange="addCategoryToSearchQuery"
      ></drop-down>
      <div class="searchBarInput" @click.prevent="submitSearchBarForm">
        <input
          type="text"
          id="searchBarInput"
          name="searchBarInputArea"
          :placeholder="placeholder"
          v-model.trim="searBarInputValue"
        />
        <button type="submit">
          <font-awesome-icon
            :icon="['fa', 'search']"
            class="searchBarContainer__submitIcon"
          ></font-awesome-icon>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import DropDown from "../../common/dropDown.vue";

export default {
  components: {
    DropDown,
  },

  data() {
    return {
      searBarInputValue: "",
      selectedCategory: null,
    };
  },
  computed: {
    placeholder() {
      if (this.selectedCategory) {
        return `Search in ${this.selectedCategory}`;
      } else {
        return "Search products";
      }
    },
  },
  methods: {
    addCategoryToSearchQuery(e) {
      if (e === "Any") {
        this.selectedCategory = null;
        return;
      }
      this.selectedCategory = e;
    },
    submitSearchBarForm() {
      if (this.searBarInputValue.length === 0) {
        return;
      }
      let query = this.searBarInputValue;

      if (this.selectedCategory !== null) {
        query = query + ` ${this.selectedCategory}`;
      }

      const payload = {
        query,
      };
      this.$store.dispatch("UserSearch/handleSearchRequest", payload);

      this.$router.push({
        name: "search-for-product",
        params: { searchQuery: query },
        query: { page: 1 },
      });
    },
  },
};
</script>
<style lang='scss'>
.searchBarContainer {
  form {
    @include flexLayout;
  }
}
.searchBarInput {
  @include flexLayout;
  margin-left: 1rem;
  width: 15rem;
  border-bottom: 1px solid grey;

  input {
    width: 11rem;
    font-size: 1.2rem;
    border: none;
    text-align: center;
    font-family: inherit;
    font-weight: 600;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0 30px #f5e3e6 inset;
    box-shadow: 0 0 0 30px #f5e3e6 inset;
  }
  button {
    @include buttonTransparent;
    font-size: 2rem;
    svg {
      color: $main-color;
    }
  }
}
.searchBarContainer__dropdown {
  position: relative;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #2a2a72;
  z-index: 1000;
  .customSelect {
    @include flexLayout;
    position: relative;
    height: 3rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    z-index: 1200;
    p {
      display: none;
    }
    svg {
      position: absolute;
      left: 0.5rem;
      width: 2rem;
    }
    .backdrop {
      z-index: $headerDropDown;
    }
  }
  .customSelect__selectOption {
    @include greenToBlueGradient;
    position: absolute;
    top: 3.5rem;
    left: -5.5rem;
    width: 14rem;
    border-radius: 10px;
    border: 2px solid $main-color;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 3px;
    z-index: $headerDropDown;

    li {
      position: relative;
      padding: 1rem;
      cursor: pointer;
      &::after {
        content: "";
        display: block;
        bottom: 1px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        width: 70%;
        height: 0.1rem;
        background-color: white;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        font-weight: 600;
        &::after {
          background-color: $light-Black;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .searchBarContainer__dropdown {
    width: 10rem;
    border-radius: 10px 10px 0 0;
    .customSelect {
      width: 100%;
      p {
        display: block;
        color: white;
        font-weight: 600;
        font-size: 1.1rem;
        letter-spacing: 1px;
      }
      svg {
        left: 8rem;
        width: 1.5rem;
      }
    }
    .customSelect__selectOption {
      position: absolute;
      z-index: 1200;
      width: 10rem;
      top: 3rem;
      left: 0;
      border-radius: 0 0 10px 10px;
      font-size: 1.2rem;
      overflow: hidden;
      cursor: pointer;
      background-image: none;
      background: rgb(42, 42, 114);
      background: linear-gradient(
        180deg,
        rgba(42, 42, 114, 1) 0%,
        rgba(9, 9, 121, 1) 11%,
        rgba(11, 211, 211, 1) 100%
      );

      li {
        @include mainFontBold;
        padding: 0.5rem;
        border-radius: 5px;
        position: relative;
        &::after {
          content: "";
          display: block;
          bottom: 1px;
          left: 50%;
          transform: translate(-50%);
          position: absolute;
          width: 70%;
          height: 0.1rem;
          background-color: white;
        }
        &:hover {
          color: #2c3e50;
          background-color: rgba(255, 255, 255, 0.2);
          &::after {
            background-color: #2c3e50;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .searchBarContainer {
    width: 33rem;
  }
  .searchBarContainer__dropdown {
    width: 13rem;

    .customSelect {
      svg {
        left: 9.5rem;
      }
    }
    .customSelect__selectOption {
      width: 13rem;
    }
  }

  .searchBarInput {
    width: 17rem;

    input {
      width: 14rem;
      font-size: 1.3rem;
    }
  }
}
</style>
