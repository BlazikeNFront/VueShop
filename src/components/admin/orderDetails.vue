<template>
  <div class="orderDetailsView__modal">
    <error-modal
      @closeDialog="this.$emit('closeModal')"
      @confirmError="this.$emit('closeModal')"
      width="70%"
      height="fit-content"
    >
      <h4 class="orderDetailsView__h4">
        Order Details for {{ this.order._id }}
      </h4>
      <ul class="orderDetails__products">
        <li class="orderDetails__products__thead">
          <div class="orderDetails__descriptionBox">
            <p>Product Image</p>
          </div>
          <div class="orderDetails__descriptionBox">
            <p>Product Name</p>
          </div>
          <div class="orderDetails__descriptionBox">
            <p>Quantity</p>
          </div>
          <div class="orderDetails__descriptionBox">
            <p>Price</p>
          </div>
          <div class="orderDetails__descriptionBox">
            <p>Total cost of product</p>
          </div>
        </li>
        <li v-for="product in this.order.cart" :key="product._id">
          <div class="orderDetails__productInfomartionBox">
            <img :src="product.imagePath" :alt="product.name + ' image'" />
          </div>
          <div class="orderDetails__productInfomartionBox">
            <p>
              {{ product.name }}
            </p>
          </div>
          <div class="orderDetails__productInfomartionBox">
            <p>
              {{ product.quantity }}
            </p>
          </div>
          <div class="orderDetails__productInfomartionBox">
            <p>{{ product.price }}$</p>
          </div>
          <div class="orderDetails__productInfomartionBox">
            <p>{{ (product.price * product.quantity).toFixed(2) }}$</p>
          </div>
        </li>
      </ul>
      <h5 class="orderDetailsView__h5">Client information</h5>
      <div class="orderDetailsView__userInformation">
        <p class="orderDetailsView__p">Name: Damian</p>
        <p class="orderDetailsView__p">Surname: Stachurski</p>
        <p class="orderDetailsView__p">Adress: Panstwo Dykty i kartonu</p>
      </div>
      <form
        v-if="this.changeOrderStatus"
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
  props: ["order", "changeOrderStatus"],
  emits: ["orderStatusChanged", "closeModal"],

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
.orderDetailsView__h4 {
  font-size: 2rem;
}
.orderDetailsView__h5 {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: black;
}
.orderDetails__products {
  margin-top: 2rem;
  @include flexLayout;
  flex-direction: column;
  width: 80%;
  background-color: white;

  li {
    width: 100%;
    @include flexLayout;
    border: 1px solid black;
    border-bottom: none;
    &:first-child {
      border: none;
    }
    &:last-child {
      border-bottom: 1px solid black;
    }
  }
}

.orderDetails__productInfomartionBox {
  width: 100%;
  height: 10rem;
  @include flexLayout;
  justify-content: center;
  &:not(:first-child) {
    border-left: 1px solid black;
  }
  p {
    text-align: center;
    font-size: $font-md;
  }
}
.orderDetails__products__thead {
  height: 5rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.orderDetails__descriptionBox {
  width: 100%;
  height: 3rem;
  @include flexLayout;
  justify-content: center;
}
.orderDetailsView__userInformation {
  margin: 2rem;
  @include flexLayout;
  width: 100%;
  justify-content: space-evenly;
  font-size: 1.5rem;
}
.orderStatusForm {
  @include flexLayout;
  margin: 2rem;
}
.orderDetailsView__p {
  color: black;
}

.orderStatusForm__lablel {
  color: black;
}
.orderStatusForm__p {
  color: black;
  font-size: $font-md;
}
.orderStatusForm__formControl {
  @include flexLayout;
  margin: 0.5rem;
}
.orderStatusForm__button {
  @include button;
  color: black;
}
.orderStatusForm__loader {
  transform: scale(0.5);
}
</style>
 