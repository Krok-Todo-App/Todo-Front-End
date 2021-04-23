import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home")
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import("../views/Dashboard")
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../views/About")
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/Login")
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import("../views/Register")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
