<script setup>

</script>

<template>
  <main class="thank-page">
    <section class="thank-container">
      <h2>Thank You!</h2>
      <p>
        Your message has been successfully sent.  
        We appreciate you taking the time to reach out, and we’ll be in touch with you shortly.
      </p>
      <RouterLink to="/" class="back-btn">Return to Home</RouterLink>
    </section>
  </main>
</template>



<style scoped>
.thank-page {
  background: var(--off-white);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.thank-container {
  background: white;
  padding: 3rem 4rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 600px;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  color: var(--dark-blue);
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.back-btn {
  background: var(--grayish-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;
}

.back-btn:hover {
  background: var(--dark-blue);
}
</style>
