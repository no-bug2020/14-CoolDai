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
import CaseInfo from '../views/CaseInfo.vue';
import Register from '../views/Register.vue';
import Release from '../views/Release.vue'
import HelpDocument from '../views/HelpDocument.vue';
import User from '../views/User.vue';
import ProgrammerList from '../views/ProgrammerList.vue';
import ProgrammerInfo from '../views/ProgrammerInfo.vue';
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
	meta:{auth:true}
},
{
	path: '/publish/:type/release',
	name: 'Release',
	component: Release,
	meta:{auth:true}
},
{
	path:'/login',
	name:'Login',
	component:Login
},{
	path:'/task',
	name:'Task',
	component:Task,
	meta:{auth:true}
},{
	path:'/task/certification',
	name:'Certification',
	component:Certification,
	meta:{auth:true}
},{
	path:'/recommend',
	name:'Recommend',
	component:Recommend
},{
	path:'/case',
	name:'Case',
	component:Case
},{
	path:'/case/info',
	name:'CaseInfo',
	component:CaseInfo
},{
	path:'/register',
	name:'Register',
	component:Register
},{
	path:'/helpdoc',
	name:'HelpDocument',
	component:HelpDocument
},{
	path:'/user',
	name:'User',
	component:User,
	meta:{auth:true}
},{
	path:'/programmer',
	name:'ProgrammerList',
	component:ProgrammerList
},{
	path:'/programmer/info',
	name:'ProgrammerInfo',
	component:ProgrammerInfo
}

];

const router = new VueRouter({
	mode: "history",
	routes
})

router.beforeEach((to, from, next) => {
    // const token= store.state.token ? store.state.token : window.sessionStorage.getItem("token");
    // if (to.meta.requireAuth &&!token) {
    //     next({path: 'login'});
    // }
    // if (to.path==='/login'&&token!==""){
    //     next({Index});
	// }
	
	if(to.matched.some( m => m.meta.auth)){       
		if(localStorage.getItem('isLogin')== 1) {       
			next()   // 正常跳转到你设置好的页面     
		}else{
		　　 next({
				path: "/login",
				query: { redirect: to.fullPath }
		  	})
		} 
	}else{
		next() 
	} 

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
