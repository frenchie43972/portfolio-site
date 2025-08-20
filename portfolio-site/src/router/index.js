import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale',
      component: DefaultLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'about', name: 'about', component: AboutPage },
        { path: 'contact', name: 'contact', component: ContactPage },
        { path: 'projects', name: 'projects', component: ProjectsPage },
        { path: 'services', name: 'services', component: ServicesPage },
      ],
    },
    { path: '/', redirect: '/en' }, // default redirect
  ],
})

export default router
