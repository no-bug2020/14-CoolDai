<template>
  <div id="app">
    <div class="container" style="padding:2em">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix" style="text-align:center;">
              <span>完善个人简历后，才能申请签约开发者进行接单</span>
              <el-button style="float: right; padding: 3px 0" type="text" onclick="window.location.href='/helpdoc#div3-2'">签约规则</el-button>
            </div>
            <div class="text item" style="line-height:2em;">
              成为签约开发者后，才能在平台接单。
              <br />申请签约需要满足以下条件：
              <br />1.三年及以上工作经验
              <br />2.按签约规则如实填写个人简历
              <br />3.具有契约精神、服务意识，能按约定高效完成开发
              <br />4.无接单黑历史
            </div>
          </el-card>
        </div>
      </div>

      <div class="row" style="margin-top:20px;">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
            <span>实名认证</span>
            <el-button style="float: right; padding: 3px 0" type="text" onclick="window.location.href='/task/certification'">去认证</el-button>
          </el-card>
        </div>
      </div>
	  
	  <!--基本信息-->
      <div class="row" style="margin-top:20px;">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix row">
              <div class="col-md-3 col-sm-3 col-xs-3" style="line-height:2.5em;">
                <span>基本信息</span>
              </div>
              <div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
                <el-button style="float: right;" type="primary" @click="submitForm('form')">保存</el-button>
                <el-button style="float: right;margin-right:10px;" type="info">取消</el-button>
              </div>
            </div>

			<el-form :model="form" :rules="rules" ref="form" label-width="15%"  class="demo-ruleForm">
				
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<el-form-item label="姓名" prop="name" style="width:90%">
    						<el-input v-model="form.name" style="width:30%;"></el-input>
  						</el-form-item>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<el-form-item label="工作状态" prop="workingCondition" style="width:90%">
    						<el-select v-model="form.workingCondition" style="width:30%;" placeholder="请选择">
    							<el-option
      								v-for="item in workingOptions"
      								:key="item.value"
      								:label="item.label"
      								:value="item.value">
    							</el-option>
  							</el-select>
  						</el-form-item>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<el-form-item label="职业方向" prop="careerDirection" style="width:90%">
    							<el-cascader
    								v-model="form.careerDirection"
    								:options="careerOptions"
    								style="width:30%;" ></el-cascader>
  						</el-form-item>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<el-form-item label="期望日薪" prop="dailyWage" style="width:90%">
    						<el-input-number v-model="form.dailyWage" controls-position="right" style="width:30%"></el-input-number>
							&nbsp;&nbsp;&nbsp;元/天(8小时)
  						</el-form-item>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<el-form-item label="可工作时间" prop="workTime" style="width:100%">
							<el-checkbox-group v-model="form.type">
								<div class="row">
									<div class="col-md-2 col-sm-12 col-xs-12">
										<el-checkbox label="工作日" name="type"></el-checkbox>
									</div>

									<div class="col-md-4 col-sm-12 col-xs-12">
										<el-time-select
    										placeholder="起始时间"
    										v-model="form.workdayStartTime"
											prop="workdayStartTime"
    										:picker-options="{
      											start: '08:00',
      											step: '01:00',
      											end: '24:00'
    									}" >
  										</el-time-select>
									</div>

									<div class="col-md-4 col-sm-12 col-xs-12">
										<el-time-select
    										placeholder="结束时间"
    										v-model="form.workdayEndTime"
    										:picker-options="{
      											start: '08:00',
      											step: '01:00',
      											end: '24:00',
      											minTime: form.workdayStartTime
    									}"></el-time-select>
									</div>
								</div>

								<div class="row">
									<div class="col-md-2 col-sm-12 col-xs-12">
										<el-checkbox label="周末" name="type"></el-checkbox>
									</div>

									<div class="col-md-4 col-sm-12 col-xs-12">
										<el-time-select
    										placeholder="起始时间"
    										v-model="form.holidayStartTime"
    										:picker-options="{
      											start: '08:00',
      											step: '01:00',
      											end: '24:00'
    									}" >
  										</el-time-select>
									</div>

									<div class="col-md-4 col-sm-12 col-xs-12">
										<el-time-select
    										placeholder="结束时间"
    										v-model="form.holidayEndTime"
    										:picker-options="{
      											start: '08:00',
      											step: '01:00',
      											end: '24:00',
      											minTime: form.holidayStartTime
    									}"></el-time-select>
									</div>
								</div>
							</el-checkbox-group>
    						
  						</el-form-item>
					</div>
				</div>
			
			</el-form>
            
          </el-card>
        </div>
      </div>

	  <!--个人介绍-->
	  <div class="row" style="margin-top:20px;">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
             <div slot="header" class="clearfix row">
              <div class="col-md-3 col-sm-3 col-xs-3" style="line-height:2.5em;">
                <span>个人介绍</span>
              </div>
              <div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
				  	<template v-if="perIntr == false">
						<el-button style="float: right;" type="primary"   @click="perIntr = true">编辑</el-button>
				  	</template>
				  	<template v-if="perIntr">
						<el-button style="float: right;" type="primary" @click="submitPerIntr()">保存</el-button>
						<el-button style="float: right; margin-right:20px;" @click="perIntr = false,perIntrForm.cancel=true">取 消</el-button>
				  	</template>
                
              </div>
            </div>

			<!--初始页面-->
			<template v-if="perIntr == false && perIntrForm.intr == ''">
				<div class="row" style="height:200px;line-height:200px;">
					<div class="col-md-12 col-sm-12 col-xs-12 empty">
						点击右上角“编辑”按钮添加
					</div>
				</div>
			</template>

			<!--显示的结果-->
			<template v-if="perIntr == false && perIntrForm.intr != ''">
				<div class="row" style="height:200px;">
					<div class="col-md-12 col-sm-12 col-xs-12">
						{{perIntrForm.intr}}
					</div>
				</div>
			</template>

			<!--编辑区域-->
			<template v-if="perIntr">
				<el-form :model="perIntrForm" :rules="perIntrRules" ref="perIntrForm" label-width="0%"  class="demo-ruleForm">
				
				<div class="row" style="height:200px;">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<el-form-item prop="intr">
    						<el-input type="textarea" :rows="7" v-model="perIntrForm.intr" maxlength="300" show-word-limit></el-input>
  						</el-form-item>
					</div>
				</div>
		   		</el-form>
			</template>

          </el-card>
        </div>
      </div>

	  <!-- 工作经历 -->
	  <div class="row" style="margin-top:20px;">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
             <div slot="header" class="clearfix row">
              <div class="col-md-3 col-sm-3 col-xs-3" style="line-height:2.5em;">
                <span>工作经历</span>
              </div>
              <div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
                <template v-if="workExp == false">
					<el-button style="float: right;" @click="workExp = true" type="primary">编辑</el-button>
                </template>
				<template v-if="workExp">
					<el-button style="float: right;" type="primary" @click="submitWorkExp()">保存</el-button>
					<el-button style="float: right;margin-right:20px;" type="info" @click="cancelWorkExp()">取消</el-button>
					<el-button v-if="typeof(workExpForm.nowIndex) == 'number'" style="float: right;margin-right:15px;" type="danger" @click="deleteWorkExp()">删除</el-button>
				</template>
			  </div>
            </div>

			<!--初始页面-->
			<template v-if="workExp == false && workExpForm.exp.length == 0">
				<div class="row" style="height:200px;line-height:200px;">
					<div class="col-md-12 col-sm-12 col-xs-12 empty">
						点击右上角“编辑”按钮添加
					</div>
				</div>
			</template>
			
			<!--编辑区域-->
			<template v-if="workExp">
				<div class="row" style="height:auto;">
					<el-form :model="workExpForm" :rules="workExpRules" ref="workExpForm" label-width="0%"  class="demo-ruleForm" style="width:95%;margin-left:2.5%;">
						<div class="row">
							<div class="col-md-5">
								<el-form-item prop="startDay">
								<div class="block">
    								<el-date-picker
      									v-model="workExpForm.startDay"
      									type="daterange"
      									range-separator="至"
      									start-placeholder="开始日期"
      									end-placeholder="结束日期"
										style="width:100%"
										value-format="yyyy.MM.dd">
    								</el-date-picker>
  								</div>
								</el-form-item>
							</div>

							<div class="col-md-2">
								<el-form-item prop="company">
    								<el-input placeholder="输入公司名称" v-model="workExpForm.company"></el-input>
  								</el-form-item>
							</div>

							<div class="col-md-2">
								<el-form-item prop="position">
    								<el-input placeholder="输入职位" v-model="workExpForm.position"></el-input>
  								</el-form-item>
							</div>

						</div>

						<div class="row">
							<div class="col-md-12">
								<el-form-item prop="content">
    								<el-input type="textarea" :rows="5" placeholder="请从主要工作内容、成就等方面，描述你的工作经历，字数不少于60字符"
									 v-model="workExpForm.content" minlength="60">
									</el-input>
  								</el-form-item>
							</div>
							
						</div>
					</el-form>
				</div>
			</template>

			<!-- 结果显示区 -->
			<template v-if="workExp == false && workExpForm.exp.length != 0">
				<div v-for="(item,index) in workExpForm.exp" class="row" style="padding:20px;">
					<div class="row" style="width:100%;">
						<div class="col-md-4">
							{{item.startDay}} ~ {{item.endDay}}
						</div>
						<div class="col-md-4">
							{{item.company}}
						</div>
						<div class="col-md-2">
							{{item.position}}
						</div>
						<div class="col-md-2" style="text-align:right;">
							<a @click="showWorkExp(index)" class="text-primary">编辑</a>
						</div>
					</div>
					
					<div class="row" style="margin-top:10px;">
						
						<div class="col-md-12">
							{{item.content}}
						</div>
					</div>
					<template v-if="index+1 < workExpForm.exp.length">
						<el-divider></el-divider>
					</template>
				</div>
			</template>

          </el-card>
        </div>
      </div>

	  <!-- 教育经历 -->
	  <div class="row" style="margin-top:20px;">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
             <div slot="header" class="clearfix row">
              <div class="col-md-3 col-sm-3 col-xs-3" style="line-height:2.5em;">
                <span>教育经历</span>
              </div>
			  
              	<div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
					<template v-if="eduExp == false">
                		<el-button style="float: right;" type="primary" @click="eduExp = true">编辑</el-button>
					</template>

					<template v-if="eduExp">
                		<el-button style="float: right;" type="primary" @click="submitEduExp()">保存</el-button>
						<el-button style="float: right;margin-right:20px;" type="info" @click="cancelEduExp()">取消</el-button>
						<el-button v-if="typeof(eduExpForm.nowIndex) == 'number'" style="float: right;margin-right:15px;" type="danger" @click="deleteEduExp()">删除</el-button>
					</template>
				  </div>
            </div>
			
			<!--初始页面-->
			<template v-if="eduExp == false && eduExpForm.exp.length == 0">
				<div class="row" style="height:200px;line-height:200px;">
					<div class="col-md-12 col-sm-12 col-xs-12 empty">
						点击右上角“编辑”按钮添加
					</div>
				</div>
			</template>

			<!--编辑页面-->
			<template v-if="eduExp">
				<div class="row" style="height:auto;">
					<el-form :model="eduExpForm" :rules="eduExpRules" ref="eduExpForm" label-width="0%"  class="demo-ruleForm" style="width:95%;margin-left:2.5%;">
						<div class="row">
							<div class="col-md-5">
								<el-form-item prop="startDay">
								<div class="block">
    								<el-date-picker
      									v-model="eduExpForm.startDay"
      									type="daterange"
      									range-separator="至"
      									start-placeholder="开始日期"
      									end-placeholder="结束日期"
										style="width:100%"
										value-format="yyyy.MM.dd">
    								</el-date-picker>
  								</div>
								</el-form-item>
							</div>

							<div class="col-md-2">
								<el-form-item prop="school">
    								<el-input placeholder="学校名称" v-model="eduExpForm.school"></el-input>
  								</el-form-item>
							</div>

							<div class="col-md-3">
								<el-form-item prop="major">
    								<el-input placeholder="专业" v-model="eduExpForm.major"></el-input>
  								</el-form-item>
							</div>

							<div class="col-md-2">
								<el-form-item prop="education">
									<el-select v-model="eduExpForm.education" placeholder="学历">
    									<el-option
      										v-for="item in eduOptions"
      										:key="item.value"
      										:label="item.label"
      										:value="item.value">
    									</el-option>
  									</el-select>
								</el-form-item>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<el-form-item prop="report">
    								<el-input placeholder="请输入学信网在线验证报告地址" v-model="eduExpForm.report"></el-input>
  								</el-form-item>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<el-form-item prop="description">
    								<el-input type="textarea" :rows="5" placeholder="教育经历文字说明，字数不少于60字符"
									 v-model="eduExpForm.description" minlength="60">
									</el-input>
  								</el-form-item>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<p style="font-weight: 400;color: #919aa7;">
									学信网在线验证报告, 例如：https://my.chsi.com.cn/
								</p>
							</div>
						</div>
					</el-form>
				</div>
			</template>

			<!--结果显示区-->
			<template v-if="eduExp == false && eduExpForm.exp.length != 0">
				<div v-for="(item,index) in eduExpForm.exp" class="row" style="padding:20px;">
					<div class="row" style="width:100%;">
						<div class="col-md-4">
							{{item.startDay}} ~ {{item.endDay}}
						</div>
						<div class="col-md-4">
							{{item.school}}({{item.education}})
						</div>
						<div class="col-md-2">
							{{item.major}}
						</div>
						<div class="col-md-2" style="text-align:right;">
							<a @click="showEduExp(index)" class="text-primary">编辑</a>
						</div>
					</div>
					
					<div class="row" style="margin-top:10px;">
						
						<div class="col-md-12">
							{{item.description}}
						</div>
					</div>
					<template v-if="index+1 < eduExpForm.exp.length">
						<el-divider></el-divider>
					</template>
				</div>
			</template>

          </el-card>
        </div>
      </div>
	  
	  <!-- 技能 -->
	  <div class="row" style="margin-top:20px;">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
             <div slot="header" class="clearfix row">
              <div class="col-md-3 col-sm-3 col-xs-3" style="line-height:2.5em;">
                <span>技能</span>
              </div>
              <div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
                <template v-if="skill == false">
					<el-button style="float: right;" type="primary" @click="skill = true">编辑</el-button>
                </template>
				<template v-if="skill">
					<el-button style="float: right;" type="primary" @click="submitSkill()">保存</el-button>
					<el-button style="float: right;margin-right:20px;" type="info" @click="cancelSkill()">取消</el-button>
					<el-button v-if="typeof(skillForm.nowIndex) == 'number'" style="float: right;margin-right:15px;" type="danger" @click="deleteSkill()">删除</el-button>
				</template>
			  </div>
            </div>
			
			<!--初始页面-->
			<template v-if="skill == false && skillForm.exp.length == 0" >
				<div class="row" style="height:200px;line-height:200px;">
					<div class="col-md-12 col-sm-12 col-xs-12 empty">
						点击右上角“编辑”按钮添加
					</div>
				</div>
			</template>

			<!--编辑页面-->
			<template v-if="skill">
				<div class="row" style="height:auto;">
					<el-form :model="skillForm" :rules="skillRules" ref="skillForm" label-width="0%"  class="demo-ruleForm" style="width:95%;margin-left:2.5%;">
						<div class="row">
							<div class="col-md-3">
								<el-form-item prop="name">
									<el-input placeholder="填写单个技能全名" v-model="skillForm.name"></el-input>
								</el-form-item>
							</div>

							<div class="col-md-3">
								<el-form-item prop="grade">
									<el-select v-model="skillForm.grade" placeholder="选择分数">
    									<el-option
      										v-for="item in skillOptions"
      										:key="item.value"
      										:label="item.label"
      										:value="item.value">
    									</el-option>
  									</el-select>
								</el-form-item>
							</div>

							<div class="col-md-6">
								<el-form-item>
									1分为新入门，5分为满分
								</el-form-item>
							</div>
							
						</div>
					</el-form>

				</div>
			</template>

			<!-- 结果显示区 -->
			<template v-if="skill == false && skillForm.exp.length != 0">
				<div v-for="(item,index) in skillForm.exp" class="row" style="padding:20px;">
					<div class="row" style="width:100%;">
						<div class="col-md-4">
							技能名称：{{item.name}}
						</div>
						<div class="col-md-4">
							经验自评：{{item.grade}}
						</div>
						<div class="col-md-2">
							
						</div>
						<div class="col-md-2" style="text-align:right;">
							<a @click="showSkill(index)" class="text-primary">编辑</a>
						</div>
					</div>
					
					<template v-if="index+1 < skillForm.exp.length">
						<el-divider></el-divider>
					</template>
				</div>
			</template>

          </el-card>
        </div>
      </div>
	  
	  <!-- 作品 -->
	  <div class="row" style="margin-top:20px;">
        <div class="col-md-12 col-sm-12">
          <el-card class="box-card" shadow="hover">
             <div slot="header" class="clearfix row">
              <div class="col-md-3 col-sm-3 col-xs-3" style="line-height:2.5em;">
                <span>作品</span>
              </div>
              <div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-6 offset-xs-3">
                <template v-if="works == false">
					<el-button style="float: right;" type="primary" @click="works=true">编辑</el-button>
                </template>
				<template v-if="works">
                	<el-button style="float: right;" type="primary" @click="submitWork()">保存</el-button>
					<el-button style="float: right;margin-right:20px;" type="info" @click="cancelWork()">取消</el-button>
					<el-button v-if="typeof(workForm.nowIndex) == 'number'" style="float: right;margin-right:15px;" type="danger" @click="deleteWork()">删除</el-button>
				</template>
			  </div>
            </div>
			
			<!-- 初始页面 -->
			<template v-if="works == false && workForm.exp.length == 0">
				<div class="row" style="height:200px;line-height:200px;">
					<div class="col-md-12 col-sm-12 col-xs-12 empty">
						点击右上角“编辑”按钮添加
					</div>
				</div>
			</template>

			<!-- 编辑页面 -->
			<template v-if="works">
				<el-form :model="workForm" :rules="workRules" ref="workForm" label-width="15%"  class="demo-ruleForm" style="width:95%;margin-left:2.5%;">
					<div class="row">
						<div class="col-md-12">
							<el-form-item label="作品名称" prop="name" style="width:90%">
    							<el-input v-model="workForm.name" style="width:60%;"></el-input>
  							</el-form-item>
						</div>

						<div class="col-md-12">
							<el-form-item label="关键功能" prop="function" style="width:90%">
								<el-select multiple v-model="workForm.function" placeholder="请选择">
    								<el-option
      									v-for="item in functionOptions"
    									:key="item.value"
  										:label="item.label"
      									:value="item.value">
    								</el-option>
  								</el-select>
  							</el-form-item>
						</div>

						<div class="col-md-12">
							<el-form-item label="作品描述" prop="description" style="width:90%">
								<el-input type="textarea" :rows="5" placeholder="请输入60~200字的作品描述"
								 v-model="workForm.description" minlength="60" maxlength="200">
								</el-input>
							</el-form-item>
						</div>

						<div class="col-md-12">
							<el-form-item label="作品职责" prop="duty" style="width:90%">
								<el-input type="textarea" :rows="5" placeholder="描述你在该作品中承担的责任，完成了哪些工作(不少于15字符)"
								 v-model="workForm.duty" minlength="15">
								</el-input>
							</el-form-item>
						</div>

						<div class="col-md-12">
							<el-form-item label="作品地址" prop="website" style="width:90%">
    							<el-input v-model="workForm.website" placeholder="github地址或已上线网址均可" ></el-input>
  							</el-form-item>
						</div>
					</div>
				</el-form>
			</template>

			<!--结果显示区-->
			<template v-if="works == false && workForm.exp.length != 0">
				<div v-for="(item,index) in workForm.exp" class="row" style="padding:20px;">
					<div class="row" style="width:100%;">
						<div class="col-md-4">
							<a :href="item.website" target="_blank">{{item.name}}</a>
						</div>
						<div class="col-md-4">
							<!-- <el-tag v-for="(item2,index) in item.function">{{item2}}</el-tag> -->
						</div>
						<div class="col-md-2">
							
						</div>
						<div class="col-md-2" style="text-align:right;">
							<a @click="showWork(index)" class="text-primary">编辑</a>
						</div>
					</div>
					
					<div class="row" style="margin-top:10px;">
						
						<div class="col-md-12">
							{{item.description}}
						</div>
					</div>
					<template v-if="index+1 < workForm.exp.length">
						<el-divider></el-divider>
					</template>
				</div>
			</template>

          </el-card>
        </div>
      </div>

	  <div class="row" style="margin-top:2em;">
		  	<div class="col-md-12 col-sm-12 col-xs-12" style="text-align:center;">
            	<el-button type="primary" @click="submitAll()">申请签约开发者</el-button>
        	</div>
	  </div>


    </div>
  </div>
  
</template>

<script type="text/javascript" src="../assets/js/task.js"></script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}

.box-card .clearfix span {
  margin-top: 30px;
}

.empty{
	font-size: 27px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #cdcdcd;
}
</style>
