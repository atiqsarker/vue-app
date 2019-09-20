require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { routes } from './route'
import MainApp from './components/MainApp'


Vue.use(VueRouter)
Vue.use(Vuex)

const  router = new VueRouter({
    routes,
    mode: 'history'
})
import storeage from './store'
const store = new Vuex.Store(storeage)

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp
    }
});
