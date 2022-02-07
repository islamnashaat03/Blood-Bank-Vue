<template>
  <div class="header">
    <div class="container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <h2>{{ title }}</h2>
          <p>
            {{ paragraph }}
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </swiper-slide>
        <swiper-slide>
          <h2>{{ title }}</h2>
          <p>
            {{ paragraph }}
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </swiper-slide>
        <swiper-slide>
          <h2>{{ title }}</h2>
          <p>
            {{ paragraph }}
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </swiper-slide>
        <swiper-slide>
          <h2>{{ title }}</h2>
          <p>
            {{ paragraph }}
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </swiper-slide>
        <swiper-slide>
          <h2>{{ title }}</h2>
          <p>
            {{ paragraph }}
          </p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "Slider",
  props: ["title", "paragraph"],
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>
