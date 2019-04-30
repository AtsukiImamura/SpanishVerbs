import Vue from 'vue'
import Router from 'vue-router'

const App = () => import(/* webpackChunkName: "app" */'../components/App.vue')
const Admin = () => import(/* webpackChunkName: "admin" */'../components/Admin.vue')

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

