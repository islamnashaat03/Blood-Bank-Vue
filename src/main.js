import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import "../content/sass/main.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue, IconsPlugin, VueAwesomeSwiper, getAwesomeSwiper);
// Vue.use(IconsPlugin);
// Vue.use(VueAwesomeSwiper);
// Vue.use(getAwesomeSwiper);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
