<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <div>
    <RouterLink to="/listings">
      <img class="logo" src="../assets/logo-gray.png" alt="Motoro" />
    </RouterLink>
  </div>
</template>

<style scoped>
.logo {
  display: inline-block;
  max-height: 3rem;
}
</style>
