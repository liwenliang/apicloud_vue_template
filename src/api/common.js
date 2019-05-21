import request from '@/utils/request'
import util from '@/utils/util'

/* 检查更新 */
export function checkUpdate({ app_version }) {
  return request({
    url: util.UPDATE_URL + '/version/checkUpdate.json',
    method: 'get',
    params: {
      app_version
    }
  })
}
