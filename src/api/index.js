//API统一管理
import request from './request'

// 三级联动数据请求
export const reqGetegoryList = () => request.get('/product/getBaseCategoryList')

// 搜索请求
export const reqSearchInfo = (data) => request({ url: '/list', method: 'post', data })
