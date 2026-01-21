import { defineStore } from "pinia"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    currency: 'USD',
    language: 'en'
  })
})