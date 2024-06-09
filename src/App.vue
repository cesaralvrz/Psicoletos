<template>
  <the-nav />
  <div class="max-w-screen-xl mx-auto p-8 text-center">
    <the-hero />
    <services-section />
    <about-me-section />
    <contact-section />
  </div>
  <the-footer />
</template>

<script setup>
import TheNav from "./components/TheNav.vue"
import TheHero from "./components/TheHero.vue"
import ServicesSection from "./components/ServicesSection.vue"
import AboutMeSection from "./components/AboutMeSection.vue"
import ContactSection from "./components/ContactSection.vue"
import TheFooter from "./components/TheFooter.vue"
</script>
