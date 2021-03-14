import { createStore } from 'vuex'

import UserAuth from './userAuth/userAuth.js';
import Cart from './cart/cart.js';
import Admin from './admin/admin.js';

const store = createStore({
 
  modules: {
    UserAuth,
    Cart,
    Admin,
    
  }
})

export default store