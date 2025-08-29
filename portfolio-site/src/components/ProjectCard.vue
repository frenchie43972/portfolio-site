<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  tags: {
    type: Array,
    default: () => [],
  },
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
      <div class="project-tags">
        <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <a :href="link" target="_blank" rel="noopener noreferrer" class="view-details">
        {{ $t('projects.projectCard.viewDetails') }}
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
  cursor: pointer;
  transition:
    trasform 0.2s ease,
    box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  padding: 1rem;
  text-align: left;
}

.project-tags {
  margin: 0.5rem 0;
}

.tag {
  display: inline-block;
  background: #cadcae;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 0.5rem;
}

.view-details {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  color: green;
  font-weight: bold;
}
</style>
