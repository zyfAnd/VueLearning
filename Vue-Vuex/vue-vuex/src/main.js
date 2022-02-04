import Vue from 'vue'
import App from './App.vue'

// 引入 ElementUI UI 组件
import ElementUI from 'element-ui'
//引入 element ui 全部组件
import 'element-ui/lib/theme-chalk/index.css';
//引入vuex
import Vuex from 'vuex'
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
