import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios=axios;
// 导入element-ui的组件
import ElementUI from 'element-ui'
//导入样式
import 'element-ui/lib/theme-chalk/index.css'

//全局css设定导入
import '../static/css/style.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
