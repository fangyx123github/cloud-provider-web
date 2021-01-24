import request from '@/utils/request'
// 登录
export function login(data) {
  return request({
    url: '/uac/auth/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/uac/api/sysUser/getUserInfo',
    method: 'get'
  })
}

// 分页查询用户信息
export function userInfoPagingHelper(data) {
  return request({
    url: 'uac/api/sysUser/userInfoPagingHelper',
    method: 'post',
    data
  })
}

// 登出
export function logout() {
  return request({
    url: '/api/uac/auth/logout',
    method: 'post'
  })
}
