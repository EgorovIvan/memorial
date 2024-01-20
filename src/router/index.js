import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/pages/LoginPage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import CreateProfilePage from "@/pages/CreateProfilePage.vue";
import accessMiddleware from "@/middleware/accessMiddleware";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '',
    children: [
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
      {
        path: '/create-profile',
        name: 'CreateProfile',
        component: CreateProfilePage,
      }
    ],
    beforeEnter: [
      accessMiddleware,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
