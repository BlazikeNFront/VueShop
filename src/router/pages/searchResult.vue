<template>
  <section class="searchData">
    <loader v-if="!searchData"></loader>
    <div v-else>
      <h3 class="serachData__h3" v-if="searchData.length === 0">
        No single product was found :(
      </h3>
      <product-box-small
        v-else
        v-for="product in searchData"
        :key="product._id"
        :product="product"
      ></product-box-small>
    </div>
  </section>
</template>
<script>
import ProductBoxSmall from "../../components/searchResult/productBoxSmall.vue";

export default {
  components: {
    ProductBoxSmall,
  },
  mounted() {
    this.handleSearchRequest();
  },
  methods: {
    handleSearchRequest() {
      const query = this.$route.params.query;
      if (this.storeQuery === query) {
        return;
      }
      this.$store.dispatch("UserSearch/handleSearchRequest", query);
    },
  },
  computed: {
    searchData() {
      return this.$store.getters["UserSearch/getSearchResultData"];
    },
    storeQuery() {
      return this.$store.getters["UserSearch/getQuery"];
    },
  },
};
</script>
<style lang='scss'>
.searchData {
  margin-top: 2rem;
  @include flexLayout;
  justify-content: center;
  flex-wrap: wrap;

  width: 95%;
  margin-left: 50%;
  transform: translate(-50%);
}
.serachData__h3 {
  margin-top: 25rem;
  font-size: $font-bg;
  color: $primiary-color;
}
</style>
