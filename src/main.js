import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import {createBootstrap} from 'bootstrap-vue-next'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'
import LoginView from "@/components/authenticate/LoginView.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import RegisterView from "@/components/authenticate/RegisterView.vue";
import CrudView from "@/components/crud/CrudView.vue";
import PublicPage from "@/components/PublicPage.vue";
import PrivatePage from "@/components/PrivatePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/public', component: PublicPage},
        {path: '/private', component: PrivatePage},
        {path: '/login', component: LoginView},
        {path: '/register', component: RegisterView},
        {path: '/crud', component: CrudView}

    ]
});
const app = createApp(App).use(createBootstrap()).use(router).mount('#app')

