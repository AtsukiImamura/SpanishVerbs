import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const App = () => import(/* webpackChunkName: "app" */'./components/App.vue')
var router = null
var BootstrapVue = null
var Vue = null

import(/* webpackChunkName: "router" */'./router/index.js')
  .then(({default: _router}) => {
    router = _router
    return import(/* webpackChunkName: "bootstrap" */'bootstrap-vue')
  })
  .then(({default: _bootstrap}) => {
    BootstrapVue = _bootstrap
    return import(/* webpackChunkName: "vue" */'vue')
  })
  .then(({default: _vue}) => {
    Vue = _vue
    initVue()
  })

function initVue(){
  Vue.use(BootstrapVue)
  new Vue({
    el: '#app',
    router,
    components: { App },
  })
}


