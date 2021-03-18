<template>
  <div class="cartContainer" @click="showUserCartAction">
    <font-awesome-icon
      :icon="['fas', 'shopping-cart']"
      class="cartContainer__cartIcon"
    ></font-awesome-icon>
    <p class="cartContainer__totalQtn">
      {{ totalQuantityOfUserProducts }} Products in basket
    </p>
    <div class="cardDisplay" v-if="showUserCart">
      <p class="cardDsiplay__listItem" v-if="this.userCart.length === 0">
        There is no product in your card
      </p>
      <div v-else>
        <ul class="cardDsiplay__list">
          <li
            class="cardDsiplay__listItem"
            v-for="product in userCart"
            :key="product"
          >
            {{ product.name }} | Quantity:{{ product.quantity }}
          </li>
        </ul>
        <button class="cardDsiplay__button" @click="handleOrderRequest">
          Order
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showUserCart: false,
    };
  },
  methods: {
    showUserCartAction() {
      this.showUserCart = !this.showUserCart;
    },
    handleOrderRequest() {
      this.$router.push("/userOrder");
    },
  },

  computed: {
    userCart() {
      return this.$store.getters["Cart/getCart"];
    },
    totalQuantityOfUserProducts() {
      return this.userCart.reduce((qtn, elem) => (qtn += elem.quantity), 0);
    },
  },
  watch: {
    getCart(newVal) {
      this.userCart = newVal;
    },
  },
};
</script>
<style lang='scss'>
.cartContainer {
  @include flexLayout;
  width: 80%;
  max-width: 12rem;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    max-width: 4rem;
  }

  .cardDisplay {
    position: absolute;
    width: 148%;
    top: 120%;
    left: -24%;
    @include mainBorder;
    border-color: white;
    background-color: black;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    z-index: 1000;
    color: white;
  }
}
.cardDsiplay__listItem {
  padding: 2rem;
}
.cartContainer__cartIcon {
  font-size: $font-bg;
  color: $primiary-color;
}
.cartContainer__totalQtn {
  font-size: $font-md;

  margin-left: 2rem;

  @include mainFontBold;
}
.cardDsiplay__button {
  font-family: inherit;
  font-size: $font-md;
}
</style>