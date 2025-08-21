<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function toggleLanguage() {
  const currentLocale = route.params.locale
  // Ternary expression that if currentLocale is en switch to ja else back to en (toggle languages)
  const targetLocale = currentLocale === 'en' ? 'ja' : 'en'

  // Changes the route based on what is tru in toggleLocale.
  // Keeps the same route, just changes language
  router.push({
    name: route.name,
    params: { ...route.params, locale: targetLocale },
    query: route.query,
    hash: route.hash,
  })
}
</script>

<template>
  <div class="language-toggle">
    <!-- Toggle button label -->
    <label>{{ $t('common.languageToggle.label') }}</label>

    <!-- Toggle Pill -->
    <div class="toggle-pill" @click="toggleLanguage">
      <!-- Left Label -->
      <span class="toggle-text" :class="{ active: route.params.locale === 'en' }">EN</span>

      <!-- Knob -->
      <div class="toggle-knob" :class="{ 'knob-right': route.params.locale === 'ja' }"></div>
      <!-- Right Label -->
      <span class="toggle-text" :class="{ active: route.params.locale === 'ja' }">JA</span>
    </div>
  </div>
</template>

<style scoped>
.language-toggle {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toggle-pill {
  position: relative;
  width: 45px;
  height: 28px;
  background-color: green;
  border-radius: 18px; /*pill shape*/
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.toggle-text {
  color: white;
  font-weight: bold;
  font-size: 12px;
  z-index: 1;
}

.toggle-text.active {
  color: rgba(255, 255, 255, 0.6);
}

.toggle-knob {
  position: absolute;
  top: 2px;
  left: 4px;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.knob-right {
  transform: translateX(34px);
}
</style>
