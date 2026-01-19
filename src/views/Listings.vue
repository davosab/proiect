<script setup>
import ListingsGrid from "../components/ListingsGrid.vue"
import { ref, computed } from "vue";
import { listings } from "@/listings";

const selectedColour = ref("");

const filteredList = computed(() => {
  if (selectedColour.value === "") return listings.value;

  return listings.value.filter(car => car.colour === selectedColour.value)
      
});

</script>

<template>
  <main>
    <aside class="filters">
      <label>
        Select color:
        <select v-model="selectedColour">
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="brown">Brown</option>
        </select>
      </label>
    </aside>

    <ListingsGrid :list="filteredList"/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  background: var(--off-white);
}

.filters {
  width: 280px;
  height: 400px;
  background: rgb(180, 180, 180);
  padding: 1.5rem 2rem;
}

.filters>* {
  background: rgb(203, 203, 203);
  padding: 0.5em;
  border-radius: 0.2em;
}
</style>