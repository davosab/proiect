<script setup>
import Header from '@/components/Header.vue';
import MenuTabs from '@/components/MenuTabs.vue';
</script>

<template>
<Header title="Compare" />
<MenuTabs />
<main>
  You should buy whichever car you like, You do you, no need to compare anything.
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
