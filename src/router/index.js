import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Listings from '../views/Listings.vue';
import ListingDetails from "@/views/ListingDetails.vue";
import FAQs from "@/views/FAQs.vue";
import Terms from "@/views/Terms.vue";
import SignUp from "@/views/SignUp.vue";
import LogIn from "@/views/LogIn.vue";
import Profile from "@/views/Profile.vue";
import AddListing from "@/views/AddListing.vue";
import MyListings from "@/views/MyListings.vue";
import EditListing from "@/views/EditListing.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: Home}, 
    {path: "/listings", component: Listings},
    {path: "/listing-details/:id", component: ListingDetails, props: true},
    {path: "/faqs", component: FAQs},
    {path: "/terms", component: Terms},
    {path: "/sign-up", component: SignUp},
    {path: "/log-in", component: LogIn},
    {path: "/profile", component: Profile},
    {path: "/add-listing", component: AddListing},
    {path: "/my-listings", component: MyListings},
    {path: "/edit-listing", component: EditListing},
  ]
})

export const goToDetails = id => {
  router.push(`/listing-details/${id}`)
}
