<template>
  <div>
    <div class="paginationButtons">
      <button
        @click="previousPageClick()"
        class="pagination__pageChangersButtons"
      >
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="paginationButtons__previousButton"
        ></font-awesome-icon>
      </button>
      <div class="paginationButtons__pages" ref="buttons">
        <hexagonal-shape
          :color="'salmon' || this.backgroundOfHexagon"
          v-for="page in numberOfPages"
          :key="page"
          @click="pageClick($event, page)"
          class="paginationButtons__hexagonShapes"
        >
          <button
            class="paginationButtons__hexagonButtons"
            :class="{ activePage: currentPage == parseInt(page) }"
          >
            {{ page }}
          </button>
        </hexagonal-shape>
      </div>
      <button
        @click="nextPageClick($event)"
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
  props: ["numberOfPages", "backgroundOfHexagon", "currentPage"],
  emits: ["pageChange", "previousPageClick", "nextPageClick"],
  components: {
    HexagonalShape,
  },

  computed: {
    /*  currentPage() {
      return this.currentPage;
    }, */
  },

  methods: {
    previousPageClick() {
      if (parseInt(this.currentPage) === 1) {
        return;
      }
      const buttonToAnimate = this.$refs["buttons"].children[
        this.currentPage - 2
      ];
      buttonToAnimate.classList.remove("buttonClickAnimation");
      void buttonToAnimate.offsetWidth; //force reflow
      buttonToAnimate.classList.add("buttonClickAnimation");
      this.$emit("previousPageClick");
    },

    pageClick(e, page) {
      const element = e.path[1];
      element.classList.remove("buttonClickAnimation");
      void element.offsetWidth; //force reflow
      element.classList.add("buttonClickAnimation");
      this.$emit("pageChange", page);
    },
    nextPageClick() {
      const buttonsNumber = Array.from(this.$refs["buttons"].children).length;
      if (parseInt(this.currentPage) === buttonsNumber) {
        return;
      }
      const buttonToAnimate = this.$refs["buttons"].children[this.currentPage];
      buttonToAnimate.classList.remove("buttonClickAnimation");
      void buttonToAnimate.offsetWidth; //force reflow
      buttonToAnimate.classList.add("buttonClickAnimation");
      this.$emit("nextPageClick");
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
    color: white;
    font-size: $font-md;
    padding: 1rem;
  }
  button:hover {
    color: black;
  }
}
.paginationButtons__hexagonButtons {
  position: relative;
  color: white;
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
  justify-content: center;
}
.paginationButtons__hexagonShapes {
  margin: 0 1rem;

  transform: scale(1.4);
  transition: all 0.5s;
  cursor: pointer;
}
.paginationButtons__previousButton {
  transform: rotate(180deg);
}
.activePage {
  color: black;
}

.buttonClickAnimation {
  animation-name: buttonAnimation;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}
@keyframes buttonAnimation {
  0% {
    transform: rotateY(0turn) scale(1.4);
  }

  100% {
    transform: rotateY(1turn) scale(1.4);
  }
}
</style>