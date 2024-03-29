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

  <back-drop @click="showUserCartAction" v-if="showUserCart"></back-drop>
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
        <button
          class="cartContainer__XButton"
          @click="showUserCartAction"
          aria-label="Close side cart bar"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </button>
      </h4>
      <p class="cartContainer__noProdInfo" v-if="this.userCart.length === 0">
        There is no product in your card
      </p>
      <aside v-else class="cartContainer__cartList">
        <ul>
          <li v-for="product in userCart" :key="product._id">
            <div class="cartContainer__productDesc">
              <button
                class="cartContainer__deleteProductButton"
                aria-label="Delete product"
                @click="deleteProductFromCart(product._id)"
              >
                <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
              </button>
              <img :src="product.imagePath" :alt="product.name" />
              <p>
                {{ product.name }}
              </p>
            </div>
            <input-number
              :initialNumber="product.quantity"
              @valueChange="changeProductQuantityInCart($event, product._id)"
            ></input-number>
          </li>
        </ul>
        <div class="cartContainer__summary">
          <div class="cartContainer__SummaryBox">
            <p>Total products</p>
            <span>{{ totalQuantityOfUserProducts }}</span>
          </div>
          <div class="cartContainer__SummaryBox">
            <p>Total price</p>
            <span>{{ totalCartPrice.toFixed(2) }}$</span>
          </div>
          <button
            class="cartContainer__orderButton"
            aria-label="Order action"
            @click="userCartPageLink(true)"
          >
            Order
          </button>
        </div>
      </aside>
      <a @click.prevent="this.userCartPageLink(false)">VIEW CART</a>
    </section>
  </transition>
</template>
<script>
import InputNumber from "../../common/InputNumber.vue";

export default {
  components: {
    InputNumber,
  },

  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
    },
    showUserCart() {
      return this.$store.getters["Cart/getShowCart"];
    },
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

  methods: {
    showUserCartAction() {
      this.$store.dispatch("Cart/toggleCartBarView");
    },

    userCartPageLink(showConfirmOrderDialog = false) {
      this.showUserCartAction();
      const routerPayload = {
        name: "user-cart",
      };
      if (showConfirmOrderDialog && this.token) {
        routerPayload.params = { showConfirmOrderDialog: true };
      }
      this.$router.push(routerPayload);
    },
    changeProductQuantityInCart(number, prodId) {
      const payload = {
        newQuantity: number,
        prodId,
      };
      this.$store.dispatch("Cart/updateProductQuantityInCart", payload);
    },
    deleteProductFromCart(prodId) {
      this.$store.dispatch("Cart/deleteItemFromCart", prodId);
    },
  },
};
</script>
<style lang='scss'>
.cartIconContainer {
  @include flexLayout;
  flex-direction: column;
  position: fixed;
  top: 15rem;
  right: 0;
  width: 4rem;
  height: 4.5rem;
  padding: 0.2rem;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px 0 0 10px;
  border-right: none;
  cursor: pointer;
  z-index: 1000;

  img {
    width: 2rem;
  }
}
.cartContainer__productDesc {
  @include flexLayout;
  width: 100%;
  img {
    width: 12.8rem;
  }
}
.cartContainer__deleteProductButton {
  @include buttonTransparent;
  position: absolute;
  top: 0;
  left: 1rem;
  font-size: 2rem;
}
.cartContainer__orderButton {
  @include mainFontBold;
  width: 75%;
  height: 4rem;
  border: none;
  background-color: rgb(62, 175, 124);

  font-size: $font-md;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #292d2b;
  }
}
.cartContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  flex-direction: column;
  align-items: center;
  cursor: default;
  z-index: $cartBar;
  overflow-y: scroll;

  h4 {
    @include flexLayout;
    margin: 2rem 1rem 0 0;
    width: 80%;

    font-size: $font-md;
    float: right;
  }
  p {
    font-size: $font-md;
  }
  a {
    @include mainFontBold;
    position: relative;

    left: -3.5rem;
    width: 70%;
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #292d2b;

    text-decoration: none;
    letter-spacing: 0.1rem;
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
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 0rem;
      height: 0.2rem;
      background-color: #292d2d;
      transition: 0.2s all ease-in-out;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 0;

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
  margin-right: 3rem;
  padding: 1.5rem 2rem;

  p {
    @include mainFontBold;
  }
  span {
    font-size: $font-md;
  }
}

.cartContainer__cartList {
  ul {
    height: 54vh;
    margin-top: 2rem;
    overflow-y: scroll;
  }
  li {
    @include flexLayout;
    position: relative;
    padding: 2rem;
    flex-direction: column;
  }
}

.cartContainer__cartIcon {
  font-size: 2rem;
}
.cartContainer__XButton {
  border: none;
  background: transparent;
  font-size: 3rem;
  cursor: pointer;
}
.cartContainer__totalQtn {
  @include mainFontBold;
  display: block;
  position: relative;
  width: 100%;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  z-index: 500;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -0.1rem;
    left: 0.9rem;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    background-color: red;

    z-index: -1;
  }
}

.cart-enter-active,
.cart-leave-active {
  transition: all 0.5s ease;
}

.cart-enter-from,
.cart-leave-to {
  transform: translate(38rem, 0);
}
.cart-enter-to,
.cart-leave-from {
  transform: translate(0rem, 0);
}

@media (min-width: 425px) {
  .cartIconContainer {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .cartContainer {
    width: 30rem;
  }
  .cartContainer__cartIcon {
    font-size: 3rem;
  }
  .cartContainer__totalQtn {
    @include mainFontBold;
    position: absolute;
    bottom: -0.5rem;
    right: -1rem;
    width: 2rem;
    height: 2rem;
    font-size: $font-sm;
    color: white;
    z-index: 500;

    &::before {
      top: -0.2rem;
      left: 0rem;
      width: 2rem;
      height: 2rem;
      z-index: -1;
    }
  }
  .cart-enter-from,
  .cart-leave-to {
    transform: translate(45rem, 0);
  }
}
@media (min-width: 725px) {
  .cartContainer {
    overflow-y: initial;
  }
  .cartContainer__cartList {
    ul {
      margin-top: 5rem;
    }
  }
}
@media (min-width: 1024px) {
  .cartContainer__cartList {
    ul {
      height: 65vh;
    }
  }
}
</style>