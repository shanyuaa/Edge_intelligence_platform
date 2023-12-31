// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import * as echarts from 'echarts';
import Plugin from 'v-fit-columns';

import "@/assets/css/global.css"

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);
Vue.use(Plugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
