<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 firt-coloum">
          <img src="../../content/imgs/logo.png" alt="" />
          <p>
            حظ النص هو مثال لنص يمكن أن يستبدل في نفس المسلة لقد تم توليد هذا
            النص من مولد النص العريس ميت يمكنك أن تولد مثل ما النص أو العمد من
            النصوص الأخرى إضافة إلى زيادة عدد الموف التى يولدها
          </p>
        </div>
        <div class="col-lg-3 second-coloum">
          <ul class="list-unstyled">
            <li class="active">
              <router-link to="/"> الرئيسية </router-link>
            </li>
            <li>
              <router-link to="/about">عن بنك الدم</router-link>
            </li>
            <li>
              <router-link to="/articles">المقالات</router-link>
            </li>
            <li>
              <router-link to="/donation">طلبات التبرع</router-link>
            </li>
            <li>
              <router-link to="/whoAreWe">من نحن </router-link>
            </li>
            <li>
              <router-link to="/contactUs">اتصل بنا</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 third-coloum">
          <h2>متوفر علي</h2>
          <a href="#">
            <img src="../../content/imgs/google1.png" alt="" />
          </a>
          <a href="#">
            <img src="../../content/imgs/ios1.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
