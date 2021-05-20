import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue';
import Newsfeed from '../views/NewsFeed.vue';
import Personal from '../views/Personal.vue';
import Login2 from '../components/Login2.vue';
import Login from '@/components/Login.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
  },
  {
    path: '/newsfeed',
    name: 'Newsfeed',
    component: Newsfeed,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
