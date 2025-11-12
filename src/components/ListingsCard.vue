<script setup>
const props = defineProps(["car"]);
const {title, fuel, year, km, chasis, price} = props.car;
</script>

<template>
<div class="card">
  <div class="image"></div>
  <p class="when">Posted 23 hours ago</p>
  <h4>{{ title }}</h4>
  <p class="info">{{ year }} | {{ fuel }} | {{ km }} | {{ chasis }}</p>
  <p class="price">{{ price }}</p>
</div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.25rem;
  background: white;
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
