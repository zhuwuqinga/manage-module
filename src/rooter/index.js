import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Index.vue'),
        meta: {
            title: "首页",
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router