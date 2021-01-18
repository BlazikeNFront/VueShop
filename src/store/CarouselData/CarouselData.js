 const CarouselsData = {
    namespaced:true,
    state() {
        return {
            sliderSrc:null,
        }
    },
     mutations: {
         updateSliderSrc(state, payload) {
             state.sliderSrc = payload;
        }
    },
     actions: {
        /* async updateSliderSrc(context, payload) {
             context.commit()
        } */
    },
    getters:{},
}

export default CarouselsData;