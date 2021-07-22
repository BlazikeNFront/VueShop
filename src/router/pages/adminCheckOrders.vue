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
    <div class="userOrder_submitContainer">
      <loader class="userOrder__loader" v-if="loader"></loader>
      <loader v-if="this.loader"></loader>

      <button class="userOrder__updateButton" @click="this.updateOrders">
        FETCH ORDERS
      </button>
    </div>
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
import createHeaders from "../../components/mixins/createHeaders.js";
export default {
  mixins: [userOrdersMixin, createHeaders],
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
        const requestHeaders = this.createHeaders(token);

        const rawData = await fetch(
          `https://vueshopbackend.herokuapp.com/admin/getOrders?page=${page}`,
          {
            headers: requestHeaders,
            credentials: "include",
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
          this.$store.dispatch("ModalHandler/showModal", error.message);
        } else {
          this.$store.dispatch("ModalHandler/showModal", err.message);
        }
      }
    },
    updateOrders() {
      this.fetchOrders(1);
      this.$router.push({ name: "admin-orders", query: { page: 1 } });
    },
  },
};
</script>
<style lang='scss'>
</style>

