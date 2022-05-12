//API统一管理
import request from './request'

// 三级联动接口
export const reqCategoryList = () =>
  request({
    url: '/product/getBaseCategoryList',
    method: 'get',
  })
