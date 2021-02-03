<template>
  <div class="searchBarContainer">
    <h2>Our statement on <span>COVID-19</span></h2>
    <form @click.prevent="submitSearchBarForm">
      <drop-down
        defaultCategory="Categories"
        :listOfCategories="['Rods', 'Reels', 'Lures', 'Lines', 'Any']"
      ></drop-down>
      <div class="searchBarInput">
        <input
          type="text"
          id="searchBarInput"
          name="searchBarInputArea"
          v-model.trim="searBarInputValue"
        />
        <button type="submit"></button>
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
    };
  },
  methods: {
    submitSearchBarForm() {
      if (this.searBarInputValue.length === 0) {
        return;
      }
      console.log("searchBar SUBMIT");
      this.$router.push("/search");
    },
  },
};
</script>
<style lang='scss'>
.searchBarContainer {
  form {
    @include flexLayout;
    width: 35rem;
  }
  .searchBarInput {
    padding: 0.5rem;
    border: 2px solid $primiary-color;
    height: 4rem;
    border-radius: 5px;
    @include flexLayout;

    input {
      background-color: black;
      border: none;
      color: white;
      text-align: center;
      height: 90%;
      &:focus {
        outline: none;
      }
    }
    button {
      width: 3rem;
      background-color: black;
      border: none;
      background-repeat: no-repeat;
      height: 100%;
      background-image: url("../../../assets/SearchBar/searchIcon.png");
      background-size: contain;
    }
  }
}
</style>
