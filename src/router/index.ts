// Composables

// history mode
// import { createRouter, createWebHistory } from 'vue-router'
// hash mode for github page
import { createRouter, createWebHashHistory } from 'vue-router'
import ManageLayout from '@/layouts/default/Intro.vue'
const routes = [
  {
    path: '',
    name:'Home',
    component: ManageLayout,
    children:[
      {
        path: '',
        name: 'Intro',
        component: () => import(/* webpackChunkName: "intro" */'@/views/Home.vue'),
      },
    ]
  },
  {
    path: '/headoffice',
    name:'HeadOffice',
    component: () => import(/* webpackChunkName: "headoffice" */'@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'HeadOfficeHome',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "headoffice" */'@/views/headoffice/Home.vue'),
      },
      {
        path: 'schedule',
        name: 'HeadOfficeSchedule',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "headoffice" */ '@/views/headoffice/Schedule.vue'),
      },
      {
        path: 'quality',
        name: 'HeadOfficeQuality',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "headoffice" */'@/views/headoffice/Quality.vue'),
      },
    ],
  },
  {
    path: '/project',
    name:'Project',
    component: () => import(/* webpackChunkName: "project" */ '@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'ProjectHome',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "project" */ '@/views/project/Home.vue'),
      },
      {
        path: 'quality',
        name: 'ProjectQuality',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "project" */ '@/views/project/Quality.vue'),
      },
      {
        path: 'schedule',
        name: 'ProjectSchedule',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "project" */ '@/views/project/Schedule.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: () => import('@/layouts/default/NotFound.vue'),
  }
]
// History Mode
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// })

// Hash Mode for github page
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
