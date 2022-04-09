<template>
  <FrontNavbar />
  <RouterView />
  <FooterView />
  <button
      type="btn"
      class="go-top bg-white text-center text-secondary shadow rounded-circle position-fixed"
      v-if="isGoTopBtnShow"
      @click="goTop"
    >
      <i class="bi bi-arrow-up-short fs-2 fw-bold"></i>
    </button>
</template>

<script>
import FrontNavbar from '@/components/frontend/FrontNavbar.vue'
import FooterView from '@/components/frontend/FooterView.vue'

export default {
  name: '前台',
  components: {
    FrontNavbar,
    FooterView
  },
  data () {
    return {
      isGoTopBtnShow: false
    }
  },
  methods: {
    goTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.isGoTopBtnShow = true
      } else {
        this.isGoTopBtnShow = false
      }
    })
  }
}
</script>
