// home组件的小仓库
import { reqCategoryList } from '@/api'

const state = {
  categoryList: [],
}
const mutations = {
  CATEGORYLIST(state, data) {
    state.categoryList = data
  },
}
const actions = {
  async CategoryList({ commit }) {
    let res = await reqCategoryList()
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
      //   console.log(res.data)
    }
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
