<script setup>
import { ref } from 'vue';
import ListingsCard from "./ListingsCard.vue"

const listings = ref([
  {title: "Audi A5", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"},
  {title: "Audi Q7", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"},
  {title: "BMW X5", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"},
  {title: "Volvo XC90", fuel: "diesel", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"},
  {title: "Volkswagen Passat", fuel: "diesel", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"},
  {title: "Subaru Impreza WRX", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: "$25,000"},
  {title: "Toyota Hilux", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"},
  {title: "Mitsubishi Lancer", fuel: "diesel", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"},
  {title: "Ford Mondeo", fuel: "diesel", year: 2015, km: "90,000km", chasis: "coupe", price: "$32,000"}
]);

</script>

<template>
<div class="grid">
  <ListingsCard v-for="(car, index) in listings" :car="car" :key="index"/>
</div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 2rem;
  flex: 1;
  max-width: min(100vw - 280px, 1000px);
}
</style>
