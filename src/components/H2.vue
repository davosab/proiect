<script setup>
defineProps(["title"])
</script>

<template>
  <h2 class="text-2xl font-bold">{{ title }}</h2>
</template>

<style scoped>
h2 {
  margin: 2em;
}
</style>
