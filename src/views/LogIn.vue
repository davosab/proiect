<script setup>
import H2 from "@/components/H2.vue"
import { ref } from "vue"
import { useCredentialsStore } from "@/stores/credentials"
import { useLoggedStatus } from "@/stores/loggedStatus"
import { useRouter } from "vue-router"

const store = useCredentialsStore()
const loggedStatus = useLoggedStatus()
const router = useRouter()
const email = ref("")
const password = ref("")

const handleLogin = () => {
  if (store.isValid(email.value, password.value)) {
    router.push("/add-listing")
    loggedStatus.loggedIn = true
  }
  return
}
</script>

<template>
  <main>
    <form @submit.prevent="handleLogin" class="form">
      <H2 title="Log in" />
      <div class="input-container">
        <label for="email">Email</label>
        <input v-model="email" type="text" id="email" />
      </div>
      <div class="input-container">
        <label for="password">Password</label>
        <input v-model="password" type="text" id="password" />
      </div>
      <button type="submit">Log in</button>
      <span>Dont have an account? <RouterLink to="/sign-up">Sign up</RouterLink></span>
    </form>
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
  cursor: pointer;
}
button:hover {
  background: rgb(155, 154, 154);
}
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
input {
  background: white;
  padding: 0.5em 1em;
}
input:focus {
  outline: 0;
}
</style>
