import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue'
import LoginView from "@/components/authenticate/LoginView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: LoginView}
    ]
});
const app = createApp(App).use(router).mount('#app')

