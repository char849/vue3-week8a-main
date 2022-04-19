<template>
  <header class="position-relative mb-7 mb-md-9">
    <img
      class="bg-mask-60 d-lg-none d-block img-cover pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056515409.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y3oVi0SPMebWOgvPqS5RHodE7xqByaugrJ0bU5Nh39%2FkgP61e0eITVD7AtElaYEW3y%2BnA%2FUZW3tYJHol9aYQ4CruEBRBMTedaUR%2F4sE44GRGEjRh7LifWCFKxD%2BY4hsD68zenE0s1Cb2WS%2BuBUuxrpx5ac2hsMgZypGfR%2FaCyF8Fh0jtifudelvL03JhoGOjSSdmzzeFJUk4eESF7ubqvjc5YFjSh6o2TVTUgIM10VrDxPVgVCTPgfQ%2B4PNaW86AAXGsrDothzw%2F5W6wsthdwEFzxe0obRdU%2F2mrEwSMCCAnA1qq9MihLktcPDbkYDKQQgNcpGIzq3s5257lU2CD5w%3D%3D"
      alt="關於漢文帝banner"
    />
    <img
      class="bg-mask-60 img-cover d-lg-block d-none pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056577180.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ogse6tS%2Bis99uDCUOfD39hKI1mklPXiasbEPqueX8U6PoGkaKr4DmOMDJ6vGVRojlIqg7j7PufZSDp7RAagCBxuhnAv4J0IzC4bIT1rZ4zbPfhD9kVT2jXd0EHrnH7qxO5%2FNiUNuvJaq6Whou7FwID028oBJAYElYnbFimnyii1HhXPajHArl0K6gjLE2prj9Vsdb2JQAbVolOJReVlQAHKSc9o%2BjTYI6iRiDMrIqrj6o8EBqRfLKw%2FOEIMmmjPSvc9TC3eLtiNcDNDy0Trai1DJVbZLmXBkiwWfb1UT%2F9HUbevYZbZ8x4YVA2Yd8slyrLHhjkd%2Fi4w%2FI%2BQSjoYLcw%3D%3D"
      alt="關於漢文帝banner"
    />
    <h2
      class="position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"
    >
      Not Found 404!!
    </h2>
  </header>
  <div class="container px-3">
    <div class="row g-3 mt-4">
      <div class="wrap text-center mb-5">
      <div
        class="mb-5 display-4 text-warning"
      >
        糟糕 ~ 有錯誤 !
        <br>
        倒數  <strong class="text-warning display-1">{{ times }}</strong> 秒
      </div>

      <RouterLink
        to="/"
        class="btn btn-lg btn-outline-secondary"
      >
        手動回首頁
      </RouterLink>
    </div>
    </div>
  </div>
</template>

<script>
let timer = null

export default {
  name: 'NotFound',
  data () {
    return {
      times: 10
    }
  },
  methods: {
    countTime () {
      timer = setTimeout(() => {
        this.times -= 1
        if (this.times > 0) {
          this.countTime()
        } else {
          this.$swal('回首頁', '', 'success').then(() => {
            this.$router.push('/')
          })
        }
      }, 1000)
    }
  },
  mounted () {
    this.countTime()
  },
  unmounted () {
    clearTimeout(timer)
  }
}
</script>
