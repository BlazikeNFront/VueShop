<template>
  <div class="searchBarContainer">
    <h2>Our statement on <span>COVID-19</span></h2>
    <form @click.prevent="submitSearchBarForm">
      <div class="customSelectContainer" @click="selectCategoryAction">
        <div class="customSelect">
          <h4>{{ selectedCategory || "Categories" }}</h4>
          <div class="dropDownArrow"></div>

          <div class="customSelect__selectOption" v-if="selectCategoryActio">
            <ul>
              <li>Rods</li>
              <li>Reels</li>
              <li>Lures</li>
              <li>Lines</li>
              <li>Others</li>
            </ul>
          </div>
        </div>
      </div>
      <input
        type="text"
        id="searchBarInput"
        name="searchBarInputArea"
        v-model.trim="searBarInputValue"
      />
      <button type="submit"></button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searBarInputValue: null,
      selectedCategory: null,
      selectCategoryActio: false,
    };
  },
  methods: {
    submitSearchBarForm() {
      /* console.log("searchBar SUBMIT"); */
    },
    selectCategoryAction() {
      this.selectCategoryActio = !this.selectCategoryActio;
      console.log("arrow");
    },
  },
};
</script>
<style lang='scss'>
.searchBarContainer {
  form {
    @include flexLayout;
    width: 35rem;

    .customSelectContainer {
      position: relative;
      padding: 1rem;
      background-color: $background-Select-gray;
      @include flexLayout;
      width: 11rem;

      .customSelect {
        width: 100%;
        @include flexLayout;
      }

      .dropDownArrow {
        width: 2rem;

        height: 1.5rem;
        z-index: 10000;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-image: url("../../../assets/icons/dropdownArrow.svg");
      }
      .customSelect__selectOption {
        background-color: $background-Select-gray;
        position: absolute;
        z-index: 200;
        width: 100%;
        top: 100%;
        left: 0%;
        border-radius: 0 0 5px 5px;

        li {
          padding: 0.5rem;
        }
      }
    }
  }
}
</style>
