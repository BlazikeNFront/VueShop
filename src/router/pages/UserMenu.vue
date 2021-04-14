<template>
  <section class="userMenu">
    <h2>Hello user</h2>
    <div>
      <router-link :to="userCartLink">Check current cart</router-link>
      <router-link :to="userOrdersLink">Check orders</router-link>
    </div>
    <button @click="logout">Logout</button>
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
  methods: {
    logout() {
      this.$store.dispatch("UserAuth/logout");
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.userMenu {
  @include basicCart;
  min-height: 100rem;
  margin: 3rem;
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
  button {
    margin-top: 10rem;
    font-size: 4rem;
    font-weight: 600;
    @include button;
    padding: 1rem 2rem;
  }
}
</style>