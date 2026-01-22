<script setup>
defineProps(["faq"])
</script>

<template>
  <h3>{{ faq.q }}</h3>
  <p>{{ faq.a }}</p>
</template>

<style>
h3 {
  font-weight: bold;
}
</style>
