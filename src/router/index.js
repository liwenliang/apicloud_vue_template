import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: () => import('@/views/login/index') },
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/index')
        },
        {
          path: '/home/temp',
          name: 'HomeTemp',
          component: () => import('@/views/home/temp')
        }
      ]
    }
  ]
})
