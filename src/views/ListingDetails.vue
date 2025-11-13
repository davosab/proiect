<script setup>
import { listings as refListings } from '@/listings';
const props = defineProps(["id"]);
const listings = refListings.value;
const car = listings.find(car => car.id == props.id);

</script>

<template>
  <div class="hero">
    <div class="main">
      <div class="carousel"></div>
      <div class="info-card">
        <h2>{{ car.title }}</h2>
        <p>Used - {{ car.year }}</p>
        <p class="price">
          {{ car.price }}
          <span class="currency">USD</span>
        </p>
        <button class="compare">Add to compare</button>
        <div class="contact-btns">
          <button>Message</button>
          <button>Show tel. number</button>
        </div>
      </div>
    </div>
  </div>

  <section class="description">
    <h3>Description</h3>
    <p class="description">
      Well-maintained car in great condition for its age. <br><br> 
      Regularly serviced and cared for, both inside and out. <br><br>
      Runs smoothly with no major issues, and everything works as it should. Clean interior, comfortable to drive, and reliable for everyday use. <br><br>
      Ideal for someone looking for a dependable car without the new price tag.
    </p>
    <p>Your listing? Edit <RouterLink to="/edit-listing">HERE</RouterLink></p>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  background: var(--off-white);
}

.main {
  display: flex;
  background: white;
}

.carousel {
  background: gray;
  width: min(600px, 60vw);
  aspect-ratio: 100 / 60;
}

.info-card {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.price {
  margin-block: auto;
  font-size: 1.25rem;
}
.currency {
  font-size: 0.8rem;
}
.compare {
  font-size: 0.8rem;
}
.contact-btns {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
}
section.description {
  padding: 3rem 4rem;  
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
h3 {
  font-size: 1.25rem;
  font-weight: bold;
}
button {
  background: gray;
  padding: 0.5em 1em;
}
</style>
