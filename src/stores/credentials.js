import { defineStore } from "pinia";

export const useCredentialsStore = defineStore("credentials", {
  state: () => ({
    email: "davidsabau72@gmail.com",
    password: "1234"
  }), 

  actions: {
    isValid(email, password) {
      return email == this.email && password == this.password
    }
  }
});