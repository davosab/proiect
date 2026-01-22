<script setup>
import H2 from "@/components/H2.vue"
import Input from "@/components/Input.vue"
</script>

<template>
  <main>
    <div class="form">
      <H2 title="Sign up" />
      <Input field="Email" />
      <Input field="Password" />
      <Input field="Confirm password" />
      <button>Sign up</button>
      <span>Already have an account? <RouterLink to="/log-in">Log in</RouterLink></span>
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
