<script setup>
import { RouterLink } from 'vue-router'
import LanguageToggle from './LanguageToggle.vue'
</script>

<template>
  <nav class="main-navbar">
    <div class="brand">
      <RouterLink :to="{ name: 'home', params: { locale: $route.params.locale } }">
        Kris French
      </RouterLink>
    </div>

    <LanguageToggle />

    <ul class="nav-links">
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
  z-index: 1000;
  background-color: #cadcae;
  box-sizing: border-box;
  /* box-shadow: 0 6px 6px -1px rgba(0, 0, 0, 0.2); */
  /* transition: background-color 0.3s ease-in-out; */
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
  /* transition: color 0.2s; */
}

.nav-links a:hover {
  font-weight: bolder;
  color: green;
  /* transition: color 0.2s ease-in-out; */
}
</style>
