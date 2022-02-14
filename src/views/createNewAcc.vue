<template>
  <div class="create-new-acc-page">
    <!-- START NEW ACCOUNT  -->
    <section class="new-account">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">الرئيسية</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              انشاء حساب جديد
            </li>
          </ol>
        </nav>
        <div class="create-new-acc">
          <div class="container">
            <div class="row justify-content-center">
              <div class="form-wrapper">
                <form class="needs-validation" novalidate>
                  <div class="input-group has-validation">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="الاسم"
                      id="validationCustom01"
                      min="4"
                      required
                    />
                    <div class="invalid-feedback">ادخل اسم المستخدم !</div>
                  </div>
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="البريد الالكتروني"
                      required
                    />
                    <div class="invalid-feedback">ادخل البريد الالكتروني</div>
                  </div>
                  <div class="input-group">
                    <input
                      type="date"
                      class="date-picker form-control"
                      placeholder=" تاريخ الميلاد "
                      required
                    />
                    <div class="invalid-feedback">اختر تاريخ الميلاد</div>
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="فصيلة الدم"
                      required
                    />
                    <div class="invalid-feedback">ادخل فصيلة الدم</div>
                  </div>
                  <div class="input-group">
                    <select class="form-control" id="governorates" required>
                      <option selected disabled>اختر المحاقظة</option>
                      <option value="1">الدقهليه</option>
                      <option value="2">الغربيه</option>
                      <option value="3">المنوفية</option>
                      <option value="4">كفر الشيخ</option>
                    </select>
                    <div class="invalid-feedback">اختر محافظة</div>
                  </div>
                  <div class="input-group">
                    <select class="form-control" id="cities" required>
                      <option selected disabled>اختر المدينة</option>
                    </select>
                    <div class="invalid-feedback">اختر مدينة</div>
                  </div>
                  <div class="input-group">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="رقم الهاتف"
                      required
                    />
                    <div class="invalid-feedback">ادخل رقم الهاتف</div>
                  </div>
                  <div class="input-group">
                    <input
                      type="date"
                      class="date-picker form-control"
                      id="datepicker-2"
                      placeholder=" اخر تاريخ تبرع  "
                      required
                    />
                    <div class="invalid-feedback">اختر تاريخ التبرع</div>
                  </div>
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="كلمة المرور "
                      required
                    />
                    <div class="invalid-feedback">ادخل كلمة المرور</div>
                  </div>
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder=" تاكيد كلمة المرور  "
                      required
                    />
                    <div class="invalid-feedback">ادخل كلمة المرور</div>
                  </div>
                  <div class="input-group">
                    <button class="btn submit-btn" type="submit">انشاء</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End NEW ACCOUNT  -->
  </div>
</template>
