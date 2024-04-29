import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter, createWebHistory } from 'vue-router';
import HomeTab from './components/Home.vue';
import LogIn from './components/Login.vue';
import SignUp from './components/Signup.vue';

const routes = [
    {
        path: '/home',
        component: HomeTab
    },
    {
        path: '/',
        component: LogIn
    },
    {
        path: '/login',
        component: LogIn
    },
    {
        path: '/signup',
        component: SignUp
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
