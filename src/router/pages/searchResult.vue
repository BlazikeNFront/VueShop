<template>
  <section class="searchData">
    <loader v-if="!searchData"></loader>
    <div v-else>
      <product-box-small
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
      this.$store.dispatch("UserSearch/handleSearchRequest", query);
    },
  },
  computed: {
    searchData() {
      return this.$store.getters["UserSearch/getSearchResultData"];
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
</style>
