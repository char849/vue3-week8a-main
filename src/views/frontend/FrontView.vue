<template>
  <FrontNavbar></FrontNavbar>
  <RouterView />
  <FooterView />
</template>

<script>
import FrontNavbar from '@/components/frontend/FrontNavbar.vue'
import FooterView from '@/components/frontend/FooterView.vue'

export default {
  components: {
    FrontNavbar,
    FooterView
  }
}
</script>
