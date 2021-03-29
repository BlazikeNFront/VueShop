<template>
  <div>
    <div class="customSelect" @click="selectCategoryAction">
      <p class="customSelect__selected">
        {{ selectedCategory || this.defaultCategory }}
      </p>
      <button disabled>
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="customSelect__buttonIcon"
        ></font-awesome-icon>
      </button>
    </div>
    <!-- list is not nested becouse of stacking context and z-index(problem with transition) -->

    <!-- <div class="customSelect__selectOption" v-if="selectCategory"> -->
    <transition name="dropDown">
      <ul class="customSelect__selectOption" v-if="selectCategory">
        <li
          v-for="category in this.listOfCategories"
          :key="category"
          @click="changeSelectedCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </transition>
    <!-- </div> -->
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
      this.selectCategoryAction();
      this.$emit("categoryChange", category);
    },
  },
};
</script>
<style lang='scss'>
.customSelect {
  position: relative;
  @include flexLayout;
  background-color: White;
  padding: 0.5rem;
  font-size: $font-md;
  cursor: pointer;
  width: 11rem;
  z-index: 300;
  p {
    @include mainFontBold;
  }

  button {
    @include buttonTransparent;
    width: 3rem;
  }
  svg {
    width: 100%;
    height: 100%;
    color: black;
    font-size: 1.5rem;
    transform: rotate(90deg);
  }
}

.customSelect__selectOption {
  background-color: white;
  position: absolute;
  z-index: 200;
  width: 11rem;
  top: 5rem;
  left: 14rem;
  border-radius: 0 0 5px 5px;
  font-size: $font-sm;
  overflow: hidden;
  cursor: pointer;

  li {
    padding: 0.5rem;
    &:hover {
      color: $primiary-color;
    }
  }
}

.dropDown-enter-active,
.dropDown-leave-active {
  transition: all 0.2s;
}
.dropDown-enter-from,
.dropDown-leave-to {
  transform: translate(0, -4rem);
  height: 0rem;
}
.dropDown-enter-to,
.dropDown-leave-from {
  transform: translate(0, 1);
  height: 100%;
}
</style>