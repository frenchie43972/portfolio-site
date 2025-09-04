<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
})

const route = useRoute()

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
    <aside v-if="isOpen" class="mobile-drawer">
      <nav class="mobile-nav">
        <LanguageToggle />

        <ul class="nav-links" aria-label="Navbar Mobile Navigation">
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
  </transition>
</template>

<style scoped>
.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  background: #fbf3d5;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  z-index: 2000;
  padding: 2rem;
}

.mobile-nav ul {
  padding: 0;
}

.mobile-nav li {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

.nav-links a:hover {
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
