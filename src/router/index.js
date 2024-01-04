import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Chartjs from '../views/ChartJS.vue'
import Vuelidate from '../views/Vuelidate.vue'
import SwiperPage from '../views/SwiperPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chart-js',
      name: 'Chartjs',
      component: Chartjs
    },
    {
      path: '/vuelidate',
      name: 'Vuelidate',
      component: Vuelidate
    },
    {
      path: '/swiper-page',
      name: 'SwiperPage',
      component: SwiperPage
    },
    {
      path: '/profile-page',
      name: 'ProfilePage',
      component: ProfilePage
    }
  ]
})

export default router
