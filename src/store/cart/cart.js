export default {
    namespaced: true,
    state() {
        return {
            cart: [
               
            ],
        }
    },
    mutations: {
        addItemToCart(state,payload) {
            state.cart = payload;
            console.log(state.cart)
        },
        deleteItemFromCart(state, payload) {
           state.cart = payload;
            
        },
        resetCart(state, payload) {
            state.cart = payload
            
        }
    },
    actions: {
        addItemtoCart(context, payload) {
            
            const id = payload.id;
            const newCart = [...context.state.cart];
            
            const productIndex = newCart.findIndex(product => product.id = id) ;
            console.log(newCart,productIndex)
            if (productIndex < 0) {
                payload.quantity = 1
                newCart.push(payload);
                context.commit('addItemToCart', newCart);
               
            }
            else {
              
                newCart[productIndex].quantity++
            }
        
        },

        deleteItemFromCart(context, payload) {
            const id = payload;
            const newCard = [...context.state.card];
            const productIndex = newCard.find(product => product.id = id);
            newCard[productIndex].quantity--;
            if (newCard[productIndex].quantity === 0) {
                newCard.splice(productIndex,1)
            }
            context.commit('deleteItemFromCart',newCard)
        },
        resetCart(context) {
            context.commit('resetCart',[])
        }
    },
    getters: {
        getCart(state) {
            return state.cart
        }
    }
}