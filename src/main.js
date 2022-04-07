import { createApp } from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
// 匯入 vee-validate 主套件
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'animate.css'
import '@popperjs/core'
import App from './App.vue'
import router from './router'
// 引入“千分號”程式碼
import { currency, date } from './methods/filters.js'

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

AOS.init({
  duration: 1500,
  once: true
})

const app = createApp(App)

// 註冊Swiperjs 全域元件
SwiperCore.use([Navigation, Autoplay, Pagination])

app.use(router)
app.use(VueAxios, axios)
app.component('Loading', Loading)

// 註冊 Swiperjs 兩個全域元件
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.use(VueSweetalert2)

// 將“千分號”設定為全域屬性
app.config.globalProperties.$filters = { currency, date }

// 註冊 vee-validate 三個全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
