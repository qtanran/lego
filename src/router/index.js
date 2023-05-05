import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [
      { path: '', name: 'home', component: () => import('../views/Home.vue') },
      {
        path: '/template/:id',
        name: 'template',
        component: () => import('../views/TemplateDetail.vue')
      }
    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Editor.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
