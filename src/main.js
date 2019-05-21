// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Helpers from 'muse-ui/lib/Helpers'
import Message from 'muse-ui-message'
import Toast from 'muse-ui-toast'
import Loading from 'muse-ui-loading'

import '@/permission' // permission control

require('./mock')

Vue.use(MuseUI)
Vue.use(Helpers)
Vue.use(Message)
Vue.use(Toast)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
