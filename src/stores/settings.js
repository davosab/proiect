import { defineStore } from "pinia"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    currencies: ["USD", "CAD", "RON", "EUR"],
    currency: "USD",
    language: "en"
  }),

  getters: {
    getOtherCurrencies() {
      return this.currencies.filter(c => c != this.currency)
    }
  },

  actions: {
    setCurrency(newCurrency) {
      this.currency = newCurrency;
    },
    setLanguage(newLanguage) {
      this.language = newLanguage;
    }
  }

})
