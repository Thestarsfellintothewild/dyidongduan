import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import homede from '../views/Home.vue'
import users from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homede'
  },
  {
    path: '/homede',
    component: homede
  },
  {
    path: '/users',
    component: users
  },
  {
    path: '/login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
