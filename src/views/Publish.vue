<template>	<div>		<el-row style="margin-top: 2em;">			<el-col :span="20" :offset="2">				<el-card class="box-card" style="width: 100%;">					<div align="center" class="publishTitle"><b>发布需求</b></div>					<b-row style="margin-top: 1em;">						<b-col cols="12" md="6" lg="6" xl="3" >							<el-card shadow="hover" style="margin-top: 10px;">								<div align="center"><i class="el-icon-edit" style="font-size:34px"></i></div>								<div align="center" class="mt-1em">代码代写</div>								<div class="mt-1em height">我们承诺先交付代码，保证本地run成功后再补齐余款，本地run不了，全额退款！</div>								<el-row :gutter="20" class="mx-h">									<el-col :span="22" :offset="1" class="mt-1em">										<div class="text-gray">											<i class="el-icon-check text-blue"></i>											&nbsp;经验丰富学历强大的IT一线工程师										</div>										<div class="text-gray">											<i class="el-icon-check text-blue"></i>											&nbsp;先交付代码,检查无误再补交余款										</div>										<div class="text-gray">											<i class="el-icon-check text-blue"></i>											&nbsp;无限期售后服务，真正一站式无忧服务										</div>									</el-col>								</el-row>								<!-- button -->								<div align="center" class="mt-1em"><el-button class="el-button" @click="publish('code')">需求发布</el-button></div>							</el-card>						</b-col>						<b-col cols="12" md="6" lg="6" xl="3" >
							<el-card shadow="hover" style="margin-top: 10px;">
								<div align="center"><i class="el-icon-brush" style="font-size:34px"></i></div>
								<div align="center" class="mt-1em">插画设计</div>
								<div class="mt-1em height">我们承诺先交付设计初稿，保证满足用户需求，若不满足，全额退款！</div>
							
								<el-row :gutter="20" class="mx-h">
									<el-col :span="22" :offset="1" class="mt-1em">
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;经验丰富技法水准高超的插画师
										</div>
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;先交付水印原稿,检查无误再补交余款
										</div>
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;无限期售后服务，真正一站式无忧服务
										</div>
									</el-col>
								</el-row>
								<!-- button -->
								<div align="center" class="mt-1em"><el-button class="el-button" @click="publish('illustration')">需求发布</el-button></div>
							</el-card>
						</b-col>						<b-col cols="12" md="6" lg="6" xl="3" >
							<el-card shadow="hover" style="margin-top: 10px;">
								<div align="center"><i class="el-icon-attract" style="font-size:34px"></i></div>
								<div align="center" class="mt-1em">UI 设计</div>
								<div class="mt-1em height">我们承诺先交UI初稿，保证满足用户需求，若不满足，全额退款！</div>
							
								<el-row :gutter="20" class="mx-h">
									<el-col :span="22" :offset="1" class="mt-1em">
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;经验丰富美感强大的UI设计师
										</div>
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;先交付UI初稿,检查无误再补交余款
										</div>
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;无限期售后服务，真正一站式无忧服务
										</div>
									</el-col>
								</el-row>
								<!-- button -->
								<div align="center" class="mt-1em"><el-button class="el-button" @click="publish('ui')">需求发布</el-button></div>
							</el-card>
						</b-col>						<b-col cols="12" md="6" lg="6" xl="3" >
							<el-card shadow="hover" style="margin-top: 10px;">
								<div align="center"><i class="el-icon-paperclip" style="font-size:34px"></i></div>
								<div align="center" class="mt-1em">软件测试</div>
								<div class="mt-1em height">我们承诺先交测试报告，保证满足用户需求，若不满足，全额退款！</div>
							
								<el-row :gutter="20" class="mx-h">
									<el-col :span="22" :offset="1" class="mt-1em">
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;经验丰富学历强大的IT一线工程师
										</div>
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;先交付测试结果,检查无误再补交余款
										</div>
										<div class="text-gray">
											<i class="el-icon-check text-blue"></i>
											&nbsp;无限期售后服务，真正一站式无忧服务
										</div>
									</el-col>
								</el-row>
								<!-- button -->
								<div align="center" class="mt-1em"><el-button class="el-button" @click="publish('test')">需求发布</el-button></div>
							</el-card>
						</b-col>					</b-row>					<div align="center" class="publishTitle mt-1em fz-24px"><b>我该如何发布需求？</b></div>					<el-table :data="tableData" style="width: 100%" class="mt-1em">						<el-table-column class="text-gray" prop="type" width="80"></el-table-column>						<el-table-column label="代码代写" align="center" class="text-gray" prop="service"></el-table-column>						<el-table-column label="插图代画" align="center" class="text-gray" prop="process"></el-table-column>						<el-table-column label="U I设计" align="center" class="text-gray" prop="ui"></el-table-column>						<el-table-column label="软件测试" align="center" class="text-gray" prop="ui"></el-table-column>					</el-table>					<div align="center" class="publishTitle mt-1em fz-24px"><b>我想进一步了解发布需求</b></div>					<div align="center" class="publishTitle mt-1em text-gray"><b>如有任何问题，欢迎咨询客服热线010-1234567</b></div>				</el-card>			</el-col>		</el-row>	</div></template><script>export default {	data() {		return {			tableData: [				{					type: '服务定义',					service: '服务流程',					process: '服务流程',					ui: '服务流程'				},				{					type: '服务流程',					service: '服务流程',					process: '服务流程',					ui: '服务流程'				},				{					type: '专属服务',					service: '服务流程',					process: '服务流程',					ui: '服务流程'				},				{					type: '佣金说明',					service: '服务流程',					process: '服务流程',					ui: '服务流程'				}			]		};	},	methods: {		publish: function(uri) {			this.$router.push({ name: 'Release', params: { type: uri } });		}	},	mounted() {		document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8');	},	beforeDestroy() {		document.querySelector('body').removeAttribute('style');	}};</script><style scoped>.text {	font-size: 14px;}.item {	margin-bottom: 18px;}.clearfix:before,.clearfix:after {	display: table;	content: '';}.clearfix:after {	clear: both;}.box-card {	width: 480px;}.publishTitle {	margin: 2em 9 2em 0;	font-size: 18px;}.mt-1em {	margin-top: 1em;}.list {	font-size: 14px;}.text-blue {	color: #2472cf;}.text-gray {	color: #666666;}.height {	min-height: 5rem;	max-height: 6rem;	overflow: hidden;	text-overflow: ellipsis;}.fz-24px {	font-size: 24px;}.mx-h {	min-height: 11rem;	max-height: 15rem;}</style>
