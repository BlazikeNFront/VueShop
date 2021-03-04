<template>
  <teleport to="body">
    <back-drop @click="this.$emit('closeDialog')"></back-drop>
    <div class="errorDialog">
      <h3 class="errorDialog__h3">There was an error :(</h3>
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
  width: 50%;
  height: 25rem;
  border: 2px solid $primiary-color;
  border-radius: 10px;
  background-color: black;
}
.errorDialog__h3 {
  margin: 1rem;
  color: $primiary-color;
  font-size: $font-bg;
}
.errorDialog__button {
  margin: 1rem;
  font-family: inherit;
  font-size: $font-bg;
  padding: 0.5rem 1rem;
  background: none;
  border: 1px solid $primiary-color;
  color: $primiary-color;
  cursor: pointer;
}
</style>