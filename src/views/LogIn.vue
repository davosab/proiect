<script setup>
import H2 from '@/components/H2.vue';
import Input from '@/components/Input.vue';
</script>

<template>
<main>
  <div class="form">
    <H2 title="Log in" />
    <Input field="Email" />
    <Input field="Password" />
    <button>Log in</button>
    <span>Dont have an account? <RouterLink to="/sign-up">Sign up</RouterLink></span>
  </div>
  <div class="image"></div>
</main>
</template>

<style scoped>
main {
  background: var(--off-white);
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.form {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.image {
  background: gray;
}
button {
  background: gray;
  padding: 1em;
}
</style>
