<template>
  <nav
    class="navbar navbar-expand-lg fixed-top d-block py-2"
    :class="[
      isActive
        ? [navClassList.nav, navClassList.text, navClassList.bg, navClassList.navbarShadow ]
        : 'navbar-dark',
    ]"
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
          class="bi bi-box2-heart fs-3"
          :class="[navClassList.nav, navClassList.text]"
        ></i
        ><span
            v-if="favoriteList?.length > 0"
            class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >
          </span>
      </router-link>
      <router-link
        class="position-relative navbar-brand d-lg-none nav-link"
        to="/cart"
      >
        <i
          class="bi bi-cart3 fs-3"
          :class="[navClassList.nav, navClassList.text]"
        ></i
        ><span
          class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >{{ cartData?.carts?.length }}</span
        >
      </router-link>

      <button class="navbar-toggler" type="button" @click="mobileBtn">
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
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" :class="[navClassList.nav, navClassList.text]" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            手作模型
          </a>
          <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown" @click="closeNavHam">
            <li><router-link class="dropdown-item" to="/products">全部</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="toCategory('熱門')">熱門</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="toCategory('甲殼類')">甲殼類</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="toCategory('動物科')">動物科</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="toCategory('昆蟲類')">昆蟲類</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="toCategory('特殊類')">特殊類</a></li>
          </ul>
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
            v-if="favoriteList?.length > 0"
            class="badge rounded-pill position-absolute translate-middle top-0 mt-2 bg-secondary"
          >{{ favoriteList?.length }}
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
      isActive: false,
      navClassList: {
        nav: 'navbar-dark',
        text: 'text-light',
        navbarShadow: '',
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
  methods: {
    mobileBtn () {
      this.toggleNavHam()
      if (this.openNavHam) {
        this.isActive = true
        this.navClassList = {
          nav: 'navbar-light',
          text: 'text-success',
          navbarShadow: 'shadow-sm',
          bg: 'bg-white',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191590300.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TBm7MtVRJypq3N2k5e7SAQbBNCYt%2BaLl9%2FC%2BIs%2FL3MVfhGHDvoC1A2vqzMuKaYp6bEkeVm5l4OpZtbIsoFa94hR0yt31xGSGmPy1ORr1LUPjF9bMVFngdXP32WMX19pkYKQxzHJOusWUh21ab%2BPqkPXiTNZrt3mtpnlEgAfpyzdC%2BWIt9k1PE6v%2B3xuv2qwbHNTb8AgTn9btLbUcsCmdumhZOoISUnLayyqxpZKg0nvZFIQ5wfxxbNgm29gzPCUTNCI8gXFheqWBGznoE4RcAfHYZEUcil6TRNO9XKzTJxiBRG02pZP2BLh1XR%2BFH9jHsaqa2aysASiEnk8qsc22Nw%3D%3D'
        }
      }
    },
    // 點選商品分類跳到對應的商品分類
    toCategory (Name) {
      this.$router.push({
        name: '產品列表',
        params: { categoryName: Name }
      })
    },
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
      const windowY = window.scrollY
      if (windowY > 10) {
        this.isActive = true
        this.navClassList = {
          nav: 'navbar-light',
          text: 'text-success',
          navbarShadow: 'shadow-sm',
          bg: 'bg-white',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191590300.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TBm7MtVRJypq3N2k5e7SAQbBNCYt%2BaLl9%2FC%2BIs%2FL3MVfhGHDvoC1A2vqzMuKaYp6bEkeVm5l4OpZtbIsoFa94hR0yt31xGSGmPy1ORr1LUPjF9bMVFngdXP32WMX19pkYKQxzHJOusWUh21ab%2BPqkPXiTNZrt3mtpnlEgAfpyzdC%2BWIt9k1PE6v%2B3xuv2qwbHNTb8AgTn9btLbUcsCmdumhZOoISUnLayyqxpZKg0nvZFIQ5wfxxbNgm29gzPCUTNCI8gXFheqWBGznoE4RcAfHYZEUcil6TRNO9XKzTJxiBRG02pZP2BLh1XR%2BFH9jHsaqa2aysASiEnk8qsc22Nw%3D%3D'
        }
      } else {
        this.isActive = false
        this.navClassList = {
          nav: 'navbar-dark',
          text: 'text-light',
          bg: '',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D'
        }
      }
    })
  },
  unmounted () {
    this.emitter.off('get-cart')
    this.emitter.off('get-favorite')
    window.removeEventListener('scroll', () => {
      const windowY = window.scrollY
      if (windowY > 10) {
        this.isActive = true
        this.navClassList = {
          nav: 'navbar-light',
          text: 'text-success',
          navbarShadow: 'shadow-sm',
          bg: 'bg-white',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191590300.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TBm7MtVRJypq3N2k5e7SAQbBNCYt%2BaLl9%2FC%2BIs%2FL3MVfhGHDvoC1A2vqzMuKaYp6bEkeVm5l4OpZtbIsoFa94hR0yt31xGSGmPy1ORr1LUPjF9bMVFngdXP32WMX19pkYKQxzHJOusWUh21ab%2BPqkPXiTNZrt3mtpnlEgAfpyzdC%2BWIt9k1PE6v%2B3xuv2qwbHNTb8AgTn9btLbUcsCmdumhZOoISUnLayyqxpZKg0nvZFIQ5wfxxbNgm29gzPCUTNCI8gXFheqWBGznoE4RcAfHYZEUcil6TRNO9XKzTJxiBRG02pZP2BLh1XR%2BFH9jHsaqa2aysASiEnk8qsc22Nw%3D%3D'
        }
      } else {
        this.isActive = false
        this.navClassList = {
          nav: 'navbar-dark',
          text: 'text-light',
          src: 'https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647191678439.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0LplI80HOeontFEvfNoc9%2BU5hkaT%2B5UrdC5SWznp%2FRDUpOtQIw1EUuYgsI0Zor9j9%2BMMlqpbEEciXrhy%2FfNT5cop71NKZCjtHNJX3YPYRlGRctIyBB7b3tZ2vVBMbhgDi9l5Azwg8sMX%2BI3EuTb%2BR0qFFwyNBzBpuGPGazvFmWMr0OpCy6yoCZlJettNvgTheUAJ8zYrSCct%2F08StB2q0%2F57WiylkU53IDebLkuudtumAJlKsdu4b5YLrirR3BhVWiDc3vUtxlF9DBzqh55HRvBTkXkyf3yVcoRTiqSA9fGPGZbUGhjXpRHpMr6iN4d0RBbuPlgIjOe2hVWBMee5Q%3D%3D'
        }
      }
    })
  }
}
</script>
