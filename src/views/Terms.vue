<script setup>
import H2 from '@/components/H2.vue';

</script>

<template>
  <section>
    <H2 title="Terms & Conditions" />
    <div class="terms-container">
      These Terms & Conditions govern your access to and use of Motoro.
      <br><br>
      By accessing or using our services, you agree to be bound by these Terms. If you do not agree, do not use our services.
      <br><br>
      1) Eligibility
      You must be at least 18 years old (or the age of majority in your jurisdiction) to use our services.
      <br><br>
      2) Use of Service
      You agree to use our services only for lawful purposes and in accordance with these Terms.
      You must not:
      violate any applicable law or regulation
      interfere with or disrupt the security or integrity of our service
      attempt to reverse-engineer, copy, or resell any part of our service without permission
      use our service to distribute harmful or illegal content
      <br><br>
      3) Accounts
      If an account is required, you must provide accurate information and maintain confidentiality of your login credentials. You are responsible for all activity under your account.
      We may suspend or terminate your account at any time for breach of these Terms.
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  background: var(--off-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
}

.terms-container {
  width: min(800px, 85%);
  display: grid;
  gap: 0.5em;
}
</style>
