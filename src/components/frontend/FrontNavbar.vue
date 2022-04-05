<template>
  <nav
    class="navbar navbar-expand-lg fixed-top d-block py-2"
    :class="{ 'shadow-sm': scroll, 'bg-primary': scroll }"
  >
    <div class="container">
      <h1 class="logo navbar-brand mb-0">
        <router-link class="d-flex me-2 text-decoration-none" to="/">
          <img :src="[navClassList.src]" width="130" alt="Logo" />
        </router-link>
      </h1>
      <!-- lg 以下 -->
      <router-link
        class="position-relative d-block d-lg-none ms-auto nav-link"
        to="/favorite"
      >
        <i
          class="bi bi-box2-heart fs-4"
          :class="[navClassList.nav, navClassList.text]"
        ></i
        ><span
          v-if="favoriteLen > 0"
          class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
        ></span>
      </router-link>
      <router-link
        class="position-relative navbar-brand d-lg-none nav-link"
        to="/cart"
      >
        <i
          class="bi bi-cart3 fs-4"
          :class="[navClassList.nav, navClassList.text]"
        ></i
        ><span
          class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >{{ cartData?.carts?.length }}</span
        >
      </router-link>

      <button class="navbar-toggler" type="button" @click="toggleNavHam">
        <i
          class="bi bi-justify-right fs-1"
          :class="[navClassList.nav, navClassList.text]"
        ></i>
      </button>
      <div class="collapse navbar-collapse" ref="collapse">
        <ul class="navbar-nav me-auto mb-4 mb-lg-0 fw-bold">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
              @click="closeNavHam"
              :class="[navClassList.nav, navClassList.text]"
              >關於漢文帝</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/products"
              @click="closeNavHam"
              :class="[navClassList.nav, navClassList.text]"
              >手作模型</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/course"
              @click="closeNavHam"
              :class="[navClassList.nav, navClassList.text]"
              >課程招生</router-link
            >
          </li>
        </ul>
      </div>
      <!-- lg 以上 -->
      <div class="navbar-nav">
        <router-link
          class="position-relative d-flex d-none d-lg-block nav-link"
          to="/favorite"
        >
          <i
            class="bi bi-box2-heart fs-4"
            :class="[navClassList.nav, navClassList.text]"
          ></i
          ><span
            v-if="favoriteLen > 0"
            class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >
          </span>
        </router-link>
        <router-link
          class="position-relative d-flex d-none d-lg-block nav-link"
          to="/cart"
        >
          <i
            class="bi bi-cart3 fs-4"
            :class="[navClassList.nav, navClassList.text]"
          ></i
          ><span
            class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
            >{{ cartData?.carts?.length }}</span
          >
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>

import mixins from '@/mixins/mixins'

export default {
  inject: ['emitter'],
  mixins: [mixins],
  data () {
    return {
      scroll: '',
      navClassList: {
        nav: 'navbar-dark',
        text: 'text-light',
        src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D'
      },
      cartData: {
        carts: [] // 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      favoriteList: [],
      collapse: '',
      bg: ''
    }
  },
  computed: {
    favoriteLen () {
      return this.favoriteList?.length
    }
  },
  methods: {
    // 取得購物車內容
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        })
    },
    getFavorite () {
      const favoriteList = localStorage.getItem('homeFavorite') || '[]'
      this.favoriteList = JSON.parse(favoriteList)
    }
  },
  mounted () {
    this.getCart()
    // 當emitter被觸發時，會再次取得購物車品項
    this.emitter.on('get-cart', () => {
      this.getCart()
    })
    this.emitter.on('get-favorite', () => {
      this.getFavorite()
    })
    this.getFavorite()
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0
      const windowY = window.scrollY
      if (windowY > 10) {
        this.navClassList = {
          nav: 'navbar-dark',
          text: 'text-success',
          bg: 'bg-white',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191590300.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TBm7MtVRJypq3N2k5e7SAQbBNCYt%2BaLl9%2FC%2BIs%2FL3MVfhGHDvoC1A2vqzMuKaYp6bEkeVm5l4OpZtbIsoFa94hR0yt31xGSGmPy1ORr1LUPjF9bMVFngdXP32WMX19pkYKQxzHJOusWUh21ab%2BPqkPXiTNZrt3mtpnlEgAfpyzdC%2BWIt9k1PE6v%2B3xuv2qwbHNTb8AgTn9btLbUcsCmdumhZOoISUnLayyqxpZKg0nvZFIQ5wfxxbNgm29gzPCUTNCI8gXFheqWBGznoE4RcAfHYZEUcil6TRNO9XKzTJxiBRG02pZP2BLh1XR%2BFH9jHsaqa2aysASiEnk8qsc22Nw%3D%3D'
        }
      } else {
        this.navClassList = {
          nav: 'navbar-light',
          text: 'text-light',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D'
        }
      }
    })
  },
  unmounted () {
    this.emitter.off('get-cart')
    this.emitter.off('get-favorite')
    window.removeEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0
      const windowY = window.scrollY
      if (windowY > 10) {
        this.navClassList = {
          nav: 'navbar-dark',
          text: 'text-success',
          bg: 'bg-white',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191590300.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TBm7MtVRJypq3N2k5e7SAQbBNCYt%2BaLl9%2FC%2BIs%2FL3MVfhGHDvoC1A2vqzMuKaYp6bEkeVm5l4OpZtbIsoFa94hR0yt31xGSGmPy1ORr1LUPjF9bMVFngdXP32WMX19pkYKQxzHJOusWUh21ab%2BPqkPXiTNZrt3mtpnlEgAfpyzdC%2BWIt9k1PE6v%2B3xuv2qwbHNTb8AgTn9btLbUcsCmdumhZOoISUnLayyqxpZKg0nvZFIQ5wfxxbNgm29gzPCUTNCI8gXFheqWBGznoE4RcAfHYZEUcil6TRNO9XKzTJxiBRG02pZP2BLh1XR%2BFH9jHsaqa2aysASiEnk8qsc22Nw%3D%3D'
        }
      } else {
        this.navClassList = {
          nav: 'navbar-light',
          text: 'text-light',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D'
        }
      }
    })
  }
}
</script>
