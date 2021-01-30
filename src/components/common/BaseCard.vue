<template>
  <div class="baseCard">
    <slot></slot>
  </div>
</template>
<style lang='scss'>
.baseCard {
  border: 2px solid $primiary-color;
  border-radius: 10px;
  background-color: black;
}
</style>