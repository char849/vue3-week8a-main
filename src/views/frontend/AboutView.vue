<template>
  <header class="position-relative mb-7 mb-md-9">
    <img
      class="d-lg-none d-block img-cover pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056515409.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y3oVi0SPMebWOgvPqS5RHodE7xqByaugrJ0bU5Nh39%2FkgP61e0eITVD7AtElaYEW3y%2BnA%2FUZW3tYJHol9aYQ4CruEBRBMTedaUR%2F4sE44GRGEjRh7LifWCFKxD%2BY4hsD68zenE0s1Cb2WS%2BuBUuxrpx5ac2hsMgZypGfR%2FaCyF8Fh0jtifudelvL03JhoGOjSSdmzzeFJUk4eESF7ubqvjc5YFjSh6o2TVTUgIM10VrDxPVgVCTPgfQ%2B4PNaW86AAXGsrDothzw%2F5W6wsthdwEFzxe0obRdU%2F2mrEwSMCCAnA1qq9MihLktcPDbkYDKQQgNcpGIzq3s5257lU2CD5w%3D%3D"
      alt="關於漢文帝banner"
    />
    <img
      class="img-cover d-lg-block d-none pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649486937361.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MV0ltytTHZJ%2FFGIlFNovcNBNkRHce3FdIgO0roi8w9RCkOEQXMGCOhAZ1RH%2B%2BlNeVaY0pVC5sCuLzCA%2FWAc0oEBvoiak1KxmsDkcwyMFkV4gsU%2FjHvfhk5KtGoUS7o%2BorWxIxsTrq4N53c5a6Qo1KHZ4xg%2BFRCISmaPyxX2falP3q56WIHTegBTTWE1jUcLEfoy608VibZKxE2CwTPiDQ9i2OoagdVKlb%2FRoWC7g5BLlreMW0AtGjmGffQHpW2OhvTpyAYW1BUrZww%2BVrRHr5n9JOm5VF6yEc78HSOxuZ1bc%2B809o9U2YkU9pRYCCORuMMMsBV3dnrEtxoj0V2yaTw%3D%3D"
      alt="關於漢文帝banner-pc"
    />
    <h2
      class="position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"
    >
      About Us
    </h2>
  </header>
  <div class="container px-3">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="nav-link text-dark active p-0">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">關於漢文帝</li>
        </ol>
      </nav>
      <div
        class="col-12 col-md-6 bg-white border rounded p-1"
        data-aos="fade-up"
      >
        <img
          class="img-fluid bg-white border rounded p-1"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647327112851.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=o98eRk3p4z7O7XvHpibM6xfK7g52KJdITVBZTQ1HskhKn3%2F%2FBcZBApLPejTVDZusA285zAwYCUv8LznYucVR5dOi8MnjuY97L8RSUfY1ktW2FURVvnUH3aimDBXSc%2F%2FGiMpHxoHzCDrDQQPffKbmC%2FydcWd9h%2Fvm47Ulf4qQRSE09Lak6R6dNDaFONppR31aaqc87Akw8skF3hRW1L2X4TWWiuNIx0kVLP4HyZnlvH7nGfhD7c8kUVCHQG%2FZ1sXKaYsxLUsCXOkHTddzzDPkTEqHZpRBjYmhp1Wk00eOVHOU3HmwOWTzauoFm6H%2FZ%2BJI1EI3FN7oo8BpjPsN3QckoQ%3D%3D"
          alt="about-1"
        />
      </div>
      <div
        class="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center flex-column lh-lg"
        data-aos="fade-up"
      >
        <p class="h6 text-info fw-bold" data-aos="fade-up">
          藝術家介紹 <span class="material-icons-outlined"> badge </span>
        </p>
        <p class="h2 text-dark" data-aos="fade-up">
          Hayden 李漢文 3D 美術設計師
        </p>
        <p class="text-warning mt-2" data-aos="fade-up">
          <span class="material-icons-outlined"> school </span>
          大葉大學視覺傳達設計
          <br />
          <span class="material-icons-outlined"> history_edu </span>
          2020全國科幻盃模型比賽人形組入圍
          <br />
          <span class="material-icons-outlined"> history_edu </span>
          2020RF開拓盃原型大賽3D列印組第三名
          <br />
          <span class="material-icons-outlined"> history_edu </span>
          2016暴雪官方COSPLAY 比賽入圍
          <br />
          <span class="material-icons-outlined"> business_center </span>
          高雄樂美館 3D 美術設計師
        </p>
      </div>
    </div>
  </div>
  <AboutSwperView />
  <Loading :active="isLoading" />
</template>

<script>
import AboutSwperView from '@/components/frontend/AboutSwiperView.vue'
export default {
  name: '關於漢文帝',
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    AboutSwperView
  }
}
</script>
