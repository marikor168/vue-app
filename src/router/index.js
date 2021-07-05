import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/spec',
    name: 'spec',
    component: () => import(/* webpackChunkName: "spec" */ '../views/Spec.vue')
  },
  {
    path: '/*',
    name: 'unknown',
    component: () => import(/* webpackChunkName: "unknown" */ '../views/Unknown.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
