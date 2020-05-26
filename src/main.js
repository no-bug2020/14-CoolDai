import Vue from 'vue'
import App from './App.vue'
import Axios from "axios";
import router from './router'
import store from './store'
import Element from 'element-ui';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// js
import './plugins/element.js'
// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//全局变量
Vue.prototype.axios = Axios;
Vue.prototype.globalUrl = 'http://hermit.test/api/v1/';
Vue.prototype.domain = 'http:/hermit.test';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

