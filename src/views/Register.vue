<template>
	<div style="margin-top:1em;min-height: 600px;">
		<b-row>
			<b-col xs="10" offset-xs="1" sm="10" offset-sm="1" md="8" offset-md="2" lg="6" offset-lg="3" xl="4" offset-xl="4">
				<el-card class="box-card">
					<div slot="header" class="clearfix" align="center" style="font-size: 24px;"><span><b>注册新账号</b></span></div>
					<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 85%;">
						<el-form-item label="手机号" prop="phone" >
							<el-input placeholder="请输入手机号" v-model="input3" class="input-with-select" >
								<el-select v-model="select" slot="prepend" placeholder="请选择">
									<el-option label="中国+86" value="1"></el-option>
									<el-option label="美国+1" value="2"></el-option>
									<el-option label="日本+82" value="3"></el-option>
									<el-option label="韩国+81" value="4"></el-option>
								</el-select>
							</el-input>
						</el-form-item>

						<el-form-item label="验证码" prop="validate" :rules="[{min: 6, max: 6, message: '验证码为6个数字'},{ required: true, message: '验证码不能为空' }]"><el-input type="text" v-model="ruleForm.validate"></el-input></el-form-item>
						<el-form-item label="密码" prop="password" :rules="[{min: 8, max: 16, message: '密码长度在8到16个字符'},{ required: true, message: '密码不能为空' }]"><el-input type="password" v-model="ruleForm.password"></el-input></el-form-item>
						<el-form-item label="邮箱" prop="email" ><el-input type="email" v-model="ruleForm.email"></el-input></el-form-item>
						<el-form-item style="text-align: center;"><el-button type="primary" @click="submitForm('ruleForm')" style="width: 50%;">注册</el-button></el-form-item>
					</el-form>
				</el-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
				prepend:'',
				phone: '',
				validate:'',
				password: '',
				email: ''
			},
			input3: '',
			select: ''
		};
	},
	mounted() {
		document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8');
	},
	methods: {}
};
</script>

<style>

  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
