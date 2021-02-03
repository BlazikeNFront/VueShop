<template>
  <div class="productBoxSmall">
    <img
      src="../../assets/products/rods/rod1.jpg"
      :alt="product.title + 'rod'"
    />
    <h4>{{ this.product.title }}</h4>
    <div>
      <p>{{ this.product.price }} $</p>
      <button @click="this.$router.push(`/productDetails/${this.product.id}`)">
        Details
      </button>
      <button>Add to cart</button>
    </div>
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
};
</script>
<style lang='scss'>
.productBoxSmall {
  margin: 1rem;
  width: 22%;
  font-size: $font-md;
  border: 2px solid $primiary-color;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 0px 10px $primiary-color;
  img {
    max-width: 100%;
    margin-bottom: 1rem;
  }
  div {
    @include flexLayout;
    justify-content: space-around;
    margin: 1rem;
  }
  button {
    background: transparent;
    border: 2px solid $primiary-color;
    border-radius: 5px;
    color: inherit;
    padding: 1rem;
  }
}
</style>