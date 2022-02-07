<template>
  <div class="home">
    <slider />
    <site-info />
    <articles title="المقالات"></articles>
    <donations />
    <call-us />
    <blood-app />
  </div>
</template>

<script>
import Slider from "../components/swiper.vue";
import SiteInfo from "../components/siteInfo.vue";
import Articles from "../components/Articles.vue";
import Donations from "../components/donations.vue";
import CallUs from "../components/callUs.vue";
import BloodApp from "../components/bloodApp.vue";
export default {
  name: "Home",
  components: {
    Slider,
    SiteInfo,
    Articles,
    Donations,
    CallUs,
    BloodApp,
  },
};
</script>
