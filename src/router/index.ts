import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddPage from '../views/AddPage.vue'
import DetailsPage from '../views/DetailsPage.vue'
import EditPage from '../views/EditPage.vue'

const routes = [
  {
    path: '/' || '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/add',
    name: 'add',
    component: AddPage
  },
  {
    path: '/details:id',
    name: 'details',
    component: DetailsPage
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router