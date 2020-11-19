import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/overview'
  },
  {
    path: '/overview',
    component: () => import ('../views/Overview.vue')
  },
  {
    path: '/transactions',
    component: () => import ('../views/Transactions.vue')
  },
  {
    path: '/archived',
    component: () => import ('../views/Transactions.vue')
  },
  {
    path: '/users',
    component: () => import ('../views/Users.vue')
  },
  {
    path: '/users/:id',
    component: () => import ('../views/Overview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
