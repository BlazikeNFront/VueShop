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
  </section>
</template>
<script>
export default {
  computed: {
    userCart() {
      return this.$store.getters["Cart/getCart"];
    },
  },
  methods: {
    async handleOrderRequest() {
      try {
        const token = this.$store.getters["UserAuth/getToken"];
        const payload = {
          userCart: this.userCart,
          token,
        };

        const rawData = await fetch("http://localhost:3000/confirmOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await JSON.stringify(payload),
        });
        const data = await rawData.json();
        if (rawData.status !== 200) {
          throw new Error(`${data.message}`);
        }
      } catch (err) {
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
</style>