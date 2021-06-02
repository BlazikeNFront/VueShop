<template>
  <div class="hexWrapper">
    <div class="upperhex" :style="hexColor"></div>
    <slot></slot>
    <div class="lowerHex" :style="hexColor"></div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      required: false,
      type: String,
    },
  },

  computed: {
    hexColor() {
      return `background-color:  ${this.color};`;
    },
  },
};
</script>
<style lang="scss">
.hexWrapper {
  margin: 0 auto;
  position: relative;
  width: 2rem;
  height: 3rem;
  overflow: hidden;

  .upperhex {
    position: absolute;
    top: 66%;
    left: 50%;
    width: 2rem;
    height: 2.2rem;
    transform: translate(-42%, -76%) rotate(63deg) skew(0deg, -35deg);
  }

  .lowerHex {
    position: absolute;
    top: 66%;
    left: 48.4%;
    width: 2rem;
    height: 2.2rem;
    transform: translate(-53%, -62%) rotate(241deg) skew(0deg, -35deg);
  }
}
</style>
