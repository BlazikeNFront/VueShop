<template>
  <div class="productBoxSmall">
    <div class="productBoxSmall__hoverBackdrop"></div>
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
      return this.product.description.split("").splice(0, 100).join("") + "...";
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
  background-color: White;
  font-size: $font-md;

  border: 2px solid $primiary-color;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 0px 10px $primiary-color;
  &:hover .productBoxSmall__hoverBackdrop {
    display: block;
  }
  /*  &:hover .productBoxSmall__imageBox,
  &:hover .productBoxSmall__textContent {
    // opacity: 0.5;
  } */
  &:hover button {
    opacity: 1;
    transform: translate(-50%, 150%);
    &:hover {
      background-color: #f5e3e6;
      border-color: #ff6600;
      color: #ff6600;
    }
  }
}
.productBoxSmall__hoverBackdrop {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  background-color: white;
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
  font-weight: 600;
}
.productBoxSmall__productPrice {
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  bottom: 8.5rem;

  font-size: 1.7rem;
  font-weight: 600;
}
.productBoxSmall__arrowIcon {
  font-size: $font-md;
}
.productBoxSmall__productDesc {
  margin: 0 0.5rem;
  position: absolute;
  bottom: 3rem;
  display: block;
  font-size: $font-sm;
}
</style>