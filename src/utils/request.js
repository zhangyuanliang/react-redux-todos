import axios from 'axios'
import { message } from 'antd';

const BASE_API = 'https://www.easy-mock.com/mock/5be15945f559b87db5d8eafa/'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? BASE_API : null,
  timeout: 8000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  //   config.headers['code'] = `PC${getUser()}` // 让每个请求携带用户名
  // }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 'A00000') {
      message.warn('error')
      return Promise.reject('error')
    }
    return Promise.resolve(response.data)
  },
  error => {
    message.warn('请求失败，请检查网络状况')
    return Promise.reject(error)
  }
)

export default service
