<template>
  <div class="customSelectContainer">
    <div class="customSelect" @click="selectCategoryAction">
      <h4>{{ selectedCategory || this.defaultCategory }}</h4>
      <div class="dropDownArrow"></div>

      <div class="customSelect__selectOption" v-if="selectCategory">
        <ul>
          <li
            v-for="category in this.listOfCategories"
            :key="category"
            @click="changeSelectedCategory(category)"
          >
            {{ category }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    defaultCategory: {
      required: true,
      type: String,
    },
    listOfCategories: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      selectedCategory: null,
      selectCategory: false,
    };
  },
  methods: {
    selectCategoryAction() {
      this.selectCategory = !this.selectCategory;
    },
    changeSelectedCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
<style lang='scss'>
.customSelect {
  position: relative;
  padding: 1rem;
  background-color: $background-Select-gray;
  @include flexLayout;
  width: 11rem;
  cursor: pointer;
  width: 9rem;
  @include flexLayout;
}

.dropDownArrow {
  width: 2rem;

  height: 1.5rem;

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
</style>