<script setup>
import ListingsGrid from "../components/ListingsGrid.vue"
</script>

<template>
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
</style>