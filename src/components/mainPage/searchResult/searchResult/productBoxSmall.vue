<template>
  <div class="productBoxSmall">
    <img src="../../../../assets/products/rods/rod1.jpg" />
    <h4>{{ this.product.title }}</h4>
    <div>
      <p></p>
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
  height: 30rem;
  border: 2px solid #33cc80;

  img {
    max-width: 100%;
  }
}
</style>