<script setup>
import Hero from '@/components/HeroSection.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function goToServicesPage() {
  router.push({ name: 'services', params: { locale: route.params.locale } })
}
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

      <button class="cta-button" @click="goToServicesPage">
        {{ $t('common.buttons.learnMore') }}
      </button>
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
  gap: 4rem; /* spacing between sections */
}

.intro-section {
  max-width: 800px;
  margin: 0 auto; /* centers content */
  padding: 3rem 1.5rem; /* breathing room */
  text-align: center;
}

.intro-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.intro-section p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
}

.services-preview {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  text-align: center;
}

.services-preview h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.services-preview p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #444;
  line-height: 1.6;
}

.cta-button {
  padding: 1rem 2rem;
  background-color: #cadcae;
  border-radius: 20px;
  border: #cadcae;
  font-weight: bolder;
  font-size: 1.2rem;
}

.cta-button:hover {
  transform: translateY(-3px);
  filter: brightness(95%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
