import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name:'home',
            component: ()=> import('../Home.vue')
        },
        {
            path: '/aa',
            name:'asyncCom',
            component: ()=> import('../views/AsyncCom.vue')
        },
    ]
})

export default router