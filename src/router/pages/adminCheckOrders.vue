<template>
  <section class="checkOrders">
    <h3 class="checkOrders__h3">Orders</h3>
    <ul class="checkOrders__ordersList">
      <li class="userOrder__product userOrder_tableDescritpion">
        <h4 class="userOrder__columnDescription">Product name</h4>
        <h4 class="userOrder__columnDescription">Product name</h4>
        <h4 class="userOrder__columnDescription">Product price</h4>
      </li>
      <li class="userOrder__product" v-for="order in orders" :key="order._id">
        <div class="userOrder__productInfomartionBox">
          <p class="userOrder__productInformation">
            {{ order._id }}
          </p>
        </div>
        <div class="userOrder__productInfomartionBox">
          <button>Check details</button>
        </div>
        <div class="userOrder__productInfomartionBox">
          <p class="userOrder__productInformation">
            {{ order.totalCost }}
          </p>
        </div>
        <div class="userOrder__productInfomartionBox">
          <p class="userOrder__productInformation">
            {{ getOrderStatus(order.status) }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      orders: null,
    };
  },

  methods: {
    getOrderStatus(status) {
      if (status === 0) {
        return "Waiting for acceptance";
      } else if (status === 1) {
        return "In realization";
      } else {
        return "Realized";
      }
    },
  },
};
</script>
<style lang='scss'>
.checkOrders__ordersList {
  font-size: $font-md;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
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
</style>