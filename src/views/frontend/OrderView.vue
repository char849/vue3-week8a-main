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
      Order List
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
              <h3>訂購清單</h3>
              <table class="table product-area">
                <tbody>
                  <tr v-for="item in order.products" :key="item" class="align-middle">
                <td class="border-0">
                  <img
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                    style="width:100px;"
                  />
                </td>
                <td class="border-0">
                  <p class="mb-2 mb-md-0">{{ item.product.title }}</p>
                  <p class="h6 text-secondary">
                    價錢 : NT ${{ $filters.currency(item.product.price) }}
                  </p>
                </td>
                <td class="border-0">
                  <p class="h6">x {{ item.qty }}</p>
                </td>
              </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h3>收件資訊</h3>
              <table class="table border product-area">
                <tbody>
                  <tr><td colspan="2" class="text-info fw-bold"><i class="bi bi-bell-fill"></i> 感謝您的購買，今日下單，如有現貨，工作日 16:00 前訂單，當日出貨
</td></tr>
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
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(order.create_at) }}</td>
                  </tr>

                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="order.paid_date">
                        {{ $filters.date(order.paid_date) }}
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
                      {{ $filters.currency(order.total) }}
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
              <h3>訂單清單</h3>
              <table class="table product-area">
                <tbody>
                   <tr v-for="item in order.products" :key="item" class="align-middle">
              <td>
                <img :src="item.product.imageUrl" :alt="item.product.title" style="width:100px;" />
              </td>
              <td>
                <p class="mb-2 mb-md-0">{{ item.product.title }}</p>
                <p class="h6">數量 : {{ item.qty }}</p>
                <p class="d-table-cell d-lg-none">
                  NT ${{ $filters.currency(item.product.price * item.qty) }}
                </p>
              </td>
              <td class="text-center d-none d-lg-table-cell">
                NT ${{ $filters.currency(item.product.price * item.qty) }}
              </td>
            </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <h3>收件資訊</h3>
              <table class="table border product-area">
                <tbody>
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
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(order.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="order.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-danger">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ $filters.currency(order.total) }}
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
  <NoticeView />
  <CustomLoading :active="isLoading" />
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
            this.$swal(res.data.message, '', 'success')
          }
        })
        .catch((err) => {
          this.$swal(err.response, '', 'error')
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
