<script setup>
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
import SpecialFeatures from './components/SpecialFeatures.vue';
</script>

<template>
  <div class="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
    <Navbar />
    <HeroSection />
    <SpecialFeatures />
  </div>
</template>



