import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./pages/mainPage.vue";

import SearchResult from "./pages/searchResult.vue";
import UserAuth from "./pages/userAuth.vue";

import ProductDetails from "./pages/productDetails.vue";
import AdminAddProduct from "./pages/AddProduct.vue";
import AdminCMS from "./pages/adminCMS.vue";
import AdminOrders from "./pages/adminCheckOrders.vue";
import UserOrder from "./pages/UserOrder.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    {
      name: "search-for-product",
      path: "/search/:searchQuery",
      component: SearchResult,
    },
    { path: "/productDetails/:productId", component: ProductDetails },
    {
      name: "user-login",
      path: "/User/login",
      component: UserAuth,
    },

    {
      name: "user-signUp",
      path: "/User/signUp",
      component: UserAuth,
    },

    { path: "/Admin", component: AdminCMS },
    { path: "/Admin/AddProduct", component: AdminAddProduct },
    { name: "user-order", path: "/userOrder", component: UserOrder },
    { path: "/user/historyOrder", component: UserOrder },
    { name: "admin-orders", path: "/Admin/orders", component: AdminOrders },
  ],
});

export default router;
