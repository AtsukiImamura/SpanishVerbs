import Vue from "vue";
import Router from "vue-router";

const App = () =>
  import(/* webpackChunkName: "app" */ "../components/app/App.vue");
const Admin = () =>
  import(/* webpackChunkName: "admin" */ "../components/admin/Admin.vue");
const AddVerb = () =>
  import(
    /* webpackChunkName: "add-verb" */ "../components/app/add-verb/AddVerb.vue"
  );

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: App
    },
    {
      path: "/admin",
      component: Admin
    },
    {
      path: "/addVerb",
      component: AddVerb
    }
  ]
});
