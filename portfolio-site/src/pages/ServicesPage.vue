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
  /* margin-top: 2rem 0; */
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
