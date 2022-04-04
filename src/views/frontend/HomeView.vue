<template>
  <HeaderView />
  <SwiperView category="熱門" data-aos="fade-up" />
  <NoticeView></NoticeView>
</template>

<script>
import SwiperView from '@/components/frontend/SwiperView.vue'
import HeaderView from '@/components/frontend/HeaderView.vue'
import NoticeView from '@/components/frontend/NoticeView.vue'

export default {
  components: {
    SwiperView,
    HeaderView,
    NoticeView
  }
}
</script>
