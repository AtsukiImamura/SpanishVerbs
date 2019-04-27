import Vue from 'vue'
import Router from 'vue-router'

import App from '../components/App.vue'
import Admin from '../components/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/admin',
      component: Admin
    }
  ]
})