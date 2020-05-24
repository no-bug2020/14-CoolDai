import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Publish from '../views/Publish.vue';
Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Index',
	component: Index,
}, {
	path: '/publish',
	name: 'Publish',
	component: Publish,
},{
	path:'/login',
	name:'Login',
	component:Login
},

];

const router = new VueRouter({
	mode: "history",
	routes
})

router.beforeEach((to, from, next) => {
    const token= store.state.token ? store.state.token : window.sessionStorage.getItem("token");
    if (to.meta.requireAuth &&!token) {
        next({path: 'login'});
    }
    // if (to.path==='/login'&&token!==""){
    //     next({Index});
    // }

    next();
});

router.beforeEach((to,from ,next) => {
    const token= store.state.token ? store.state.token : window.sessionStorage.getItem("token");
    const nickname= store.state.token ? store.state.nickname : window.sessionStorage.getItem("nickname");
    const avatar= store.state.token ? store.state.avatar : window.sessionStorage.getItem("avatar");
    if(token&&nickname&&avatar){
        store.state.token = token;
        store.state.nickname = nickname;
        store.state.avatar = avatar;
        next();
    }else{
        next({Login});
    }
});
export default router
