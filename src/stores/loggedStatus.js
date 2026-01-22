import { defineStore } from "pinia"

export const useLoggedStatus = defineStore("loggedStatus", {
  state: () => ({
    loggedIn: false
  })
})
