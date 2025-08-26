<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function gotToContactPage() {
  router.push({ name: 'contact', params: { locale: route.params.locale } })
}
</script>

<template>
  <div class="hero-content">
    <h1>{{ $t('home.hero.headline') }}</h1>
    <h2>{{ $t('home.hero.subheadline') }}</h2>

    <button class="cta-button" @click="gotToContactPage">
      {{ $t('home.hero.ctaPrimary') }}
    </button>
  </div>
</template>

<style scoped>
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 120ppx;
  min-height: 60vh;
  background: #f8f8f8;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.hero-content h2 {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.4;
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
