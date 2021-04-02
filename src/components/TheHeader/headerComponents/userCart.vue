<template>
  <div class="cartIconContainer" @click="showUserCartAction">
    <font-awesome-icon
      :icon="['fas', 'shopping-cart']"
      class="cartContainer__cartIcon"
    ></font-awesome-icon>
    <p class="cartContainer__totalQtn">
      {{ totalQuantityOfUserProducts }}
    </p>
  </div>
  <back-drop
    @click="showUserCartAction"
    v-if="showUserCart"
    zIndex="1200"
  ></back-drop>
  <transition name="cart">
    <section class="cartContainer" v-if="showUserCart">
      <h4>
        <div>
          <span>
            <font-awesome-icon
              :icon="['fas', 'shopping-cart']"
              class="cartContainer__cartIcon"
            ></font-awesome-icon
          ></span>
          YOUR CART
        </div>
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="cartContainer__XButton"
          @click="showUserCartAction"
        ></font-awesome-icon>
      </h4>
      <p class="cartContainer__noProdInfo" v-if="this.userCart.length === 0">
        There is no product in your card
      </p>
      <div v-else class="cartContainer__cartList">
        <ul>
          <li v-for="product in userCart" :key="product">
            <img :src="product.imagePath" :alt="product.name" />
            <p>{{ product.name }} | Quantity:{{ product.quantity }}</p>
          </li>
        </ul>
        <div class="cartContainer__summary">
          <div class="cartContainer__SummaryBox">
            <p>Total products</p>
            <span>{{ totalQuantityOfUserProducts }}</span>
          </div>
          <div class="cartContainer__SummaryBox">
            <p>Total price</p>
            <span>{{ totalCartPrice }}$</span>
          </div>
          <button
            class="cartContainer__orderButton"
            @click="handleOrderRequest"
          >
            Order
          </button>
        </div>
      </div>
      <a @click.prevent="userCartPageLink">VIEW CART</a>
    </section>
  </transition>
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
    userCartPageLink() {
      this.showUserCartAction();
      this.$router.push({
        name: "user-order",
      });
    },
  },

  computed: {
    userCart() {
      return this.$store.getters["Cart/getCart"];
    },

    totalQuantityOfUserProducts() {
      return this.userCart.reduce((qtn, elem) => (qtn += elem.quantity), 0);
    },
    totalCartPrice() {
      return this.userCart.reduce(
        (price, elem) => (price += elem.price * elem.quantity),
        0
      );
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
.cartIconContainer {
  @include flexLayout;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    max-width: 4rem;
  }
}

.cartContainer {
  width: 30rem;
  height: 100%;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  top: 0;
  z-index: 1400;
  cursor: default;

  h4 {
    @include flexLayout;
    width: 80%;
    margin: 2rem 1rem 0 0;
    font-size: $font-md;
    float: right;
  }
  p {
    font-size: $font-md;
  }
  a {
    position: relative;
    @include mainFontBold;
    left: -3.5rem;
    width: 70%;
    margin-top: 2rem;
    text-decoration: none;
    letter-spacing: 0.1rem;
    color: #292d2b;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    &:hover {
      transform: translate(35%, 0%);
      color: #0bd3d3;
      &::before {
        width: 5rem;
        background-color: #0bd3d3;
      }
      &::after {
        width: 0rem;
        background-color: #0bd3d3;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 0rem;
      height: 0.2rem;
      background-color: #292d2d;
      transition: 0.2s all ease-in-out;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      display: block;
      width: 5rem;
      height: 0.2rem;
      background-color: #292d2b;
      transition: 0.2s all ease-in-out;
    }
  }
}
.cartContainer__noProdInfo {
  margin-top: 3rem;
}
.cartContainer__SummaryBox {
  @include flexLayout;

  padding: 1.5rem 2rem;
  margin-right: 3rem;
  p {
    @include mainFontBold;
  }
  span {
    font-size: $font-md;
  }
}
.cartContainer__orderButton {
  font-size: $font-md;
  @include mainFontBold;
  width: 75%;
  height: 4rem;
  background-color: #00ba48;
  transition: all 0.2s ease-in-out;
  color: white;
  &:hover {
    background-color: #292d2b;
  }
}
.cartContainer__cartList {
  ul {
    overflow-y: scroll;
    height: 60rem;
  }
  li {
    @include flexLayout;
    padding: 2rem;
  }
}

.cartContainer__cartIcon {
  font-size: $font-bg;
}
.cartContainer__XButton {
  font-size: 3rem;
  cursor: pointer;
}
.cartContainer__totalQtn {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  top: 1rem;
  left: -0.8rem;
  color: white;
  z-index: 500;
  font-size: $font-sm;
  @include mainFontBold;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background-color: red;
    border-radius: 50%;
    z-index: -1;
  }
}

.cart-enter-active,
.cart-leave-active {
  transition: all 0.5s ease;
}

.cart-enter-from,
.cart-leave-to {
  transform: translate(30rem, 0);
}
.cart-enter-to,
.cart-leave-from {
  transform: translate(0rem, 0);
}
</style>