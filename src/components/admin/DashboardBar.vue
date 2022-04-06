<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-light text-success fw-bold bg-white"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin">後台首頁</router-link>
      <button class="navbar-toggler" type="button" @click="toggleNavHam">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" ref="collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/products"
              @click="closeNavHam"
              >後台產品列表</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/orders"
              @click="closeNavHam"
              >後台訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              @click.prevent="logout"
              >登出</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import mixins from '@/mixins/mixins'

export default {
  mixins: [mixins],
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http
        .post(api)
        .then((res) => {
          this.$swal(res.data.success, '', 'success')
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          this.$swal(err.response, '', 'error')
        })
    }
  }
}
</script>
