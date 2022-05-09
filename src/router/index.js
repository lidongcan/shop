import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    meta: { show: true },
    component: () => import('@/views/Home'),
  },
  {
    path: '/login',
    meta: { show: false },
    component: () => import('@/views/Login/login'),
  },
  {
    path: '/zhuce',
    meta: { show: false },
    component: () => import('@/views/ZhuCe/zhuce'),
  },
  {
    path: '/search/:keyword?',
    meta: { show: true },
    name: 'search',
    component: () => import('@/views/Search/search'),
  },
]

const router = new VueRouter({
  routes,
})

// 先把VueRouter原型对象的方法，保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 在进行编程式路由导航的时候，反复点击,控制台就会提示报错，为了深入了解编程式路由跳转，以及
// 防止控制台的多次报错需要对VueRouter的原型上的push以及replace进行重新编写！
// 重写push|replace
// 第一个参数：需要跳转的地址（传递哪些参数）
// 第二个参数：成功的回调
// 第三个参数：失败的回调
VueRouter.prototype.push = function (location, res, rej) {
  if (res && rej) {
    originPush.call(this, location, res, rej)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {},
    )
  }
}

VueRouter.prototype.replace = function (location, res, rej) {
  if (res && rej) {
    originReplace.call(this, location, res, rej)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {},
    )
  }
}

export default router
