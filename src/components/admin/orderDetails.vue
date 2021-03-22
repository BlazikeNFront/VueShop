<template>
  <div class="detailOrderView__modal">
    <error-modal
      @closeDialog="closeModal"
      @confirmError="closeModal"
      width="70%"
      height="fit-content"
    >
      <h4 class="detailOrderView__h4">
        Order Details for {{ this.order._id }}
      </h4>
      <ul>
        <li
          class="userOrder__product"
          v-for="product in this.order.cart"
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
      <form
        class="orderStatusForm"
        @submit.prevent="handleChangeOrderStatus(this.order._id)"
      >
        <p class="orderStatusForm__p">Change order Status</p>
        <div class="orderStatusForm__formControl">
          <label class="orderStatusForm__lablel" for="1">Accept Order</label>
          <input
            id="orderStatusOptions"
            name="ordersStatus"
            type="radio"
            value="1"
            v-model="this.orderDetailsStatus"
          />
        </div>
        <div class="orderStatusForm__formControl">
          <label class="orderStatusForm__lablel" for="2"
            >Mark as realized</label
          >
          <input
            id="orderStatusOptions"
            name="ordersStatus"
            type="radio"
            value="2"
            v-model="orderDetailsStatus"
          />
        </div>
        <button class="orderStatusForm__button">Submit change</button>
        <loader class="orderStatusForm__loader" v-if="loader"></loader>
      </form>
    </error-modal>
  </div>
</template>
<script>
export default {
  props: ["order"],
  emits: ["orderStatusChanged"],
  data() {
    return {
      orderDetailsStatus: null,
      orderDetailsModal: false,
      orderDeatilsModalMsg: null,
      loader: false,
    };
  },
  computed: {
    getToken() {
      return this.$store.getters["UserAuth/getToken"];
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch("Admin/closeShowOrderDetails");
    },
    async handleChangeOrderStatus(orderId) {
      try {
        this.loader = true;
        const payload = {
          orderId,
          orderStatus: this.orderDetailsStatus,
        };
        const response = await fetch(
          `http://localhost:3000/admin/changeOrderStatus`,
          {
            method: "POST",
            headers: {
              Authorization: this.getToken.token,
              "Content-Type": "application/json",
            },
            body: await JSON.stringify(payload),
          }
        );
        if (response.status !== 200) {
          throw new Error("Server did not accepted change of order");
        } else {
          this.loader = false;
          this.$emit("orderStatusChanged");
        }
      } catch (err) {
        console.log(err);
        this.loader = false;
      }
    },
  },
};
</script>
<style lang='scss'>
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
.orderStatusForm__loader {
  transform: scale(0.5);
}
</style>
 