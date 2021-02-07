<template>
  <section class="productDetails">
    <img :src="product.imgSrc" alt="rod" class="productDetails__image" />

    <h4 class="productDetails__title">{{ product.title }}</h4>
    <p class="productDetails__desc">{{ product.description }}</p>
    <p class="productDetails__price">{{ product.price }} $</p>
    <button @click="addToCart" class="productBoxSmall__addToCartBtn">
      Add to cart
      <font-awesome-icon :icon="['fas', 'cart-arrow-down']"></font-awesome-icon>
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      product: {
        imgSrc: this.createImgPath(),
        title: "Okuma Rod",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.",
        price: 105.77,
        id: 22545,
      },
    };
  },
  methods: {
    createImgPath() {
      return require("../../assets/products/rods/rod1.jpg");
    },
    addToCart() {
      this.$store.dispatch("Cart/addItemtoCart", this.product);
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