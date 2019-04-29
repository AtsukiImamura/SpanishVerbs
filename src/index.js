import Vue from 'vue';

import App from './components/App.vue';
// import store from './stores/MainStore.js';
import router from './router/index.js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    router,
    // store,
    components: { App },
  })