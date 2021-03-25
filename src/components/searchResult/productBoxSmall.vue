<template>
  <div class="productBoxSmall">
    <div class="productBoxSmall__imageBox">
      <img
        :src="product.imagePath.medium"
        :alt="product.name + ' image'"
        class="productBoxSmall__imageBox__img"
      />
    </div>
    <div class="productBoxSmall__textContent">
      <h4 class="productBoxSmall__productTitle">{{ this.product.name }}</h4>
      <p class="productBoxSmall__productPrice">{{ this.product.price }} $</p>
      <p class="productBoxSmall__productDesc">{{ cutDesc }}</p>
    </div>
    <button class="productBoxSmall__button" @click="checkDetails">
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        class="productBoxSmall__arrowIcon"
      ></font-awesome-icon>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      shortDesc: this.cutDesc,
    };
  },
  computed: {
    cutDesc() {
      return this.product.description.split("").splice(0, 150).join("") + "...";
    },
  },
  methods: {
    checkDetails() {
      this.$store.dispatch("UserSearch/setProductDetails", this.product._id);
      this.$router.push(`/productDetails/${this.product._id}`);
    },
  },
};
</script>
<style lang='scss'>
.productBoxSmall {
  position: relative;
  margin: 1rem;
  width: 25rem;
  height: 40rem;
  font-size: $font-md;
  color: $primiary-color;
  border: 2px solid $primiary-color;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 0px 10px $primiary-color;
  &:hover .productBoxSmall__imageBox,
  &:hover .productBoxSmall__textContent {
    opacity: 0.5;
  }
  &:hover button {
    opacity: 1;
    transform: translate(-50%, 90%);
    &:hover {
      background-color: $primiary-color;
      border-color: black;
      color: black;
    }
  }
  div {
    @include flexLayout;
    justify-content: space-around;
  }
}
.productBoxSmall__imageBox__img {
  max-width: 100%;
  height: 22rem;

  transition: all 0.1s ease;
}
.productBoxSmall__imageBox {
  width: 100%;
  margin: 0;
}
.productBoxSmall__button {
  opacity: 0;
  @include centerAbsolute;
  color: $primiary-color;
  top: 25%;
  background-color: black;
  padding: 1rem 5rem;
  @include mainBorder;
  border-radius: 20px;
  transition: all 0.5s ease;
  cursor: pointer;
}
.productBoxSmall__textContent {
  @include flexLayout;
  flex-direction: column;
}
.productBoxSmall__productTitle {
  margin: 1rem;
  font-size: $font-bg;
}
.productBoxSmall__productPrice {
  margin-bottom: 1rem;
}
.productBoxSmall__arrowIcon {
  font-size: $font-md;
}
.productBoxSmall__productDesc {
  margin: 1rem;
  display: block;
  font-size: $font-sm;
}
</style>