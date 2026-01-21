<script setup>
import ListingsGrid from "../components/ListingsGrid.vue"
import Header from "@/components/Header.vue";
import MenuTabs from "@/components/MenuTabs.vue";
import { useListingsStore } from "@/stores/listings";

const store = useListingsStore();
</script>

<template>
  <Header title="My Listings"/>
  <MenuTabs />
  
  <main>
    <aside class="filters"></aside>
    <ListingsGrid :list="store.listings"/>
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
}

.tabs {
  display: flex;
  background-color: #e0e0e0;
  border-bottom: 1px solid #ccc;
}

.tab-button {
  padding: 15px 30px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  position: relative;
}

.tab-button:hover {
  background-color: #d0d0d0;
}
</style>