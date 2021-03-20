<template>
  <section class="userOrder">
    <h3 class="userOrder__h3">Order</h3>

    <ul class="userOrder__productList">
      <li class="userOrder__product userOrder_tableDescritpion">
        <span></span>
        <h4 class="userOrder__columnDescription">Product name</h4>
        <h4 class="userOrder__columnDescription">Product name</h4>
        <h4 class="userOrder__columnDescription">Product price</h4>
        <h4 class="userOrder__columnDescription">Summary</h4>
      </li>
      <li
        class="userOrder__product"
        v-for="product in userCart"
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

    <p class="userOrder__summaryCost">Summary $</p>
    <button class="userOrder__confirmationButton" @click="handleOrderRequest">
      Confirm order
    </button>
    <error-modal
      v-if="this.modal.visible"
      @closeDialog="this.hideModal"
      @confirmError="this.hideModal"
      ><p class="userOrder__modalMessage" v-if="modal.error">
        {{ modal.message }}
      </p>
      <p class="userOrder__modalMessage" v-else>
        Order is accteped for more information check Yours orders
        <router-link to="/user/historyOrder"></router-link>
      </p>
    </error-modal>
  </section>
</template>
<script>
export default {
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
  },
  methods: {
    hideModal() {
      this.modal.error = false;
      this.modal.visible = false;
      this.modal.message = null;
    },
    async handleOrderRequest() {
      try {
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
.userOrder {
  width: 90%;
  margin: 0 auto;
}
.userOrder__productList {
  margin: 5rem auto;
  width: 80%;
}
.userOrder_tableDescritpion {
  height: 4rem;
}
.userOrder__columnDescription {
  margin: auto;
}
.userOrder__product {
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
.userOrder__productInformation {
  @include flexLayout;
  justify-content: center;
  height: 100%;
}
.userOrder__productImage {
  margin: 0 auto;
  padding: 0.5rem;
  width: 10rem;
  height: 10rem;
}

.userOrder__summaryPrice {
  text-align: right;
}
.userOrder__summaryCost {
  font-size: $font-md;
  color: white;
}
.userOrder__confirmationButton {
  margin: 1rem;
  @include button;
  color: white;
  @include mainBorder;
  font-size: $font-md;
  padding: 1rem;
}
.userOrder__modalMessage {
  color: white;
  font-size: $font-md;
}
</style>