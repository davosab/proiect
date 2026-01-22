<script setup>
import H2 from "@/components/H2.vue"
import { ref } from "vue"
import { useCredentialsStore } from "@/stores/credentials"

const credStore = useCredentialsStore()

const password = ref("")
const confirmedPassword = ref("")
</script>

<template>
  <main>
    <form
      @submit.prevent="
        () => {
          if (password == confirmedPassword) credStore.resetPassword(password)
          console.log(credStore.password)
        }
      "
      class="form"
    >
      <H2 title="Reset Password" />
      <div class="input-container">
        <label for="password">Password</label>
        <input v-model="password" type="text" id="password" />
      </div>
      <div class="input-container">
        <label for="confirmed-password">Confirm password</label>
        <input v-model="confirmedPassword" type="text" id="confirmed-password" />
      </div>
      <button type="submit">Reset</button>
      <span>Remember your password? <RouterLink to="/log-in">Log in</RouterLink></span>
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
