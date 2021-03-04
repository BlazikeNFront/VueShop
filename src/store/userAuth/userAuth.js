
export default  {
    namespaced: true,
    state() {
        return {
            token: null,
            userId:null,
        }
    },
    mutations: {
        handleLogin(state,payload) {
            state.token = payload.token
            state.userId = payload.userId
        
        }
    },
    actions: {
        async handleLogin(context,payload) {
            try {
                const userData = {
                    email: payload.userName,
                    password:payload.password
                }
                const data = await fetch("http://localhost:3000/userAuth", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                });
               
                const dataJSON = await data.json();
                if (data.status !== 200) {
                    return dataJSON.message
                 }
                else {
                    const payload = {
                        token: dataJSON.token,
                        userId: dataJSON.userId
                        
                    }
                    context.commit('handleLogin',payload)
                 
                }
                
            }
            catch (err) { console.log(err) }
        
      }
    },
    getters: {},
    

}