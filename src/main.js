import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import {createBootstrap} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import App from './App.vue'
import LoginView from "@/components/authenticate/LoginView.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/login', component: LoginView}
    ]
});
const app = createApp(App).use(createBootstrap()).use(router).mount('#app')

