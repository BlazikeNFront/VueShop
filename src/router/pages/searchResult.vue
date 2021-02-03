<template>
  <section class="searchResult">
    <loader v-if="!product"></loader>
    <product-box-small v-else :product="product"></product-box-small>
  </section>
</template>
<script>
import ProductBoxSmall from "../../components/searchResult/productBoxSmall.vue";

export default {
  components: {
    ProductBoxSmall,
  },
  data() {
    return {
      searchResult: null,
      product: {
        imageUrl: "../../assets/products/rods/rod1.jpg",
        title: "Okuma Rod",
        price: 105.77,
        id: 22545,
      },
    };
  },
};
</script>
<style lang='scss'>
.searchResult {
  margin-top: 2rem;
  @include flexLayout;
  justify-content: center;
  flex-wrap: wrap;

  width: 95%;
  margin-left: 50%;
  transform: translate(-50%);
}
</style>
