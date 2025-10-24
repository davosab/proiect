<script setup>

  const name = "Mariushkuta";

  import {onMounted, onUpdated} from "vue";
  onMounted(() => {
    console.log("onMounted()");
  });

  onUpdated(() => {
    console.log("onUpdated()");
  });

</script>

<template>
  <h1>You did it {{name}}!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  
  <button @click="console.log('Why didn\'t you listen?')">Dont click me</button>
  <br><br>
  
  <input type="text" @change="console.log('input changed')"/>
</template>

<style scoped></style>
