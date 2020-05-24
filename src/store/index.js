import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
	state: {
		token: '',
		nickname: '',
		avatar: '',
	},
	mutations: {
		SET_TOKEN: (state, payload) => {
			console.log("进入SET_TOKEN方法");
			state.token = payload.token;
			state.nickname = payload.user.nickname;
			state.avatar = payload.user.avatar;
			window.sessionStorage.setItem('token', payload.token);
			window.sessionStorage.setItem('nickname', payload.user.nickname);
			window.sessionStorage.setItem('avatar', payload.user.avatar);
		},

		LOGOUT: (state, data) => {
			state.token = '';
			state.nickname = '';
			state.avatar = '';
			window.sessionStorage.removeItem("token");
			window.sessionStorage.removeItem("nickname");
			window.sessionStorage.removeItem("avatar");

		}
	},
	actions: {},
	modules: {}
})

export default store