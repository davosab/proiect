<script setup>
defineProps(["text"]);
</script>

<template>
<button>{{ text }}</button>
</template>

<style scoped>
button {
  background: gray;
  padding: 0.5em 1em;
}
</style>
