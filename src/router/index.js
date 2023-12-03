import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/pages/LoginPage.vue";
import NewsPage from "@/pages/NewsPage.vue";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
