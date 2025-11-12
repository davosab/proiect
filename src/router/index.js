import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Listings from '../views/Listings.vue';
import ListingDetails from "@/views/ListingDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: Home}, 
    {path: "/listings", component: Listings},
    {path: "/listing-details", component: ListingDetails}
  ]
})

export default router;

