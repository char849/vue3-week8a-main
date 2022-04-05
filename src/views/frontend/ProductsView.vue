<template>
  <header class="position-relative mb-7 mb-md-9">
    <img
      class="bg-mask-60 d-lg-none d-block img-cover pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056515409.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y3oVi0SPMebWOgvPqS5RHodE7xqByaugrJ0bU5Nh39%2FkgP61e0eITVD7AtElaYEW3y%2BnA%2FUZW3tYJHol9aYQ4CruEBRBMTedaUR%2F4sE44GRGEjRh7LifWCFKxD%2BY4hsD68zenE0s1Cb2WS%2BuBUuxrpx5ac2hsMgZypGfR%2FaCyF8Fh0jtifudelvL03JhoGOjSSdmzzeFJUk4eESF7ubqvjc5YFjSh6o2TVTUgIM10VrDxPVgVCTPgfQ%2B4PNaW86AAXGsrDothzw%2F5W6wsthdwEFzxe0obRdU%2F2mrEwSMCCAnA1qq9MihLktcPDbkYDKQQgNcpGIzq3s5257lU2CD5w%3D%3D"
      alt="關於漢文帝banner"
    />
    <img
      class="bg-mask-60 img-cover d-lg-block d-none pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056577180.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ogse6tS%2Bis99uDCUOfD39hKI1mklPXiasbEPqueX8U6PoGkaKr4DmOMDJ6vGVRojlIqg7j7PufZSDp7RAagCBxuhnAv4J0IzC4bIT1rZ4zbPfhD9kVT2jXd0EHrnH7qxO5%2FNiUNuvJaq6Whou7FwID028oBJAYElYnbFimnyii1HhXPajHArl0K6gjLE2prj9Vsdb2JQAbVolOJReVlQAHKSc9o%2BjTYI6iRiDMrIqrj6o8EBqRfLKw%2FOEIMmmjPSvc9TC3eLtiNcDNDy0Trai1DJVbZLmXBkiwWfb1UT%2F9HUbevYZbZ8x4YVA2Yd8slyrLHhjkd%2Fi4w%2FI%2BQSjoYLcw%3D%3D"
      alt="關於漢文帝banner"
    />
    <h2
      class="position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"
    >
      Products List
    </h2>
  </header>
  <div class="container px-3 mb-5">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="nav-link text-dark active p-0">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ list.currentCategory === "all" ? "全部" : list.currentCategory }}
          </li>
        </ol>
      </nav>
      <div class="col-md-2">
        <div class="list-group sticky-top mb-3">
          <a
            href="#"
            :class="{ active: list.currentCategory === 'all' }"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="categoryHandler('all')"
          >
            全部
          </a>
          <a
            v-for="item in list.ary"
            :key="item"
            href="#"
            :class="{ active: list.currentCategory === item }"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="categoryHandler(item)"
          >
            {{ item }}
          </a>
        </div>
      </div>
      <div class="col-md-10">
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
                  href="#"
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
                      >原價： {{ item.origin_price }} 元</span
                    >
                  </template>
                  <template v-else>
                    <del class="text-danger"
                      >原價： {{ item.origin_price }} 元</del
                    >
                    <span class="text-info h5 ms-auto"
                      >特價： {{ item.price }} 元</span
                    >
                  </template>
                </div>
                <div class="card-footer border-0 bg-white my-2">
                  <button
                    id="btn02"
                    type="button"
                    class="btn btn-outline-secondary w-100"
                    :disabled="isLoadingItem === item.id"
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
    </div>
  </div>
</template>
<script>

export default {
  name: '產品列表',
  inject: ['emitter'],
  data () {
    return {
      list: {
        currentCategory: 'all',
        ary: [],
        changeCategory: false
      },
      products: [],
      favoriteList: [],
      // 購物車列表
      cartData: {
        carts: [] // 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      isLoadingItem: '', // 局部讀取效果的變數
      isLoading: false
    }
  },

  computed: {
    filterProducts () {
      return this.products?.filter(
        (product) =>
          this.list.currentCategory === 'all' ||
          product.category === this.list.currentCategory
      )
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    this.getFavorite()
  },
  methods: {
    getProducts () {
      // 參數預設值
      this.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all` // query 用? 去帶
        )
        .then((res) => {
          if (res.data.success) {
            const { products } = res.data
            this.products = products
            this.getCategory()
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
    },
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
    addCart (id, qty = 1) {
      // 5. 加入購物車的資料格式
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id // 6. 帶入讀取的id
      this.isLoading = true
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        ) // 5. 將資料格式帶入
        .then((res) => {
          this.isLoading = false
          // 加入購物車後，再重新取得購物車內容
          // this.getCart();
          // 讀取完後，清空id
          this.isLoadingItem = ''
          this.$swal(res.data.message)
          // get-cart
          this.emitter.emit('get-cart')
        })
    },
    getFavorite () {
      const favoriteList = localStorage.getItem('homeFavorite') || []
      this.favoriteList = JSON.parse(favoriteList)
      this.emitter.emit('get-favorite')
    },
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
    },
    getCategory () {
      const categorys = this.products?.map((product) => product.category)
      this.list.ary = [...new Set(categorys)]
    },
    categoryHandler (type) {
      this.list.currentCategory = type
      this.products.filter(
        (product) => type === 'all' || product.category === type
      )
    }
  }
}
</script>
