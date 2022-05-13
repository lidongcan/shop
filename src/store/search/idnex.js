// home组件的小仓库
import { reqSearchInfo } from '@/api'

const state = {
  searchInfo: {}, // 搜索数据
}

// 唯一修改store的方法
const mutations = {
  // 存储三级联动数据
  SEARCHINFO(state, searchInfo) {
    state.searchInfo = searchInfo
  },
}
const actions = {
  // 获取搜索数据
  async getSearchInfo({ commit }, params = {}) {
    const result = await reqSearchInfo(params)
    if (result.code === 200) {
      commit('SEARCHINFO', result.data)
    }
  },
}
// 计算属性   简化数据
const getters = {
  attrsList(state) {
    return state.searchInfo.attrsList
  },
  goodsList(state) {
    return state.searchInfo.goodsList
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
}
