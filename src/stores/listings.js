import { defineStore } from "pinia"
import { router } from "../router/index.js"

export const useListingsStore = defineStore("listings", {
  state: () => ({
    listings: [
      {
        id: 1,
        colour: "green",
        title: "Audi A5",
        fuel: "petrol",
        year: 2015,
        km: "90,000km",
        chassis: "coupe",
        price: 28000,
        saved: false,
        country: "austria"
      },
      {
        id: 2,
        colour: "black",
        title: "Audi Q7",
        fuel: "petrol",
        year: 2015,
        km: "112,000km",
        chassis: "SUV",
        price: 32000,
        saved: true
      },
      {
        id: 3,
        colour: "black",
        title: "BMW X5",
        fuel: "petrol",
        year: 2015,
        km: "82,000km",
        chassis: "SUV",
        price: 40000,
        saved: false
      },
      {
        id: 4,
        colour: "blue",
        title: "Volvo XC90",
        fuel: "diesel",
        year: 2015,
        km: "90,000km",
        chassis: "coupe",
        price: 21500,
        saved: false
      },
      {
        id: 5,
        colour: "red",
        title: "Volkswagen Passat",
        fuel: "diesel",
        year: 2015,
        km: "90,000km",
        chassis: "sedan",
        price: 8990,
        saved: true
      },
      {
        id: 6,
        colour: "brown",
        title: "Subaru Impreza WRX",
        fuel: "petrol",
        year: 2015,
        km: "90,000km",
        chassis: "coupe",
        price: 25000,
        saved: true,
        country: "japan"
      },
      {
        id: 7,
        colour: "green",
        title: "Toyota Hilux",
        fuel: "petrol",
        year: 2015,
        km: "90,000km",
        chassis: "coupe",
        price: 24800,
        saved: false
      },
      {
        id: 8,
        colour: "black",
        title: "Mitsubishi Lancer",
        fuel: "diesel",
        year: 2015,
        km: "90,000km",
        chassis: "coupe",
        price: 32000,
        saved: false
      },
      {
        id: 9,
        colour: "red",
        title: "Ford Mondeo",
        fuel: "diesel",
        year: 2015,
        km: "130,000km",
        chassis: "coupe",
        price: 7750,
        saved: false,
        country: "usa"
      }
    ],
    myListings: []
  }),

  getters: {
    savedListings() {
      return this.listings.filter(listing => listing.saved)
    }
  },

  actions: {
    toggleSaved(id) {
      const car = this.listings.find(l => l.id == id)
      if (car) car.saved = !car.saved
    },

    addListing(car) {
      this.listings.push(car)
      this.myListings.push(car)
      router.push("/my-listings")
    }
  }
})
