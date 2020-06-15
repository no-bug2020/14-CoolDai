<template>
  <div>
    <div class="container" style="margin-top:2em;margin-bottom:2em;">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover" style="padding:20px;">
            <el-steps :active="active">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
            <div class="row">
              <div class="col-md-4 offset-md-4 col-sm-10 offset-sm-1 col-xs-12">
                <img
                  v-if="active == 1 && img == ''"
                  style="width:60%;height:auto;margin-top:50px;margin-left:20%;"
                  src="../assets/icons/idcardFront.png"
                  alt="身份证正面"
                  @click="uploadImg('front')"
                />
                <img
                  v-if="active == 1 && img != ''"
                  style="width:100%;height:auto;margin-top:50px;"
                  :src="img"
                  alt="身份证正面"
                  @click="uploadImg('front')"
                />
                <img
                  v-if="active == 2 && img == ''"
                  style="width:60%;height:auto;margin-top:50px;margin-left:20%;"
                  src="../assets/icons/idcardBack.png"
                  alt="身份证反面"
                  @click="uploadImg('back')"
                />
                <img
                  v-if="active == 2 && img != ''"
                  style="width:100%;height:auto;margin-top:50px;"
                  :src="img"
                  alt="身份证正面"
                  @click="uploadImg('back')"
                />
                
              </div>
            </div>

            <div class="row" style="margin-top:50px;width:100%;">
              <template v-if="active == 3">
                  <div class="col-md-12">
                    <p>请仔细核对以下信息是否为您本人的信息</p>
                  </div>
                  <el-form :model="form" :rules="rules" ref="form" label-width="15%"  class="demo-ruleForm col-md-12">
				
				            <div class="row" style="width:100%;">
					            <div class="col-md-12 col-sm-12 col-xs-12">
						            <el-form-item label="真实姓名" prop="name" style="width:90%">
    						          <el-input v-model="form.name" style="width:60%;"></el-input>
  						          </el-form-item>
					            </div>
				            </div>

                    <div class="row" style="width:100%;">
					            <div class="col-md-12 col-sm-12 col-xs-12">
						            <el-form-item label="身份证号" prop="idcard" style="width:90%">
    						          <el-input v-model="form.idcard" style="width:60%;"></el-input>
  						          </el-form-item>
					            </div>
				            </div>

                    <div class="row" style="width:100%;">
					            <div class="col-md-12 col-sm-12 col-xs-12">
						            <el-form-item label="有效期" prop="date" style="width:90%">
    						          <el-date-picker
                            v-model="form.date"
                            type="date"
                            value-format="yyyyMMdd"
                            placeholder="选择日期">
                          </el-date-picker>
  						          </el-form-item>
					            </div>
				            </div>

                  </el-form>
                </template>
            </div>

            <div class="row" style="margin-top:50px;text-align:right">
              <div class="col-12">
                <el-button v-if="active < 3" style="margin-top: 12px;" @click="next">下一步</el-button>
                <el-button v-if="active == 3" style="margin-top: 12px;" onclick="window.history.back()">完成</el-button>
              </div>
            </div>

            <input type="file" name="front" @change="showImg($event)" id="front" hidden />
            <input type="file" name="back" @change="showImg($event)" id="back" hidden />
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      img: "",
      form: {
        name: '',
        idcard:'',
        date:''
      },
      rules: {
        name:[
          {required: true, message: '请输入真实姓名', trigger: 'blur'}
        ],
        idcard:[
          {required: true, message: '请输入身份证号', trigger: 'blur'}
        ],
        date:[
          {required: true, message: '请选择有效期', trigger: 'blur'}
        ]
      }
    };
  },

  methods: {
    next() {
      //   if (this.active++ >= 3) this.active = 1;
      if (this.active == 1) {
        var formData = new FormData();
        var formData = new window.FormData();
        formData.append(
          "file",
          document.querySelector("input[type=file]").files[0]
        );
        // var options = {
        //   // 设置axios的参数
        //   url: "url",
        //   data: formData,
        //   method: "post",
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   }
        // };
        // this.axios(options).then(res => {
          	
		// 	var address = res.data;  
		// 	console.log(address)
			//识别身份证正面
          	
          this.axios.get('http://39.98.78.5:9898/idcard/idcardFace.php?url=http://viapi-test.oss-cn-shanghai.aliyuncs.com/sanjiye-meizi/5.15/shenfz.jpg').then(res => {
          this.form.name = res.data['Name'];
          this.form.idcard = res.data['IDNumber'];
			});
        // });
      }else if(this.active == 2){
		// var formData = new FormData();
        // var formData = new window.FormData();
        // formData.append(
        //   "file",
        //   document.querySelector("input[type=file]").files[1]
        // );

        // var options = {
        //   // 设置axios的参数
        //   url: "url",
        //   data: formData,
        //   method: "post",
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   }
        // };
        // this.axios(options).then(res => {
          	
		// 	var address = res.data;  
		// 	console.log(address)
			//识别身份证反面
          	
          this.axios.get('http://39.98.78.5:9898/idcard/idcardBack.php?url=https://ali-ai-test.oss-cn-shanghai.aliyuncs.com/images/shenfen0813_02.jpg').then(res => {
          this.form.date = res.data['EndDate'];
			});
        // });
	  }
      this.active++;
      this.img = "";
    },
    uploadImg(type) {
      if (type == "front") {
        document.getElementById("front").click();
      } else {
        document.getElementById("back").click();
      }
    },
    showImg(e) {
      var file = e.target.files[0];

      //获取后缀名
      var filename = file.name;
      var temp = filename
        .split("")
        .reverse()
        .join("");
      var suffix = temp
        .substring(0, temp.search(/\./))
        .split("")
        .reverse()
		.join("");
		
      if (suffix == "png" || suffix == "jpg" || suffix == "jpeg") {
        var src = window.URL.createObjectURL(file); //转成可以在本地预览的格式
        this.img = src;
      } else {
        this.$message.error("不是图片哦");
      }
    }
  },

  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f8f8f8");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};
</script>

<style>
</style>