<script setup>
import Header from '@/components/Header.vue';
import MenuTabs from '@/components/MenuTabs.vue';
import MessagesCard from '@/components/MessagesCard.vue';
</script>

<template>
<Header title="Messages" />
<MenuTabs />
<main>
  <MessagesCard />
</main>

</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--off-white);
  padding: 2rem;
}
</style>
