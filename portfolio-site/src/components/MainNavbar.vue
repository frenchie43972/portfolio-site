<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LanguageToggle from './LanguageToggle.vue'
import MobileNavDrawer from './MobileNavDrawer.vue'

const menuOpen = ref(false)
const bars = faBars

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="main-navbar">
    <div class="brand">
      <RouterLink :to="{ name: 'home', params: { locale: $route.params.locale } }">
        Kris French
      </RouterLink>
    </div>

    <LanguageToggle />

    <div class="hamburger" @click="toggleMenu">
      <FontAwesomeIcon :icon="bars" />
    </div>

    <MobileNavDrawer :isOpen="menuOpen" :onClose="() => (menuOpen = false)" />

    <ul class="nav-links" aria-label="Navbar Navigation">
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
</template>

<style scoped>
.main-navbar {
  position: fixed; /* stays at top */
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0.5rem 1rem;
  z-index: 10;
  background-color: #cadcae;
  box-sizing: border-box;
}

.brand a {
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
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

.hamburger {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>
