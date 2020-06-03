<template>
	<!-- footer -->
	<div class="footer" align="center">
		 <b-row>
		    <b-col md="10" offset-md="1" style="height: auto;">
				  <b-row class="mt-1em">
				    <b-col md="3" class="logo" style="display: flex;flex-direction: row;align-items: center;">
						<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2164552727,1674393781&fm=26&gp=0.jpg" alt="" style="width: 60px; height: 60px;">
						<div>酷代</div>
					</b-col>
				    <b-col md="9" class="list">
						<div align="left">重点城市程序员兼职推荐</div>
						  <b-row align="left">
						    <b-col class="jianzhi"><a href="">北京程序员兼职</a></b-col>
							<b-col class="jianzhi"><a href="">重庆程序员兼职</a></b-col>
							<b-col class="jianzhi"><a href="">深圳程序员兼职</a></b-col>
							<b-col class="jianzhi"><a href="">杭州程序员兼职</a></b-col>
							<b-col class="jianzhi"><a href="">广州程序员兼职</a></b-col>
							<b-col class="jianzhi"><a href="">上海程序员兼职</a></b-col>
						  </b-row>
						<div align="left">重点城市UI插图师设计师兼职推荐</div>
						  <b-row align-content="left" align="left">
						    <b-col class="jianzhi"><a href="">北京UI插图设计师兼职</a></b-col>
							<b-col class="jianzhi"><a href="">重庆UI插图设计师兼职</a></b-col>
							<b-col class="jianzhi"><a href="">深圳UI插图设计师兼职</a></b-col>
							<b-col class="jianzhi"><a href="">杭州UI插图设计师兼职</a></b-col>
							<b-col class="jianzhi"><a href="">上海UI插图设计师兼职</a></b-col>
						  </b-row>
					</b-col>
				  </b-row>
				  <hr style="margin: 2px 0 2px 0;"/>
				    <b-row class="mt-1em">
					  <b-col xs='3' sm='3' md="2" lg="2" xl="2">帮助</b-col>
					  <b-col xs='3' sm='3' md="2" lg="2" xl="2">关于我们</b-col>
					  <b-col xs='3' sm='3' md="2" lg="2" xl="2">合作伙伴</b-col>
					  <b-col xs='3' sm='3' md="2" lg="2" xl="2">意见反馈</b-col>
				      <b-col xs='4' offset-xs="4" sm='5' offset-sm="3" md="3" offset-md="1" lg="2" xl="2" class="text-12px" align="right">
						  <div>津ICP00000000号</div>
						  <div><img src="https://stacdn.proginn.com/image/common/badge.png" alt="" width="20" height="20">津公网安备 00000000000000号</div>
						  </b-col>
				    </b-row>
			</b-col>
		  </b-row>
	</div>
</template>

<script>
</script>

<style scoped> 
	.footer{
		width: 100%;
		margin-top: 2em;
		background-color: white;
	}
	.flex-row{
		display: flex;
		flex-direction: row;
	}
	.jianzhi{
		margin: 0.2em 1em 0.4em 0;
	}
	.jianzhi a{
		font-size: 12px;
		color: #666666;
	}
	.jianzhi a:link{
		text-decoration:none;
		color: #666666;
	}
	.jianzhi a:hover{
		text-decoration:none;
		color: #2472cf;
	}
	.text-12px{
		font-size: 12px;
		color: #666666;
	}
	.mt-1em{
		margin-top: 1em;
	}
</style>
