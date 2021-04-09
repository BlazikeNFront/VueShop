<template>
  <teleport to="body">
    <back-drop @click="this.$emit('closeDialog')"></back-drop>
    <div class="errorDialog" :style="boxDimension">
      <h3 class="errorDialog__h3">Infomation</h3>
      <slot> </slot>
      <button class="errorDialog__button" @click="this.$emit('confirmError')">
        Close
      </button>
    </div>
  </teleport>
</template>
<script>
export default {
  emits: ["closeDialog", "confirmError"],
  props: ["width", "height"],
  computed: {
    boxDimension() {
      return "width:" + this.width + "; height:" + this.height + ";";
    },
  },
};
</script>
<style lang='scss'>
.errorDialog {
  @include centerAbsolute;
  @include flexLayout;
  flex-direction: column;
  position: fixed;
  z-index: 1100;
  width: inherit;
  width: 100%;
  height: fit-content;
  border: 2px solid $primiary-color;
  border-radius: 10px;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
}
.errorDialog__h3 {
  margin: 1rem;
  color: black;
  font-size: 3rem;
}
.errorDialog__button {
  @include button;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  margin: 2rem;
}
</style>