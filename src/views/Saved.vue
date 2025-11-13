<script setup>
import ListingsGrid from '@/components/ListingsGrid.vue';
import Header from '@/components/Header.vue';
import MenuTabs from '@/components/MenuTabs.vue';
</script>

<template>
<Header title="Saved Listings" />
<MenuTabs />
  <div class="bg">
    <ListingsGrid />
  </div>
</template>

<style scoped>
.bg {
  background: var(--off-white);
}
</style>
