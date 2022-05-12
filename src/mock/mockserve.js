// mockjs模拟数据
import Mock from 'mockjs'
import banner from './banner'
import floor from './floor'

// mock数据   第一个参数 地址  第二个参数请求数据
Mock.mock('/api/banner', { data: banner, code: 200 })
Mock.mock('/api/floor', { data: floor, code: 200 })
