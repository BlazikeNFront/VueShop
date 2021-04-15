<template>
  <section class="productDetails">
    <loader v-if="!product"></loader>
    <div class="productDetails_productBox" v-else>
      <img
        :src="product.imagePath.large"
        alt="rod"
        class="productDetails__image"
      />

      <h4 class="productDetails__title">{{ product.name }}</h4>
      <p class="productDetails__desc">{{ product.description }}</p>
      <p class="productDetails__price">{{ product.price }} $</p>
      <form class="producyDetails__form" @submit.prevent="addToCart">
        <input-range
          class="productDetails__inputRange"
          @valueChange="changeQuantity"
        ></input-range>
        <div class="productDetails__addProductToCartBox">
          <button class="productBoxSmall__addToCartBtn">
            Add to cart
            <font-awesome-icon
              :icon="['fas', 'cart-arrow-down']"
            ></font-awesome-icon>
          </button>
          <transition name="productDetailsNotifacation">
            <div
              class="productDetails__addedToCartNotification"
              v-if="showNotifaction"
            >
              <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
              <p>Product added to cart</p>
            </div>
          </transition>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import InputRange from "../../components/common/InputNumber.vue";
export default {
  components: {
    InputRange,
  },
  data() {
    return {
      quantity: 1,
      showNotifaction: false,
    };
  },
  mounted() {
    const routerProductId = this.$route.params.productId;
    if (this.product === null || this.product._id !== routerProductId) {
      this.$store.dispatch("UserSearch/setProductDetails", routerProductId);
    }
  },
  methods: {
    changeQuantity(number) {
      this.quantity = number;
    },
    addToCart() {
      const payload = {};
      payload._id = this.product._id;
      payload.name = this.product.name;
      payload.imagePath = this.product.imagePath.small;
      payload.price = this.product.price;
      payload.quantity = this.quantity;
      this.$store.dispatch("Cart/addItemtoCart", payload);
      this.showNotifaction = true;
      this.$store.dispatch("Cart/setCartInLocalStorage");
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
  background-color: white;
  font-size: $font-md;
  color: black;
}
.productDetails__image {
  width: 72rem;
}

.productDetails__title {
  @include mainFontBold;
  font-size: 4rem;
  margin: 5rem 0 3rem 0;
}
.productDetails__desc {
  margin: 0 auto;
  width: 80%;
  text-align: left;
  font-size: 1.4rem;
  white-space: pre-wrap;
  line-height: 3.5rem;
}
.producyDetails__form {
  margin: 2rem auto;

  width: 23rem;

  button {
    @include button;
    background-color: rgb(62, 175, 124);
    font-family: inherit;
    font-weight: 600;
    width: 80%;
    box-shadow: 3px 3px 8px black;
    padding: 1rem;
    border-radius: 20px;

    &:hover {
      transform: scale(1.01);
      color: #2c3e50;
    }
  }
}

.productDetails__price {
  font-size: 3.5rem;
  font-weight: 500;
}
.productDetails__inputRange {
  margin: 1rem;
}
.productDetails__addProductToCartBox {
  position: relative;
  width: 100%;
}
.productDetails__addedToCartNotification {
  @include flexLayout;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
  display: flex;
  color: rgb(62, 175, 124);
  font-size: 1.5rem;
  opacity: 1;

  svg {
    height: 100%;
  }
  p {
    margin-left: 2rem;
  }
}

.productDetailsNotifacation-enter-active {
  transition: all 0.5s ease-out;
}
.productDetailsNotifacation-enter-from {
  opacity: 0;
}
.productDetailsNotifacation-enter-to {
  opacity: 1;
}
</style>