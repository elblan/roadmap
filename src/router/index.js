import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kanban',
    name: 'Kanban',
    // route level code-splitting
    // this generates a separate chunk (kanban.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "kanban" */ '../views/Kanban.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
