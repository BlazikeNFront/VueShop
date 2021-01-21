<template>
  <div class="searchBarContainer">
    <h2>Our statement on <span>COVID-19</span></h2>
    <form @click.prevent="submitSearchBarForm">
      <drop-down
        defaultCategory="Categories"
        :listOfCategories="['Rods', 'Reels', 'Lures', 'Lines', 'Others']"
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
      searBarInputValue: null,
    };
  },
  methods: {
    submitSearchBarForm() {
      console.log("searchBar SUBMIT");
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
      background-color: none;
      color: white;
      height: 90%;
    }
    button {
      width: 3rem;
      background-color: black;
      border: none;
      background-repeat: no-repeat;
      height: 100%;
      background-image: url(/img/searchIcon.a575f39d.png);
      background-size: contain;
    }
  }
}
</style>
