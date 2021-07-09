<template>
  <div>
    <back-drop
      @click="selectCategoryAction"
      v-if="selectCategory"
      blackOpacity="0"
    ></back-drop>
    <button
      class="customSelect"
      @click.prevent="selectCategoryAction"
      aria-label="open possible options panel"
    >
      <p class="customSelect__selected">
        {{ selectedCategory || this.defaultCategory }}
      </p>

      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        class="customSelect__buttonIcon"
      ></font-awesome-icon>
    </button>
    <transition
      name="dropDown"
      @enter="emitCurrentDropDownState"
      @after-leave="emitCurrentDropDownState"
    >
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

  emits: ["categoryChange", "selectCategory"],
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
    emitCurrentDropDownState() {
      this.$emit("selectCategory", this.selectCategory);
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
  cursor: pointer;
  background: none;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    color: white;
    transform: rotate(90deg);
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
  height: 20rem;
}
@media (min-width: 768px) {
  .dropDown-enter-active {
    transition: all 0.2s linear;
  }
  .dropDown-leave-active {
    transition: all 0.2s linear;
  }
}
</style>