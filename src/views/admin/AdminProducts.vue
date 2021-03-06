<template>
  <div class="container">
    <CustomLoading :active="isLoading" />
    <h2>後台產品管理列表</h2>
    <div class="text-end mt-5">
      <button
        class="btn btn-secondary fw-bold"
        type="button"
        @click="openModal('isNew', 'item')"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">圖片</th>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-end">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <span
            :class="[item.is_enabled === 1?'text-secondary': 'text-danger']">
              {{item.is_enabled === 1? '啟用':'未啟用'}}</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-success btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 前內: pages, 後外: pagination,用 v-bind -->
    <!-- 前內: get-product, 後外: getProducts, 將內層的事件送到外層用 v-on -->
    <!-- 分頁元件 -->
    <Pagination :pages="pagination" @get-product="getProducts" />
    <!-- AdminProductModal -->
    <AdminProductModal
      :product="tempProduct"
      :is-new="isNew"
      ref="adminProductModal"
      @get-products="getProducts" />

    <!-- DelProductModal model -->
    <DelProductModal
      :temp-product="tempProduct"
      ref="delProductModal"
      @get-products="getProducts" />
  </div>
</template>

<script>
import Pagination from '@/components/admin/Pagination.vue'
import AdminProductModal from '@/components/admin/AdminProductModal.vue'
import DelProductModal from '@/components/admin/DelProductModal.vue'

export default {
  data () {
    return {
      products: [],
      isLoadingItem: '', // 局部讀取效果的變數
      isLoading: false,
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      status: {
        fileUploading: false
      },
      modal: {
        AdminProductModal: '',
        DelProductModal: ''
      },
      // 傳入分頁資訊
      pagination: {}
    }
  },

  // 區域註冊
  components: {
    Pagination,
    AdminProductModal,
    DelProductModal
  },
  methods: {
    // 取得產品列表
    getProducts (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          this.$swal(err.response, '', 'error')
        })
      // 物件跑迴圈二種方式 - 實戰常用
      // Object.value(this.products).forEach((item) => {
      //   console.log(item);
      // })

      // Object.keys(this.products).forEach((key) => {
      //   console.log(this.products[key], key);
      // })
    },
    openModal (status, product) {
      if (status === 'isNew') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.$refs.adminProductModal.openModal()
      } else if (status === 'edit') {
        this.tempProduct = JSON.parse(JSON.stringify(product))
        this.isNew = false
        this.$refs.adminProductModal.openModal()
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = []
        }
      } else if (status === 'delete') {
        this.tempProduct = JSON.parse(JSON.stringify(product))
        this.$refs.delProductModal.openModal()
      }
    }
  },
  // 初使化
  mounted () {
    // 把getProducts產品列表運作起來
    this.getProducts()
  }
}
</script>
