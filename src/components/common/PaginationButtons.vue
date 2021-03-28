<template>
  <div>
    <div class="paginationButtons">
      <button
        @click="this.$emit('previousPageClick')"
        class="pagination__pageChangersButtons"
      >
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="paginationButtons__previousButton"
        ></font-awesome-icon>
      </button>
      <div class="paginationButtons__pages">
        <hexagonal-shape
          :color="'orange' || this.backgroundOfHexagon"
          v-for="index in numberOfPages"
          :key="index"
          @click="this.$emit('pageChange', index)"
          class="paginationButtons__hexagonShapes"
        >
          <button class="paginationButtons__hexagonButtons">
            {{ index }}
          </button>
        </hexagonal-shape>
      </div>
      <button
        @click="this.$emit('nextPageClick')"
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
  props: ["numberOfPages", "backgroundOfHexagon"],
  emits: ["pageChange", "previousPageClick", "nextPageClick"],
  components: {
    HexagonalShape,
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
    color: white;
  }
}
.paginationButtons__hexagonButtons {
  position: relative;
  color: black;
  padding: 0;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  z-index: 1;

  @include mainFontBold;
}
.paginationButtons__pages {
  flex-wrap: wrap;
  @include flexLayout;
}
.paginationButtons__hexagonShapes {
  margin: 0 1rem;

  transform: scale(1.4);
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.6);
  }
}
.paginationButtons__previousButton {
  transform: rotate(180deg);
}
</style>