<script setup>
import ListingsCard from "./ListingsCard.vue"
import { goToDetails } from '@/router';

defineProps(["list"]);

</script>

<template>
  <div v-if="list.length > 0" class="grid">
    <ListingsCard @click="goToDetails(car.id)" v-for="(car, index) in list" :car="car" :key="index" />
  </div>
  <div v-else class="no-matches-message">
    No listings match your filters.
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 2rem;
  flex: 1;
  max-width: min(100vw - 280px, 1000px);
}
.no-matches-message {
  padding: 2rem;
}
</style>
