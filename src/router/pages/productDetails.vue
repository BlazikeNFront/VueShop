<template>
  <section class="productDetails">
    <loader v-if="!product"></loader>
    <div class="productDetails_productBox" v-else>
      <img :src="product.imagePath" alt="rod" class="productDetails__image" />

      <h4 class="productDetails__title">{{ product.name }}</h4>
      <p class="productDetails__desc">{{ product.description }}</p>
      <p class="productDetails__price">{{ product.price }} $</p>
      <button
        @click="addToCart"
        :disabled="!token"
        class="productBoxSmall__addToCartBtn"
      >
        Add to cart
        <font-awesome-icon
          :icon="['fas', 'cart-arrow-down']"
        ></font-awesome-icon>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    const routerProductId = this.$route.params.productId;

    if (this.product === null || this.product._id !== routerProductId) {
      this.$store.dispatch("UserSearch/setProductDetails", routerProductId);
    }
  },
  methods: {
    addToCart() {
      const payload = {};
      payload._id = this.product._id;
      payload.name = this.product.name;
      payload.imagePath = this.product.imagePath;
      payload.price = this.product.price;

      this.$store.dispatch("Cart/addItemtoCart", payload);
    },
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
    },
    product() {
      return this.$store.getters["UserSearch/getProductDetails"];
    },
  },
};
</script>
<style lang='scss'>
.productDetails {
  width: 90%;
  margin: 2rem auto;
  min-height: 70rem;
  @include mainBorder;
  @include flexLayout;
  flex-direction: column;
  font-size: $font-md;
  color: white;
}
.productDetails__image {
  width: 85%;
  height: 35rem;
  object-fit: cover;
}

.productDetails__title {
  font-size: $font-bg;
}
.productDetails__desc {
  margin: 1rem;
  text-align: left;
}
.productDetails__button {
  @include baseButton;
}
</style>