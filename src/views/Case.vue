<template>
	<div>
		<b-row style="margin-bottom:2em;">
			<b-col md="8" offset-md="2">
				<el-card class="box-card" style="margin-top: 20px;">
					<b-row>
						<b-col md="2">平台项目案例库</b-col>
						<b-col md="4" offset-md="6" style="text-align: end;">共有<span style="color:#007bff">1234</span>个项目符合条件</b-col>
					</b-row>
				</el-card>
				<el-card class="box-card" style="margin-top: 20px;">
					<div class="row" style="line-height: 2.5em;">
						<div class="tag-group row" style="width:100%;">
							<div class="col-md-1 space">
								行业
							</div>
							<div class="col-md-9">
								<el-tag v-for="(item,index) in item1" v-if="index < 8 && state1" :key="item.label" :type="item.type" :effect="item.effect"
								 @click="change(index)" class="space pointer">
									{{item.label}}
								</el-tag>
								<el-tag v-for="(item,index) in item1" v-if="!state1" :key="item.label" :type="item.type" :effect="item.effect"
								 @click="change(index)" class="space pointer">
									{{item.label}}
								</el-tag>
							</div>
							<div class="col-md-1" style="margin-top:20px;">
								<span class="space pointer" ref="btn1" style="color:#007bff;" @click="more1()">{{state1 ? '更多' : '收起'}}</span>
							</div>

						</div>
						<div class="tag-group row" style="width:100%;">
							<div class="col-md-1 space">
								分类
							</div>
							<div class="col-md-9">
								<el-tag v-for="(item,index) in item2" v-if="index < 8 && state1" :key="item.label" :type="item.type" :effect="item.effect"
								 @click="change1(index)" class="space pointer">
									{{item.label}}
								</el-tag>
								<el-tag v-for="(item,index) in item2" v-if="!state1" :key="item.label" :type="item.type" :effect="item.effect"
								 @click="change1(index)" class="space pointer">
									{{item.label}}
								</el-tag>
							</div>
						</div>
					</div>
					<hr>
					<div>
						<div class="row">
							<div class="col-md-1">

							</div>
							<div class="col-md-1 space">
								排序：
							</div>
							<div class="col-md-3 space">
								<el-select v-model="value1" placeholder="请选择">
									<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="col-md-2 space" style="text-align: right;">
								自由职业：
							</div>
							<div class="col-md-3 space">
								<el-select v-model="value2" placeholder="请选择">
									<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
					</div>
					
					<template v-for="i in 5">
					<el-card class="box-card" style="margin-top: 20px;" shadow="hover">
						<div class="row">
							<div class="col-md-2 col-xs-12" style="text-align: center;">
								<div class="demo-basic--circle">
									<div class="block">
										<el-avatar :size="100" :src="circleUrl[i-1]"></el-avatar>
									</div>
									<div class="sub-title">用户名</div>
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
					<nav aria-label="Page navigation example">
						<b-row>
							<b-col md="4" offset-md="8" style="text-align:right">
								<ul class="pagination">
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Previous">
											<span aria-hidden="true">&laquo;</span>
										</a>
									</li>
									<li class="page-item active"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">4</a></li>
									<li class="page-item"><a class="page-link" href="#">5</a></li>
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Next">
											<span aria-hidden="true">&raquo;</span>
										</a>
									</li>
								</ul>
							</b-col>
						</b-row>

					</nav>
				</el-card>
			</b-col>
		</b-row>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				circleUrl: [
					'http://imgsrc.baidu.com/forum/w=580/sign=a9714efaaf86c91708035231f93c70c6/ddd3ab59d109b3dea0394e6ac4bf6c81810a4c48.jpg',
					'http://img5.imgtn.bdimg.com/it/u=4146343321,3855884912&fm=11&gp=0.jpg',
					'http://a-ssl.duitang.com/uploads/item/201812/29/20181229212334_tvakj.thumb.700_0.jpeg',
					'http://img1.imgtn.bdimg.com/it/u=1930331238,1710336295&fm=26&gp=0.jpg',
					'http://img2.imgtn.bdimg.com/it/u=555018452,1227370770&fm=11&gp=0.jpg'
				],
				options1: [{
					value: '选项1',
					label: '默认'
				}, {
					value: '选项2',
					label: '薪资从高到低'
				}, {
					value: '选项3',
					label: '薪资从低到高'
				}, {
					value: '选项4',
					label: '离我最近'
				}],
				value1: '',
				options2: [{
					value: '选项1',
					label: '是'
				}, {
					value: '选项2',
					label: '否'
				}],
				value2: '',
				item1: [{
						type: '',
						label: '全部',
						effect: 'dark'
					},
					{
						type: '',
						label: '电子商务',
						effect: 'plain'
					},
					{
						type: '',
						label: '社交',
						effect: 'plain'
					},
					{
						type: '',
						label: '人工智能',
						effect: 'plain'
					},
					{
						type: '',
						label: '媒体门户',
						effect: 'plain'
					},
					{
						type: '',
						label: '工具软件',
						effect: 'plain'
					},
					{
						type: '',
						label: '消费生活',
						effect: 'plain'
					},
					{
						type: '',
						label: '金融',
						effect: 'plain'
					},
					{
						type: '',
						label: '医疗健康',
						effect: 'plain'
					},
					{
						type: '',
						label: '企业服务',
						effect: 'plain'
					},
					{
						type: '',
						label: '数字娱乐',
						effect: 'plain'
					},
					{
						type: '',
						label: '在线教育',
						effect: 'plain'
					},
					{
						type: '',
						label: '其它',
						effect: 'plain'
					}
				],
				state1: true,
				item2: [{
						type: '',
						label: '全部',
						effect: 'dark'
					},
					{
						type: '',
						label: 'UI设计',
						effect: 'plain'
					},
					{
						type: '',
						label: '系统开发',
						effect: 'plain'
					},
					{
						type: '',
						label: 'web前端',
						effect: 'plain'
					},
					{
						type: '',
						label: '软件测试',
						effect: 'plain'
					},
					{
						type: '',
						label: '项目管理',
						effect: 'plain'
					},
					{
						type: '',
						label: '网络维护',
						effect: 'plain',
					}
				],
				state1: true
			}
		},
		methods: {
			remove(that) {
				console.log(that.attr('class'))
			},
			change(index) {
				if (this.item1[index].effect == 'plain') {

					for (var i = 0; i < this.item1.length; i++) {
						this.item1[i].effect = 'plain'
					}
					this.item1[index].effect = 'dark'
				}
			},
			change1(index) {
				if (this.item2[index].effect == 'plain') {

					for (var i = 0; i < this.item2.length; i++) {
						this.item2[i].effect = 'plain'
					}
					this.item2[index].effect = 'dark'
				}
			},
			more1() {
				this.state1 = !this.state1;
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

<style scoped>
	nav {
		margin-top: 20px;
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

	.space {
		margin-left: 20px;
		margin-top: 20px;
	}

	.pointer {
		cursor: pointer;
	}
</style>
