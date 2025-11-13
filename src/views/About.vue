<script setup>

</script>

<template>
  <main class="about-page">
    <section class="about-container">
      <h2>About Motoro</h2>
      <p class="intro">
        Welcome to <strong>Motoro</strong> — your trusted platform for finding and selling second-hand cars.
        We make car trading simple, transparent, and accessible to everyone.
      </p>

      <div class="about-grid">
        <div class="about-section">
          <h3>Our Mission</h3>
          <p>
            Our mission is to help people find the right car without the hassle. Whether you're buying or selling,
            Motoro connects car enthusiasts, families, and professionals through a safe and efficient marketplace.
          </p>
        </div>

        <div class="about-section">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔️ Verified listings from trusted sellers</li>
            <li>✔️ Easy-to-use interface with advanced filters</li>
            <li>✔️ Transparent pricing and honest details</li>
            <li>✔️ Friendly support to guide you at every step</li>
          </ul>
        </div>

        <div class="about-section">
          <h3>Our Story</h3>
          <p>
            Founded in 2024, Motoro began as a small project between car enthusiasts who wanted to make buying
            and selling cars easier. Today, we’ve grown into a thriving community where trust and transparency drive every transaction.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  background: var(--off-white);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 3rem 2rem;
}

.about-container {
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
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.about-section h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--dark-blue);
}

.about-section p,
.about-section ul {
  line-height: 1.6;
  color: #444;
}

ul {
  list-style: none;
  padding: 0;
}

li::before {
  content: "•";
  color: var(--grayish-blue);
  margin-right: 0.5rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
