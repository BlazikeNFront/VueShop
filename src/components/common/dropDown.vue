<template>
  <div>
    <back-drop
      @click="selectCategoryAction"
      v-if="selectCategory"
      blackOpacity="0"
    ></back-drop>
    <div
      class="customSelect"
      :class="{ hideBorderRadius: selectCategory }"
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
          v-for="(category, index) in this.listOfCategories"
          :key="category"
          @click="changeSelectedCategory(category, index)"
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
      indexOfSelected: null,
    };
  },
  methods: {
    selectCategoryAction() {
      this.selectCategory = !this.selectCategory;
    },
    changeSelectedCategory(category, index) {
      this.selectedCategory = category;
      this.indexOfSelected = index;
      this.selectCategoryAction();
      this.$emit("categoryChange", category, index);
    },
  },
};
</script>
<style lang='scss'>
.customSelect {
  @include flexLayout;
  position: relative;
  padding: 1rem 1.5rem;
  font-size: $font-md;
  cursor: pointer;
  width: 14rem;
  z-index: 1200;

  &:hover {
    color: #2c3e50;
    svg {
      color: #2c3e50;
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
    color: white;
    font-size: 1.5rem;
    transform: rotate(90deg);
  }
}

.customSelect__selectOption {
  position: absolute;
  z-index: 1200;
  width: 14rem;
  top: 3.2rem;
  left: 0;
  border-radius: 0 0 5px 5px;
  font-size: 1.2rem;
  overflow: hidden;
  cursor: pointer;
  background-color: rgb(62, 175, 124);

  li {
    padding: 0.5rem;
    @include mainFontBold;
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
      background-color: rgba(0, 0, 0, 0.2);
      &::after {
        background-color: #2c3e50;
      }
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