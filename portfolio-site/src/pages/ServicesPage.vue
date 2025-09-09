<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const stack = tm('services.techStack.stackList')

function getImagePath(filename) {
  return new URL(`../assets/icons/${filename}`, import.meta.url).href
}
</script>

<template>
  <section>
    <h1>{{ t('services.intro.heading') }}</h1>
  </section>

  <section>
    <div class="stack-grid">
      <div class="stack-item" v-for="tech in stack" :key="tech.id">
        <img :src="getImagePath(tech.icon)" :alt="tech.name" class="stack-icon" />
        <span>{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  margin-top: 2rem;
}

.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stack-icon {
  width: 80px; /* control size */
  height: 80px; /* keeps consistent square */
  object-fit: contain; /* ensures logos don't distort */
}
</style>
