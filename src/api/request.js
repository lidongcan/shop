// axios二次封装
import axios from 'axios'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
  baseURL: 'http://gmall-h5-api.atguigu.cn/api',
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    NProgress.start()
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default request
