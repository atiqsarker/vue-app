export default {
    state: {
        welcomeMessage: 'this is our Home Component'
    },
    getters:{
        welcome(state){
            return state.welcomeMessage;
        }
    },
    mutations:{},
    actions:{}
}