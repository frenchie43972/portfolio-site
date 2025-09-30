<script setup>
import { useRoute, useRouter } from 'vue-router'
import BaseButton from './BaseButton.vue'

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

    <BaseButton @click="gotToContactPage">
      {{ $t('home.hero.ctaPrimary') }}
    </BaseButton>
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
</style>
