<template>
  <section>
    <h2>History of orders</h2>
    <div>
      <ul v-if="this.userOrders.length > 0" class="checkOrders__ordersList">
        <li class="checkOrder__product">
          <h4>Order id</h4>
          <h4>Order Details</h4>
          <h4>Order Value</h4>
          <h4>Status</h4>
        </li>
        <loader v-if="!this.userOrders"></loader>
        <li
          class="checkOrder__li"
          v-else
          v-for="order in this.userOrders"
          :key="order._id"
        >
          <div class="userOrder__productInfomartionBox">
            <p class="userOrder__productInformation">
              {{ order._id }}
            </p>
          </div>
          <div class="userOrder__productInfomartionBox">
            <button
              class="userOrder__checkDeatils"
              @click="toggleOrderDetails(order)"
            >
              Check details
            </button>
          </div>
          <div class="userOrder__productInfomartionBox">
            <p class="userOrder__productInformation">
              {{ calculateOrderValue(order) }} $
            </p>
          </div>
          <div class="userOrder__productInfomartionBox">
            <p class="userOrder__productInformation">
              {{ getOrderStatus(order.status) }}
            </p>
          </div>
        </li>
      </ul>
      <p v-else>There is no history of orders</p>
      <button class="userOrder__confirmationButton" @click="fetchUserOrders">
        Update orders
      </button>
    </div>
    <order-details
      v-if="showOrderDetails"
      :order="this.selectedOrder"
      :changeOrderStatus="false"
      @closeModal="closeModal"
    ></order-details>
  </section>
</template>
<script>
import OrderDetails from "../../components/admin/orderDetails.vue";
export default {
  components: {
    OrderDetails,
  },
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
    calculateOrderValue(order) {
      const sum = order.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

      return Number(sum).toFixed(2);
    },
    getOrderStatus(status) {
      if (status === 0) {
        return "Waiting for acceptance";
      } else if (status === 1) {
        return "In realization";
      } else {
        return "Realized";
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
</style>