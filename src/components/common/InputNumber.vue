<template>
  <div class="customInputNumber__container">
    <label for="custumInputNumber">Quantity:</label>
    <div class="customInputRange">
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        class="customInputRange__arrow customInputRange__leftArrow noSelect"
        @click="handleClick(-1)"
      ></font-awesome-icon>
      <div class="customInputRange__formControl">
        <input
          v-model="number"
          id="custumInputNumber"
          class="noSelect"
          type="number"
          step="1"
          min="0"
          name="inputNumber"
          @change="emitInputValue()"
        />
      </div>
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        class="customInputRange__arrow customInputRange__rightArrow noSelect"
        @click="handleClick(1)"
      ></font-awesome-icon>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { number: 1 };
  },
  emits: ["valueChange"],
  methods: {
    handleClick(number) {
      if (this.number + number < 1) {
        return;
      }
      this.number = parseInt(this.number) + number;
      const payload = this.number;
      this.$emit("valueChange", payload);
    },
    emitInputValue() {
      const payload = this.number;
      this.$emit("valueChange", payload);
    },
  },
};
</script>
<style lang="scss">
.customInputNumber__container {
  @include flexLayout;
  flex-direction: column;
  label {
    color: black;
    font-size: $font-md;
  }
}
.customInputRange {
  position: relative;
  width: 9rem;

  height: 3.5rem;
  padding: 0.5rem;
  border: 2px solid white;
  font-size: 1.5rem;
  border-radius: 20px;
  @include flexLayout;
  span {
    font-size: 1.5rem;
    color: black;
  }
}
.noSelect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.customInputRange__formControl {
  input {
    width: 3rem;
    color: black;
    text-align: center;
    background: none;
    border: none;
    @include mainFontBold;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
}
.customInputRange__arrow {
  color: black;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  &:hover {
    transform: scale(1.1);
  }
}
.customInputRange__leftArrow {
  transform: rotate(180deg);
  &:hover {
    &:hover {
      transform: scale(1.1) rotate(180deg);
    }
  }
}
</style>