<template>
  <div>
    <b-row>
      <b-col md="8" offset-md="2">
        <el-card class="box-card" style="margin-top:2em">
          <b-row>
            <div class="tag-group row" style="width:100%;">
              <div class="col-md-2" style="margin-top:10px;">
                <span class="tag-group__title space">角色</span>
              </div>

              <div class="col-md-9">
                <el-tag
                  v-for="(item,index) in items"
                  v-if="index < 9 && state1"
                  :key="item.label"
                  :type="item.type"
                  :effect="item.effect"
                  @click="change(index)"
                  class="space pointer"
                >{{item.label}}</el-tag>

                <el-tag
                  v-for="(item,index) in items"
                  v-if="!state1"
                  :key="item.label"
                  :type="item.type"
                  :effect="item.effect"
                  @click="change(index)"
                  class="space pointer"
                >{{item.label}}</el-tag>
              </div>
              <div class="col-md-1" style="margin-top:10px;">
                <span
                  class="space pointer"
                  ref="btn1"
                  style="color:#007bff;"
                  @click="more1()"
                >{{state1 ? '更多' : '收起'}}</span>
              </div>
            </div>
          </b-row>

          <b-row>
            <div class="tag-group row" style="width:100%;">
              <div class="col-md-2" style="margin-top:10px;">
                <span class="tag-group__title space">地点</span>
              </div>

              <div class="col-md-9">
                <el-tag
                  v-for="(item,index) in items2"
                  v-if="index < 9 && state2"
                  :key="item.label"
                  :type="item.type"
                  :effect="item.effect"
                  @click="change2(index)"
                  class="space pointer"
                >{{item.label}}</el-tag>

                <el-tag
                  v-for="(item,index) in items2"
                  v-if="!state2"
                  :key="item.label"
                  :type="item.type"
                  :effect="item.effect"
                  @click="change2(index)"
                  class="space pointer"
                >{{item.label}}</el-tag>
              </div>
              <div class="col-md-1" style="margin-top:10px;">
                <span
                  class="space pointer"
                  ref="btn1"
                  style="color:#007bff;"
                  @click="more2()"
                >{{state2 ? '更多' : '收起'}}</span>
              </div>
            </div>
          </b-row>

          <b-row>
            <div class="tag-group row" style="width:100%;">
              <div class="col-md-2" style="margin-top:10px;">
                <span class="tag-group__title space">行业</span>
              </div>

              <div class="col-md-9">
                <el-tag
                  v-for="(item,index) in items3"
                  v-if="index < 8 && state3"
                  :key="item.label"
                  :type="item.type"
                  :effect="item.effect"
                  @click="change3(index)"
                  class="space pointer"
                >{{item.label}}</el-tag>

                <el-tag
                  v-for="(item,index) in items3"
                  v-if="!state3"
                  :key="item.label"
                  :type="item.type"
                  :effect="item.effect"
                  @click="change3(index)"
                  class="space pointer"
                >{{item.label}}</el-tag>
              </div>
              <div class="col-md-1" style="margin-top:10px;">
                <span
                  class="space pointer"
                  ref="btn1"
                  style="color:#007bff;"
                  @click="more3()"
                >{{state2 ? '更多' : '收起'}}</span>
              </div>
            </div>
          </b-row>

          <b-row>
            <div class="tag-group row" style="width:100%;">
              <div class="col-md-2" style="margin-top:10px;">
                <span class="tag-group__title space">薪资</span>
              </div>

              <div class="col-md-10">
                <div class="space">
                  <input
                    type="number"
                    mx-guid="g0mx_5"
                    id="priceRange_0"
                    class="rmb"
                    placeholder="¥"
                  />
                  —
                  <input
                    type="number"
                    mx-guid="g0mx_5"
                    id="priceRange_0"
                    class="rmb"
                    placeholder="¥"
                  />
                  <el-tag class="space" effect="dark">确定</el-tag>
                </div>
              </div>
            </div>
          </b-row>
        </el-card>

        <el-card
          class="box-card pointer"
          style="margin-top:1em"
          onclick="window.location.href='/programmer/info'"
        >
          <b-row>
            <b-col cols="2">
              <div class="twe">
                <p style="display:block;margin-buttom:15px;">
                  <img
                    src="https://inn.proginn.com/useralbum/21070/icon210701575528590.jpg!mediumicon"
                  />
                </p>
                <p
                  href="#"
                  style="box-sizing: border-box;display:
                             inline-block;line-height: 48px;text-align: center;
                             color: #2994f2;font-size: 16px;"
                >美男子</p>
              </div>
            </b-col>
            <b-col cols="8">
              <div class="tire" style="padding-left:0;">
                <div class="title">
                  <span class="til">阿里巴巴股份有限公司</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="til">高级前端工程师</span>
                  <span class="smalabel">杭州</span>
                  <span class="smalabel">PHP</span>
                  <span class="smalabel">8年</span>
                </div>
                <div class="firt">
                  <p
                    class="yi"
                    style="line-height: 2.33;"
                  >简介：所会技能有Html+css，Javascript，react/reactjs，Vue.js，webpack，Node.js</p>
                  <p class="yi">作品：落地页管理系统、上汽斯柯达商城、剪刀石头布智选商城-小程序</p>
                  <p
                    class="yi"
                    style="color:#848589;font-size:10px"
                  >可工作地点：上海远程 可预约时间：工作日09:00-18:00、周末09:00-18:00</p>
                </div>
              </div>
            </b-col>

            <b-col cols="2">
              <div class="sixt">
                <p class="sixt_one">
                  <span class="sixt_one_one">1200</span>元/天
                </p>
                <p>
                  <a
                    href="#"
                    style="background-color:#37a1f9;border:1px solid #37a1f9;color:#ffffff;padding-left:9px;padding-right:9px"
                  >按天预约</a>
                </p>
                <p>
                  <a
                    href="#"
                    style="background-color:#ffffff;border:1px solid #37a1f9;color:#37a1f9;padding-left:9px;padding-right:9px"
                  >按月雇佣</a>
                </p>
              </div>
            </b-col>
          </b-row>
        </el-card>
        <el-card class="box-card pointer" style="margin-top:1em;margin-bottom:2em;" onclick="window.location.href='/programmer/info'">
          <b-row>
            <b-col cols="2">
              <div class="twe">
                <p href="#" style="display:block;margin-buttom:15px;">
                  <img
                    src="https://inn.proginn.com/useralbum/21070/icon210701575528590.jpg!mediumicon"
                  />
                </p>
                <p
                  href="#"
                  style="box-sizing: border-box;display:
                             inline-block;line-height: 48px;text-align: center;
                             color: #2994f2;font-size: 16px;"
                >美男子</p>
              </div>
            </b-col>
            <b-col cols="8">
              <div class="tire" style="padding-left:0;">
                <div class="title">
                  <span class="til">阿里巴巴股份有限公司</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="til">高级前端工程师</span>
                  <span class="smalabel">杭州</span>
                  <span class="smalabel">B2C</span>
                  <span class="smalabel">8年</span>
                </div>
                <div class="firt">
                  <p
                    class="yi"
                    style="line-height: 2.33;"
                  >简介：所会技能有Html+css，Javascript，react/reactjs，Vue.js，webpack，Node.js</p>
                  <p class="yi">作品：落地页管理系统、上汽斯柯达商城、剪刀石头布智选商城-小程序</p>
                  <p
                    class="yi"
                    style="color:#848589;font-size:10px"
                  >可工作地点：上海远程 可预约时间：工作日09:00-18:00、周末09:00-18:00</p>
                </div>
              </div>
            </b-col>
            <b-col cols="2">
              <div class="sixt">
                <p class="sixt_one">
                  <span class="sixt_one_one">1200</span>元/天
                </p>
                <p>
                  <a
                    style="background-color:#37a1f9;border:1px solid #37a1f9;color:#ffffff;padding-left:9px;padding-right:9px"
                  >按天预约</a>
                </p>
                <p>
                  <a
                    style="background-color:#fff;border:1px solid #37a1f9;color:#37a1f9;padding-left:9px;padding-right:9px"
                  >按月雇佣</a>
                </p>
              </div>
            </b-col>
          </b-row>
        </el-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { type: "", label: "全部", effect: "dark" },
        { type: "", label: "产品经理", effect: "plain" },
        { type: "", label: "设计师", effect: "plain" },
        { type: "", label: "前端", effect: "plain" },
        { type: "", label: "移动端", effect: "plain" },
        { type: "", label: "小程序", effect: "plain" },
        { type: "", label: "游戏", effect: "plain" },
        { type: "", label: "后端", effect: "plain" },
        { type: "", label: "测试", effect: "plain" },
        { type: "", label: "DBA", effect: "plain" },
        { type: "", label: "运维", effect: "plain" },
        { type: "", label: "其他", effect: "plain" }
      ],
      state1: true,
      items2: [
        { type: "", label: "全部", effect: "dark" },
        { type: "", label: "北京", effect: "plain" },
        { type: "", label: "上海", effect: "plain" },
        { type: "", label: "深圳", effect: "plain" },
        { type: "", label: "杭州", effect: "plain" },
        { type: "", label: "广州", effect: "plain" },
        { type: "", label: "成都", effect: "plain" },
        { type: "", label: "武汉", effect: "plain" },
        { type: "", label: "南京", effect: "plain" },
        { type: "", label: "西安", effect: "plain" },
        { type: "", label: "重庆", effect: "plain" },
        { type: "", label: "长沙", effect: "plain" },
        { type: "", label: "厦门", effect: "plain" },
        { type: "", label: "郑州", effect: "plain" },
        { type: "", label: "天津", effect: "plain" }
      ],
      state2: true,
      items3: [
        { type: "", label: "全部", effect: "dark" },
        { type: "", label: "电子商务", effect: "plain" },
        { type: "", label: "社交", effect: "plain" },
        { type: "", label: "人工智能", effect: "plain" },
        { type: "", label: "媒体门户", effect: "plain" },
        { type: "", label: "工具软件", effect: "plain" },
        { type: "", label: "消费生活", effect: "plain" },
        { type: "", label: "金融", effect: "plain" },
        { type: "", label: "医疗健康", effect: "plain" },
        { type: "", label: "企业服务", effect: "plain" },
        { type: "", label: "数字娱乐", effect: "plain" },
        { type: "", label: "在线教育", effect: "plain" },
        { type: "", label: "其他", effect: "plain" }
      ],
      state3: true
    };
  },
  methods: {
    change(index) {
      if (this.items[index].effect == "plain") {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].effect = "plain";
        }
        this.items[index].effect = "dark";
      }
    },
    more1() {
      this.state1 = !this.state1;
    },
    change2(index) {
      if (this.items2[index].effect == "plain") {
        for (var i = 0; i < this.items2.length; i++) {
          this.items2[i].effect = "plain";
        }
        this.items2[index].effect = "dark";
      }
    },
    more2() {
      this.state2 = !this.state2;
    },
    change3(index) {
      if (this.items3[index].effect == "plain") {
        for (var i = 0; i < this.items3.length; i++) {
          this.items3[i].effect = "plain";
        }
        this.items3[index].effect = "dark";
      }
    },
    more3() {
      this.state3 = !this.state3;
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

<style scoped>
.space {
  margin-left: 20px;
  margin-top: 10px;
}

.pointer {
  cursor: pointer;
}

.one {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 15px;
  line-height: 3;
  float: left;
  margin-bottom: 10px;
  /*background-color: #dcefff;
    color: #2994f2;*/
}
.ten {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 15px;
  line-height: 3;
  float: left;
  margin-bottom: 10px;
  /*background-color: #dcefff;
    color: #2994f2;*/
}
.ele {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 15px;
  line-height: 3;
  float: left;
  margin-bottom: 10px;
  /*background-color: #dcefff;
    color: #2994f2;*/
}
.two {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}

.thr {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}
.four {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}
.fiv {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}
.six {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}
.sev {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}
.eig {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}
.nin {
  font-size: 14px;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  background: 0;
  padding: 7px 45px;
  line-height: 3;
  float: left;
  color: #555;
  margin-bottom: 10px;
}
.rmb {
  text-size-adjust: 100%;
  vertical-align: baseline;
  line-height: normal !important;
  margin-top: 5px;
  font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
  font-size: 100%;
  font-family: arial;
  font-style: normal;
  width: 90px;
  padding: 1px 1px 1px 3px;
  height: 30px;
  border: 1px solid #ccc;
  color: #777;
}
.confirm {
  text-size-adjust: 100%;
  font-family: "helvetica neue", tahoma, "hiragino sans gb", stheiti,
    "wenquanyi micro hei", "\5FAE\8F6F\96C5\9ED1,\5B8B\4F53", sans-serif !important;
  font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
  text-decoration: none;
  display: inline-block;
  margin-left: 12px;
  padding: 0 10px;
  line-height: 24px;
  border-radius: 3px;
  background: #37a1f9;
  color: #fff;
}
.twe {
  line-height: 3.33;
  color: rgba(0, 0, 0, 0.8);
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  max-width: 100%;
  background-color: transparent;
  text-align: center;
  width: 80px;
  font-size: 0.85714286rem;
  position: relative;
  display: table-cell;
  float: none;
  margin: 0;
  padding: 0;
  vertical-align: top;
}
img {
  width: 120px;
  border-radius: 100%;
}
.til {
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  line-height: 1;
  color: #333;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  padding-right: 10px;
  max-width: 380px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 20px;
}
.smalabel {
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  text-transform: none;
  border-radius: 0.2857rem;
  display: inline-block;
  vertical-align: baseline;
  line-height: 1;
  margin: 0 0.125em;
  background-color: #e8e8e8;
  border-color: #e8e8e8;
  background-image: none;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 700;
  box-sizing: border-box;
  transition: background 0.2s ease;
  font-size: 0.6571rem;
  padding: 0.4em 0.8em;
  margin-right: 10px;
}
.firt {
  line-height: 0.33;
  color: rgba(0, 0, 0, 0.8);
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  box-sizing: border-box;
  font-size: 18px;
  margin-top: 5px;
}
.sixt {
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.8);
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  font-size: 1em;
  box-sizing: border-box;
  float: left;
  min-height: 115px;
  padding-left: 26px;
  border-left: 1px solid #dadfe5;
  height: 100%;
  text-align: center;
}
.sixt_one {
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  text-align: center;
  box-sizing: border-box;
  line-height: 0.33;
  margin: 0 0 1em;
  margin-top: 0;
  width: 104px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #2994f2;
}
.sixt_one_one {
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  text-align: center;
  line-height: 1.5;
  color: #37a1f9;
  box-sizing: border-box;
  font-size: 25px;
}
.address {
  line-height: 1.33;
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  font-size: 7px;
  color: #848589;
  box-sizing: border-box;
  float: left;
  margin-right: 10px;
}
.yi {
  color: rgba(0, 0, 0, 0.8);
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  line-height: 1.33;
  margin: 0 0 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}
.tire {
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.8);
  font-family: tahoma, Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei",
    "\5FAE\8F6F\96C5\9ED1", "\5b8b\4f53", sans-serif;
  font-size: 1em;
  box-sizing: border-box;
  float: left;
  width: 690px;
  margin-left: 1px;
  padding-right: 38px;
  padding-left: 0;
}
</style>
