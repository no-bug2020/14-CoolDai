<template>
	<div style="margin-top:1em;">
		<el-row>
			<el-col :span="8" :offset="8">
				<el-card class="box-card">
					<div slot="header" class="clearfix"><span>登录</span></div>
					<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="用户名" prop="username"><el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input></el-form-item>
						<el-form-item label="密码" prop="password"><el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input></el-form-item>
						<el-form-item><el-button type="primary" @click="submitForm('ruleForm')">提交</el-button></el-form-item>
					</el-form>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			ruleForm: {
				username: '',
				password: ''
			}
		};
	},
	methods: {
		submitForm() {
			this.axios({
				url: this.globalUrl + 'login',
				method: 'POST',
				data: {
					name: this.ruleForm.username,
					password: this.ruleForm.password
				},
				dataType: 'JSONP',
				headers: { 'Content-Type': 'application/json' }
			})
				.then(res => {
					console.log(res);
					if (res.status === 200) {
						this.$store.commit('SET_TOKEN', res.data);
						this.$router.push({ name: 'Index' });
						this.$message({
							message: '登陆成功',
							type: 'success'
						});
					} else {
						this.$message({
							message: '登陆失败',
							type: 'error'
						});
					}
				})
				.catch(error => {
					this.$message.error('登陆异常');
				});
		}
	}
};
</script>

<style scoped>
body {
	background: linear-gradient(-40deg, rgba(108, 222, 113, 0.53) 20%, rgba(134, 255, 226, 0.82) 100%) !important;
}
</style>
