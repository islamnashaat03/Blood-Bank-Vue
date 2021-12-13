<template>
  <div id="app" dir="rtl">
    <upper-nav />
    <nav-bar />
    <router-view />
    <blood-footer />
    <copy-right />
  </div>
</template>
<script>
import UpperNav from "./components/upperNav.vue";
import navBar from "./components/navbar.vue";
import bloodFooter from "./components/bloodFooter.vue";
import copyRight from "./components/copyRight.vue";

export default {
  name: "App",
  components: {
    UpperNav,
    navBar,
    bloodFooter,
    copyRight,
  },
};
</script>
