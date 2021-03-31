<template>
  <div class="backdrop"></div>
</template>

<style lang='scss'>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $backdrop;
  width: inherit;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: default;
}
</style>