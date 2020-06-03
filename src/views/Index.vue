<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 offset-md-1 first">
          <p>
            酷代
            <br />您的专属云端开发团队
          </p>
        </div>
        <div class="col-md-5">
          <img src="../assets/images/index.png" title="酷代" >
        </div>
      </div>

      <div class="row develop">
        <div
          class="row"
          style="background-color:#F8F8F8;font-size:40px;width:100%;font-weight:bold;"
        >
          <div class="col-md-4 offset-md-4" style="text-align:center;">开发服务方案</div>
        </div>
        <div class="row" style="width:100%;margin-top:20px;">
          <div class="col-md-4">
            <el-card class="hover">
              <div class="pnggroup" style="text-align:center;">
                <img src="../assets/images/demand.png" >
              </div>
              <p>需求梳理</p>
              <br />
              <ul>
                <li>产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</li>
                <li>严选资深产品专家 更懂用户的需求</li>
                <li>标准产品文档 节约40%开发成本</li>
                <li>免费提供开发工期、报价评估服务</li>
              </ul>
            </el-card>
          </div>
          <div class="col-md-4">
            <el-card class="hover">
              <div class="pnggroup" style="text-align:center;">
                <img src="../assets/images/1.png" >
              </div>
              <p>整包项目</p>
              <br />
              <ul>
                <li>一站式软件开发服务，智能匹配优质开发者，五星级过程体验交付质量。</li>
                <li>专属项目经理全程跟进 轻松高效</li>
                <li>标准化开发流程 可视化在线监管</li>
                <li>按阶段付款 平台托管担保</li>
              </ul>
            </el-card>
          </div>
          <div class="col-md-4">
            <el-card class="hover">
              <div class="pnggroup" style="text-align:center;">
                <img src="../assets/images/cloud.png" >
              </div>
              <p>云端工作</p>
              <br />
              <ul>
                <li>按月聘用程序员，最快一天到岗，节省55%的人力成本。</li>
                <li>优选5年+经验的资深开发者</li>
                <li>可选全职兼职，支持定制每周工时</li>
                <li>每天提交日报，进度可控</li>
              </ul>
            </el-card>
          </div>
        </div>
      </div>

      <div class="row" style="background-color:#F8F8F8;padding:40px;">
        <div class="col-md-3 second">
          <p>
            成功案例
            <br />
            <a href="/case" target="_blank">
              <img src="../assets/images/more.png" style="width:10%;" >
            </a>
          </p>
        </div>
        <div class="col-md-3">
          <el-card shadow="hover">
            <p class="logoGroup">
              <img src="../assets/images/logo.png" >x
              <img src="../assets/images/huawei.jpg" >
              <br />
              <br />
              <br />
            </p>
            <p>成功案例：5G通信</p>
            <p style="font-size:35px;">￥70000</p>
			<p style="font-size:18px;">项目周期：50天</p>
            <p style="font-size:18px;">交付日期：2019-08-22</p> 
          </el-card>
        </div>

        <div class="col-md-3">
          <el-card shadow="hover">

			<p class="logoGroup">
              <img src="../assets/images/logo.png" >x
              <img src="../assets/images/bm.jpg" >
              <br />
              <br />
              <br />
            </p>
            <p>成功案例：3D建模</p>
            <p style="font-size:35px;">￥4000</p>
			<p style="font-size:18px;">项目周期：7天</p>
            <p style="font-size:18px;">交付日期：2020-03-14</p> 

          </el-card>
        </div>
        <div class="col-md-3 test3">
          <el-card shadow="hover">

			<p class="logoGroup">
              <img src="../assets/images/logo.png" >x
              <img src="../assets/images/zw.jpg" >
              <br />
              <br />
              <br />
            </p>
            <p>成功案例：小程序开发</p>
            <p style="font-size:35px;">￥14000</p>
			<p style="font-size:18px;">项目周期：46天</p>
            <p style="font-size:18px;">交付日期：2020-05-15</p>

          </el-card>
        </div>
      </div>
    </div>
    <div class="block row">
      <div class="col-md-8 offset-md-2">
        <el-carousel style="width:100%;height:300px;">
          <el-carousel-item>
            <img class="zmd" src="../assets/images/adver5.png" style="width:100%;height:100%;" >
            <span style="font-size:60px;color:#F8F8F8;">Cool Dai11</span>
          </el-carousel-item>
          <el-carousel-item>
            <img class="zmd" src="../assets/images/adver2.jpg" style="width:100%;height:100%;" >
            <span style="font-size:60px;color:#F8F8F8;">Cool Dai11</span>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#5073D9");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};
</script>

<style>
.first img {
  width: 90%;
  height: auto;
}

.first p {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 100px;
  margin-top: -50px;
  font-size: 40px;
  color: beige;
}
.col-md-3 img {
  width: 40%;
}
.col-md-3 p {
  text-align: center;
  font-size: 25px;
}

.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
}
.second p {
  font-size: 30px;
  position: absolute;
  top: 60%;
  width: 100%;
  height: 100px;
  margin-top: -50px;
}
.second img {
  width: 45%;
  height: auto;
}

.logoGroup {
  margin-top: 40px;
}

.logoGroup img {
  width: 70px;
  height: auto;
}
.develop {
  font-size: 20px;
  background-color: #f8f8f8;
  padding: 40px;
  /* background: azure; */
}
.develop p {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
}
.pnggroup img {
  width: 10%;
  height: auto;
}

.hover:hover {
  background-color: #5073ea;
}
.col-md-4 ul {
  padding-left: 2rem; /*设置列表左边间隔以放置图片*/
  list-style-type: none; /*取消默认的项目符号图标*/
}

.col-md-4 ul li {
  padding-left: 2rem; /*设置列表左边间隔以放置图片*/
  background-image: url(../assets/images/tick.png); /*为每一个li插入图片*/
  background-position: 0 0; /*定位为最左和最上*/
  background-size: 1.6rem; /*为图片与li设置0.4rem的间隔*/
  background-repeat: no-repeat; /*取消默认的图片复制，就显示一个图标*/
}

.block {
  background-color: #f8f9fa;
}
.el-carousel__item h3 {
  color: #f8f8f8;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #f8f8f8;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #f8f8f8;
}
.zmd {
  width: 45%;
  text-align: center;
}
</style>