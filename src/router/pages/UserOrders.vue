<template>
  <section class="userOrders">
    <h2>History of orders</h2>

    <user-orders-table
      v-if="this.userOrders.length > 0"
      :userOrders="this.userOrders"
    ></user-orders-table>
    <p v-else>There is no history of orders</p>
    <loader v-if="!this.userOrders"></loader>

    <button class="userOrder__updateButton" @click="this.fetchUserOrders">
      Update orders
    </button>
  </section>
</template>
<script>
import UserOrdersTable from "../../components/UserActions/userOrdersTable.vue";

export default {
  components: { UserOrdersTable },
  mounted() {
    this.fetchUserOrders();
  },

  data() {
    return { userOrders: [], showOrderDetails: false, selectedOrder: null };
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"].token;
    },
  },
  methods: {
    async fetchUserOrders() {
      try {
        const rawData = await fetch("http://localhost:3000/getUserOrders", {
          headers: { Authorization: this.token },
        });
        const data = await rawData.json();
        this.userOrders = data;
      } catch (err) {
        console.log(err);
      }
    },

    toggleOrderDetails(order) {
      this.selectedOrder = order;
      this.showOrderDetails = true;
    },
    closeModal() {
      this.showOrderDetails = false;
    },
  },
};
</script>
<style lang="scss">
.userOrders {
  @include basicCart;
  min-height: 60rem;
  margin: 3rem;
  h2 {
    padding: 3rem;
  }
}
.userOrder__updateButton {
  @include button;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  &:hover {
    color: #2c3e50;
  }
}
</style>