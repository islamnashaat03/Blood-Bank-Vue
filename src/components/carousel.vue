<template>
  <div class="header">
    <div class="container">
      <carousel
        :autoplay="true"
        :nav="false"
        :items="1"
        :mouseDrag="true"
        :touchDrag="true"
        :pullDrag="true"
        :rtl="true"
        :autoplayTimeout="3000"
        :autoplayHoverPause="true"
        :responsive="{ 0: { items: 1 } }"
      >
        <div class="owl-carousel__content">
          <h2>بنك الدم نمضي قدما لصحة افضل</h2>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل<br />في نفس المساحة ، لقد تم
            توليد هذا النص<br />من مولد النص العرب
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="owl-carousel__content">
          <h2>بنك الدم نمضي قدما لصحة افضل</h2>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل<br />في نفس المساحة ، لقد تم
            توليد هذا النص<br />من مولد النص العرب
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="owl-carousel__content">
          <h2>بنك الدم نمضي قدما لصحة افضل</h2>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل<br />في نفس المساحة ، لقد تم
            توليد هذا النص<br />من مولد النص العرب
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="owl-carousel__content">
          <h2>بنك الدم نمضي قدما لصحة افضل</h2>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل<br />في نفس المساحة ، لقد تم
            توليد هذا النص<br />من مولد النص العرب
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>
