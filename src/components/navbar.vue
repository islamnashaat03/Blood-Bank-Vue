<template>
  <section class="nav-bar">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"
          ><img src="../../content/imgs/logo.png" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> الرئيسية </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                عن بنك الدم
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/articles" class="nav-link">
                المقالات
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/donation" class="nav-link">
                طلبات التبرع
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/whoAreWe" class="nav-link">
                من نحن
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactUs" class="nav-link">
                اتصل بنا
              </router-link>
            </li>
          </ul>
          <div class="navbar-nav__user">
            <router-link to="/newAcc" class="sign-up"
              >انشاء حساب جديد</router-link
            >
            <router-link to="/signIn" class="sign-in-btn btn"
              >الدخول</router-link
            >
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
export default {};
</script>
