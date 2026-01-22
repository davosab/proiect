import { defineStore } from "pinia"

export const useShippingStore = defineStore("ship", {
  state: () => ({
    countryTaxes: {
      japan: 3000,
      usa: 3500,
      austria: 500
    }
  })
})
