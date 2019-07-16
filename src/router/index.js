import Vue from 'vue'
import Router from 'vue-router'
import Layout_Home from '@/views/layout/Layout_home'
import Layout_Operate from '@/views/layout/Layout_operate'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: () => import('@/views/login/index') },
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Layout_Home,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/index')
        }
      ]
    },
    {
      path: '/operate',
      name: 'Operate',
      component: Layout_Operate,
      children: [
        {
          path: '/operate/get',
          name: 'OperateGet',
          component: () => import('@/views/operate/get')
        }
      ]
    }
  ]
})
