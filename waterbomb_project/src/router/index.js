// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import login from '@/components/login.vue';
import main from '@/components/main.vue';
import mypage from '@/components/mypage.vue';
import myticket from '@/components/myticket.vue';
import payment from '@/components/payment.vue';
import payment_success from '@/components/payment_success.vue';
import ticket_selection from '@/components/ticket_selection.vue';

const routes = [
    { path: '/', component: main },
    { path: '/login', component: login },
    { path: '/mypage', component: mypage },
    { path: '/myticket', component: myticket },
    { path: '/payment', component: payment },
    { path: '/payment_success', component: payment_success },
    { path: '/ticket_selection', component: ticket_selection }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
