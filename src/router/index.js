import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const CourseList = () => import('../views/CourseList.vue')
import CourseDetails from '../views/CourseDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/courses',
      name: 'CourseList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: CourseList 
    },
    {
      path: '/course/:id',
      name: 'CourseDetails',
      component: CourseDetails,
      props: true
    }
  ],
})

export default router
