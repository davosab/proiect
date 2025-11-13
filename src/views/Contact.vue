<script setup>

</script>

<template>
  <main class="contact-page">
    <h2>Contact Us</h2>
    <p>If you have any questions about our listings or services, send us a message below!</p>

    <form class="contact-form">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input id="name" type="text" placeholder="Your name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="you@example.com" required />
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input id="subject" type="text" placeholder="Subject" />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
      </div>
      <RouterLink to="/thank-you">
        <button type="submit">Send Message</button>
      </RouterLink>
    </form>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--off-white);
  padding: 3rem 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 2rem;
  color: #555;
}

.contact-form {
  width: min(500px, 90%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input,
textarea {
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border 0.2s;
}

input:focus,
textarea:focus {
  border-color: var(--grayish-blue);
  outline: none;
}

button {
  background: var(--dark-blue);
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: var(--grayish-blue);
}
</style>
