<template>
  <div class="cartContainer" @click="showUserCartAction">
    <font-awesome-icon
      :icon="['fas', 'shopping-cart']"
      class="cartContainer__cartIcon"
    ></font-awesome-icon>
    <p class="cartContainer__totalQtn">
      {{ totalQuantityOfUserProducts }} Products in basket
    </p>
    <ul class="cardDisplay" v-if="showUserCart">
      <li v-if="this.userCart.length === 0">
        There is no product in your card
      </li>
      <li v-else v-for="product in userCart" :key="product">
        {{ product.title }} | Quantity:{{ product.quantity }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showUserCart: false,
      userCart: [],
    };
  },
  methods: {
    showUserCartAction() {
      this.showUserCart = !this.showUserCart;
    },
  },

  computed: {
    getCart() {
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
    border-top: 0;
    border-radius: 0 0 10px 10px;
    z-index: 1000;

    li {
      padding: 1rem;
    }
  }
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
</style>