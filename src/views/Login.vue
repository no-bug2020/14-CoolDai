<template>
	<div style="margin-top:1em;min-height: 630px;">
		<b-row>
			<b-col xs="10" offset-xs="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="6" offset-lg="3" xl="4" offset-xl="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix" align="center" style="font-size: 24px;"><span><b>登录</b></span></div>
					<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 85%;">
						<el-form-item label="手机号" prop="phone" :rules="[{ required: true, message: '手机号不能为空' }]">
							<el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="验证码" prop="validate" :rules="[{min: 6, max: 6, message: '验证码为6个数字'},{ required: true, message: '验证码不能为空' }]"><el-input type="text" v-model="ruleForm.validate" autocomplete="off"></el-input></el-form-item>
						<el-form-item label="密码" prop="password" :rules="[{min: 8, max: 16, message: '密码长度在8到16个字符'},{ required: true, message: '密码不能为空' }]"><el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input></el-form-item>
						<el-form-item style="text-align: center;"><el-button type="primary" @click="submitForm('ruleForm')" style="width: 50%;">登录</el-button></el-form-item>
					</el-form>
				</el-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			ruleForm: {
				phone: '',
				validate: '',
				password: ''
			}
		};
	},
	methods: {
		submitForm() {
			if(this.ruleForm.phone == '12345678910' && this.ruleForm.validate == '123456' && this.ruleForm.password == 'password'){
				localStorage.setItem("name",'user1');
				localStorage.setItem("password","password");
				localStorage.setItem("isLogin",1);
				this.$message({
          			showClose: true,
          			message: '登录成功',
          			type: 'success'
        		});
				var path = this.$route.query.redirect
				console.log(this.$route.query)
				if(!this.$route.query.hasOwnProperty("redirect")){
					this.$router.push('/');
				}else{
					this.$router.push(path);
				}
				window.location.reload()
			}else if(this.ruleForm.phone != '12345678910'){
				this.$message({
          			showClose: true,
          			message: '手机号未注册',
          			type: 'error'
        		});
			}else if(this.ruleForm.validate != '123456'){
				this.$message({
          			showClose: true,
          			message: '验证码错误',
          			type: 'error'
        		});
			}else if(this.ruleForm.password != 'password'){
				this.$message({
          			showClose: true,
          			message: '密码错误',
          			type: 'error'
        		});
			}
		// 	this.axios({
		// 		url: this.globalUrl + 'login',
		// 		method: 'POST',
		// 		data: {
		// 			name: this.ruleForm.username,
		// 			password: this.ruleForm.password
		// 		},
		// 		dataType: 'JSONP',
		// 		headers: { 'Content-Type': 'application/json' }
		// 	})
		// 		.then(res => {
		// 			console.log(res);
		// 			if (res.status === 200) {
		// 				this.$store.commit('SET_TOKEN', res.data);
		// 				this.$router.push({ name: 'Index' });
		// 				this.$message({
		// 					message: '登陆成功',
		// 					type: 'success'
		// 				});
		// 			} else {
		// 				this.$message({
		// 					message: '登陆失败',
		// 					type: 'error'
		// 				});
		// 			}
		// 		})
		// 		.catch(error => {
		// 			this.$message.error('登陆异常');
		// 		});
		}
	}
};
</script>

<style scoped>
body {
	background: linear-gradient(-40deg, rgba(108, 222, 113, 0.53) 20%, rgba(134, 255, 226, 0.82) 100%) !important;
}
</style>
