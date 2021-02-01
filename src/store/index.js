import { createStore } from 'vuex'

import UserAuth from './userAuth/userAuth.js'


const store = createStore({
 
  modules: {
    UserAuth,
  }
})

export default store