<script setup>
import SearchBar from './SearchBar.vue';
</script>

<template>
<div class="hero">
  <div class="text">
    <h1>Find your next car!</h1>
    <p>100 happy buyers daily</p>
  </div>
  <SearchBar />
</div>
</template>

<style scoped>
.hero {
  background: var(--light-blue);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
