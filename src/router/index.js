import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Listings from '../views/Listings.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: Home}, 
    {path: "/listings", component: Listings}
  ]
})

export default router;

