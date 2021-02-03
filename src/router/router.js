import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './pages/mainPage.vue'
import SignUpForm from './pages/userSignUp.vue'
import SearchResult from './pages/searchResult.vue'
import ProductDetails from './pages/productDetails.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/search', component: SearchResult },
        { path: '/productDetails/:productId', component: ProductDetails},
        { path: '/SignUp', component: SignUpForm },
        
    ]
});

export default  router;