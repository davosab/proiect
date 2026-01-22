<script setup>
import Button from "./Button.vue"
import { ref } from "vue"
import { computed } from "vue"
import { useListingsStore } from "../stores/listings"
import { useShippingStore } from "@/stores/shipping"
import { useSettingsStore } from "@/stores/settings"

const listingsStore = useListingsStore()
const shippingStore = useShippingStore()
const settingsStore = useSettingsStore()

const { car } = defineProps(["car"])
const showNumber = ref(false)

const finalPrice = computed(() => {
  let price = car.price
  if (car.country != "romania") {
    let shippingTax = shippingStore.countryTaxes[car.country]
    price += shippingTax
    console.log(car.title, shippingTax)
  }
  return price
})
</script>

<template>
  <div v-if="car" class="main">
    <div class="carousel"></div>
    <div class="info-card">
      <div @click="listingsStore.toggleSaved(car.id)" class="save">
        {{ car.saved ? "❤️ saved" : "🤍 save" }}
      </div>
      <h2>{{ car.title }}</h2>
      <p>Used - {{ car.year }}</p>
      <p class="price">
        ${{ car.price.toLocaleString() }}
        <span class="currency">{{ settingsStore.currency }}</span>
        <span class="shipping-note" v-if="car.country != 'romania'">
          + shipping = ${{ finalPrice }}</span
        >
      </p>
      <RouterLink to="/seller-listings">
        <Button text="More from seller" class="btn-small" />
      </RouterLink>
      <RouterLink to="/compare">
        <Button text="Add to compare" class="btn-small" />
      </RouterLink>
      <div class="contact-btns">
        <Button text="Message" />
        <Button
          @click="showNumber = true"
          :text="showNumber ? '0772 068 318' : 'Show tel. number'"
        />
      </div>
    </div>
  </div>
  <div v-else>Loading car...</div>
</template>

<style scoped>
.main {
  display: flex;
  background: white;
}

.carousel {
  background: gray;
  width: min(600px, 60vw);
  aspect-ratio: 100 / 60;
}

.info-card {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 300px;
}

.save {
  cursor: pointer;
}

.price {
  margin-block: auto;
  font-size: 1.25rem;
}

.currency {
  font-size: 0.8rem;
}

.shipping-note {
  font-size: 0.6em;
}

.btn-small {
  font-size: 0.8rem;
}

.contact-btns {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
