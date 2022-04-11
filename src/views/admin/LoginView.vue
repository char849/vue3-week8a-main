<template>
  <div class="container">
    <CustomLoading :active="isLoading" :z-index="1060" />
    <h2>後台登入頁面</h2>
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <form class="form-signin" @submit.prevent="signIn">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="Password"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-secondary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; {{ new Date().getFullYear() }} - Charlotte Lee<br />
      本網站僅供個人作品使用，不提供商業用途
      <router-link class="nav-link text-muted" to="/">返回前台首頁</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      isLoading: false
    }
  },
  // email 登入,寫入 cookie、轉址
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.isLoading = true
      this.$http
        .post(api, this.user)
        // 成功的結果
        .then((res) => {
          // 取出token，解構的寫法
          const { token, expired } = res.data
          // 儲存登入的cookie token資訊
          // expires 設置有效時間 unix timestamp 時間戳
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.isLoading = false
          // 轉址的動作
          // $router(方法), $route(取得參數)
          // 轉址到後台使用 push() 方法
          // 陣列的概念 ['/','login','admin/products']
          this.$router.push('/admin/products')
        })
        // 失敗結果
        .catch((err) => {
          this.isLoading = false
          this.$swal(err.response, '', 'error')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-muted, h2, p
 {
  padding: 15px;
  text-align: center;
}
</style>
