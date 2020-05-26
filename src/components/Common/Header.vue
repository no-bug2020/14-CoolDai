<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="secondary">
			<b-navbar-brand @click="navigate('/')" style="align-content: end;">
				<img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten" />
				酷代
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav class="ml-auto">
				<b-nav-form class="ml-auto">
					<b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
					<b-button variant="outline-dark" class="my-2 my-sm-0" type="submit">搜索</b-button>
				</b-nav-form>

				<b-navbar-nav v-for="(nav, index) in navs" :key="index">
					<b-nav-item href="#" @click="navigate(`${nav.url}`)">{{ nav.name }}</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto" v-if="$store.state.token === ''">
					<b-navbar-nav v-for="(l, index) in login" :key="index">
						<b-nav-item href="#" @click="navigate(`${l.url}`)">{{ l.name }}</b-nav-item>
					</b-navbar-nav>
				</b-navbar-nav>
				<b-navbar-nav class="ml-auto" v-if="$store.state.token !== ''">
					<b-navbar-nav>
						<b-nav-item href="#">个人中心</b-nav-item>
						<b-nav-item href="#" @click="logout">注销</b-nav-item>
					</b-navbar-nav>
				</b-navbar-nav>
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
				{ name: '官方推荐', url: '/', icon: 'ios-book' },
				{ name: '案例库', url: '/', icon: 'logo-octocat' },
				{ name: '产品服务', url: '/', icon: 'logo-usd' },
				{ name: '交易中心', url: '/', icon: 'md-chatboxes' },
				{ name: '关于我们', url: '/', icon: 'md-beer' }
			],
			login: [{ name: '登陆', url: '/login' }, { name: '注册', url: '/register' }]
		};
	},
	methods: {
		navigate(data) {
			// console.log(data)
			this.$router.push({ path: data }).catch(data => {});
		},
		logout() {
			this.$store.commit('LOGOUT');
			this.$router.push({ name: 'Index' });
			this.$emit('LOGOUT');
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
</style>
