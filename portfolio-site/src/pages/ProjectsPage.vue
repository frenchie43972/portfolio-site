<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const { t, tm } = useI18n()

const projects = computed(() => {
  const fullList = tm('projects.projectsList')
  return Array.isArray(fullList) ? fullList : []
})
</script>

<template>
  <section class="projects-section">
    <h1>{{ t('projects.intro.heading') }}</h1>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.link"
      />
    </div>
  </section>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
}
.projects-section {
  max-width: 1100px;
  padding: 2rem 1rem;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style>
