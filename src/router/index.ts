import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
const routes = [
    {
        path: '/page-pocket-sister',
        name: 'home',
        component: () => import('@view/home/home.vue'),
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
