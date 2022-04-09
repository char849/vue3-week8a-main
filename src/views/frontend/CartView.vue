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
      Shopping
    </h2>
  </header>
  <div class="container px-3">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="nav-link text-dark active p-0">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
      <div class="mt-2" v-if="cartData.carts.length > 0">
        <ul class="row justify-content-center list-unstyled py-3 px-3">
          <li class="col-md-4">
            <div
              class="bg-primary p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-white"
            >
              1. 填寫訂單
            </div>
          </li>
          <li class="col-md-4">
            <div
              class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light text-muted"
            >
              2. 訂單結帳
            </div>
          </li>
          <li class="col-md-4">
            <div
              class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light text-muted"
            >
              3. 付款完成
            </div>
          </li>
        </ul>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="text-end">
              <!-- js data 那邊要定義到第二層 carts: [] 才能使用，如果寫成 cartData.carts?.( ?.可選串連) length [es6 的寫法] 就不用定義第二層 carts -->
              <button
                id="btn02"
                class="btn btn-outline-secondary fw-bold py-3 px-4 mb-4"
                type="button"
                @click="delAllCarts"
                :disabled="cartData.carts.length === 0"
              >
                清空購物車
              </button>
            </div>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th></th>
                  <th>品名</th>
                  <th style="width: 130px">數量/單位</th>
                  <th></th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <!-- 購物車列表，判斷購物車資料有沒有存在 -->
                <template v-if="cartData.carts">
                  <tr v-for="item in cartData.carts" :key="item.id">
                    <td>
                      <!--  刪除的方法帶入id,removeCartItem(item.id) -->
                      <button
                        type="button"
                        id="btn01"
                        class="btn btn-outline-secondary btn-sm"
                        @click="removeCartItem(item.id)"
                        :disabled="isLoadingItem === item.id"
                      >
                        <font-awesome-icon
                          icon="spinner"
                          pulse
                          v-if="isLoadingItem === item.id"
                        />
                        x
                      </button>
                    </td>

                    <td>
                      <!-- 資料格式包在下一層 product 中，所以要再加一層 product  -->
                      {{ item.product.title }}
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <div class="input-group my-3">
                          <!-- <input min="1" type="number" class="form-control" /> -->
                          <!-- 用select的型式規定使用者輸入的資料格式，數量10個，
                           當前值 item.qty 跟 num 1-10的值一樣的話就選那個值
                           :key="`${num}-${item.id}`"這種寫法可以確保是唯一值 -->
                          <select
                            class="form-select"
                            v-model="item.qty"
                            @change="updateCartItem(item)"
                            :disabled="isLoadingItem === item.id"
                          >
                            <option
                              :value="num"
                              v-for="num in 10"
                              :key="`${num}-${item.id}`"
                            >
                              {{ num }}
                            </option>
                          </select>
                          <span class="input-group-text" id="basic-addon2">{{
                            item.product.unit
                          }}</span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="text-end">
                      {{ $filters.currency(item.total) }}
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="text-end">總計</td>
                  <td class="text-end">{{ $filters.currency(cartData.total) }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="my-5 row justify-content-center">
          <Form
            ref="form"
            class="col-md-6"
            v-slot="{ errors }"
            @submit="createOrder"
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="payMethod" class="form-label"
                >付款方式 <span class="text-danger">*</span></label
              >
              <Field
                id="payMethod"
                v-model="form.user.payMethod"
                as="select"
                name="付款方式"
                class="form-control"
                :class="{ 'is-invalid': errors['付款方式'] }"
                rules="required"
              >
                <option value="" disabled>請選擇付款方式</option>
                <option value="ATM">ATM</option>
                <option value="信用卡">信用卡</option>
              </Field>
              <ErrorMessage name="付款方式" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="btn btn02 btn-secondary py-3 px-4 fw-bold"
                :disabled="
                  Object.keys(errors).length > 0 || cartData.carts.length === 0
                "
              >
                送出訂單
              </button>
            </div>
          </Form>
        </div>
      </div>
      <div class="text-center mb-5" v-else>
          <h2 class="text-danger">返回模型館吧</h2>
          <p class="display-3 text-danger mb-3">購物車目前尚無商品!!!</p>
          <router-link
            to="/products"
            class="fs-5 btn btn-outline-secondary py-3 px-3"
          >
            去逛逛吧 !
          </router-link>
        </div>
    </div>
  </div>
  <NoticeView />
  <Loading :active="isLoading" />
</template>

<script>
import NoticeView from '@/components/frontend/NoticeView.vue'

export default {
  name: '購物車',
  inject: ['emitter'],
  components: {
    NoticeView
  },
  data () {
    return {
      cartData: {
        carts: [] // 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      // 表單驗證格式
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      products: [],
      isLoadingItem: '', // 局部讀取效果的變數
      isLoading: false,
      orderId: ''
    }
  },
  methods: {
    isPhone (value) {
      // cell: (^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$
      // phone: (((\+?(886)\d{1,2})|(^0\d{1,2}))-?)(\d{3,4}-?)(\d{4}-?)$
      const phoneNum = /(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/
      return phoneNum.test(value) ? true : '請輸入正確的手機號碼'
    },
    getProducts () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`
        )
        .then((res) => {
          // 把產品列表存起來，準備呈現在畫面
          this.products = res.data.products
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
          this.emitter.emit('get-cart')
        })
    },
    // 刪除品項
    removeCartItem (id) {
      this.isLoadingItem = id
      this.$http
        .delete(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
        ) // 將資料格式帶入
        .then((res) => {
          //  刪除購物車後，再重新取得購物車內容
          this.getCart()
          // 讀取完後，清空id
          this.isLoadingItem = ''
          this.emitter.emit('get-cart')
        })
    },
    updateCartItem (item) {
      // 更新購物車的資料格式
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.isLoadingItem = item.id // 帶入讀取的id
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        ) // 將資料格式帶入
        .then((res) => {
          // 更新購物車後，再重新取得購物車內容
          this.getCart()
          // 讀取完後，清空id
          this.isLoadingItem = ''
          this.$swal(res.data.message, '', 'success')
        })
    },
    // 刪除購物車內容
    delAllCarts () {
      this.isLoading = true
      this.$http
        .delete(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
        )
        .then((res) => {
          this.isLoading = false
          this.getCart()
          this.emitter.emit('get-cart')
        })
    },
    // 送出訂單
    createOrder () {
      this.isLoading = true
      const order = this.form
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`,
          { data: order }
        )

        .then((res) => {
          this.isLoading = false
          this.orderId = res.data.orderId
          this.$router.push(`/order/${this.orderId}`)
          this.$swal(res.data.message)
          // 當表單送出時，清空資料，resetForm()是 VeeValidate 提供的函式
          this.$refs.form.resetForm()
          this.getCart()
        })
    }
  },
  // 初使化
  mounted () {
    // 取得購物車列表
    this.getCart()
  }
}
</script>
