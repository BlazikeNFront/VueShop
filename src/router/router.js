import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./pages/mainPage.vue";
import SignUpForm from "./pages/userSignUp.vue";
import SearchResult from "./pages/searchResult.vue";
import ProductDetails from "./pages/productDetails.vue";
import AdminAddProduct from "./pages/AddProduct.vue";
import AdminCMS from "./pages/adminCMS.vue";
import AdminOrders from "./pages/adminCheckOrders.vue";
import UserOrder from "./pages/UserOrder.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/search/:query", component: SearchResult },
    { path: "/productDetails/:productId", component: ProductDetails },
    { path: "/SignUp", component: SignUpForm },
    { path: "/Admin", component: AdminCMS },
    { path: "/Admin/AddProduct", component: AdminAddProduct },
    { path: "/userOrder", component: UserOrder },
    { path: "/user/historyOrder", component: UserOrder },
    { path: "/Admin/orders", component: AdminOrders },
  ],
});

export default router;
