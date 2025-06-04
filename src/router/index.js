import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../views/DashboardPage.vue'
import RolesPage from '../views/RolesPage.vue'
import UsersPage from '../views/UsersPage.vue'

const routes = [
  { path: '/', component: DashboardPage },
  { path: '/roles', component: RolesPage },
  { path: '/users', component: UsersPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router