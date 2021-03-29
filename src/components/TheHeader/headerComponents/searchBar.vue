<template>
  <div class="searchBarContainer">
    <form>
      <drop-down
        defaultCategory="Categories"
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
import DropDown from "../headerComponents/dropDown.vue";

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
  form {
    @include flexLayout;
    width: 30rem;
  }
  .searchBarInput {
    @include flexLayout;
    padding: 0.5rem;
    border: 1px solid black;
    height: 4rem;
    border-radius: 5px;

    input {
      border: none;
      text-align: center;
      height: 90%;
      &:focus {
        outline: none;
      }
    }
    button {
      width: 3.5rem;
      border: none;
      background-repeat: no-repeat;
      height: 100%;
      background-size: contain;
      cursor: pointer;
    }
  }
  .searchBarContainer__submitIcon {
    width: 100%;
    height: 100%;
    color: black;
    transform: translate(0, -0.3rem);
  }
}
</style>
