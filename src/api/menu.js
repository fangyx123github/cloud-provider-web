import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/uac/api/sysMenu/getMenuTreeTable',
    method: 'post',
    data
  })
}
