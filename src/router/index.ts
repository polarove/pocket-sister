import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
const routes = [
  {
    path: '/pocket-sister',
    name: 'home',
    component: () => import('@view/home/home.vue'),
  },
  {
    path: '/pocket-sister/about',
    name: 'about',
    component: () => import('@view/about/about.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((_) => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
