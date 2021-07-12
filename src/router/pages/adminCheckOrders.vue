<template>
  <section class="userOrders userOrders--adminView">
    <h2>Users orders</h2>
    <user-orders-table
      v-if="this.orders.length > 0"
      :userOrders="this.orders"
      :admin="true"
      @orderStatusChanged="this.fetchOrders(page)"
    ></user-orders-table>
    <p v-else>There is no orders</p>
    <loader v-if="this.loader"></loader>

    <button class="userOrders--adminView__button" @click="this.fetchOrders">
      FETCH ORDERS
    </button>

    <pagination-buttons
      class="searchResult__paginationButtons"
      :numberOfPages="numberOfPages"
      :currentPage="currentPage"
      @pageChange="handleChangePageRequest"
      @previousPageClick="
        handleChangePageRequest(parseInt(this.currentPage) - 1)
      "
      @nextPageClick="handleChangePageRequest(parseInt(this.currentPage) + 1)"
    ></pagination-buttons>
  </section>
</template>
<script >
import PaginationButtons from "../../components/common/PaginationButtons.vue";
import UserOrdersTable from "../../components/UserActions/userOrdersTable.vue";
import userOrdersMixin from "../../components/mixins/userOrders.js";
export default {
  mixins: [userOrdersMixin],
  components: {
    PaginationButtons,
    UserOrdersTable,
  },

  mounted() {
    const page = this.$route.query.page;
    this.fetchOrders(page);
  },

  methods: {
    async fetchOrders(page) {
      try {
        const token = this.$store.getters["UserAuth/getToken"];
        const requestHeaders = new Headers();
        requestHeaders.append("Content-Type", "application/json");
        if (token) {
          requestHeaders.append("Authorization", `Bearer ${token}`);
        }

        const rawData = await fetch(
          `http://localhost:3000/admin/getOrders?page=${page}`,
          {
            headers: requestHeaders,
          }
        );

        if (rawData.status !== 200) {
          throw new Error("Couldnt fetched data from server");
        }
        const ordersData = await rawData.json();

        const { data, totalItems } = ordersData;
        const numberOfPages = Math.ceil(totalItems / 10);
        this.orders = data;
        this.numberOfPages = numberOfPages;
      } catch (err) {
        if (err.body) {
          const error = await err.json();
          this.$store.dispatch("ModalHandler/showError", error.message);
        } else {
          this.$store.dispatch("ModalHandler/showError", err.message);
        }
      }
    },
  },
};
</script>
<style lang="scss">
.userOrders--adminView__button {
  @include button;
  margin: 1rem;
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
