<template>
  <section class="checkOrders">
    <h3 class="checkOrders__h3">Orders</h3>
    <ul class="checkOrders__ordersList">
      <li class="checkOrder__product">
        <h4>Order id</h4>
        <h4>Order Details</h4>
        <h4>Order Value</h4>
        <h4>Status</h4>
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
    <button @click="this.getOrders">FETCH ORDER</button>
    <pagination-buttons
      class="searchResult__paginationButtons"
      :numberOfPages="numberOfPages"
      @pageChange="handleChangePageRequest"
      @previousPageClick="
        handleChangePageRequest(parseInt(this.currentPage) - 1)
      "
      @nextPageClick="handleChangePageRequest(parseInt(this.currentPage) + 1)"
    ></pagination-buttons>

    <order-details
      v-if="this.showOrderDeatils"
      :order="this.selectedOrder"
      :changeOrderStatus="true"
      @orderStatusChanged="this.handleChangePageRequest"
      @closeModal="this.showOrderDeatils = false"
    ></order-details>
  </section>
</template>
<script >
import OrderDetails from "../../components/admin/orderDetails.vue";
import PaginationButtons from "../../components/common/PaginationButtons.vue";
export default {
  components: {
    OrderDetails,
    PaginationButtons,
  },
  mounted() {
    const page = this.$route.query.page;

    const payload = {
      token: this.getToken.token || null,
      page,
    };
    this.$store.dispatch("Admin/fetchOrders", payload);
  },
  data() {
    return {
      selectedOrder: null,
      showOrderDeatils: false,
    };
  },
  computed: {
    orders() {
      return this.$store.getters["Admin/getOrders"];
    },
    getToken() {
      return this.$store.getters["UserAuth/getToken"];
    },

    currentPage() {
      return this.$route.query.page;
    },
    numberOfPages() {
      return this.$store.getters["Admin/getNumberOfPages"];
    },
  },

  methods: {
    handleChangePageRequest(page) {
      if (page < 1 || page > this.numberOfPages) {
        return;
      }
      const token = this.getToken.token;
      const payload = {
        token,
        page,
      };
      this.$store.dispatch("Admin/fetchOrders", payload);
      this.$router.push({
        name: "admin-orders",
        query: { page: page },
      });
    },

    updateSelectedOrder(order) {
      this.selectedOrder = order;
      this.showOrderDeatils = true;
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
  },
};
</script>
<style lang='scss'>
.checkOrders {
  @include basicCart;
  min-height: 100rem;
  @include flexLayout;
  margin: 3rem;
  flex-direction: column;
  button {
    @include button;
  }
}
.checkOrders__ordersList {
  margin: 0 auto;
  width: 80%;
  background-color: White;
}
.checkOrder__li {
  font-size: $font-md;
  height: 4.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;

  border: 1px solid black;
  grid-gap: 0;
  color: black;
  &:nth-child(odd) {
    background-color: rgba(189, 187, 64, 0.4);
  }
}

.userOrder__productInfomartionBox {
  width: 100%;
  height: 100%;
  @include flexLayout;
  justify-content: center;
  &:not(:first-child) {
    border-left: 1px solid black;
  }
  p {
    text-align: center;
    width: 100%;
  }
}
.checkOrder__product {
  font-size: 1.5rem;
  height: 4rem;
  display: grid;
  align-self: center;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  grid-gap: 0;
  color: black;
  h4 {
    align-self: center;
    font-weight: 600;
  }
}
.userOrder__checkDeatils {
  width: 80%;
  height: 80%;
  background: none;
  font-size: $font-md;
  @include button;
  @include mainFontBold;
}
</style>