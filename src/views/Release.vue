<template>
	<div>
		<b-row class="mt-1em">
			<b-col cols="12" xs="10" md="10" lg="10" xl="8" offset-xs="1" offset-md="1" offset-lg="1" offset-xl="2">
				<el-card class="box-card" >
					<b-row>
						<b-col cols="12" xs="10" md="10" lg="10" xl="10" offset-xs="1" offset-md="1" offset-lg="1" offset-xl="1">
							<el-card class="box-card" style="width: 100%;border:1px solid #BADEFB;background-color:#EBF5FE; color: #73AFE0;padding-top: 0;" shadow="never">
								<div v-if="type == 'code'">1、请提供详细的项目资料，以便于我们为您推荐合适的开发者</div>
								<div v-if="type == 'illustration'">1、请提供详细的项目资料，以便于我们为您推荐合适的插图设计师</div>
								<div v-if="type == 'ui'">1、请提供详细的项目资料，以便于我们为您推荐合适的UI设计师</div>
								<div v-if="type == 'test'">1、请提供详细的项目资料，以便于我们为您推荐合适的测试工程师</div>
								<div>2、项目收费标准：报价含14%的平台服务费，如需开票另收税费9.36%</div>
								<div>3、项目发布之后，工作人员将在半个工作日内联系您</div>
							</el-card>
						</b-col>
					</b-row>
					<el-form :model="formRule" :rules="rules">
						<b-row>
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">第一步：项目名称</b-col>
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1">
								<el-form-item prop="name">
									<el-input v-model="formRule.name" placeholder="请输入项目名称，1-20个字以内" style="width: 60%;border: 0;background-color: #f7f9fb;"></el-input>
								</el-form-item>
							</b-col>

							<b-col v-if="type=='code'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">第二步：项目类型（可多选）</b-col>
							<b-col v-if="type=='code'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" style="display: flex;flex-direction: row;">
								<div class="icon-card" data-product-name="Android" data-key="1" @click="change('android')">
									<img class="origin" v-if="objType.android == 0" src="https://stacdn.proginn.com/image/outsource/do1.png" />
									<img class="active" v-if="objType.android == 1" src="https://stacdn.proginn.com/image/outsource/do1-act.png" />
								</div>
								<div class="icon-card" data-product-name="iOS" data-key="2" @click="change('ios')">
									<img class="origin" v-if="objType.ios == 0" src="https://stacdn.proginn.com/image/outsource/do2.png" />
									<img class="active" v-if="objType.ios == 1" src="https://stacdn.proginn.com/image/outsource/do2-act.png" />
								</div>
								<div class="icon-card" data-product-name="PC网站" data-key="3" @click="change('pc')">
									<img class="origin" v-if="objType.pc == 0" src="https://stacdn.proginn.com/image/outsource/do3.png" />
									<img class="active" v-if="objType.pc == 1" src="https://stacdn.proginn.com/image/outsource/do3-act.png" />
								</div>
								<div class="icon-card" data-product-name="微信端开发" data-key="4" @click="change('wx')">
									<img class="origin" v-if="objType.wx == 0" src="https://stacdn.proginn.com/image/outsource/do4.png" />
									<img class="active" v-if="objType.wx == 1" src="https://stacdn.proginn.com/image/outsource/do4-act.png" />
								</div>
								<div class="icon-card" data-product-name="HTML5" data-key="5" @click="change('h5')">
									<img class="origin" v-if="objType.h5 == 0" src="https://stacdn.proginn.com/image/outsource/do5.png" />
									<img class="active" v-if="objType.h5 == 1" src="https://stacdn.proginn.com/image/outsource/do5-act.png" />
								</div>
								<div class="icon-card" data-product-name="其他" data-key="6" @click="change('other')">
									<img class="origin" v-if="objType.other == 0" src="https://stacdn.proginn.com/image/outsource/do6.png" />
									<img class="active" v-if="objType.other == 1" src="https://stacdn.proginn.com/image/outsource/do6-act.png" />
								</div>
							</b-col>
							
							<b-col v-if="type=='illustration'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">第二步：插图类型（可多选）</b-col>
							<b-col v-if="type=='illustration'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" style="display: flex;flex-direction: row;">
							 <el-checkbox-group v-model="checkedIllustrationType" @change="handleCheckedCitiesChange">
							    <el-checkbox v-for="illustrationType in illustrationTypies" :label="illustrationType" :key="illustrationType">{{illustrationType}}</el-checkbox>
							  </el-checkbox-group>
							</b-col>
							
							<b-col v-if="type=='ui'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">第二步：UI类型（可多选）</b-col>
							<b-col v-if="type=='ui'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" style="display: flex;flex-direction: row;">
							 <el-checkbox-group v-model="checkedUIType" @change="handleCheckedCitiesChange">
							    <el-checkbox v-for="UIType in UITypies" :label="UIType" :key="UIType">{{UIType}}</el-checkbox>
							  </el-checkbox-group>
							</b-col>
							
							<b-col v-if="type=='test'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">第二步：测试类型（可多选）</b-col>
							<b-col v-if="type=='test'" cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" style="display: flex;flex-direction: row;">
							 <el-checkbox-group v-model="checkedTestType" @change="handleCheckedCitiesChange">
							    <el-checkbox v-for="testType in testTypies" :label="testType" :key="testType">{{testType}}</el-checkbox>
							  </el-checkbox-group>
							</b-col>
							
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">第三步：项目预算（元）</b-col>
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1">
								<el-input-number v-model="num" controls-position="right" :step="100" :min="100" :max="100000" placeholder="请输入您的资金预算"></el-input-number>
							</b-col>
							
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">第四步：项目介绍</b-col>
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1">
								<el-popover placement="right" width="250" trigger="hover" v-if="type=='code'">
									<div class="fz-12px text-black">为了让我们更好的理解您的需求、提高开发者接单效率、减少过程纠纷，希望您在发布项目时参考以下规范发布</div>
									<hr />
									<div class="text-gray fz-14px">1.项目背景介绍</div>
									<div class="text-gray fz-14px">2.可参考的已上线项目</div>
									<div class="text-gray fz-14px">3.需求范围描述（必填)</div>
									<div class="text-gray fz-14px">4.需求文档/重难点需求说明</div>
									<div  class="text-gray fz-14px">5.对开发者的要求</div>
									<div class="text-gray fz-14px">5.交付要求（必填）</div>
									<el-input
										slot="reference"
										type="textarea"
										placeholder="请输入内容"
										v-model="textarea"
										:autosize="{ minRows: 6, maxRows: 8 }"
										style="width: 80%;"
									></el-input>
								</el-popover>
								
								<el-popover placement="right" width="250" trigger="hover" v-if="type=='ui'">
									<div class="fz-12px text-black">为了让我们更好的理解您的需求、提高开发者接单效率、减少过程纠纷，希望您在发布项目时参考以下规范发布</div>
									<hr />
									<div class="text-gray fz-14px">1.说明插图需求（必填)</div>
									<div class="text-gray fz-14px">2.需求范围描述（必填)</div>
									<div class="text-gray fz-14px">3.对UI设计师的要求</div>
									<div class="text-gray fz-14px">4.交付要求（必填）</div>
									<el-input
										slot="reference"
										type="textarea"
										placeholder="请输入内容"
										v-model="textarea"
										:autosize="{ minRows: 6, maxRows: 8 }"
										style="width: 80%;"
									></el-input>
								</el-popover>
								
								<el-popover placement="right" width="250" trigger="hover" v-if="type=='illustration'">
									<div class="fz-12px text-black">为了让我们更好的理解您的需求、提高开发者接单效率、减少过程纠纷，希望您在发布项目时参考以下规范发布</div>
									<hr />
									<div class="text-gray fz-14px">1.说明插图需求</div>
									<div class="text-gray fz-14px">2.可参考的已上线项目</div>
									<div class="text-gray fz-14px">3.需求范围描述（必填)</div>
									<div class="text-gray fz-14px">4.对设计师的要求</div>
									<div class="text-gray fz-14px">5 交付要求（必填）</div>
									<el-input
										slot="reference"
										type="textarea"
										placeholder="请输入内容"
										v-model="textarea"
										:autosize="{ minRows: 6, maxRows: 8 }"
										style="width: 80%;"
									></el-input>
								</el-popover>
								
								<el-popover placement="right" width="250" trigger="hover" v-if="type=='test'">
									<div class="fz-12px text-black">为了让我们更好的理解您的需求、提高开发者接单效率、减少过程纠纷，希望您在发布项目时参考以下规范发布</div>
									<hr />
									<div class="text-gray fz-14px">1.说明测试需求</div>
									<div class="text-gray fz-14px">2.需求范围描述（必填)</div>
									<div class="text-gray fz-14px">3.需求文档/重难点需求说明</div>
									<div class="text-gray fz-14px">4.对测试人员的要求</div>
									<div class="text-gray fz-14px">5 交付要求（必填）</div>
									<el-input
										slot="reference"
										type="textarea"
										placeholder="请输入内容"
										v-model="textarea"
										:autosize="{ minRows: 6, maxRows: 8 }"
										style="width: 80%;"
									></el-input>
								</el-popover>
								
							</b-col>
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" class="mt-1em">
								<el-card shadow="never" style="width: 80%; border:1px dashed #CCCCCC;" align="center">
									<el-upload
										class="upload-demo"
										action="https://jsonplaceholder.typicode.com/posts/"
										:on-preview="handlePreview"
										:on-remove="handleRemove"
										:before-remove="beforeRemove"
										multiple
										:limit="3"
										:on-exceed="handleExceed"
										:file-list="fileList"
									>
										<el-button size="small" type="primary">点击上传</el-button>
										<div slot="tip" class="el-upload__tip">可上传Docx/PDF/MarkDown文件及图片</div>
									</el-upload>
								</el-card>
							</b-col>
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1">
								<div class="check-box" style="margin-bottom: 10px;">
									<div class="ui checkbox">
										<input type="checkbox" v-model="check" />
										<label>
											&nbsp;我已阅读并同意
											<a href="#" target="_blank">《酷代项目发布协议》</a>
										</label>
									</div>
								</div>
							</b-col>
							<b-col cols="12" xs="12" md="12" lg="10" xl="10" offset-lg="1" offset-xl="1" align="center">
								<el-button type="primary" plain @click="publish">发布</el-button>
								<el-button plain>取消</el-button>
							</b-col>
						</b-row>
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
			type: this.$route.params.type,
			formRule: {
				name: ''
			},
			check:false,
			objType: {
				android: 0,
				ios: 0,
				pc: 0,
				wx: 0,
				h5: 0,
				other: 0
			},
			num: 0,
			textarea: '',
			visible: false,
			fileList: [],
			rules: {
				name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
			},
			checkedIllustrationType: ['矢量时尚', '写实唯美'],
			illustrationTypies: ['矢量时尚', '卡通低幼', '写实唯美','韩漫插图','概念设定'],
			checkedUIType:['移动端UI'],
			UITypies:['移动端UI','PC端UI','游戏UI','其它UI'],
			checkedTestType:['黑盒测试'],
			testTypies:['黑盒测试','白盒测试','灰盒测试']
		};
	},
	mounted() {
		document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8');
		let that = this;
		// console.log(that.$route.params.type);
	},
	methods: {
		change: function(e) {
			if (e == 'android') {
				this.objType.android = !this.objType.android;
			} else if (e == 'ios') {
				this.objType.ios = !this.objType.ios;
			} else if (e == 'pc') {
				this.objType.pc = !this.objType.pc;
			} else if (e == 'wx') {
				this.objType.wx = !this.objType.wx;
			} else if (e == 'h5') {
				this.objType.h5 = !this.objType.h5;
			} else if (e == 'other') {
				this.objType.other = !this.objType.other;
			}
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${file.name}？`);
		},
		publish() {
			// console.log(this.formRule.name)
			if (this.formRule.name == '') {
				this.$message.error('请将信息补充完整哦！');
			} else if(this.check==false)
			{
				this.$message.error('请阅读发布协议！');
			}else {
				this.$message({
					message: '恭喜你，提交成功',
					type: 'success'
				});
				this.$router.push({name:'Index'});
			}
		},
		handleCheckAllChange(val) {
			if(this.type=='illustration'){
				this.checkedIllustrationType = val ? cityOptions : [];
			}else if(this.type=='ui'){
				this.checkedUIType = val ? cityOptions : [];
			}else if(this.type=='test'){
				this.checkedTestType = val ? cityOptions : [];
			}
		        
				
		},
	}
};
</script>

<style>
.mt-1em {
	margin: 2em;
}
.icon-card {
	width: 130px;
	height: 160px;
	margin-right: 1em;
}
.icon-card > img {
	width: 100%;
	height: 100%;
}
.fz-12px {
	font-size: 12px;
}
.fz-14px {
	font-size: 14px;
}
.text-black {
	color: black;
}
</style>
