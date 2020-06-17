<template>
	<div>
		<div class="container" style="margin-bottom:2em;">
			<el-card class="box-card"style="margin-top: 20px;">
			<div class="row">
				<div class="col-4"style="text-align: center">
					<div class="col">
						<div style="font-size: 2rem">
						    <el-avatar :size="100" src="http://imgsrc.baidu.com/forum/w=580/sign=a9714efaaf86c91708035231f93c70c6/ddd3ab59d109b3dea0394e6ac4bf6c81810a4c48.jpg"></el-avatar>
						  </div>
						<h5 class="card-title">马女士</h5>
					    <p class="card-text">高级项目经理</p>
					</div>
					<hr>
					<div class="col">
						
						    <h5><b>人事管理系统</b></h5>
						    <h3><b style="color:#007BFF">￥10000</b></h3>
						   	<el-tag>管理系统</el-tag>
							<el-tag class="space">PHP</el-tag>  
						 
					</div>
					<hr>
					<div class="col">
						<div class="card-body">
						    <a href="#" class="card-link">
								<button type="button" class="btn btn-outline-primary" onclick="window.location.href=''">和他聊聊</button>
							</a>
						  </div>
					</div>
				</div>
				<div class="col">
					<div class="col">
						<div class="alert alert-light" role="alert">
							<el-card class="box-card" style="margin-top: 20px;" shadow="hover">
							<h4 class="alert-heading">项目名：人事管理系统</h4>
							<hr>

							<b>项目简介：</b>
							<br>
							<div>
								<p style="text-indent: 2em; ">该管理系统的主要功能是管理员薪资料、管理员工考勤、计算员工薪资和业绩评定等。
								大部分涉及对敏感数据修改的工作都仅由人事部完成，如计算薪资、修改考勤记录;并且有
								些只有人事经理才有权处理,如定制部门、制定员工的基本薪资等。普通员工可以通过Web
								浏览自己的基本资料、考勤信息、薪资信息和请假记录等。员工也可以通过Web提出请假
								和加班申请，如果所属部门的经理审批通过，人事部就可以登记在案。人事经理默认拥有人
								事助理的所有权限，部门经理默认拥有普通员工的所有权限，总经理默认拥有部门]经理的所
								有权限。
							</p>
							</div>
							<hr>
							<div style="height:100px;line-height:100px;text-align:center;">
								<button type="button" class="btn btn-outline-primary" onclick="window.location.href=''">点击下载需求文档</button>
							</div>
							<hr>
							<div style="height:50px;line-height:50px;text-align:center;">
								<i class="el-icon-phone-outline">&nbsp;&nbsp;&nbsp;&nbsp;0000-00000000</i>
							</div>
							</el-card>
						</div>
					</div>
				</div>
			</div>
			</el-card>
		</div>
	</div>
	

</template>

<script>
export default {
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
	.space {
		margin-left: 20px;
		margin-top: 20px;
	}
</style>
