import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/auth/login/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/auth/home/home.vue')
    },
    
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/auth/register/register.vue')
    }
  ]
})

export default router
