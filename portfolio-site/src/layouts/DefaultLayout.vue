<script setup>
import MainNavbar from '@/components/MainNavbar.vue'
</script>

<template>
  <MainNavbar />
  <main class="page-content">
    <RouterView />
  </main>
</template>

<style scoped>
.page-content {
  padding-top: 80px;
}
</style>
