<template>
  <div class="productBoxSmall">
    <div class="productBoxSmall__imageBox">
      <img
        src="../../assets/products/rods/rod1.jpg"
        :alt="product.title + 'rod'"
        class="productBoxSmall__imageBox__img"
      />

      <button
        class="productBoxSmall__button"
        @click="this.$router.push(`/productDetails/${this.product.id}`)"
      >
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="productBoxSmall__arrowIcon"
        ></font-awesome-icon>
      </button>
    </div>
    <h4 class="productBoxSmall__productTitle">{{ this.product.title }}</h4>
    <p class="productBoxSmall__productPrice">{{ this.product.price }} $</p>
    <p class="productBoxSmall__productDesc">{{ cutDesc }}</p>
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
      console.log(this.product.desc.split("").splice(0, 20).join(""));
      return this.product.desc.split("").splice(0, 70).join("") + "...";
    },
  },
};
</script>
<style lang='scss'>
.productBoxSmall {
  margin: 1rem;
  width: 22rem;
  font-size: $font-md;
  color: $primiary-color;
  border: 2px solid $primiary-color;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 0px 10px $primiary-color;

  div {
    @include flexLayout;
    justify-content: space-around;
  }
}
.productBoxSmall__imageBox__img {
  max-width: 100%;
  margin-bottom: 1rem;
  transition: all 0.5s ease;
}
.productBoxSmall__imageBox {
  width: 100%;
  margin: 0;

  &:hover img {
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