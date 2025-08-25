<script setup>
import Hero from '@/components/HeroSection.vue'
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <Hero />
    </section>

    <!-- Intro Section -->
    <section class="intro-section">
      <h2>{{ $t('home.intro.heading') }}</h2>
      <p>{{ $t('home.intro.body') }}</p>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <h2>{{ $t('home.servicesPreview.heading') }}</h2>
      <p>{{ $t('home.servicesPreview.description') }}</p>
    </section>

    <!-- Projects Preview Section -->
    <section class="projects-preview">
      <h2>{{ $t('home.projectsPreview.heading') }}</h2>
      <p>{{ $t('home.projectsPreview.description') }}</p>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 4rem; /* spacing between sections */
  padding: 2rem;
}
</style>
