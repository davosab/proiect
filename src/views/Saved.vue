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
    <div class="grid">
    <ListingsCard v-for="listing in savedListings" :car="listing" :key="listing.id"/>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: var(--off-white);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 2rem;
  flex: 1;
  max-width: min(100vw - 280px, 1000px);
}
</style>
