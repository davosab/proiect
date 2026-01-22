<script setup>
import Navbar from "./components/Navbar.vue"
import { RouterView, useRoute } from "vue-router"
import Footer from "./components/Footer.vue"

const route = useRoute()
</script>

<template>
  <div class="main-app-content">
    <div>
      <div v-if="route.path === '/sign-up'"></div>
      <div v-else-if="route.path === '/log-in'"></div>
      <Navbar v-else />
    </div>
    <div class="main-container">
      <RouterView />
    </div>
    <div>
      <div v-if="route.path === '/sign-up'"></div>
      <div v-else-if="route.path === '/log-in'"></div>
      <Footer v-else />
    </div>
  </div>
</template>

<style>
@import "tailwindcss";

:root {
  --red: #d90c00ff;
  /* --dark-blue: #1c2541ff; */
  --dark-blue: rgb(36, 43, 64);
  /* --grayish-blue: #3a506bff; */
  --grayish-blue: #3c5069;
  --light-blue: #bedeecff;
  /* --off-white: #e9f9ffff; */
  --off-white: rgb(242, 251, 254);

  font-size: 16px;
}

*,
*::before,
*::after {
  line-height: 1;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.main-app-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1 1 auto;
}
</style>
