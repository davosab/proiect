<script setup>
import Hero from "@/components/Hero.vue"
import { useShippingStore } from "@/stores/shipping"

const shippingStore = useShippingStore()
</script>

<template>
  <Hero />
  <div>
    <p style="padding: 2rem">
      We bring cars from
      <span v-for="(country, index) in shippingStore.countriesWithCars">
        <span class="country">{{ country }}</span>
        <span v-if="index < shippingStore.countriesWithCars.length - 1">, </span>
      </span>
    </p>
  </div>
</template>

<style></style>
