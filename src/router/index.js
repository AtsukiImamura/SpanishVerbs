import Vue from 'vue'
import Router from 'vue-router'

import App from '../components/App.vue'
import Config from '../components/Config.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/config',
      component: Config
    }
  ]
})