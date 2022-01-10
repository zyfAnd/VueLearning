import Vue from 'vue'
import App from './App.vue'
//引入element UI 组件
import ElementUI from 'element-ui';
// 引入element UI 全部样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
//应用Emement UI
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
