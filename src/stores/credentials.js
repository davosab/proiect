import { defineStore } from "pinia"

export const useCredentialsStore = defineStore("credentials", {
  state: () => ({
    email: "davidsabau72@gmail.com",
    password: "1234"
  }),

  getters: {
    isValid(email, password) {
      return email == this.email && password == this.password
    },
  },

  actions: {
    resetPassword(newPassword) {
      this.password = newPassword;
    },

    changeEmail(newEmail) {
      this.email = newEmail;
    }
  }
})
