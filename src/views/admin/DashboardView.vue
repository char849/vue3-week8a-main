<template>
  <DashboardBar />
  <RouterView v-if="status" />
</template>

<script>
import DashboardBar from '@/components/admin/DashboardBar.vue'

export default {
  components: {
    DashboardBar
  },
  data () {
    return {
      status: false
    }
  },

  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http
      .post(api)
      .then((res) => {
        this.status = true
      })
      .catch(() => {
        this.$router.push('/login')
      })
  }
}
</script>
