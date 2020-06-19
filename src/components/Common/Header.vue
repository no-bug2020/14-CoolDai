<template>
	<div>
		<b-navbar toggleable="lg" class="azure">
			<b-navbar-brand @click="navigate('/')" style="align-content: end;color:white;">
				<img src="../../../public/logo.png" style="width:auto;height:30px" class="d-inline-block align-top" alt="CoolDai" />
				酷代
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>

				<ul class="nav navbar-nav" v-for="(nav, index) in navs" :key="index">
      				<li class="nav-item">
        				<a class="nav-link" style="color:white;" @click="navigate(`${nav.url}`)">{{ nav.name }}</a>
      				</li>
				</ul>
				<div class="ml-auto">
					<form class="form-inline my-2 my-lg-0">
      					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      					<!-- <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button> -->
    				</form>
				</div>
				
				<!-- <template v-if="$store.state.token === ''"> -->
				<template v-if="!checkLogin()">
					<ul class="nav navbar-nav" v-for="(l, index) in login" :key="'info-'+index">
      					<li class="nav-item">
        					<a class="nav-link" style="color:white;" href="#" @click="navigate(`${l.url}`)">{{ l.name }}</a>
      					</li>
					</ul>
				</template>

				<!-- <template v-if="$store.state.token !== ''"> -->
				<template v-if="checkLogin()">
					
					<ul class="nav navbar-nav">
      					<li class="nav-item">
        					<el-dropdown>
  								<span class="el-dropdown-link" style="color:white;font-size:16px;">
    								{{name}}<i class="el-icon-arrow-down el-icon--right"></i>
  								</span>
  								<el-dropdown-menu slot="dropdown">
    								<el-dropdown-item><a class="nav-link" style="color:black;" href="/user">个人中心</a></el-dropdown-item>
    								<el-dropdown-item><a class="nav-link" style="color:black;" @click="logout()">注销</a></el-dropdown-item>
  								</el-dropdown-menu>
							</el-dropdown>
      					</li>
						
					</ul>
				</template>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			theme1: 'dark',
			navs: [
				{ name: '需求发布', url: '/publish', icon: 'ios-book' },
				{ name: '签约接单', url: '/task' ,icon:'ios-book'},
				{ name: '接单人员', url: '/programmer', icon: 'ios-book'},
				{ name: '案例库', url: '/case', icon: 'logo-octocat' },
				// { name: '关于我们', url: '/', icon: 'md-beer' }
			],
			login: [{ name: '登录', url: '/login' }, { name: '注册', url: '/register' }],
			name: localStorage.getItem("name")
		};
	},
	methods: {
		navigate(data) {
			// console.log(data)
			this.$router.push({ path: data }).catch(data => {});
		},
		logout() {
			// this.$store.commit('LOGOUT');
			// this.$router.push({ name: 'Index' });
			// this.$emit('LOGOUT');
			localStorage.removeItem('name')
			localStorage.removeItem('password')
			localStorage.removeItem('isLogin')
			window.location.reload();
		},
		checkLogin(){
			if(localStorage.getItem('isLogin')== 1){
				return true
			}else{
				return false
			}
		}
	},
	computed: {
		token() {
			return this.$store.state.token;
		},
		nickname() {
			return this.$store.state.nickname;
		}
	}
};
</script>

<style>
body {
	margin: 0;
}
.image {
	width: 35px;
	height: 35px;
}
.azure {
    /* background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%); */
	background-color: #5073D9;
}
</style>
