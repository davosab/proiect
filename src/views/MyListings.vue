<script setup>
import ListingsGrid from "../components/ListingsGrid.vue"
</script>

<template>
  <div class="header">
    <h1 class="title">My Listings</h1>
  </div>

  <div class="tabs">
    <RouterLink to="/my-listings" class="tab-button">Listings</RouterLink>
    <button class="tab-button">Messages</button>
    <RouterLink to="/profile" class="tab-button ">Profile</RouterLink>
  </div>
  <main>
    <aside class="filters"></aside>
    <ListingsGrid />
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
.header {
  background-color: #e0e0e0;
  padding: 20px 30px;
  border-bottom: 1px solid #ccc;
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