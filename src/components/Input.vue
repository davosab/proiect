<script setup>
defineProps(["field"])
</script>

<template>
  <div class="input-container">
    <label for="">{{ field }}</label>
    <input type="text" :id="field" />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
input {
  background: white;
  padding: 0.5em 1em;
}
input:focus {
  outline: 0;
}
</style>
