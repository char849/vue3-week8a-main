<template>
  <Loading :active="isLoading"></Loading>
  <table class="table mt-6">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>付款方式</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-danger': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, index) in item.products" :key="index">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td><span v-text="item.user.payMethod" v-if="item.user"></span></td>
          <td class="text-right">{{ $filters.currency(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`${item.id}`"
                v-model="item.is_paid"
              />
              <label class="form-check-label" :for="`${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-dark btn-sm"
                type="button"
                @click="openOrdersModal(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-secondary btn-sm"
                type="button"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- 分頁元件 -->
  <Pagination :pages="pagination" @get-product="getOrders" />

  <OrderModal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="getOrders" />
  <DelOrderModal
    :item="tempOrder"
    ref="delOrderModal"
    @del-order-item="delOrder" />
</template>

<script>
import Pagination from '@/components/admin/Pagination.vue'
import OrderModal from '@/components/admin/OrderModal.vue'
import DelOrderModal from '@/components/admin/DelOrderModal.vue'

export default {
  data () {
    return {
      orders: [],
      isNew: false,
      pagination: {},
      tempOrder: {},
      isLoading: false
    }
  },
  components: {
    Pagination,
    OrderModal,
    DelOrderModal
  },
  inject: ['emitter'],
  methods: {
    getOrders (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders
          this.isLoading = false
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          this.$swal(err.response, '', 'error')
        })
    },

    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http
        .delete(url)
        .then((res) => {
          this.$emit('get-orders')
          this.$refs.delOrderModal.hideModal()
          this.getOrders()
        })
        .catch((err) => {
          this.$swal(err.response, '', 'error')
        })
    },

    openOrdersModal (item) {
      this.tempOrder = { ...item }
      this.isNew = false
      this.$refs.orderModal.openModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.delOrderModal.openModal()
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
