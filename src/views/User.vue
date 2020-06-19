<template>
	<div class="container" style="min-height: 650px;">
		<div class="row">
			<div class="col-md-2 col-sm-12" style="margin-top: 2em;">
				<el-aside width="100%" style="background-color: white">
					<el-menu default-active="1">
						<el-menu-item index="1" @click="choose(1)">我的</el-menu-item>
						<el-menu-item index="2" @click="choose(2)">资金账户</el-menu-item>
						<el-menu-item index="3" @click="choose(3)">信息设置</el-menu-item>
					</el-menu>
				</el-aside>
			</div>
			<div class="col-md-10 col-sm-12" style="margin-bottom:2em;">
				<!--我的工作-->
				<el-tabs  v-if="active == 1" v-model="activeJob"  style="margin-top: 2em;">
					<el-tab-pane label="我的工作" name="first">
						<template v-for="i in 4" >
							<el-card class="box-card" shadow="hover"  style="margin-top: 1em;">
								<div class="row">
									<div class="col-md-2 col-xs-12" style="text-align: center;">
										<div class="demo-basic--circle">
											<div class="block">
												<el-avatar :size="100" src="#"></el-avatar>
											</div>
											<div class="sub-title">我的工作</div>
										</div>
									</div>
									<div class="col-md-8 col-xs-12">
										<div class="alert alert-light" role="alert">
											<h4 class="alert-heading">项目名：人事管理系统</h4>
											<hr>
											<b>项目简介：</b>该管理系统的主要功能是管理员薪资料、管理员工考勤、计算员工薪资和业绩评定等。
												大部分涉及对敏感数据修改的工作都仅由人事部完成...
										</div>
									</div>
									<div class="col-md-2 col-xs-12 connect">
										<button type="button" class="btn btn-outline-primary" style="font-size:14px;" onclick="window.location.href='/case/info'">立即联系</button>
										<button type="button" class="btn btn-outline-primary" style="font-size:14px;" onclick="window.location.href='/case/info'">项目详情</button>
										<!--如果没登录，链接到登录页面。登录的话跳到签约页面-->
									</div>
								</div>
							</el-card>
						</template>
					</el-tab-pane>

					<el-tab-pane label="我的发布" name="second">
						<template v-if="active == 1" v-for="i in 4" >
							<el-card class="box-card" shadow="hover"  style="margin-top: 1em;">
								<div class="row">
									<div class="col-md-2 col-xs-12" style="text-align: center;">
										<div class="demo-basic--circle">
											<div class="block">
												<el-avatar :size="100" src="#"></el-avatar>
											</div>
											<div class="sub-title">我的发布</div>
										</div>
									</div>
									<div class="col-md-8 col-xs-12">
										<div class="alert alert-light" role="alert">
											<h4 class="alert-heading">项目名：人事管理系统</h4>
											<hr>
											<b>项目简介：</b>该管理系统的主要功能是管理员薪资料、管理员工考勤、计算员工薪资和业绩评定等。
												大部分涉及对敏感数据修改的工作都仅由人事部完成...
										</div>
									</div>
									<div class="col-md-2 col-xs-12 connect">
										<button type="button" class="btn btn-outline-primary" style="font-size:14px;" onclick="window.location.href='/case/info'">立即联系</button>
										<button type="button" class="btn btn-outline-primary" style="font-size:14px;" onclick="window.location.href='/case/info'">项目详情</button>
										<!--如果没登录，链接到登录页面。登录的话跳到签约页面-->
									</div>
								</div>
							</el-card>
						</template>
					</el-tab-pane>
				</el-tabs>

				<!--资金账户-->
				<template v-if="active == 2">
					<div class="row" style="margin-top: 2em;">
						<div class="row" style="width:100%;">

							<div class="col-md-4 col-xs-12">
								<el-card shadow="hover">
									<div class="row">
										<div class="col-5">
											<img src="../assets/icons/shouru.png" style="width:100%;height:auto;" />
										</div>
										<div class="col-7">
											<p class="fz-25">收入</p>
											<p class="fz-26">00.00</p>
										</div>
									</div>
								</el-card>
							</div>

							<div class="col-md-4 col-xs-12">
								<el-card shadow="hover">
									<div class="row">
										<div class="col-5">
											<img src="../assets/icons/zhichu.png" style="width:100%;height:auto;" />
										</div>
										<div class="col-7">
											<p class="fz-28">支出</p>
											<p class="fz-27">00.00</p>
										</div>
									</div>
								</el-card>
							</div>

							<div class="col-md-4 col-xs-12">
								<el-card shadow="hover">
									<div class="row">
										<div class="col-5">
											<img src="../assets/icons/yue.png" style="width:100%;height:auto;" />
										</div>
										<div class="col-7">
											<p class="fz-22">余额</p>
											<p class="fz-23">00.00</p>
										</div>
									</div>
								</el-card>
							</div>

						</div>
						<div class="row" style="width: 100%;">
							<div class="col-md-12">

								<el-table :data="tableData" border style="width: 100%;margin-top: 40px;">
									<el-table-column prop="num" label="交易编号" width="120">
									</el-table-column>
									<el-table-column prop="date" label="交易时间" width="180">
									</el-table-column>
									<el-table-column prop="type" label="交易类型" width="179">
									</el-table-column>
									<el-table-column prop="from" label="交易渠道" width="180">
									</el-table-column>
									<el-table-column prop="content" label="描述" width="150">
									</el-table-column>
									<el-table-column prop="count" label="交易金额" width="180">
									</el-table-column>
									<el-table-column prop="act" label="操作" width="150" fixed="right">
										<template slot-scope="scope">
											<a class="buttonText" @click="showDialog(scope.$index)" style="color: #1E90FF;">申诉</a>
										</template>
									</el-table-column>
								</el-table>

							</div>

						</div>

						<el-dialog title="您的申诉原因" :visible.sync="dialogFormVisible">
							<el-form :model="form" :rules="rules" ref="form" label-width="30%">
								<el-form-item label="填写交易编号" prop="num" :label-width="formLabelWidth">
									<el-input v-model="form.num" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="您的申诉理由" prop="region" :label-width="formLabelWidth">
									<el-select v-model="form.region" placeholder="请选择申诉理由">
										<el-option label="账户问题" value="账户问题"></el-option>
										<el-option label="交易问题" value="交易问题"></el-option>
										<el-option label="服务与描述不符" value="服务与描述不符"></el-option>
										<el-option label="其他" value="其他"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="具体描述" prop="content" :label-width="formLabelWidth">
									<el-input type="textarea" v-model="form.content" :rows="4"></el-input>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="dialogFormVisible = false">取 消</el-button>
								<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
							</div>
						</el-dialog>

					</div>
				</template>

				<!--信息设置-->
				<template v-if="active == 3">
					<div class="row" style="margin-top: 2em;">
						<div class="row" style="width:100%;">
							<div class="col-md-12 col-xs-12">
								<el-tabs v-model="activeMessage">
									<el-tab-pane label="个人资料" name="first">
										<el-card class="box-card">

											<el-form :model="userInfoForm" :rules="userInfoRules" ref="userInfoForm" label-width="30%">
												<el-form-item label="昵称" prop="name" :label-width="formLabelWidth">
													<el-input v-model="userInfoForm.name" autocomplete="off"></el-input>
												</el-form-item>
												<el-form-item label="状态" prop="type" :label-width="formLabelWidth">
													<el-select v-model="userInfoForm.type" placeholder="请选择">
														<el-option label="求职" value="求职"></el-option>
														<el-option label="自由工作" value="自由工作"></el-option>
														<el-option label="正常工作" value="正常工作"></el-option>
													</el-select>
												</el-form-item>
												<el-form-item label="公司" prop="company" :label-width="formLabelWidth">
													<el-input v-model="userInfoForm.company" autocomplete="off"></el-input>
												</el-form-item>

												<el-form-item label="职业" prop="job" :label-width="formLabelWidth">
													<el-cascader v-model="userInfoForm.job" :options="careerOptions" style="width:30%;"></el-cascader>
												</el-form-item>

												<el-form-item label="职位" prop="title" :label-width="formLabelWidth">
													<el-input v-model="userInfoForm.title" autocomplete="off"></el-input>
												</el-form-item>

											</el-form>

										</el-card>
									</el-tab-pane>
									<el-tab-pane label="修改密码" name="second">
										<el-card class="box-card">

											<el-form :model="resetPasswordForm" status-icon :rules="resetRules" ref="resetPasswordForm" label-width="100px" class="demo-ruleForm">
												<el-form-item label="原密码" prop="oldpass">
													<el-input type="password" v-model="resetPasswordForm.oldpass"></el-input>
												</el-form-item>
												<el-form-item label="新密码" prop="pass">
													<el-input type="password" v-model="resetPasswordForm.pass"></el-input>
												</el-form-item>
												<el-form-item label="确认密码" prop="checkPass">
													<el-input type="password" v-model="resetPasswordForm.checkPass"></el-input>
												</el-form-item>
												<el-form-item>
													<el-button type="primary" @click="submitForm()">提交</el-button>
												</el-form-item>
											</el-form>

										</el-card>
									</el-tab-pane>

								</el-tabs>

							</div>
						</div>

					</div>

				</template>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: "app",

		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm.checkPass !== '') {
						this.$refs.resetPasswordForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.resetPasswordForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				active: 1,
				activeMessage: 'first',
				activeJob: 'first',
				tableData: [{
					num: '2020050212347',
					date: '2020-05-02 12:00',
					type: '收入',
					from: '钱包',
					content: '...',
					count: '2000',
					act: '申诉'
				}, {
					num: '2020050212343',
					date: '2020-05-02 12:00',
					type: '收入',
					from: '钱包',
					content: '...',
					count: '2000',
					act: '申诉'
				}, {
					num: '2020050212349',
					date: '2020-05-02 12:00',
					type: '收入',
					from: '钱包',
					content: '...',
					count: '2000',
					act: '申诉'
				}],
				rules: {
					num: [{
						required: true,
						message: '请输入交易编号',
						trigger: 'blur'
					}, {
						min: 13,
						max: 13,
						message: '交易编号为13个字符',
						trigger: 'blur'
					}],
					region: [{
						required: true,
						message: '请选择申诉理由',
						trigger: 'blur'
					}],
					content: [{
						required: true,
						message: '请填写详细描述',
						trigger: 'blur'
					}],
				},
				dialogFormVisible: false,
				form: {
					num: '',
					region: '',
					content: ''
				},
				formLabelWidth: '120px',
				resetPasswordForm: {
					pass: '',
					checkPass: ''
				},
				resetRules: {
					oldpass: [{
						required: true,
						message: '请输入旧密码',
						trigger: 'blur'
					}, ],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
				},
				userInfoForm: {
					name: '',
					type: '',
					job: '',
					company: '',
					title: ''
				},

				userInfoRules: {
					name: [{
						required: true,
						message: '请输入昵称',
						trigger: 'blur'
					}],
					type: [{
						required: true,
						message: '请选择状态',
						trigger: 'blur'
					}],
					job: [{
						required: true,
						message: '请选择工作',
						trigger: 'blur'
					}],
					company: [{
						required: true,
						message: '请输入公司名称',
						trigger: 'blur'
					}],
					title: [{
						required: true,
						message: '请输入职位',
						trigger: 'blur'
					}],
				},

				careerOptions: [{
					value: '产品经理',
					label: '产品经理',
					children: [{
						value: '产品经理',
						label: '产品经理',
					}, {
						value: '项目经理',
						label: '项目经理'
					}, {
						value: '产品其它',
						label: '产品其它'
					}]
				}, {
					value: '设计师',
					label: '设计师',
					children: [{
						value: 'UI设计师',
						label: 'UI设计师'
					}, {
						value: '原画师',
						label: '原画师'
					}, {
						value: '设计其它',
						label: '设计其它'
					}]
				}, {
					value: '前端',
					label: '前端',
					children: [{
						value: '前端',
						label: '前端'
					}]
				}, {
					value: '移动端',
					label: '移动端',
					children: [{
						value: 'Android',
						label: 'Android'
					}, {
						value: 'iOS',
						label: 'iOS'
					}, {
						value: '移动其他',
						label: '移动其他',
					}]
				}, {
					value: '小程序',
					label: '小程序',
					children: [{
						value: '小程序',
						label: '小程序'
					}]
				}, {
					value: '游戏',
					label: '游戏',
					children: [{
						value: 'Unity3D',
						label: 'Unity3D'
					}, {
						value: '游戏其它',
						label: '游戏其它'
					}]
				}, {
					value: '后端',
					label: '后端',
					children: [{
						value: '全栈',
						label: '全栈'
					}, {
						value: 'PHP',
						label: 'PHP'
					}, {
						value: 'Java',
						label: 'Java'
					}, {
						value: 'Python',
						label: 'Python'
					}, {
						value: 'C++',
						label: 'C++'
					}, {
						value: 'C',
						label: 'C'
					}, {
						value: '后端其他',
						label: '后端其他'
					}]
				}, {
					value: '测试',
					label: '测试',
					children: [{
						value: '黑盒测试',
						label: '黑盒测试'
					}, {
						value: '白盒测试',
						label: '白盒测试'
					}, {
						value: '灰盒测试',
						label: '灰盒测试'
					}]
				}, {
					value: 'DBA',
					label: 'DBA',
					children: [{
						value: 'DBA',
						label: 'DBA'
					}]
				}, {
					value: '运维',
					label: '运维',
					children: [{
						value: '运维',
						label: '运维'
					}]
				}, {
					value: '其他',
					label: '其他',
					children: [{
						value: '架构师',
						label: '架构师'
					}, {
						value: 'CTO',
						label: 'CTO'
					}, {
						value: '运营',
						label: '运营',
					}]
				}]

			}
		},
		methods: {
			choose(num) {
				this.active = num;
			},
			showDialog(index) {
				this.dialogFormVisible = true;
				this.form.num = this.tableData[index].num;
			}
		},
		mounted() {
			document
				.querySelector("body")
				.setAttribute("style", "background-color:#f8f8f8");
		},
		beforeDestroy() {
			document.querySelector("body").removeAttribute("style");
		},
	}
</script>

<style>
	.fz-28 {
		font-size: 30px;
	}
	
	.fz-27 {
		font-size: 30px;
		color: dodgerblue;
	}
	
	.fz-25 {
		font-size: 30px;
	}
	
	.fz-26 {
		font-size: 30px;
		color: dodgerblue;
	}
	
	.fz-22 {
		font-size: 30px;
	}
	
	.fz-23 {
		font-size: 30px;
		color: dodgerblue;
	}

	.connect {
		height: 100%;
		line-height: 50px;
		margin-top: 20px;;
		text-align: center;
		border: 1px solid #ececf6;
		border-top: none;
		border-bottom: none;
		border-right: none;
	}
</style>