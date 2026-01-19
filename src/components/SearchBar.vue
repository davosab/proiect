<script setup>

</script>

<template>
<div class="searchbar">
  <input type="text" />
  <RouterLink class="btn" to="/listings">Search</RouterLink>
</div>
</template>

<style scoped>
.searchbar {
  border: 1px solid black;
  display: flex;
  background: white;
  justify-content: space-between;
  margin-inline: 2rem;
}
input {
  border-radius: 0;
  border: 0;
  padding-inline: 1rem;
}
input:focus {
  outline: 0;
}
.btn {
  border-radius: 0;
  border: 0;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
  background: lightgray;
}
</style>
