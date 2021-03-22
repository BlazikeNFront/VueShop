<template>
  <section class="checkOrders">
    <h3 class="checkOrders__h3">Orders</h3>
    <ul class="checkOrders__ordersList">
      <li class="checkOrder__product userOrder_tableDescritpion">
        <h4 class="userOrder__columnDescription">Order id</h4>
        <h4 class="userOrder__columnDescription">Order Details</h4>
        <h4 class="userOrder__columnDescription">Order Value</h4>
        <h4 class="userOrder__columnDescription">Status</h4>
      </li>
      <loader v-if="!this.orders"></loader>
      <li
        class="checkOrder__li"
        v-else
        v-for="order in this.orders"
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
            @click="updateSelectedOrder(order)"
          >
            Check details
          </button>
        </div>
        <div class="userOrder__productInfomartionBox">
          <p class="userOrder__productInformation">
            {{ calculateValue(order.cart) }} $
          </p>
        </div>
        <div class="userOrder__productInfomartionBox">
          <p class="userOrder__productInformation">
            {{ getOrderStatus(parseInt(order.status)) }}
          </p>
        </div>
      </li>
    </ul>
    <button @click="this.getOrders">FETHC ORDER</button>
    <order-details
      v-if="showOrderDeatils"
      :order="this.selectedOrder"
      @orderStatusChanged="this.getOrders"
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
    this.getOrders();
  },
  data() {
    return {
      orders: null,

      selectedOrder: null,
    };
  },
  computed: {
    getToken() {
      return this.$store.getters["UserAuth/getToken"];
    },
    showOrderDeatils() {
      return this.$store.getters["Admin/showOrderDetails"];
    },
  },
  methods: {
    toggleOrderDeatils() {
      this.$store.dispatch("Admin/openShowOrderDetails");
    },
    updateSelectedOrder(order) {
      this.selectedOrder = order;
      this.toggleOrderDeatils();
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
    calculateValue(cart) {
      const value = cart.reduce(
        (acc, element) => (acc += element.price * element.quantity),
        0
      );
      return value;
    },
    async getOrders() {
      try {
        const rawData = await fetch("http://localhost:3000/admin/getOrders", {
          headers: {
            Authorization: this.getToken.token,
          },
        });
        const data = await rawData.json();
        if (rawData.status !== 200) {
          throw new Error("Couldnt fetched data from server");
        }
        this.orders = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang='scss'>
.checkOrders__ordersList {
  margin: 0 auto;
  width: 80%;
}
.checkOrder__li {
  font-size: $font-md;
  height: 4.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  background-color: $primiary-color;
  border: 1px solid white;
  grid-gap: 0;
  color: white;
}
.userOrder__productInfomartionBox {
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  border-left: 2px solid black;
}
.checkOrder__product {
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  background-color: #d47304;
  border: 1px solid white;
  grid-gap: 0;
  color: white;
}
.userOrder__checkDeatils {
  width: 100%;
  height: 100%;
  background: none;
  font-size: $font-md;
  @include mainFontBold;
  border: none;
}
</style>