import { createStore } from 'vuex'

import UserAuth from './userAuth/userAuth.js'
import Cart from './cart/cart.js'

const store = createStore({
 
  modules: {
    UserAuth,
    Cart,
    
  }
})

export default store