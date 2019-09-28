import storeage from "./store"

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = storeage.state.currentUser;
    console.log(requiresAuth);
    if (requiresAuth && !currentUser){
        next('/login');
    } else if(to.path == '/login' && currentUser){
        next('/');
    }else {
        next();
    }
})