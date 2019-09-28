require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes } from './route'
import MainApp from './components/MainApp'
import storeage from './store'
import {initialize} from './Helpers/general'

Vue.use(VueRouter)
Vue.use(Vuex)

const  router = new VueRouter({
    routes,
    mode: 'history'
})
const store = new Vuex.Store(storeage)
initialize(store, router)

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp
    }
});
