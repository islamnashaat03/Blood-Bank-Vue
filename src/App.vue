<template>
  <div id="app" dir="rtl">
    <a @click="scrollToTop()" class="up">
      <i class="fas fa-arrow-up"></i>
    </a>
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
  data() {
    return {
      seen: false,
    };
  },
  components: {
    UpperNav,
    navBar,
    bloodFooter,
    copyRight,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
