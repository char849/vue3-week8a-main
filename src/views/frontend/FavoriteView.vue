<template>
  <header class="position-relative mb-7 mb-md-9">
    <img
      class="d-lg-none d-block img-cover pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056515409.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y3oVi0SPMebWOgvPqS5RHodE7xqByaugrJ0bU5Nh39%2FkgP61e0eITVD7AtElaYEW3y%2BnA%2FUZW3tYJHol9aYQ4CruEBRBMTedaUR%2F4sE44GRGEjRh7LifWCFKxD%2BY4hsD68zenE0s1Cb2WS%2BuBUuxrpx5ac2hsMgZypGfR%2FaCyF8Fh0jtifudelvL03JhoGOjSSdmzzeFJUk4eESF7ubqvjc5YFjSh6o2TVTUgIM10VrDxPVgVCTPgfQ%2B4PNaW86AAXGsrDothzw%2F5W6wsthdwEFzxe0obRdU%2F2mrEwSMCCAnA1qq9MihLktcPDbkYDKQQgNcpGIzq3s5257lU2CD5w%3D%3D"
      alt="關於漢文帝banner"
    />
    <img
      class="img-cover d-lg-block d-none pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649486937361.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MV0ltytTHZJ%2FFGIlFNovcNBNkRHce3FdIgO0roi8w9RCkOEQXMGCOhAZ1RH%2B%2BlNeVaY0pVC5sCuLzCA%2FWAc0oEBvoiak1KxmsDkcwyMFkV4gsU%2FjHvfhk5KtGoUS7o%2BorWxIxsTrq4N53c5a6Qo1KHZ4xg%2BFRCISmaPyxX2falP3q56WIHTegBTTWE1jUcLEfoy608VibZKxE2CwTPiDQ9i2OoagdVKlb%2FRoWC7g5BLlreMW0AtGjmGffQHpW2OhvTpyAYW1BUrZww%2BVrRHr5n9JOm5VF6yEc78HSOxuZ1bc%2B809o9U2YkU9pRYCCORuMMMsBV3dnrEtxoj0V2yaTw%3D%3D"
      alt="關於漢文帝banner-pc"
    />
    <h2
      class="position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"
    >
      Favourite
    </h2>
  </header>
  <div class="container px-3">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="nav-link text-dark active p-0">
              首頁
            </RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">我的最愛</li>
        </ol>
      </nav>
      <div class="mt-3">
        <template v-if="filterProducts.length > 0">
          <div class="col-md-12">
            <div class="row g-2">
              <div
                class="col-12 col-md-4 mb-4"
                v-for="item in filterProducts"
                :key="item.id"
              >
                <div class="card h-100">
                  <!-- Favorite icon -->
                  <div class="card_Favorite" @click="setFavorite(item.id)">
                    <span v-if="favoriteList.includes(item.id)"
                      ><i class="bi bi-heart-fill"></i
                    ></span>
                    <span v-else><i class="bi bi-heart"></i></span>
                  </div>

                  <div
                    class="card_imgHidden"
                    role="button"
                    @click="getProduct(item.id)"
                  >
                    <div
                      class="card_img bg-cover"
                      style="height: 250px"
                      :style="`background-image: url(${item.imageUrl})`"
                    ></div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">
                        {{ item.title }}
                      </h5>
                      <div>
                        <div class="badge rounded-pill bg-secondary h5">
                          {{ item.category }}
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <template v-if="item.origin_price === item.price">
                        <span class="h5 ms-auto"
                          >原價： {{ $filters.currency(item.origin_price) }} 元</span
                        >
                      </template>
                      <template v-else>
                        <del class="text-danger"
                          >原價： {{ $filters.currency(item.origin_price) }} 元</del
                        >
                        <span class="text-info h5 ms-auto"
                          >特價： {{ $filters.currency(item.price) }} 元</span
                        >
                      </template>
                    </div>
                    <div class="card-footer border-0 bg-white my-2">
                      <button
                        id="btn02"
                        type="button"
                        class="btn btn-outline-secondary w-100"
                        @click="addCart(item.id)"
                      >
                        <i class="bi bi-cart-plus-fill h4"></i>
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="text-center mb-5">
          <h2 class="text-danger">沒有我的最愛</h2>
          <p class="display-3 text-danger mb-3">快去產品頁挑選!!!</p>
          <router-link
            to="/products"
            class="fs-5 btn btn-outline-secondary py-3 px-3"
          >
            去逛逛吧 !
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <NoticeView />
  <CustomLoading :active="isLoading" />
</template>

<script>
import NoticeView from '@/components/frontend/NoticeView.vue'

export default {
  name: '我的最愛',
  inject: ['emitter'],
  components: {
    NoticeView
  },
  data () {
    return {
      products: [],
      favoriteList: [],
      isLoading: false
    }
  },
  computed: {
    filterProducts () {
      return this.products.filter((item) =>
        this.favoriteList.includes(item.id)
      )
    }
  },
  methods: {
    getProduct (id) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          // 將遠端資料取回
          this.product = res.data.product
          this.$router.push(`/product/${id}`)
        })
    },
    getProducts () {
      // 參數預設值
      this.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all` // query 用? 去帶
        )
        .then((res) => {
          // 把產品列表存起來，準備呈現在畫面
          this.products = res.data.products
          this.isLoading = false
        })
    },
    addCart (id, qty = 1) {
      // 加入購物車的資料格式
      const data = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.isLoadingItem = id // 帶入讀取的id
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        ) // 將資料格式帶入
        .then((res) => {
          // 加入購物車後，再重新取得購物車內容
          // 取完後，清空id
          this.isLoading = false
          this.isLoadingItem = ''
          this.$swal(res.data.message)
          this.emitter.emit('get-cart')
        })
    },
    // 取得我的最愛
    getFavorite () {
      const favoriteList = localStorage.getItem('homeFavorite') || []
      this.favoriteList = JSON.parse(favoriteList)
      this.emitter.emit('get-favorite')
    },
    // 存入我的最愛
    setFavorite (id) {
      // 查資料裡面，有沒有這個ID
      if (this.favoriteList.includes(id)) {
        const index = this.favoriteList.findIndex((item) => item === id)
        this.favoriteList.splice(index, 1)
        this.$swal({
          text: '己成功移除',
          icon: 'success'
        })
      } else {
        this.favoriteList.push(id)
        this.$swal({
          text: '成功收藏',
          icon: 'success'
        })
      }
      const favoriteStr = JSON.stringify(this.favoriteList)
      localStorage.setItem('homeFavorite', '')
      localStorage.setItem('homeFavorite', favoriteStr)
      this.getFavorite()
    }
  },
  mounted () {
    this.getFavorite()
    this.getProducts()
  }
}
</script>
