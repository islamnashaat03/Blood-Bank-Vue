<template>
  <section class="articles">
    <div class="container">
      <h3>المقالات</h3>
      <hr />
      <carousel
        class="owl-articles"
        :autoplay="false"
        :margin="15"
        :dots="false"
        :mouseDrag="true"
        :touchDrag="true"
        :pullDrag="true"
        :autoplayTimeout="3000"
        :autoplayHoverPause="true"
        :responsive="{
          0: { items: 1, nav: false, dots: true },
          600: { items: 3, nav: true, dots: false },
        }"
      >
        <div class="card">
          <img src="../../content/imgs/p1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">طريقة الوقاية من الامراض</h5>
            <p class="card-text">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ، لقد تم توليد
              هذا النص من مولد النص العرب
            </p>
            <router-link to="/articles" class="details-btn"
              >التفاصيل</router-link
            >
          </div>
          <i class="fas fa-heart"></i>
        </div>
        <div class="card">
          <img src="../../content/imgs/p2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">طريقة الوقاية من الامراض</h5>
            <p class="card-text">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ، لقد تم توليد
              هذا النص من مولد النص العرب
            </p>
            <router-link to="/articles" class="details-btn"
              >التفاصيل</router-link
            >
          </div>
          <i class="fas fa-heart"></i>
        </div>
        <div class="card">
          <img src="../../content/imgs/p1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">طريقة الوقاية من الامراض</h5>
            <p class="card-text">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ، لقد تم توليد
              هذا النص من مولد النص العرب
            </p>
            <router-link to="/articles" class="details-btn"
              >التفاصيل</router-link
            >
          </div>
          <i class="fas fa-heart"></i>
        </div>
        <div class="card">
          <img src="../../content/imgs/p2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">طريقة الوقاية من الامراض</h5>
            <p class="card-text">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ، لقد تم توليد
              هذا النص من مولد النص العرب
            </p>
            <router-link to="/articles" class="details-btn"
              >التفاصيل</router-link
            >
          </div>
          <i class="fas fa-heart"></i>
        </div>
        <div class="card">
          <img src="../../content/imgs/p2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">طريقة الوقاية من الامراض</h5>
            <p class="card-text">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ، لقد تم توليد
              هذا النص من مولد النص العرب
            </p>
            <router-link to="/articles" class="details-btn"
              >التفاصيل</router-link
            >
          </div>
          <i class="fas fa-heart"></i>
        </div>
      </carousel>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
};
</script>
