<template>
  <div class="home">
    <carousel />
    <site-info />
    <articles />
    <donations />
    <call-us />
    <blood-app />
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import SiteInfo from "../components/siteInfo.vue";
import Articles from "../components/Articles.vue";
import Donations from "../components/donations.vue";
import CallUs from "../components/callUs.vue";
import BloodApp from "../components/bloodApp.vue";
// import UpperNav from "../components/upperNav.vue";
export default {
  name: "Home",
  components: {
    carousel,
    SiteInfo,
    Articles,
    Donations,
    CallUs,
    BloodApp,
    // UpperNav,
  },
};
</script>
