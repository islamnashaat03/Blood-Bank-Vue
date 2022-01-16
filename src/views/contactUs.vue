<template>
  <div class="contact-us-page">
    <section class="contact-us">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">الرئيسية</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              تواصل معنا
            </li>
          </ol>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="box">
                <h4 class="contact-us-head">اتصل بنا</h4>
                <img src="../../content/imgs/logo.png" alt="" />
                <hr />
                <div class="contact-us__info">
                  <p class="lead">الجوال : 1212154154751</p>
                  <p class="lead">فاكس : 2425242452</p>
                  <p class="lead">البريد الالكتروني : name@name.com</p>
                </div>
                <h6>تواصل معنا</h6>
                <div class="social">
                  <a href="#">
                    <i class="fab fa-whatsapp-square fa-3x"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram-square fa-3x"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube-square fa-3x"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter-square fa-3x"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-facebook-square fa-3x"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="box">
                <h4 class="contact-us-head">تواصل معنا</h4>
                <form>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="الاسم"
                    />
                  </div>
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="البريد الالكتروني"
                    />
                  </div>
                  <div class="input-group">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="الجوال"
                    />
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="عنوان الرسالة "
                    />
                  </div>
                  <div class="input-group">
                    <textarea
                      class="form-control"
                      rows="6"
                      placeholder="نص الرسالة "
                    ></textarea>
                  </div>
                  <button type="submit" class="contact-us-head">ارسال</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
