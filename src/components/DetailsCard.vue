<script setup>
import Button from './Button.vue';

defineProps(["car"]);
</script>

<template>
  <div class="main">
    <div class="carousel"></div>
    <div class="info-card">
      <h2>{{ car.title }}</h2>
      <p>Used - {{ car.year }}</p>
      <p class="price">
        {{ car.price }}
        <span class="currency">USD</span>
      </p>
      <RouterLink to="/seller-listings">
        <Button text="More from seller" class="btn-small" />
      </RouterLink>
      <Button text="Add to compare" class="btn-small" />
      <div class="contact-btns">
        <Button text="Message" />
        <Button text="Show tel. number" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  background: white;
}

.carousel {
  background: gray;
  width: min(600px, 60vw);
  aspect-ratio: 100 / 60;
}

.info-card {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price {
  margin-block: auto;
  font-size: 1.25rem;
}

.currency {
  font-size: 0.8rem;
}

.btn-small {
  font-size: 0.8rem;
}

.contact-btns {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
