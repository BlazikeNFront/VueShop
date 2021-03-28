<template>
  <div class="customSelectContainer">
    <div class="customSelect" @click="selectCategoryAction">
      <h4 class="customSelect__selected">
        {{ selectedCategory || this.defaultCategory }}
      </h4>
      <div class="dropDownArrow"></div>

      <div class="customSelect__selectOption" v-if="selectCategory">
        <ul class="customSelect_list">
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
  emits: ["categoryChange"],
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
      this.$emit("categoryChange", category);
    },
  },
};
</script>
<style lang='scss'>
.customSelect {
  position: relative;
  padding: 1rem;
  @include mainBorder;
  font-size: $font-bg;
  cursor: pointer;
  width: 15rem;
  @include flexLayout;
}

.dropDownArrow {
  width: 2rem;
  height: 2rem;
  background-color: $primiary-color;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("../../../assets/icons/dropdownArrow.svg");
}
.customSelect__selected {
  color: $primiary-color;
}
.customSelect__selectOption {
  background-color: black;
  position: absolute;
  z-index: 200;
  width: 100%;
  top: 100%;
  left: 0%;
  border-radius: 0 0 5px 5px;

  li {
    padding: 0.5rem;
    &:hover {
      color: $primiary-color;
    }
  }
}
</style>