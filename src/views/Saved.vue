<script setup>
import Header from '@/components/Header.vue';
import MenuTabs from '@/components/MenuTabs.vue';
import ListingsCard from '@/components/ListingsCard.vue';
import { savedListings } from '@/listings';
</script>

<template>
<Header title="Saved Listings" />
<MenuTabs />
  <div class="bg">
    <ListingsCard v-for="listing in savedListings" :car="listing" :key="listing.id"/>
  </div>
</template>

<style scoped>
.bg {
  background: var(--off-white);
}
</style>
