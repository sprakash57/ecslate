import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Beautify',
    component: () => import('@/views/Beautify.vue')
  },
  {
    path: '/Compare',
    name: 'Compare',
    component: () => import('@/views/Compare.vue')
  },
  {
    path: '/Execute',
    name: 'Execute',
    component: () => import('@/views/Execute.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
