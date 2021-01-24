<template>
  <section class="searchResult">
    <product-box-small :product="product"></product-box-small>
  </section>
</template>
<script>
import ProductBoxSmall from "./searchResult/productBoxSmall.vue";
export default {
  components: {
    ProductBoxSmall,
  },
  data() {
    return {
      searchResult: null,
      product: {
        imageUrl: "../../../../assetsproducts/rods/rod1.jpg",
        title: "Okuma Rod",
      },
    };
  },
};
</script>
<style lang='scss'>
.searchResult {
  @include flexLayout;
  justify-content: center;
  flex-wrap: wrap;
  flex-wrap: wrap;
  width: 95%;
  margin-left: 50%;
  transform: translate(-50%);
}
</style>
