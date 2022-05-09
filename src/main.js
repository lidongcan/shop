import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 三级联动组件 全局注册
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav', TypeNav)

Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
