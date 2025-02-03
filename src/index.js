import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/components/authenticate/LoginView.vue";

const routes = [
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router