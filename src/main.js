import aos from "aos";
import Vue from "vue";
import VueRouter from "vue-router";
import VueBootstrap from "bootstrap-vue";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import HomeScreen from "./components/screens/Home.vue";
import NewsScreen from "./components/screens/News.vue";
import store from "./store";

Vue.use(VueRouter);
Vue.use(VueBootstrap);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/home", component: HomeScreen, alias: "/" },
    { path: "/news", component: NewsScreen }
  ]
});

new Vue({
  created() {
    aos.init({
      disable: "phone"
    });
  },

  store,
  router,
  render: h => h(App)
}).$mount("#app");
