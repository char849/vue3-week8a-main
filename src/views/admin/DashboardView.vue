<template>
  <DashboardBar/>
  <RouterView />
</template>

<script>
import DashboardBar from '@/components/admin/DashboardBar.vue'

export default {
  components: {
    DashboardBar
  }
}
</script>
