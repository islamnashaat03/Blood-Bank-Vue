<template>
  <section class="donations">
    <h3>طلبات التبرع</h3>
    <hr />
    <div class="donations-wrapper">
      <div class="container">
        <form action="" method="get">
          <div class="filter">
            <div class="select-wrapper">
              <select>
                <option value="" selected disabled data-default>
                  اختر فصيلة الدم
                </option>
                <option value="1">+A</option>
                <option value="2">-A</option>
                <option value="3">+B</option>
                <option value="4">-B</option>
                <option value="5">-O</option>
                <option value="6">+O</option>
                <option value="7">+AB</option>
                <option value="8">-AB</option>
              </select>
              <!-- <i class="fa fa-chevron-down" aria-hidden="true"></i> -->
            </div>
            <div class="select-wrapper">
              <select>
                <option value="" selected disabled data-default>
                  اختر المدينة
                </option>
                <option value="1">القاهرة</option>
                <option value="2">الدقهليه</option>
                <option value="3">المنوفية</option>
                <option value="4">الغربيه</option>
                <option value="5">الاسماعليه</option>
                <option value="6">السويس</option>
                <option value="7">الجيزة</option>
                <option value="8">حلوان</option>
              </select>
            </div>
            <div class="select-wrapperh">
              <button class="btn submit-btn" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div class="cases">
          <div class="case">
            <div class="row">
              <div class="col-sm-2">
                <div class="blood-type">
                  <h2 class="h1">+B</h2>
                </div>
              </div>
              <div class="col-sm-6 text-center text-sm-left">
                <div>
                  <p>اسم الحالة : احمد محمد احمد</p>
                  <p>المستشفي : القصر العيني</p>
                  <p>المدينة : المنصورة</p>
                </div>
              </div>
              <div class="col-sm-3 d-flex justify-content-center">
                <router-link class="details-btn" to="/DonationApp">
                  التفاصيل
                </router-link>
              </div>
            </div>
          </div>
          <div class="case">
            <div class="row">
              <div class="col-sm-2">
                <div class="blood-type">
                  <h2 class="h1">+A</h2>
                </div>
              </div>
              <div class="col-sm-6 text-center text-sm-left">
                <div>
                  <p>اسم الحالة : احمد محمد احمد</p>
                  <p>المستشفي : القصر العيني</p>
                  <p>المدينة : المنصورة</p>
                </div>
              </div>
              <div class="col-sm-3 d-flex justify-content-center">
                <router-link class="details-btn" to="/DonationApp">
                  التفاصيل
                </router-link>
              </div>
            </div>
          </div>
          <div class="case">
            <div class="row">
              <div class="col-sm-2">
                <div class="blood-type">
                  <h2 class="h1">+AB</h2>
                </div>
              </div>
              <div class="col-sm-6 text-center text-sm-left">
                <div>
                  <p>اسم الحالة : احمد محمد احمد</p>
                  <p>المستشفي : القصر العيني</p>
                  <p>المدينة : المنصورة</p>
                </div>
              </div>
              <div class="col-sm-3 d-flex justify-content-center">
                <router-link class="details-btn" to="/DonationApp">
                  التفاصيل
                </router-link>
              </div>
            </div>
          </div>
          <div class="case">
            <div class="row">
              <div class="col-sm-2">
                <div class="blood-type">
                  <h2>-O</h2>
                </div>
              </div>
              <div class="col-sm-6 text-center text-sm-left">
                <div>
                  <p>اسم الحالة : احمد محمد احمد</p>
                  <p>المستشفي : القصر العيني</p>
                  <p>المدينة : المنصورة</p>
                </div>
              </div>
              <div class="col-sm-3 d-flex justify-content-center">
                <router-link class="details-btn" to="/DonationApp">
                  التفاصيل
                </router-link>
              </div>
            </div>
          </div>
          <router-link class="more-btn btn" to="donation"> المزيد </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
