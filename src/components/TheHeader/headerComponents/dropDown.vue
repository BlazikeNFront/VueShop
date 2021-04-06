<template>
  <div>
    <back-drop
      @click="selectCategoryAction"
      v-if="selectCategory"
      blackOpacity="0"
    ></back-drop>
    <div
      class="customSelect"
      :class="{ hideBorderBotton: selectCategory }"
      @click="selectCategoryAction"
    >
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

  padding: 0.5rem;
  font-size: $font-md;
  cursor: pointer;
  width: 11rem;
  z-index: 1200;

  &:hover {
    color: $primary-color;
    svg {
      color: $primary-color;
    }
  }
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
  position: absolute;
  z-index: 1200;
  width: 11rem;
  top: 3.5rem;
  background-color: White;
  border-radius: 0 0 5px 5px;
  font-size: 1.2rem;
  overflow: hidden;
  cursor: pointer;

  border-top: none;

  li {
    padding: 0.5rem;
    @include mainFontBold;
    &:hover {
      color: $primiary-color;
    }
  }
}

.dropDown-enter-active,
.dropDown-leave-active {
  transition: all 0.2s linear;
}
.dropDown-enter-from,
.dropDown-leave-to {
  height: 0rem;
}
.dropDown-enter-to,
.dropDown-leave-from {
  height: 12rem;
}
</style>