<template>
  <nav
    class="navbar navbar-expand-lg fixed-top d-block py-2"
    :class="{ 'shadow-sm': scroll, 'bg-primary': scroll }"
  >
    <div class="container">
      <h1 class="logo navbar-brand mb-0">
        <router-link class="d-flex me-2 text-decoration-none" to="/admin/products">
          <img :src="[navClassList.src]" width="130" alt="Logo" />
        </router-link>
      </h1>
      <button class="navbar-toggler" type="button" @click="toggleNavHam">
        <i
          class="bi bi-justify-right fs-1"
          :class="[navClassList.nav, navClassList.text]"
        ></i>
      </button>
      <div class="collapse navbar-collapse" ref="collapse">
        <ul class="navbar-nav me-auto mb-4 mb-lg-0 fw-bold">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/products"
              @click="closeNavHam"
              :class="[navClassList.nav, navClassList.text]"
              >後台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/orders"
              @click="closeNavHam"
              :class="[navClassList.nav, navClassList.text]"
              >後台訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              @click.prevent="logout"
              :class="[navClassList.nav, navClassList.text]"
              >登出</router-link
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
  data () {
    return {
      scroll: '',
      navClassList: {
        nav: 'navbar-dark',
        text: 'text-light',
        src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D'
      },
      collapse: '',
      bg: ''
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http
        .post(api)
        .then((res) => {
          this.$swal(res.data.message, '', 'success')
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
