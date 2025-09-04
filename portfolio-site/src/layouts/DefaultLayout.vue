<script setup>
import MainNavbar from '@/components/MainNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <MainNavbar />
  <main class="page-content">
    <RouterView />
  </main>
  <MainFooter />
</template>

<style scoped>
.page-content {
  padding-top: 80px;
}
</style>
