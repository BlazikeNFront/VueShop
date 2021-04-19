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
          placeholder="Search products"
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
  width: 40%;
  form {
    @include flexLayout;
    width: 30rem;
  }
  .searchBarInput {
    @include flexLayout;
    margin-left: 2rem;
    border-bottom: 1px solid grey;
    height: 3rem;

    input {
      border: none;
      text-align: center;
      height: 90%;
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
      border: none;
      width: 3.5rem;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background: transparent;
      cursor: pointer;
    }
  }
  .searchBarContainer__dropdown {
    position: relative;
    color: white;
    border-radius: 25px 25px 0 0;
    background-color: rgb(62, 175, 124);
    .customSelect {
      width: 14rem;
      padding: 1rem 1.5rem;
    }
  }
  .searchBarContainer__submitIcon {
    width: 70%;
    height: 100%;
    color: gray;
    &:hover {
      color: black;
    }
  }
}
</style>
