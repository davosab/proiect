import { defineStore } from "pinia"

export const useShippingStore = defineStore("ship", {
  state: () => ({
    countryTaxes: {
      japan: 3000,
      usa: 3500,
      austria: 500
    }
  }),

  getters: {
    getTax: (state) => (country) => {
      return state.countryTaxes[country.toLowerCase()] ?? 0
    },

    countriesWithCars: (state) => Object.keys(state.countryTaxes)
  }


})
