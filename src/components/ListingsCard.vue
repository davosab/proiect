<script setup>
defineProps(["car"]);
const emit = defineEmits(["click"]);
</script>

<template>
<div class="card" @click="$emit('click', car.id)">
  <div class="image"></div>
  <p class="when">Posted 23 hours ago</p>
  <h4>{{ car.title }}</h4>
  <p class="info">{{ car.year }} | {{ car.fuel }} | {{ car.km }} | {{ car.chasis }}</p>
  <p class="price">{{ car.price }}</p>
</div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.25rem;
  background: white;
  cursor: pointer;
}
.image {
  min-height: 60px;
  aspect-ratio: 100 / 60;
  background: gray;
}
.when, .info {
  font-size: 0.75rem;
}
.price {
  font-size: 1.5rem;
  margin: 1rem;
}
</style>
