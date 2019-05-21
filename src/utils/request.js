import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'

const APP = 'FINGER_APP' // HOSPITAL_SCANNER 布草间扫描柜

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      if (config.method === 'post') {
        if (!config.data) {
          config.data = {}
        }
        config.data.token = getToken()
      } else {
        config.params = config.params || {}
        config.params.token = getToken()
      }
    }
    if (config.method === 'post') {
      config.data.app = APP
    } else {
      config.params.app = APP
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
