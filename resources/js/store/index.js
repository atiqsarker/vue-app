import { getLocalUser } from "../Helpers"

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: [],
    },
    getters:{
        currentUser(state){
            return state.currentUser;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        loading(state){
            return state.loading;
        },
        authError(state){
            return state.auth_error;
        },
        customers(state){
            return state.customers;
        },
    },
    mutations:{
        login(state){
            state.loading = true;
            state.auth_error = null;
        },// end login function
        loginSuccess(state, payload){
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },// end loginSuccess function
        loginFailed(state, payload){
            state.loading = false;
            state.auth_error = payload.error;
        }, // end loginFailed function
        logout(state){
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        }, // end logout function
        updateCustomers(state, payload){
            state.customers = payload;
        }, // end updateCustomers function

    }, // end mutations block
    actions:{
        login(context){
            context.commit("login");
        }, // end login action
        getCustomers(context){
            axios.get('api/customers')
            .then((response) => {
                // console.log(response.data);
                context.commit('updateCustomers', response.data)
            })
        }, // end getCustomers action
    } // end actions block
}// end export default block