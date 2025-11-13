<script setup>
import H2 from '@/components/H2.vue';
</script>

<template>
  <section class="w-full bg-off-white flex flex-col items-center px-16 py-12">
    <H2 title="Terms & Conditions" />
    <div class="w-[min(800px,85%)] grid gap-2 text-gray-700 leading-relaxed mt-6">
      <p>
        These Terms & Conditions govern your access to and use of Motoro.
      </p>

      <p>
        By accessing or using our services, you agree to be bound by these Terms. If you do not agree, do not use our services.
      </p>

      <h3 class="font-semibold mt-4">1) Eligibility</h3>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) to use our services.
      </p>

      <h3 class="font-semibold mt-4">2) Use of Service</h3>
      <p>
        You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:
      </p>
      <ul class="list-disc list-inside ml-4">
        <li>Violate any applicable law or regulation</li>
        <li>Interfere with or disrupt the security or integrity of our service</li>
        <li>Attempt to reverse-engineer, copy, or resell any part of our service without permission</li>
        <li>Use our service to distribute harmful or illegal content</li>
      </ul>

      <h3 class="font-semibold mt-4">3) Accounts</h3>
      <p>
        If an account is required, you must provide accurate information and maintain confidentiality of your login credentials. You are responsible for all activity under your account.
        We may suspend or terminate your account at any time for breach of these Terms.
      </p>
    </div>
  </section>
</template>

<style scoped></style>
