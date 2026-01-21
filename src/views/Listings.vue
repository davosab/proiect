<script setup>
import ListingsGrid from "../components/ListingsGrid.vue"
import { ref, computed, watch } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import { useListingsStore } from "../stores/listings";

const store = useListingsStore();
const selectedColour = ref("");

const filteredList = computed(() => {
  if (selectedColour.value === "") return store.listings;

  return store.listings.filter(car => car.colour === selectedColour.value)

});

const filteredCount = computed(() =>
  filteredList.value.length
);

const filtersJustChanged = ref(false);

watch(selectedColour, (newColour, oldColour, onCleanup) => {
  filtersJustChanged.value = true;
  const disappear = setTimeout(() => filtersJustChanged.value = false, 2000);
  onCleanup(() => clearTimeout(disappear));
});


</script>

<template>
  <main>
    <aside class="filters">
      <div class="filters-container">
        <div class="filter">
          <label>
            Select colour:
            <select v-model="selectedColour">
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="green">Green</option>
              <option value="brown">Brown</option>
              <option value="gold">Gold</option>
            </select>
          </label>
        </div>
      </div>
      <div class="filters-messages">
        <p v-if="filtersJustChanged">Filters applied</p>
        <p>{{ filteredCount }} cars match your filter</p>
      </div>
    </aside>
    <div class="search-and-grid">
      <SearchBar />
      <ListingsGrid :list="filteredList" />
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.filter {
  background: rgb(203, 203, 203);
  padding: 0.5em;
  border-radius: 0.2em;
}

.filters-messages {
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-self: flex-start;
}

.filters-messages>* {
  background: rgb(203, 203, 203);
  padding: 0.2em 0.5em;
}
</style>