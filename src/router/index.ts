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
      path: '/solawi',
      name: 'solawi',
      component: SoLaWiView
    },
      {
      path: '/jungpflanzen',
      name: 'jungpflanzen',
      component: JungpflanzenView
    },
      {
      path: '/exkursionen',
      name: 'exkursionen',
      component: ExkursionenView
    },
      {
      path: '/wiesenheu',
      name: 'wiesenheu',
      component: WiesenheuView
    },
       {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
