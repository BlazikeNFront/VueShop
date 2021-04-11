<template>
  <section class="userMenu">
    <h2>Hello user</h2>
    <div>
      <router-link :to="userCartLink">Check current cart</router-link>
      <router-link :to="userOrdersLink">Check orders</router-link>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    userCartLink() {
      return { name: "user-cart" };
    },
    userOrdersLink() {
      return { name: "user-orders" };
    },
  },
};
</script>
<style lang="scss">
.userMenu {
  height: 100%;
  div {
    margin-top: 5rem;
    @include flexLayout;
    justify-content: space-evenly;
  }
  a {
    @include button;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 600;
  }
}
</style>