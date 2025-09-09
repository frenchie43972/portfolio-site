<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
})

function getImagePath(filename) {
  return new URL(`../assets/images/${filename}`, import.meta.url).href
}
</script>

<template>
  <div class="project-card">
    <img :src="getImagePath(props.image)" :alt="props.title" class="project-image" />

    <div class="project-content">
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>
      <a :href="link" target="_blank" rel="noopener noreferrer" class="view-details">
        {{ t('projects.projectCard.viewDetails') }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition:
    trasform 0.2s ease,
    box-shadow 0.2s ease;
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  flex: 1; /* take up all available height */
  display: flex; /* allow internal layout */
  flex-direction: column;
  justify-content: space-between; /* push link to bottom */
  padding: 1rem;
  text-align: left;
}

.view-details {
  align-self: flex-start; /* stays bottom-left */
  margin-top: 1rem;
  text-decoration: none;
  font-size: 0.8rem;
  color: green;
  font-weight: bold;
}
</style>
