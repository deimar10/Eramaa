import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Services from './pages/Services.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/services', component: Services, name: 'Services' },
  ],
});

export default router;