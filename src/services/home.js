import request from '../utils/request.js'

export function getTodos() {
  return request({
    url: '/todos/getTodos',
    method: 'post'
  })
}