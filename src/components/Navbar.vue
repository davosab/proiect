<script setup>
import Logo from './Logo.vue';
import { fullName } from '@/userProfile';
</script>

<template>

  <nav class="nav">
    <Logo />
    <div class="nav-links-container">
      Welcome {{ fullName }}!
      <RouterLink to="/profile" class="profile"></RouterLink>
      <RouterLink to="/sign-up" class="add-btn">Add new listing</RouterLink>
    </div>
  </nav>

</template>

<style scoped>
.nav {
  display: flex;
  background: var(--grayish-blue);
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}

.nav-links-container {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.profile {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
  background: white;
  border: 1px solid black;
}

.add-btn {
  padding: 0.5em 1em;
  background: gray;
}

:is(.profile, .add-btn):hover {
  cursor: pointer;
}
</style>