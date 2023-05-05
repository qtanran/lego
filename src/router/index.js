import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/template/:id',
    name: 'template',
    component: () => import('../views/TemplateDetail.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
