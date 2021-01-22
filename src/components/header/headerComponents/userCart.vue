<template>
  <div class="cartContainer" @click="showUserCardAction">
    <img
      src="../../../assets/icons/shoppingCart.svg"
      alt="shopping Cart icon"
    />
    <p>{{ totalQuantityOfUserProducts }}</p>
    <ul class="cardDisplay" v-if="showUserCard">
      <li v-if="this.userCart.length === 0">
        There is no product in your card
      </li>
      <li v-else v-for="product in this.userCart" :key="product">
        {{ product[0] }} | Quantity:{{ product[1] }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    userCart: {
      required: true,
      type: Object,
    },
  },
  data() {
    return { showUserCard: false };
  },
  methods: {
    showUserCardAction() {
      this.showUserCard = !this.showUserCard;
    },
  },

  computed: {
    totalQuantityOfUserProducts() {
      return this.userCart.reduce((qtn, elem) => (qtn += elem[1]), 0);
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
  p {
    margin-left: 2rem;
    font-size: $font-bg;
    @include mainFontBold;
  }
  .cardDisplay {
    position: absolute;
    width: 158%;
    top: 112%;
    left: -58%;
    background-color: white;
    border-radius: 0 0 10px 10px;
    z-index: 1000;

    li {
      padding: 1rem;
    }
  }
}
</style>