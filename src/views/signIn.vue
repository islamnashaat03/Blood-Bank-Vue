<template>
  <div class="register-page">
    <!-- START REGISTER  -->
    <section class="register">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/"> الرئيسية</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              تسجيل الدخول
            </li>
          </ol>
        </nav>
        <div class="register-wrapper">
          <div class="container">
            <form>
              <img src="../../content/imgs/logo.png" alt="" class="logo" />
              <div class="input-group">
                <input type="text" class="form-control" placeholder="الجوال" />
              </div>
              <div class="input-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="كلمة المرور"
                />
              </div>
              <div class="wrapper">
                <div class="check-box">
                  <input
                    type="checkbox"
                    id="check-me"
                    class="styled-checkbox"
                  />
                  <label for="check-me" class="remeber-me">تذكرني</label>
                </div>
                <a href="#" class="forget-pass">
                  <img
                    src="../../content/imgs/complain.png"
                    alt=""
                    class="warning-img"
                  />
                  <span class="text">هل نسيت كلمةالمرور</span>
                </a>
              </div>
              <div class="wrapper buttons--wrapper">
                <button type="submit" class="btn submit-btn">دخول</button>
                <router-link to="/newAcc" class="btn create-new-acc-btn"
                  >انشاء حساب جديد
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- END REGISTER  -->
  </div>
</template>
