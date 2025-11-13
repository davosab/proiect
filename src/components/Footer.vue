<script setup>

</script>

<template>
<footer>
  <p>© {{ new Date().getFullYear() }} Motoro. All rights reserved. | <RouterLink to="/faqs">FAQ's</RouterLink> | <RouterLink to="/terms">Terms & Conditions</RouterLink></p>
  <p>
    <RouterLink to="add-listing">Add Listing</RouterLink>
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
