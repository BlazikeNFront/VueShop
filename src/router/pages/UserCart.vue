<template>
  <section class="userCart">
    <h2>Cart</h2>
    <div v-if="this.userCart.length > 0">
      <ul class="userCart__productList">
        <li class="userCart__tableDescription userCart__product">
          <span></span>
          <h4 class="userCart__columnDescription">Product name</h4>
          <h4 class="userCart__columnDescription">Product name</h4>
          <h4 class="userCart__columnDescription">Product price</h4>
          <h4 class="userCart__columnDescription">Summary</h4>
        </li>
        <li
          class="userCart__product"
          v-for="product in userCart"
          :key="product._id"
        >
          <img
            class="userCart__productImage"
            :src="product.imagePath"
            :alt="product.name + 'image'"
          />
          <div class="userCart__productInfomartionBox">
            <p class="userCart__productInformation">
              {{ product.name }}
            </p>
          </div>
          <div class="userCart__productInfomartionBox">
            <p class="userCart__productInformation">
              {{ product.quantity }}
            </p>
          </div>
          <div class="userCart__productInfomartionBox">
            <p class="userCart__productInformation">{{ product.price }} $</p>
          </div>
          <div class="userCart__productInfomartionBox">
            <p class="userCart__productInformation">
              {{ (product.price * product.quantity).toFixed(2) }} $
            </p>
          </div>
        </li>
      </ul>

      <p class="userCart__summaryCost">Summary: {{ summaryCost }}$</p>
      <button class="userCart__confirmationButton" @click="handleOrderRequest">
        Confirm order
      </button>
    </div>
    <p v-else class="userCart__summaryCost">There is no product in cart !</p>
    <user-confirmation></user-confirmation>
    <error-modal
      v-if="this.modal.visible"
      @closeDialog="this.hideModal"
      @confirmError="this.hideModal"
      ><p class="userCart__modalMessage" v-if="modal.error">
        {{ modal.message }}
      </p>
      <p class="userCart__modalMessage" v-else>
        Order is accteped for more information check Yours orders
        <router-link to="/user/historyOrder"></router-link>
      </p>
    </error-modal>
  </section>
</template>
<script>
import ErrorModal from "../../components/common/ErrorModal.vue";
import UserConfirmation from "../../components/UserActions/userOrderConfirmation.vue";
export default {
  components: { ErrorModal, UserConfirmation },
  mounted() {
    console.log(this.summaryCost);
  },

  data() {
    return {
      productsUnavaliable: null,
      modal: {
        visible: false,
        message: null,
        error: false,
      },
    };
  },
  computed: {
    userCart() {
      return this.$store.getters["Cart/getCart"];
    },
    summaryCost() {
      const summaryCost = this.userCart.reduce((acc, element) => {
        const sum = Number(element.price) * Number(element.quantity);
        return acc + sum;
      }, 0);

      return summaryCost;
    },
  },
  methods: {
    hideModal() {
      this.modal.error = false;
      this.modal.visible = false;
      this.modal.message = null;
    },
    async handleOrderRequest() {
      try {
        if (this.userCart.length === 0) {
          this.modal.visible = true;
          this.modal.message = "Cart is empty";
          this.modal.error = true;
        }
        const token = this.$store.getters["UserAuth/getToken"];
        const payload = {
          cart: this.userCart,
          token,
        };

        const rawData = await fetch("http://localhost:3000/confirmOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await JSON.stringify(payload),
        });

        if (rawData.status === 406) {
          const data = await rawData.json();
          const productsUnavaliable = data.products;
          this.productsUnavaliable = productsUnavaliable;
          this.modal.error = true;
          this.modal.message = "One or more products are not longer avaliable";
          this.modal.visible = true;

          return;
        } else if (rawData.status !== 200) {
          this.modal.error = true;
          this.modal.message = "Shop couldnt accept order, try again later";
          this.modal.visible = true;
          throw new Error("Shop couldnt accept order");
        }

        this.modal.visible = true;
      } catch (err) {
        console.log(this.modal.message);
        console.log(err);
      }
    },
  },
};
</script>
<style lang='scss'>
.userCart {
  @include basicCart;

  margin: 3rem;

  h2 {
    padding: 2rem;
  }
}
.userCart__productList {
  margin: 5rem auto;
  width: 80%;
}
.userCart__tableDescription {
  @include flexLayout;
  height: 4rem;
}
.userCart__columnDescription {
  margin: auto;
  font-weight: 600;
}
.userCart__product {
  font-size: $font-md;

  display: grid;
  grid-template-columns: 13rem 2fr 1fr 1fr 1fr;
  background-color: white;

  grid-gap: 0;
  color: black;
  border: 1px solid black;
  border-bottom: none;
  &:nth-child(odd) {
    background-color: #3eaf7c;
  }
  &:last-child {
    border-bottom: 1px solid black;
  }
}
.userCart__productInfomartionBox {
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  border-left: 1px solid black;
}
.userCart__productInformation {
  @include flexLayout;
  justify-content: center;
  height: 100%;
}
.userCart__productImage {
  margin: 0 auto;
  width: 100%;
}

.userCart__summaryPrice {
  text-align: right;
}
.userCart__summaryCost {
  font-weight: 600;
  font-size: 2rem;
  color: rgb(44, 62, 80);
}
.userCart__confirmationButton {
  margin: 1rem;
  @include button;
  color: white;
  @include mainBorder;
  font-size: $font-md;
  padding: 1rem;
}

.userCart__modalMessage {
  color: white;
  font-size: $font-md;
}
</style>