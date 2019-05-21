import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles === '') {
        store.dispatch('user/GetInfo').then(res => {
          if (res.code === 0) {
            next({ to, replace: true })
          }
        }).catch((err) => {
          console.log(err)
          store.dispatch('user/FedLogOut').then(() => {
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})
