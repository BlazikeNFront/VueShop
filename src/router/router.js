import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./pages/mainPage.vue";

import SearchResult from "./pages/searchResult.vue";
import UserAuth from "./pages/userAuth.vue";

import ProductDetails from "./pages/productDetails.vue";
import AdminAddProduct from "./pages/AddProduct.vue";
import AdminCMS from "./pages/adminCMS.vue";
import AdminOrders from "./pages/adminCheckOrders.vue";
import UserCart from "./pages/UserCart.vue";
import UserOrders from "./pages/UserOrders.vue";
import UserMenu from "./pages/UserMenu.vue";

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
    { name: "user-cart", path: "/UserCart", component: UserCart },
    { name: "user-orders", path: "/UserOrders", component: UserOrders },
    { name: "user-menu", path: "/menu", component: UserMenu },
    { path: "/user/historyOrder", component: UserCart },
    { name: "admin-orders", path: "/Admin/orders", component: AdminOrders },
  ],
});

export default router;
