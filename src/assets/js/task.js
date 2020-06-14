export default {
    name: "app",
    data() {

      //自定义验证器

      //在选可工作时间时先选类型才能选起始时间和结束时间
      var validateWorkTime = (rule, value, callback) => {
          if (this.form.type.length === 0 && 
              (this.form.workdayStartTime !== '' || this.form.workdayEndTime !== '' ||
                this.form.holidayStartTime !== '' || this.form.holidayEndTime !== ''
               )
          ) {
                callback(new Error('请先选择类型'));
          } else if(this.form.type[0] == '工作日' 
                    && (this.form.holidayStartTime !== '' || this.form.holidayEndTime !== '')
                    && (this.form.workdayStartTime === '' || this.form.workdayEndTime === '')
          ){
              callback(new Error('请先选择类型对应的时间'));
          }else if(this.form.type[0] == '周末' 
                    && (this.form.holidayStartTime === '' || this.form.holidayEndTime === '')
                    && (this.form.workdayStartTime !== '' || this.form.workdayEndTime !== '')
          ){
              callback(new Error('请先选择类型对应的时间'));
          }else {
                callback();
          }
      };
        
      return {
          //基本信息表单
          form: {
              name: '',
              workingCondition: '',
              careerDirection:'',
              dailyWage:'',
              type:[],
              workdayStartTime:'',
              workdayEndTime:'',
              holidayStartTime:'',
              holidayEndTime:''
          },
          

          //基本信息验证规则
          rules: {
                name: [
                  { required: true, message: '请输入姓名', trigger: 'blur' }
              ],
              workingCondition: [
                  {required:true, message: '请选择工作状态', trigger: 'blur'}
              ],
              careerDirection: [
                  {required:true, message: '请选择职业方向', trigger: 'blur'}
              ],
              dailyWage: [
                  {required:true, message: '请输入日薪', trigger: 'blur'}
              ],
              workTime: [{
                  validator:validateWorkTime,
                  trigger: 'blur'
              }]
          },

          perIntr:false, //个人介绍

          perIntrForm: {
              intr: '',
              cancel: false
          },

          perIntrRules: {
              intr: [
                  { required: true, message: '请输入自我介绍', trigger: 'blur' },
              ]
          },

          workExp:false, //工作经历

          workExpForm: {
              exp:[],
              startDay:[],
              endDay:'',
              company: '',
              position: '',
              content: '',
              nowIndex: ''
          },

          workExpRules: {
              startDay: [
                  {required: true, message: '请选择工作时间', trigger: 'blur'}
              ],
              company: [
                  {required: true, message: '请输入公司', trigger: 'blur'}
              ],
              position: [
                  {required: true, message: '请输入职位', trigger: 'blur'}
              ],
              content: [
                  {required: true, message: '请输入工作内容', trigger: 'blur'},
                  { min: 60, message: '字数不少于60字', trigger: 'blur' }
              ]
          },

          eduExp:false, //教育经历

          eduExpForm: {
              exp:[],
              startDay:'',
              endDay:'',
              school:'',
              major:'',
              education:'',
              report:'',
              description:'',
              nowIndex: ''
          },

          eduExpRules: {
              startDay:[
                  {required: true, message: '请选择日期', trigger: 'blur'}
              ],
              school: [
                  {required: true, message: '请输入学校名称', trigger: 'blur'}
              ],
              major: [
                  {required: true, message: '请输入专业名称', trigger: 'blur'}
              ],
              education: [
                  {required: true, message: '请选择学历', trigger: 'blur'}
              ],
              report: [
                  {required: true, message: '请输入学信网在线验证报告网址', trigger: 'blur'}
              ],
              description: [
                  {required: true, message: '请输入教育经历说明', trigger: 'blur'},
                  { min: 60, message: '字数不少于60字', trigger: 'blur' }
              ]
          },

          skill:false, //技能

          skillForm: {
              exp:[],
              name:'',
              grade:'',
              nowIndex: ''
          },

          skillRules: {
              name:[
                  {required: true, message: '请输入技能名称', trigger: 'blur'}
              ],
              grade:[
                  {required: true, message: '请选择分数', trigger: 'blur'}
              ]
          },

          works:false, //作品

          workForm: {
              exp:[],
              name:'',
              function:'',
              description:'',
              duty:'',
              website:'',
              nowIndex: ''
          },

          workRules: {
              name: [
                  {required: true, message: '请输入作品名称', trigger: 'blur'}
              ],
              function: [
                  {required: true, message: '请选择关键功能', trigger: 'blur'}
              ],
              description: [
                  {required: true, message: '请输入作品描述', trigger: 'blur'},
                  {min: 60, max: 200,message: '字符长度为60~200',trigger: 'blur'}
              ],
              duty: [
                  {required: true, message: '请输入作品职责', trigger: 'blur'}
              ],
              website: [
                  {required: true, message: '请输入作品地址', trigger: 'blur'}
              ]
          },

          functionOptions:[{
              value: '支付',
              label: '支付'
          },{
              value: '视频',
              label: '视频'
          },{
              value: '音频',
              label: '音频'
          },{
              value: '图片',
              label: '图片'
          },{
              value: '即时通讯',
              label: '即时通讯'
          },{
              value: '文件处理',
              label: '文件处理'
          },{
              value: '邮件短信',
              label: '邮件短信'
          },{
              value: '地图',
              label: '地图'
          },{
              value: '数据可视化',
              label: '数据可视化'
          },{
              value: '社交分享',
              label: '社交分享'
          },{
              value: '第三方登录',
              label: '第三方登录'
          },{
              value: '翻译',
              label: '翻译'
          },{
              value: '其它',
              label: '其它'
          }],

          skillOptions:[{
              value: '1',
              label: '1'
          },{
              value: '2',
              label: '2'
          },{
              value: '3',
              label: '3'
          },{
              value: '4',
              label: '4'
          },{
              value: '5',
              label: '5'
          }],

          temp: '',

          eduOptions:[{
              value: '本科',
              label: '本科'
          },{
              value: '大专',
              label: '大专'
          },{
              value: '硕士研究生',
              label: '硕士研究生'
          },{
              value: '高中',
              label: '高中'
          }],
          
          workingOptions: [{
                value: '求职',
                label: '求职'
          },{
                value: '自由职业',
                label: '自由职业'
          },{
                value: '正常工作',
                label: '正常工作'
          }],

          careerOptions:[{
              value: '产品经理',
              label: '产品经理',
              children:[{
                  value: '产品经理',
                  label: '产品经理',
              },{
                  value: '项目经理',
                  label: '项目经理'
              },{
                  value: '产品其它',
                  label: '产品其它'
              }]
          },{
              value: '设计师',
              label: '设计师',
              children:[{
                  value: 'UI设计师',
                  label: 'UI设计师'
              },{
                  value: '原画师',
                  label: '原画师'
              },{
                  value: '设计其它',
                  label: '设计其它'
              }]
          },{
              value: '前端',
              label: '前端',
              children: [{
                  value: '前端',
                  label: '前端'
                  }]
          },{
              value: '移动端',
              label: '移动端',
              children: [{
                  value: 'Android',
                  label: 'Android'
              },
              {
                  value: 'iOS',
                  label: 'iOS'
              },{
                  value: '移动其他',
                  label: '移动其他',
              }]
          },{
              value: '小程序',
              label: '小程序',
              children: [{
                  value: '小程序',
                  label: '小程序'
              }]
          },{
              value: '游戏',
              label: '游戏',
              children: [{
                  value: 'Unity3D',
                  label: 'Unity3D'
              },{
                  value: '游戏其它',
                  label: '游戏其它'
              }]
          },{
              value: '后端',
              label: '后端',
              children: [{
                  value: '全栈',
                  label: '全栈'
              },{
                  value: 'PHP',
                  label: 'PHP'
              },{
                  value: 'Java',
                  label: 'Java'
              },{
                  value: 'Python',
                  label: 'Python'
              },{
                  value: 'C++',
                  label: 'C++'
              },{
                  value: 'C',
                  label: 'C'
              },{
                  value: '后端其他',
                  label: '后端其他'
              }]
          },{
              value: '测试',
              label: '测试',
              children: [{
                  value: '黑盒测试',
                  label: '黑盒测试'
              },{
                  value: '白盒测试',
                  label: '白盒测试'
              },{
                  value: '灰盒测试',
                  label: '灰盒测试'
              }]
          },{
              value: 'DBA',
              label: 'DBA',
              children: [{
                  value: 'DBA',
                  label: 'DBA'
              }]
          },{
              value: '运维',
              label: '运维',
              children: [{
                  value: '运维',
                  label: '运维'
              }]
          },{
              value: '其他',
              label: '其他',
              children: [{
                  value: '架构师',
                  label: '架构师'
              },{
                  value: 'CTO',
                  label: 'CTO'
              },{
                  value: '运营',
                  label: '运营',
              }]
          }]


          
          
      }
  },
  methods:{
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }
          });
      },
      submitPerIntr(){
          this.$refs['perIntrForm'].validate((valid) => {
                if (valid) {
                  this.perIntr = false;
                  this.temp = this.perIntrForm.intr;
                } else {
                  console.log('error submit!!');
                  return false;
                }
          });
      },

      //工作经历

      //保存按钮
      submitWorkExp(){
          this.$refs['workExpForm'].validate((valid) => {
              if (valid) {
                  var data = {};
                  data['startDay'] = this.workExpForm.startDay[0];
                  data['endDay'] = this.workExpForm.startDay[1];
                  data['company'] = this.workExpForm.company;
                  data['position'] = this.workExpForm.position;
                  data['content'] = this.workExpForm.content;

                  if(typeof(this.workExpForm.nowIndex) == "number"){
                      //修改
                      this.workExpForm.exp[this.workExpForm.nowIndex] = data;
                  }else{
                      //第一次添加
                      this.workExpForm.exp.push(data);
                  }

                  this.cancelWorkExp();
                } else {
                  console.log('error submit!!');
                  return false;
                }
          });
      },

      //取消按钮
      cancelWorkExp(){
          this.workExp = false;
          this.workExpForm.startDay = '';
          this.workExpForm.endDay = '';
          this.workExpForm.company = '';
          this.workExpForm.position = '';
          this.workExpForm.content = '';
          this.workExpForm.nowIndex = '';
      },

      //点击下边那个编辑
      showWorkExp(index){
          this.workExp = true;
          this.workExpForm.nowIndex = index;
          this.$set(this.workExpForm,'startDay',[this.workExpForm.exp[index].startDay,this.workExpForm.exp[index].endDay])
          this.workExpForm.company = this.workExpForm.exp[index].company;
          this.workExpForm.position = this.workExpForm.exp[index].position;
          this.workExpForm.content = this.workExpForm.exp[index].content;
      },

      //删除按钮
      deleteWorkExp(){
          var index = this.workExpForm.nowIndex;
          this.workExpForm.exp.splice(index,1);
          this.workExpForm.nowIndex = '';
          this.cancelWorkExp();
      },


      //教育经历

      //保存按钮
      submitEduExp(){
          this.$refs['eduExpForm'].validate((valid) => {
              if (valid) {
                  var data = {};
                  data['startDay'] = this.eduExpForm.startDay[0];
                  data['endDay'] = this.eduExpForm.startDay[1];
                  data['school'] = this.eduExpForm.school;
                  data['major'] = this.eduExpForm.major;
                  data['education'] = this.eduExpForm.education;
                  data['report'] = this.eduExpForm.report;
                  data['description'] = this.eduExpForm.description;

                  if(typeof(this.eduExpForm.nowIndex) == "number"){
                      //修改
                      this.eduExpForm.exp[this.eduExpForm.nowIndex] = data;
                  }else{
                      //第一次添加
                      this.eduExpForm.exp.push(data);
                  }

                  this.cancelEduExp();
                } else {
                  console.log('error submit!!');
                  return false;
                }
          });
      },

      //取消按钮
      cancelEduExp(){
          this.eduExp = false;
          this.eduExpForm.startDay = '';
          this.eduExpForm.endDay = '';
          this.eduExpForm.school = '';
          this.eduExpForm.major = '';
          this.eduExpForm.education = '';
          this.eduExpForm.report = '';
          this.eduExpForm.description = '';
          this.eduExpForm.nowIndex = '';
      },

      //点击下边那个编辑
      showEduExp(index){
          this.eduExp = true;
          this.eduExpForm.nowIndex = index;
          this.$set(this.eduExpForm,'startDay',[this.eduExpForm.exp[index].startDay,this.eduExpForm.exp[index].endDay])
          this.eduExpForm.school = this.eduExpForm.exp[index].school;
          this.eduExpForm.major = this.eduExpForm.exp[index].major;
          this.eduExpForm.education = this.eduExpForm.exp[index].education;
          this.eduExpForm.report = this.eduExpForm.exp[index].report;
          this.eduExpForm.description = this.eduExpForm.exp[index].description;
      },

      //删除按钮
      deleteEduExp(){
          var index = this.eduExpForm.nowIndex;
          this.eduExpForm.exp.splice(index,1);
          this.eduExpForm.nowIndex = '';
          this.cancelEduExp();
      },

      //技能

      //保存按钮
      submitSkill(){
          this.$refs['skillForm'].validate((valid) => {
              if (valid) {
                  var data = {};
                  data['name'] = this.skillForm.name;
                  data['grade'] = this.skillForm.grade;

                  if(typeof(this.skillForm.nowIndex) == "number"){
                      //修改
                      this.skillForm.exp[this.skillForm.nowIndex] = data;
                  }else{
                      //第一次添加
                      this.skillForm.exp.push(data);
                  }

                  this.cancelSkill();
                } else {
                  console.log('error submit!!');
                  return false;
                }
          });
      },

      //取消按钮
      cancelSkill(){
          this.skill = false;
          this.skillForm.name = '';
          this.skillForm.grade = '';
          this.skillForm.nowIndex = '';
      },

      //点击下边那个编辑
      showSkill(index){
          this.skill = true;
          this.skillForm.nowIndex = index;
          
          this.skillForm.name = this.skillForm.exp[index].name;
          this.skillForm.grade = this.skillForm.exp[index].grade;
      },

      //删除按钮
      deleteSkill(){
          var index = this.skillForm.nowIndex;
          this.skillForm.exp.splice(index,1);
          this.skillForm.nowIndex = '';
          this.cancelSkill();
      },

      //作品

      //保存按钮
      submitWork(){
          this.$refs['workForm'].validate((valid) => {
              if (valid) {
                  var data = {};
                  data['name'] = this.workForm.name;
                  data['function'] = this.workForm.function;
                  data['description'] = this.workForm.description;
                  data['duty'] = this.workForm.duty;
                  data['website'] = this.workForm.website;

                  if(typeof(this.workForm.nowIndex) == "number"){
                      //修改
                      this.workForm.exp[this.workForm.nowIndex] = data;
                  }else{
                      //第一次添加
                      this.workForm.exp.push(data);
                  }

                  this.cancelWork();
                } else {
                  console.log('error submit!!');
                  return false;
                }
          });
      },

      //取消按钮
      cancelWork(){
          this.works = false;
          this.workForm.name = '';
          this.workForm.function = '';
          this.workForm.description = '';
          this.workForm.duty = '';
          this.workForm.website = '';
          this.workForm.nowIndex = '';
      },

      //点击下边那个编辑
      showWork(index){
          this.works = true;
          this.workForm.nowIndex = index;
          this.workForm.name = this.workForm.exp[index].name;
          this.workForm.function = this.workForm.exp[index].function;
          this.workForm.description = this.workForm.exp[index].description;
          this.workForm.duty = this.workForm.exp[index].duty;
          this.workForm.website = this.workForm.exp[index].website;
      },

      //删除按钮
      deleteWork(){
          var index = this.workForm.nowIndex;
          this.workForm.exp.splice(index,1);
          this.workForm.nowIndex = '';
          this.cancelWork();
      },

      //提交所有表单
      submitAll(){
          window.location.href="/task/after";
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
  watch:{
      'perIntrForm.cancel':function(newval,oldval){
          if(this.perIntrForm.cancel){
              this.perIntrForm.intr = this.temp;
              this.perIntrForm.cancel = false;
          }
      }
  }
};