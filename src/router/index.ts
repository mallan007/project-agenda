import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "add" */ '../views/AddPage.vue')
  },
  {
    path: '/details',
    name: 'details.show',
    component: () => import(/* webpackChunkName: "details" */ '../views/DetailsPage.vue')
  },
  {
    path: '/edit/?:id',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit:id" */ '../views/EditPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router