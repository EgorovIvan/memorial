import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/pages/LoginPage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
