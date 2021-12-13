<template>
  <section class="upper-bar">
    <div class="container">
      <div class="upper-bar-wrapper">
        <div class="upper-bar__languages">
          <a class="arabic"> عربي </a>
          <a class="english"> EN </a>
        </div>
        <div class="upper-bar__social">
          <a href="https://facebook.com" target="_blank">
            <i class="fab fa-facebook-f item"></i
          ></a>
          <a href="https://instagram.com" target="_blank">
            <i class="fab fa-instagram item"></i
          ></a>
          <a href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter item"></i
          ></a>
          <a href="https://wa.me/201065740616" target="_blank">
            <i class="fab fa-whatsapp item"></i
          ></a>
        </div>
        <div class="upper-bar__contact">
          <a href="mailto:name@name.com" dir="ltr">
            <i class="fa fa-envelope"></i>
            name@name.com
          </a>
          <a href="tel:01550391319" dir="ltr" class="phone">
            <i class="fas fa-phone-alt"></i>
            <span> +9669056954964</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "upperNav",
};
</script>
