import { createStore } from 'vuex';
import CarouselsData from './CarouselData/CarouselData.js'



const store = createStore({
    modules: {
        CarouselsData,
    }
})

export default store;