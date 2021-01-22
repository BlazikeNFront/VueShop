<template>
  <div class="currentOffer" @click="showAddBox" :class="{ opened: showAdd }">
    <p>Checkout weekly brands offer</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAdd: true,
    };
  },
};
</script>
<style lang='scss'>
.currentOffer {
  position: fixed;
  top: 22rem;
  right: 3.5%;
  width: 4rem;
  height: 7rem;
  background-color: orange;
  color: black;
  z-index: 2000;
}
.opened {
  @include centerAbsolute;
  position: fixed;
  width: 70vh;
  height: 80vh;
}
</style>