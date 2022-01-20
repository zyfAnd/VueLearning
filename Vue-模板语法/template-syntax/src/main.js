import Vue from 'vue'
import App from './App.vue'
// 引入 ElementUI UI 组件
import ElementUI from 'element-ui'
//引入 element ui 全部组件
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VueAxios from "vue-axios";
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
