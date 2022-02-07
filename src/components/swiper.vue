<template>
  <div class="header">
    <div class="container">
      <swiper
        ref="switchDemo"
        dir="rtl"
        pagination-visible
        pagination-clickable
        loop
        :autoplay="5000"
      >
        <div class="swiper-slide">
          <h2>{{ title }}</h2>
          <p>{{ paragraph }}</p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="swiper-slide">
          <h2>{{ title }}</h2>
          <p>{{ paragraph }}</p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="swiper-slide">
          <h2>{{ title }}</h2>
          <p>{{ paragraph }}</p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="swiper-slide">
          <h2>{{ title }}</h2>
          <p>{{ paragraph }}</p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="swiper-slide">
          <h2>{{ title }}</h2>
          <p>{{ paragraph }}</p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
        <div class="swiper-slide">
          <h2>{{ title }}</h2>
          <p>{{ paragraph }}</p>
          <router-link to="/about" class="btn">المزيد</router-link>
        </div>
      </swiper>
      <button @click="prev">prev</button>
      <button @click="next">next</button>
    </div>
  </div>
</template>

<script>
import { Swiper } from "vue2-swiper";

import "swiper/swiper-bundle.css";
export default {
  name: "Slider",
  props: ["title", "paragraph"],
  components: {
    Swiper,
  },
  methods: {
    prev() {
      this.$refs.switchDemo.prev();
    },
    next() {
      this.$refs.switchDemo.next();
    },
  },
};
</script>
