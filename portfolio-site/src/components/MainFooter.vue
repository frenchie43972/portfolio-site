<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'

const facebook = faSquareFacebook
const github = faSquareGithub
const instagram = faSquareInstagram
</script>

<template>
  <footer class="main-footer">
    <div class="brand">
      <RouterLink :to="{ name: 'home', params: { locale: $route.params.locale } }">
        Kris French
      </RouterLink>
    </div>

    <small class="copyright"> &copy; Kris French {{ new Date().getFullYear() }} </small>

    <div class="footer-social">
      <div class="fa-icon">
        <a
          href="https://www.facebook.com/kristopher.french.9/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <FontAwesomeIcon :icon="facebook" />
        </a>
      </div>
      <div class="fa-icon">
        <a
          href="https://github.com/frenchie43972"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <FontAwesomeIcon :icon="github" />
        </a>
      </div>
      <div class="fa-icon">
        <a
          href="https://www.instagram.com/frenchie43971/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <FontAwesomeIcon :icon="instagram" />
        </a>
      </div>
    </div>

    <ul class="nav-links" aria-label="Footer Navigation">
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
  </footer>
</template>

<style scoped>
.main-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 125px;
  padding: 0.5rem 1rem;
  background-color: #cadcae;
  box-sizing: border-box;
}

.brand a {
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
}

.footer-social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  cursor: pointer;
}

.fa-icon {
  font-size: 1.75rem;
}

.fa-icon:hover {
  color: green;
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
</style>
