<template>
  <header class="position-relative mb-7 mb-md-9">
    <img
      class="d-lg-none d-block img-cover pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056515409.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y3oVi0SPMebWOgvPqS5RHodE7xqByaugrJ0bU5Nh39%2FkgP61e0eITVD7AtElaYEW3y%2BnA%2FUZW3tYJHol9aYQ4CruEBRBMTedaUR%2F4sE44GRGEjRh7LifWCFKxD%2BY4hsD68zenE0s1Cb2WS%2BuBUuxrpx5ac2hsMgZypGfR%2FaCyF8Fh0jtifudelvL03JhoGOjSSdmzzeFJUk4eESF7ubqvjc5YFjSh6o2TVTUgIM10VrDxPVgVCTPgfQ%2B4PNaW86AAXGsrDothzw%2F5W6wsthdwEFzxe0obRdU%2F2mrEwSMCCAnA1qq9MihLktcPDbkYDKQQgNcpGIzq3s5257lU2CD5w%3D%3D"
      alt="關於漢文帝banner-phone"
    />
    <img
      class="img-cover d-lg-block d-none pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649486937361.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MV0ltytTHZJ%2FFGIlFNovcNBNkRHce3FdIgO0roi8w9RCkOEQXMGCOhAZ1RH%2B%2BlNeVaY0pVC5sCuLzCA%2FWAc0oEBvoiak1KxmsDkcwyMFkV4gsU%2FjHvfhk5KtGoUS7o%2BorWxIxsTrq4N53c5a6Qo1KHZ4xg%2BFRCISmaPyxX2falP3q56WIHTegBTTWE1jUcLEfoy608VibZKxE2CwTPiDQ9i2OoagdVKlb%2FRoWC7g5BLlreMW0AtGjmGffQHpW2OhvTpyAYW1BUrZww%2BVrRHr5n9JOm5VF6yEc78HSOxuZ1bc%2B809o9U2YkU9pRYCCORuMMMsBV3dnrEtxoj0V2yaTw%3D%3D"
      alt="關於漢文帝banner-pc"
    />
    <h2
      class="position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"
    >
      Single Product
    </h2>
  </header>
  <div class="container px-3 mb-5">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="nav-link text-dark active p-0">
              首頁
            </RouterLink>
          </li>

          <li class="breadcrumb-item active" aria-current="page">
            {{ category || "類別" }}
          </li>
        </ol>
      </nav>
      <div class="col-lg-5 mt-4 col-lg-6">
        <div
          class="card mb-3 bg-cover"
          :style="`backgroundImage: url(${imgUrl})`"
          style="height: 400px"
        ></div>
        <div class="row">
          <div class="pb-lg-3">
            <a
              href="#"
              v-for="(item, index) in imagesUrl"
              :key="index"
              @click.prevent="subImg(item, index)"
            >
              <img class="picture pe-1 pb-2 bg-cover" :src="item" alt="產品圖片" />
            </a>
          </div>

          <!--End Controls-->
        </div>
      </div>
      <!-- col end -->
      <div class="col-lg-6 mt-4">
        <div class="card">
          <div class="card-body">
            <span
              class="border border-secondary fw-bold text-secondary px-2 me-2"
            >
              {{ product.category }}
            </span>
            <h1 class="h2 mt-2">{{ product.title }}</h1>
            <div v-if="product.price === product.origin_price">
              {{ $filters.currency(product.price) }} 元
            </div>
            <div v-else>
              <del class="h6 text-danger"
                >原價 {{ $filters.currency(product.origin_price) }} 元</del
              >
              <p class="h4 mb-3 text-info">NT {{ $filters.currency(product.price) }} 元</p>
            </div>
            <p class="h5 text-dark py-2">
              {{ product.content }}
            </p>
            <p class="h5 text-warning lh-base">
              {{ product.description }}
            </p>
            <p>付款方式： ATM 、 信用卡</p>
          </div>
          <div class="card-footer d-flex border-0 bg-white my-2 py-3">
              <select id="" class="form-select w-25 me-1" v-model="qty">
                <option :value="num" v-for="num in 5" :key="`${num}-${id}`">
                  {{ num }}
                </option>
              </select>
              <button
                type="button"
                class="btn btn-outline-secondary w-75"
                @click="addCart(product.id, qty)"
              >
                <i class="bi bi-cart-plus-fill h4"></i>
                加入購物車
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
  <ProductSwiperView :category="category" data-aos="fade-up" />
  <CustomLoading :active="isLoading" />
</template>

<script>
import ProductSwiperView from '@/components/frontend/ProductSwiperView.vue'

export default {
  name: '單一產品',
  inject: ['emitter'],
  components: {
    ProductSwiperView
  },
  data () {
    return {
      category: '',
      product: {},
      imgUrl: '',
      imagesUrl: [],
      qty: 1,
      isLoading: false
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (to) {
        // 避免 非 prodcut 跳轉 會有問題
        if (to.name === '單一產品') {
          this.id = to.params.id
          this.getProduct(this.id)
        }
      }
    },
    favorite: {
      handle () {
        // localStorage 自訂欄位，不能存json 必需轉字串
        // 當資料有變動就做寫入，沒有的話就什麼都不做
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList))
      },
      deep: true
    }
  },

  methods: {
    subImg (item) {
      this.imgUrl = item
    },
    getProduct (id) {
      this.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          // 將遠端資料取回
          this.product = res.data.product
          this.category = res.data.product.category
          this.imgUrl = res.data.product.imageUrl
          this.imagesUrl = res.data.product.imagesUrl
          this.isLoading = false
        })
    },
    // 取得購物車內容
    getCart () {
      this.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
          this.isLoading = false
          this.getCart()
          this.emitter.emit('get-cart')
        })
    },
    addCart (id, qty = 1) {
      // 加入購物車的資料格式
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id // 帶入讀取的id
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        ) // 將資料格式帶入
        .then((res) => {
          // 加入購物車後，再重新取得購物車內容
          // 讀取完後，清空id
          this.isLoadingItem = ''
          this.$swal(res.data.message)
          this.emitter.emit('get-cart')
        })
    },

    created () {
      this.getProduct()
    }
  }
}
</script>
