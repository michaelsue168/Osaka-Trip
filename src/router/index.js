import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/hotel/1'
    },
    {
      path: '/hotel/:id',
      name: 'hotel',
      component: () => import('../views/HotelView.vue')
      // props: true
    }
  ]
})

export default router
