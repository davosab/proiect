<script setup>
import { faqs } from '@/faqs';
import Faq from '@/components/Faq.vue';
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
    <div class="faqs-container" v-for="(item, index) in faqs" :key="index">
      <Faq :faq="item" />
      <br>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  background: var(--off-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
}
.faqs-container {
  width: min(800px, 85%);
  display: grid;
  gap: 0.5em;
}
h2 {
  margin: 2em;
}
</style>
