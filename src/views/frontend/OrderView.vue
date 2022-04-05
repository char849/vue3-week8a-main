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
      Order
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
          <li class="breadcrumb-item active" aria-current="page">購物車清單</li>
        </ol>
      </nav>

      <div class="mt-2">
        <!-- <h5 class="mb-1">訂單已建立完成</h5>
        <p class="text-info">訂單編號: {{ order.id }}</p> -->
        <div class="row">
          <template v-if="order.is_paid">
            <ul class="row justify-content-center list-unstyled py-3 px-3">
              <li class="col-md-4">
                <div
                  class="bg-primary p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light text-muted"
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
                  class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-white"
                >
                  3. 付款完成
                </div>
              </li>
            </ul>
            <div class="col-md-6">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order?.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ date(order.create_at) }}</td>
                  </tr>

                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="order.paid_date">
                        {{ date(order.paid_date) }}
                      </span>

                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="order.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ order.total }}
                    </td>
                  </tr>
                  <tr>
                    <th class="text-secondary">訂單成立</th>

                    <td>
                      <button
                        type="button"
                        class="btn btn-secondary fw-bold"
                        @click="goShopping"
                      >
                        繼續逛逛
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
          <template v-else>
            <ul class="row justify-content-center list-unstyled py-3 px-3">
              <li class="col-md-4">
                <div
                  class="bg-primary p-3 badge rounded-pill fs-3 w-100 mb-2 bg-light text-muted"
                >
                  1. 填寫訂單
                </div>
              </li>
              <li class="col-md-4">
                <div
                  class="p-3 badge rounded-pill fs-3 w-100 mb-2 bg-secondary text-white"
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
            <div class="col-md-6">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ date(order.create_at) }}</td>
                  </tr>

                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="order.paid_date">
                        {{ date(order.paid_date) }}
                      </span>

                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="order.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ order.total }}
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      <button
                        v-if="!order.is_paid"
                        type="button"
                        class="btn btn-secondary fw-bold"
                        @click="pay(orderId)"
                      >
                        確認付款去
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <NoticeView></NoticeView>
  <Loading :active="isLoading"></Loading>
</template>

<script>
import NoticeView from '@/components/frontend/NoticeView.vue'
export default {
  name: '結帳',
  components: {
    NoticeView
  },
  data () {
    return {
      isLoading: false,
      orderId: null,
      order: {
        user: {}
      },
      is_paid: false
    }
  },

  methods: {
    // 時間戳
    date (time) {
      const date = new Date(time * 1000)
      return date.toLocaleDateString()
    },

    getOrder () {
      this.orderId = this.$route.params.id
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
        )
        .then((res) => {
          if (res.data.success) {
            const { order } = res.data
            this.order = order
          } else {
            this.$swal(res.data.message, '', '"error')
          }
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
        })
    },
    pay (id) {
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`
        )
        .then((res) => {
          if (res.data.success) {
            const { message } = res.data
            this.$swal(`${message}!! \n`, '', 'success')
            this.getOrder(id)
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
        })
    },
    goShopping () {
      this.$router.push('/products')
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

<style>
.btn-secondary {
  background-color: #f82888;
  color: #ffffff;
}
.btn-secondary:hover {
  border-color: #f82888;
  background-color: transparent;
  color: #f82888 !important;
}
</style>
