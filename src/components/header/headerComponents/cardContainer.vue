<template>
  <div class="cardLayoutContainer">
    <phone-contact></phone-contact>
    <user-cart :userCart="userCart"></user-cart>
  </div>
</template>
<script>
import PhoneContact from "./phoneContact.vue";
import UserCart from "./userCart.vue";
export default {
  components: {
    PhoneContact,
    UserCart,
  },
  data() {
    return {
      userCart: [
        ["shitmano reel", 1],
        ["daiwa rod", 2],
        ["rapala lure", 4],
      ],
    };
  },
};
</script>
<style lang='scss'>
.cardLayoutContainer {
  @include flexLayout;
  justify-content: space-around;
  height: 5rem;
  background-color: white;
}
</style>