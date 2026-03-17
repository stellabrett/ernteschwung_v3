import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('@/views/ImpressumView.vue')
  },
  {
    path: '/vorbestellen',
    name: 'vorbestellen',
    component: () => import('@/views/PreOrderView.vue')
  },
  {
    path: '/vorbestellen/danke',
    name: 'order-success',
    component: () => import('@/views/OrderSuccessView.vue')
  },
  {
    path: '/kontakt/danke',
    name: 'contact-success',
    component: () => import('@/views/ContactSuccessView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // offset für sticky Navbar
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
