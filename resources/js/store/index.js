export default {
    state: {
        welcomeMessage: 'This is our Home Component'
    },
    getters:{
        welcome(state){
            return state.welcomeMessage;
        }
    },
    mutations:{},
    actions:{}
}