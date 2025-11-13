<script setup>
defineProps(["title"]);
</script>

<template>
<div class="header">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<style scoped>
.header {
  background-color: #e0e0e0;
  padding: 20px 30px;
  border-bottom: 1px solid #ccc;
}
.title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}
</style>
