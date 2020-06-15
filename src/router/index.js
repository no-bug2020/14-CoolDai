import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Index from '../views/Index.vue'
import Feedback from '../views/Feedback.vue'
import Login from '../views/Login.vue'
import Publish from '../views/Publish.vue';
import Task from '../views/Task.vue';
import Certification from '../views/Certification.vue';
import Recommend from '../views/Recommend.vue';
import Case from '../views/Case.vue';
import Product from '../views/Product.vue';
import Transaction from '../views/Transaction.vue';
import Register from '../views/Register.vue';
import Release from '../views/Release.vue'
import Test from '../views/Test.vue'
Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Index',
	component: Index,
},{
	path: '/feedback',
	name: 'Feedback',
	component: Feedback,
},{
	path: '/publish',
	name: 'Publish',
	component: Publish,
},
{
	path: '/publish/:type/release',
	name: 'Release',
	component: Release,
},
{
	path:'/login',
	name:'Login',
	component:Login
},{
	path:'/task',
	name:'Task',
	component:Task
},{
	path:'/task/certification',
	name:'Certification',
	component:Certification
},{
	path:'/recommend',
	name:'Recommend',
	component:Recommend
},{
	path:'/case',
	name:'Case',
	component:Case
},{
	path:'/product',
	name:'Product',
	component:Product
},{
	path:'/transaction',
	name:'Transaction',
	component:Transaction
},{
	path:'/register',
	name:'Register',
	component:Register
},{
	path:'/test',
	name:'Test',
	component:Test
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
