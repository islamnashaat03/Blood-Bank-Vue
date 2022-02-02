import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "."
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap-vue/dist/bootstrap-vue.js";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "../content/sass/main.scss";
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
