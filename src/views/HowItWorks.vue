<script setup>

</script>

<template>
  <main class="how-page">
    <section class="how-container">
      <h2>How It Works</h2>
      <p class="intro">
        Whether you're buying or selling a car, Motoro makes it fast, transparent, and easy.  
        Here’s a step-by-step look at how our platform works.
      </p>

      <div class="steps">
        <div class="step">
          <span class="step-number">1</span>
          <h3>Create Your Account</h3>
          <p>
            Sign up for free in just a few clicks. Your account lets you manage listings, track favorites, and message other users securely.
          </p>
        </div>

        <div class="step">
          <span class="step-number">2</span>
          <h3>List or Browse Cars</h3>
          <p>
            Selling? Upload photos, add car details, and set your price.  
            Buying? Browse thousands of verified listings with powerful filters to find your perfect match.
          </p>
        </div>

        <div class="step">
          <span class="step-number">3</span>
          <h3>Connect with Buyers & Sellers</h3>
          <p>
            Message directly through our secure chat system. We make sure both parties can communicate safely and conveniently.
          </p>
        </div>

        <div class="step">
          <span class="step-number">4</span>
          <h3>Seal the Deal</h3>
          <p>
            Once you’ve agreed on terms, finalize your transaction in person.  
            Motoro helps ensure transparency by verifying user profiles and listings.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.how-page {
  background: var(--off-white);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 3rem 2rem;
}

.how-container {
  width: min(900px, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.intro {
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 700px;
}

.steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
}

.step-number {
  position: absolute;
  top: -1rem;
  left: -1rem;
  background: var(--grayish-blue);
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.step h3 {
  margin-bottom: 0.5rem;
  color: var(--dark-blue);
}

.step p {
  color: #444;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .steps {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
