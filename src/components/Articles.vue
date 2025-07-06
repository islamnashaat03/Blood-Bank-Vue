<template>
  <section class="articles" style="display: none;">
    <div class="container">
      <h3>{{ title }}</h3>
      <hr />
      <slider />
    </div>
  </section>
</template>

<script>
import Slider from "../components/swiper.vue";
export default {
  components: {
    Slider,
  },
  props: ["title"],
};
</script>
