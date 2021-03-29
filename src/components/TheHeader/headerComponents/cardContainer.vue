<template>
  <div class="cardLayoutContainer">
    <user-cart></user-cart>
  </div>
</template>
<script>
import UserCart from "./userCart.vue";
export default {
  components: {
    UserCart,
  },
};
</script>
<style lang='scss'>
.cardLayoutContainer {
  padding: 0.5rem;
  @include flexLayout;
  justify-content: space-around;
  width: 18rem;

  @include mainBorder;
}
</style>