<template>
  <FrontNavbar />
  <RouterView />
  <FooterView />
</template>

<script>
import FrontNavbar from '@/components/frontend/FrontNavbar.vue'
import FooterView from '@/components/frontend/FooterView.vue'

export default {
  name: '前台',
  components: {
    FrontNavbar,
    FooterView
  }
}
</script>
