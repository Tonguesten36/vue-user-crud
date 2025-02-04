import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/components/authenticate/LoginView.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    {
      path: '/',
      name: 'HomeView',
      component: HelloWorld
    },
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