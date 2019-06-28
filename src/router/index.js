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
      redirect: '/movie',
      component: Layout,
      children: [
        {
          path: '/movie',
          name: 'Movie',
          component: () => import('@/views/movie/index')
        },
        {
          path: '/music',
          name: 'Music',
          component: () => import('@/views/music/index')
        },
        {
          path: '/book',
          name: 'Book',
          component: () => import('@/views/book/index')
        },
        {
          path: '/picture',
          name: 'Picture',
          component: () => import('@/views/picture/index')
        }
      ]
    },
    {
      path: '/movie/detail',
      name: 'MovieDetail',
      component: () => import('@/views/movie/detail')
    }
  ]
})
