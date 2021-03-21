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
            @click="updateOrderDetailsData(order)"
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
            {{ getOrderStatus(order.status) }}
          </p>
        </div>
      </li>
    </ul>
    <button @click="this.getOrders">FETHC ORDER</button>
    <div class="detailOrderView__modal">
      <error-modal
        v-if="showOrderDeatils"
        @closeDialog="toggleOrderDeatils"
        @confirmError="toggleOrderDeatils"
        width="70%"
        height="fit-content"
      >
        <h4 class="detailOrderView__h4">
          Order Details for {{ orderDetailsData._id }}
        </h4>
        <ul>
          <li
            class="userOrder__product"
            v-for="product in orderDetailsData.cart"
            :key="product._id"
          >
            <img
              class="userOrder__productImage"
              :src="product.imagePath"
              :alt="product.name + 'image'"
            />
            <div class="userOrder__productInfomartionBox">
              <p class="userOrder__productInformation">
                {{ product.name }}
              </p>
            </div>
            <div class="userOrder__productInfomartionBox">
              <p class="userOrder__productInformation">
                {{ product.quantity }}
              </p>
            </div>
            <div class="userOrder__productInfomartionBox">
              <p class="userOrder__productInformation">
                {{ product.price }}
              </p>
            </div>
            <div class="userOrder__productInfomartionBox">
              <p class="userOrder__productInformation">
                {{ product.price * product.quantity }}
              </p>
            </div>
          </li>
        </ul>
        <h5 class="detailOrderView__h5">Client information</h5>
        <div class="detailOrderView__userInformation">
          <p class="detailOrderView__p">Name: Damian</p>
          <p class="detailOrderView__p">Surname:Stachurski</p>
          <p class="detailOrderView__p">Adress:Panstwo Dykty i kartonu</p>
        </div>
        <form class="orderStatusForm" @submit.prevent="handleChangeOrderStatus">
          <p class="orderStatusForm__p">Change order Status</p>
          <div class="orderStatusForm__formControl">
            <label class="orderStatusForm__lablel" for="0"
              >Waiting for acceptance</label
            >
            <input
              id="orderStatusOptions"
              name="ordersStatus"
              type="radio"
              value="0"
            />
          </div>
          <div class="orderStatusForm__formControl">
            <label class="orderStatusForm__lablel" for="1"
              >In realization</label
            >
            <input
              id="orderStatusOptions"
              name="ordersStatus"
              type="radio"
              value="1"
            />
          </div>
          <div class="orderStatusForm__formControl">
            <label class="orderStatusForm__lablel" for="2">Realized</label>
            <input
              id="orderStatusOptions"
              name="ordersStatus"
              type="radio"
              value="2"
            />
          </div>
          <button class="orderStatusForm__button">Submit change</button>
        </form>
      </error-modal>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    this.getOrders();
  },
  data() {
    return {
      orders: null,
      showOrderDeatils: false,
      orderDetailsData: null,
    };
  },
  computed: {
    getToken() {
      return this.$store.getters["UserAuth/getToken"];
    },
  },
  methods: {
    toggleOrderDeatils() {
      this.showOrderDeatils = !this.showOrderDeatils;
    },
    updateOrderDetailsData(order) {
      this.orderDetailsData = order;
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
        console.log(this.orders);
      } catch (err) {
        console.log(err);
      }
    },
    async handleChangeOrderStatus() {},
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
.detailOrderView__h5 {
  margin-top: 1rem;
  font-size: $font-md;
  color: white;
}
.detailOrderView__userInformation {
  margin: 1rem;
  @include flexLayout;
  width: 100%;
  justify-content: space-evenly;
}
.orderStatusForm {
  @include flexLayout;
}
.detailOrderView__p {
  color: white;
}
.orderStatusForm__lablel {
  color: White;
}
.orderStatusForm__p {
  color: white;
  font-size: $font-md;
}
.orderStatusForm__formControl {
  @include flexLayout;
  margin: 0.5rem;
}
.orderStatusForm__button {
  @include button;
  color: white;
}
</style>