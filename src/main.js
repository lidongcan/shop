import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 组件全局注册
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav', TypeNav)
import Carsousel from '@/components/Carousel'
Vue.component('Carsousel', Carsousel)

// 引入mock模拟数据文件
import '@/mock/mockserve'
import 'swiper/css/swiper.css'

Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
