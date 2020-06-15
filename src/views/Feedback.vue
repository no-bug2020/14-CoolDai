<template>
<div>
    <div class="container" style="padding:2em;">
        <el-card class="box-card">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                
                <div class="row">
                    <div class="col-md-6" style="text-align:right;">
                        <img src="../assets/images/advise.png" style="width:50px;height:auto;" alt="">
                    </div>
                    <div class="col-md-6" style="font-size:20px;font-weight:bold;">
                        <p>意见反馈</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="row" style="margin-top:10px;">
            <div class="col-md-12">
                <p>Cool Dai还在不断完善改进中，欢迎给我们提意见，真诚希望听到您的声音，我们会以最快的速度处理后联系你:)</p>
            </div>
        </div>

        <div class="row" style="margin-top:10px;">
            <div class="col-md-12">
                <el-form ref="form" :model="form" :rules="rules">
                    <el-form-item label="您的联系方式：" prop="tel">
                        <el-input v-model="form.tel"  placeholder="请输入您的电话号码"></el-input>
                    </el-form-item>
                    <el-form-item label="您的称呼：">
                        <el-input v-model="form.name"  placeholder="请输入您的称呼"></el-input>
                    </el-form-item>
                    <el-form-item label="您的意见：" prop="opinion">
                   <el-input
                    type="textarea"
                        :rows="5"
                        placeholder="请输入您的意见"
                        v-model="form.opinion">
                    </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12" style="text-align:center">
                <el-button>提交</el-button>
            </div>
        </div>

        </el-card>
    </div>
    
    
    
</div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          tel: '',
          name: '',
          opinion: ''
        },
        rules: {
          tel: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的电话号码', trigger: 'blur' }
          ],
        opinion:[
            { required: true, message: '请输入您的建议', trigger: 'blur' },
            { min:1,message: '请输入您的建议', trigger: 'blur' }
        ]
        }
      }
    },  methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    mounted() {
		document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8');
	},
	beforeDestroy() {
		document.querySelector('body').removeAttribute('style');
	}
  }
</script>

<style>
</style>
