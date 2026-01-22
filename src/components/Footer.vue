<script setup>
import { computed } from "vue"
import { useSettingsStore } from "@/stores/settings"
const store = useSettingsStore()
const otherCurrencies = computed(() => store.getOtherCurrencies)
</script>

<template>
  <footer>
    <p>
      © {{ new Date().getFullYear() }} Motoro. All rights reserved. |
      <RouterLink to="/faqs">FAQ's</RouterLink> |
      <RouterLink to="/terms">Terms & Conditions</RouterLink>
    </p>
    <br />
    <p>
      <RouterLink to="/add-listing">Add Listing</RouterLink> |
      <RouterLink to="/contact">Contact us</RouterLink> |
      <RouterLink to="/how-it-works">How it works</RouterLink> |
      <RouterLink to="/about">About us</RouterLink> |
      <label>
        Currency:
        <select v-model="store.currency">
          <option v-for="c in store.currencies" :key="c" :value="c">
            {{ c }}
          </option>
        </select>
      </label>
    </p>
  </footer>
</template>

<style>
footer {
  padding: 3rem 5rem;
  background: var(--dark-blue);
  color: var(--off-white);
}
option {
  color: rgb(21, 17, 37);
}
</style>
