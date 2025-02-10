import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/components/authenticate/LoginView.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import RegisterView from "@/components/authenticate/RegisterView.vue";
import CrudView from "@/components/crud/CrudView.vue";
import PublicPage from "@/components/PublicPage.vue";
import PrivatePage from "@/components/PrivatePage.vue";

const routes = [
    {
      path: '/',
      name: 'HomeView',
      component: HelloWorld
    },
    {
      path:'/public',
      name:'PublicView',
      component: PublicPage
    },
    {
        path:'/private',
        name:'PrivateView',
        component: PrivatePage
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView
    },
    {
        path: '/crud',
        name: 'CrudView',
        component: CrudView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router