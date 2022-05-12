// home组件的小仓库
import { reqCategoryList } from '@/api'
import axios from 'axios'

const state = {
  categoryList: [], // 三级联动数据
  catbannerList: [], // 轮播图数据
  catfloorList: [], // 商品楼层数据
}
// 唯一修改store的方法
const mutations = {
  // 存储三级联动数据
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  // 存储轮播图数据
  CATEBANNERLIST(state, catbannerList) {
    state.catbannerList = catbannerList
    console.log('交给了state')
  },
  // 存储商品楼层数据
  CATEFLOORLIST(state, catfloorList) {
    state.catfloorList = catfloorList
  },
}
const actions = {
  // 获取三级分类列表数据
  async getegoryList({ commit }) {
    let res = await reqCategoryList()
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
      //   console.log(res.data)
    } else {
      this.$message.error('获取三级分类列表失败')
    }
  },
  // 获取轮播图列表数据
  getBannerList({ commit }) {
    axios.get('/api/banner').then((res) => {
      if (res.data.code === 200) {
        commit('CATEBANNERLIST', res.data.data)
      }
    })
  },
  // 获取商品楼层数据
  getFloorList({ commit }) {
    axios.get('/api/floor').then((res) => {
      if (res.data.code === 200) {
        commit('CATEFLOORLIST', res.data.data)
      }
    })
  },
}
// 计算属性
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
