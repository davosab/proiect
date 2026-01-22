<script setup>
import H2 from "@/components/H2.vue"
import { ref } from "vue"
import { useCredentialsStore } from "@/stores/credentials"

const credStore = useCredentialsStore()

const email = ref("")
const confirmedEmail = ref("")
</script>

<template>
  <main>
    <form
      @submit.prevent="
        () => {
          if (email == confirmedEmail) credStore.changeEmail(email)
          console.log(credStore.email)
        }
      "
      class="form"
    >
      <H2 title="Change Email Address" />
      <div class="input-container">
        <label for="email">Email</label>
        <input v-model="email" type="text" id="email" />
      </div>
      <div class="input-container">
        <label for="confirmed-email">Confirm email</label>
        <input v-model="confirmedEmail" type="text" id="confirmed-email" />
      </div>
      <button type="submit">Get verification code</button>
      <span>Go back to listings here: <RouterLink to="/listings">Listings</RouterLink></span>
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
