import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '前台',
    component: () => import('@/views/frontend/FrontView.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('@/views/frontend/HomeView.vue')
      },
      {
        path: 'about', // 關於漢文帝
        name: '關於漢文帝',
        component: () => import('@/views/frontend/AboutView.vue')
      },
      {
        path: 'products', // 產品列表
        name: '產品列表',
        component: () => import('@/views/frontend/ProductsView.vue')
      },
      {
        path: 'product/:id', // 單一產品 :動態的參數
        name: '單一產品',
        component: () => import('@/views/frontend/ProductView.vue')
      },
      {
        path: 'favorite', // 我的最愛
        name: '我的最愛',
        component: () => import('@/views/frontend/FavoriteView.vue')
      },
      {
        path: 'course', // 課程招生
        name: '課程招生',
        component: () => import('@/views/frontend/CourseView.vue')
      },
      {
        path: 'cart', // 購物車
        name: '購物車',
        component: () => import('@/views/frontend/CartView.vue')
      },
      {
        path: 'order/:id',
        name: '結帳',
        component: () => import('../views/frontend/OrderView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'text-navActive', // linkExactActiveClass精準比對link
  // linkActiveClass: 'text-navActive' // linkActiveClass屬於模糊比對link

  scrollBehavior () {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
