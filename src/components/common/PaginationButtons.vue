<template>
  <div>
    <div class="paginationButtons">
      <button
        @click="this.$emit('previousClick')"
        class="pagination__pageChangersButtons"
      >
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="paginationButtons__previousButton"
        ></font-awesome-icon>
      </button>
      <div class="paginationButtons__pages">
        <hexagonal-shape
          :color="this.colorOfHexagonButtons"
          v-for="index in numberOfPages"
          :key="index"
          @click="pageChange"
          class="paginationButtons__hexagonShapes"
        >
          <button
            class="paginationButtons__hexagonButtons"
            :style="'background-color:' + this.colorOfHexagonButtons"
          >
            {{ index }}
          </button>
        </hexagonal-shape>
      </div>
      <button
        @click="this.$emit('nextClick')"
        class="pagination__pageChangersButtons"
      >
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="paginationButtons__nextButton"
        ></font-awesome-icon>
      </button>
    </div>
  </div>
</template>
<script>
import HexagonalShape from "./HexagonalShape.vue";
export default {
  props: ["numberOfPages"],
  emits: ["pageChange"],
  components: {
    HexagonalShape,
  },
  data() {
    return {
      colorOfHexagonButtons: "orange",
    };
  },
  methods: {
    pageChange(e) {
      this.$emit("pageChange", e.toElement.innerText);
    },
  },
};
</script>
<style lang="scss">
.paginationButtons {
  margin: 0 2rem;
  margin: 4rem auto;

  @include flexLayout;
  .pagination__pageChangersButtons {
    @include button;
    color: orange;
    font-size: $font-md;
    padding: 1rem;
  }
  button:hover {
    color: $primiary-color;
    background-color: white;
  }
}
.paginationButtons__hexagonButtons {
  color: white;
  padding: 0;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: none;
  @include mainFontBold;
}
.paginationButtons__pages {
  flex-wrap: wrap;
  @include flexLayout;
}
.paginationButtons__hexagonShapes {
  margin: 2rem 1rem;
  transition: all 0.2s;
}
.paginationButtons__previousButton {
  transform: rotate(180deg);
}
</style>