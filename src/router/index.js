import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Articles.vue"),
  },
  {
    path: "/donation",
    name: "Donation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Donation.vue"),
  },
  {
    path: "/whoAreWe",
    name: "WhoAreWe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/whoAreWe.vue"),
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/contactUs.vue"),
  },
  {
    path: "/newAcc",
    name: "newAcc",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/createNewAcc.vue"),
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/signIn.vue"),
  },
  {
    path: "/DonationApp",
    name: "DonationApp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DonationApp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
