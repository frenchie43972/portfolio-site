<script setup>
import { defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileCode, faTools, faBug, faServer } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  title: String,
  description: String,
  icon: String,
  link: String,
  showButton: { type: Boolean, default: true }, //Allows to toggle the CTS button
})

const route = useRoute()
const router = useRouter()

// Map the FA icons from the JSON file
const iconMap = {
  'fa-file-code': faFileCode,
  'fa-tools': faTools,
  'fa-bug': faBug,
  'fa-server': faServer,
}

function contactRoute() {
  router.push({ name: 'contact', params: { locale: route.params.locale } })
}
</script>

<template>
  <div class="services-card">
    <FontAwesomeIcon :icon="iconMap[props.icon]" class="services-icon" />
    <div class="services-content">
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>
      <button
        v-if="props.showButton"
        class="cta-button"
        @click="contactRoute"
        aria-label="Contact about this service"
      >
        {{ props.link }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.services-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.services-icon {
  font-size: 3rem;
  color: green;
  margin-bottom: 1rem;
}

.services-content {
  flex: 1; /* take up all available height */
  display: flex; /* allow internal layout */
  flex-direction: column;
  justify-content: space-between; /* push link to bottom */
  padding: 1rem;
  text-align: center;
}

.services-content h3 {
  margin-bottom: 1rem;
}

.cta-button {
  padding: 1rem;
  width: 50%;
  align-self: center;
  background-color: #cadcae;
  border-radius: 20px;
  border: #cadcae;
  font-weight: bolder;
  font-size: 1rem;
  margin-top: 1.5rem;
}

.cta-button:hover {
  transform: translateY(-3px);
  filter: brightness(95%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
