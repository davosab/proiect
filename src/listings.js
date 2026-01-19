import { ref, computed } from "vue";

export const listings = ref([
  { id: 1, colour: "green", title: "Audi A5", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: 28000, saved: false },
  { id: 2, colour: "black", title: "Audi Q7", fuel: "petrol", year: 2015, km: "112,000km", chasis: "SUV", price: 32000, saved: true },
  { id: 3, colour: "black", title: "BMW X5", fuel: "petrol", year: 2015, km: "82,000km", chasis: "SUV", price: 40000, saved: false },
  { id: 4, colour: "blue", title: "Volvo XC90", fuel: "diesel", year: 2015, km: "90,000km", chasis: "coupe", price: 21500, saved: false },
  { id: 5, colour: "red", title: "Volkswagen Passat", fuel: "diesel", year: 2015, km: "90,000km", chasis: "sedan", price: 8990, saved: true },
  { id: 6, colour: "brown", title: "Subaru Impreza WRX", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: 25000, saved: true },
  { id: 7, colour: "green", title: "Toyota Hilux", fuel: "petrol", year: 2015, km: "90,000km", chasis: "coupe", price: 24800, saved: false },
  { id: 8, colour: "black", title: "Mitsubishi Lancer", fuel: "diesel", year: 2015, km: "90,000km", chasis: "coupe", price: 32000, saved: false },
  { id: 9, colour: "red", title: "Ford Mondeo", fuel: "diesel", year: 2015, km: "130,000km", chasis: "coupe", price: 7750, saved: false }
]);

export const savedListings = computed(() => {
  return listings.value.filter(listing => listing.saved);
})