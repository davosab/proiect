<script setup></script>

<template>
  <footer>
    <p>
      © {{ new Date().getFullYear() }} Motoro. All rights reserved. |
      <RouterLink to="/faqs">FAQ's</RouterLink> |
      <RouterLink to="/terms">Terms & Conditions</RouterLink>
    </p>
    <br />
    <p>
      <RouterLink to="/add-listing">Add Listing</RouterLink> |
      <RouterLink to="/contact">Contact us</RouterLink> |
      <RouterLink to="/how-it-works">How it works</RouterLink> |
      <RouterLink to="/about">About us</RouterLink>
    </p>
  </footer>
</template>

<style>
footer {
  padding: 3rem 5rem;
  background: var(--dark-blue);
  color: var(--off-white);
}
</style>
