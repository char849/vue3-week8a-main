<template>
  <div
    id="AdminProductModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? "新增" : "修改" }}產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input
                  id="imageUrl"
                  v-model="tempProduct.imageUrl"
                  type="text"
                  class="form-control mb-2"
                  placeholder="請輸入圖片連結"
                />
                <!-- 上傳圖片 -->
                <div class="mb-3">
                  <label for="customFile" class="form-label"
                    >或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="fileInput"
                    @change="uploadFile"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" />
              </div>
              <h3 class="mb-3">多圖新增</h3>
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <template
                  v-for="(image, key) in tempProduct.imagesUrl"
                  :key="key + '123'"
                >
                  <div class="mb-1">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input
                        v-model="tempProduct.imagesUrl[key]"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <img class="img-fluid" :src="tempProduct.imagesUrl[key]" alt="次產品圖" />
                  </div>

                  <button
                    type="button"
                    class="btn btn-outline-secondary btn fw-bold d-block w-100"
                    @click="tempProduct.imagesUrl.splice(key, 1)"
                  >
                    刪除
                  </button>
                </template>
                <!-- 如果陣列都沒有填文字內容 or 如果最後一個陣列有內容，新增一個 -->
                <button
                  v-if="
                    !tempProduct.imagesUrl.length ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                  type="button"
                  class="btn btn-outline-success btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.push('')"
                >
                  新增一張圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  v-model="tempProduct.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    v-model="tempProduct.category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    v-model="tempProduct.unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    v-model.number="tempProduct.origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    v-model.number="tempProduct.price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  v-model="tempProduct.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  v-model="tempProduct.content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="updateProduct()"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <CustomLoading :active="isLoading" />
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

// eslint 不允許你使用 props 傳入的值 直接使用在 v-model 上面，所以 需要把
// 外元件改成 :product="tempProduct"，內元件在 mounted 加入 this.tempProduct = JSON.parse(JSON.stringify(this.product))
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      modal: {},
      id: '',
      isLoading: false,
      tempProduct: {
        imagesUrl: []
      },
      status: {}
    }
  },
  inject: ['emitter'],
  methods: {
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      this.status.fileUploading = true
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          this.status.fileUploading = false
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl
            this.$refs.fileInput.value = ''
            this.$swal(res.data.message, '', 'success')
          } else {
            this.$refs.fileInput.value = ''
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((err) => {
          this.status.fileUploading = false
          this.$swal(err.response, '', 'error')
        })
    },
    updateProduct () {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpApi = 'post'
      let status = '新增產品'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        httpApi = 'put'
        status = '更新產品'
      }

      this.$http[httpApi](url, { data: this.tempProduct })
        .then((res) => {
          this.adminProductModal.hide()
          this.$swal(res.data.message, status, '', 'success')
          this.$emit('get-products') // 內層用('get-products')的事件, emit 來觸發外層getProducts的方法
          // this.getProducts(); //沒有getProducts, 它是外層的方法
        })
        .catch((err) => {
          this.$swal(err.response, status, '', 'error')
        })
    },
    openModal () {
      this.adminProductModal.show()
    },
    // 內層元件也要新增 adminProductModal()
    closeModal () {
      this.adminProductModal.hide()
    }
  },
  // 加上watch 被掛載在 AdminProduct 這個元件下面的 AdminProductModal 重新啟動，讓watch 監聽 props 的值
  watch: {
    product () {
      this.tempProduct = JSON.parse(JSON.stringify(this.product))
    }
  },
  mounted () {
    // this.tempProduct = JSON.parse(JSON.stringify(this.product));
    // ref="modal"
    this.adminProductModal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
