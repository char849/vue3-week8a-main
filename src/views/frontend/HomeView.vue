<template>
  <HeaderView />
  <SwiperView category="熱門" data-aos="fade-up" />
  <NoticeView />
</template>

<script>
import SwiperView from '@/components/frontend/SwiperView.vue'
import HeaderView from '@/components/frontend/HeaderView.vue'
import NoticeView from '@/components/frontend/NoticeView.vue'

export default {
  name: '首頁',
  components: {
    SwiperView,
    HeaderView,
    NoticeView
  }
}
</script>
