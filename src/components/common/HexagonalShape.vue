<template>
  <div>
    <div class="hexagon__body" :style="this.hexColor">
      <slot></slot>
    </div>
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
      return `background-color:  ${this.color};border-color:${this.color};`;
    },
  },
};
</script>
<style lang="scss">
.hexagon__body {
  width: 4.7rem;
  height: 2.7rem;
  background-color: white;

  position: relative;
  display: inline-block;
  &::before {
    content: "";
    width: 0;
    height: 0;
    cursor: pointer;
    border-bottom: 1.35rem solid;
    border-color: inherit;
    border-left: 2.34rem solid transparent;
    border-right: 2.34rem solid transparent;
    position: absolute;
    top: -1.35rem;
    left: 0;
  }
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -1.35rem;
    left: 0;
    border-top: 1.35rem solid;
    border-color: inherit;
    border-left: 2.34rem solid transparent;
    border-right: 2.34rem solid transparent;
    cursor: pointer;
  }
}
</style>
