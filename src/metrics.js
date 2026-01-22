import { ref, computed } from "vue"

const carSales = ref(83)
const vanSales = ref(12)
const truckSales = ref(2)

export const totalSales = computed(() => {
  return carSales.value + vanSales.value + truckSales.value
})
