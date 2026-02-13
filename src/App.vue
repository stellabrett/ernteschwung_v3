<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

/* onMounted(() => {
  // Initialize dark mode: manual preference > system preference
  const darkModeSetting = localStorage.getItem('darkMode')
  const html = document.documentElement
  
  if (darkModeSetting !== null) {
    // User has manually selected a preference
    if (darkModeSetting === 'true') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  } else {
    // No manual preference, use system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark')
    }
  }
  
  // Listen for system preference changes (only if no manual override)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
      if (e.matches) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    }
  })
}) */
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
    <Navbar />
    
    <main class="flex-1 w-full">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <RouterView />
      </div>
    </main>
    
    <Footer />
  </div>
</template>
