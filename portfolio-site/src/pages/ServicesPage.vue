<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import ServicesCard from '@/components/ServicesCard.vue'

const { t, tm } = useI18n()
const stack = tm('services.techStack.stackList')

const services = computed(() => {
  const fullList = tm('services.servicesList')
  return Array.isArray(fullList) ? fullList : []
})

function getImagePath(filename) {
  return new URL(`../assets/icons/${filename}`, import.meta.url).href
}
</script>

<template>
  <section>
    <h1 class="section-heading">{{ t('services.intro.heading') }}</h1>
  </section>

  <section class="services-section">
    <h2 class="techStack-heading">
      {{ t('services.techStack.heading') }}
    </h2>

    <div class="services-grid">
      <ServicesCard
        v-for="service in services"
        :key="service.id"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
        :link="service.link"
      />
    </div>
    <div class="stack-grid">
      <div class="stack-item" v-for="tech in stack" :key="tech.id">
        <img :src="getImagePath(tech.icon)" :alt="tech.name" class="stack-icon" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

.section-heading {
  font-size: 2.5rem;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.techStack-heading {
  font-size: 1.75rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  margin-top: 0;
}

.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stack-icon {
  width: 180px; /* control size */
  height: 180px; /* keeps consistent square */
  object-fit: contain; /* ensures logos don't distort */
}

@media (max-width: 950px) {
  .stack-grid {
    gap: 0;
  }

  .stack-item {
    flex: 1 1 45%;
  }
}

@media (min-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .stack-grid {
    gap: 0;
  }
  .stack-icon {
    width: 160px;
    height: 160px;
  }
}
</style>
