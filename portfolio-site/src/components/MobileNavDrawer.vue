<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { watch, ref, onMounted, onBeforeUnmount } from 'vue'

const drawer = ref(null)
const route = useRoute()

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
})

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    props.onClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

// Close drawer in route change
watch(
  () => route.fullPath,
  () => {
    props.onClose()
  },
)
</script>

<template>
  <transition name="slide">
    <div class="drawer-container" v-if="isOpen">
      <div class="backdrop" @click="props.onClose"></div>
      <aside
        class="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        ref="drawer"
      >
        <nav class="mobile-nav">
          <LanguageToggle />

          <ul class="mobile-nav-links" aria-label="Navbar Mobile Navigation">
            <li>
              <RouterLink :to="{ name: 'services', params: { locale: $route.params.locale } }">
                {{ $t('common.nav.services') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'projects', params: { locale: $route.params.locale } }">
                {{ $t('common.nav.projects') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'about', params: { locale: $route.params.locale } }">
                {{ $t('common.nav.about') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'contact', params: { locale: $route.params.locale } }">
                {{ $t('common.nav.contact') }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </transition>
</template>

<style scoped>
.drawer-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2000;
  display: flex;
}

.backdrop {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
}

.mobile-drawer {
  width: 75%;
  height: 100%;
  background: #fbf3d5;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  padding: 2rem;
}

.mobile-nav ul {
  padding: 0;
}

.mobile-nav li {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-links a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

.mobile-nav-links a:hover {
  font-weight: bolder;
  color: green;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
